import qrcode
import qrcode.image.svg
import os

# Configuration
URL = "https://lab.koneacademy.io/"
LOGO_PATH = r"C:\Users\DELL\Downloads\SVG Logo Creation (2)\public\logos(1)\L7Logo-Blue.svg"
OUTPUT_DIR = r"C:\Users\DELL\KCA\Kone-Code-Academy\Kone-Lab\public"

def generate_qr_svg(filename, color="black", background="white", gradient=False):
    # Generate QR Code - Version 4 (41x41 viewBox)
    qr = qrcode.QRCode(
        version=4,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(URL)
    qr.make(fit=True)

    # Factory for SVG
    factory = qrcode.image.svg.SvgPathImage
    img = qr.make_image(image_factory=factory)
    
    # Get SVG string
    svg_str = img.to_string(encoding='unicode')
    
    # Load Logo
    with open(LOGO_PATH, 'r') as f:
        logo_svg = f.read()
    
    # Process logo for "White-on-Gradient" style
    # The logo has a blue circle we want to skip: <circle cx="100" cy="100" r="95" fill="#2563eb" />
    
    # Extract the internal components (brackets and droplet)
    # We skip the first circle tag
    circle_tag = '<circle'
    circle_pos = logo_svg.find(circle_tag)
    if circle_pos != -1:
        start_pos = logo_svg.find('>', circle_pos) + 1
    else:
        start_pos = logo_svg.find('>', logo_svg.find('<svg')) + 1
        
    end_pos = logo_svg.rfind('</svg>')
    logo_content = logo_svg[start_pos:end_pos].strip()
    
    # Ensure elements are white or use appropriate white-themed gradients
    # In this logo, brackets are 'white', droplet uses 'droplet-gradient-l7' (already white-themed)
    
    # Calculate center and size (Version 4 modules: 33 + 8 border = 41)
    # viewBox is 0 0 41 41
    qr_viewbox_size = 41
    logo_box_size = 9.02 # Matches refined centering from Consult
    logo_pos = 15.99
    
    # Create the branded SVG
    bg_rect = '<rect x="0" y="0" width="100%" height="100%" fill="white"/>'
    branded_svg = svg_str.replace('>', f'>{bg_rect}', 1)
    
    # Insert Gradient
    if gradient:
        gradient_def = """
  <defs>
    <linearGradient id="qr-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffbe3c" />
      <stop offset="100%" stop-color="#222244" />
    </linearGradient>
  </defs>
"""
        branded_svg = branded_svg.replace('>', f'>{gradient_def}', 1)
        # Ensure paths use the gradient
        branded_svg = branded_svg.replace('path ', 'path style="fill:url(#qr-gradient)" ')
    else:
        # For monochromatic, ensure black paths
        branded_svg = branded_svg.replace('path ', 'path style="fill:black" ')

    # Append tiered logo background (White frame -> Gradient/Black inner -> White logo)
    inner_circle_fill = "url(#qr-gradient)" if gradient else "black"
    # Scaling for the 200x200 logo content
    scale = logo_box_size / 200.0
    logo_wrapper = f"""
  <g id="logo-layer" transform="translate({logo_pos}, {logo_pos}) scale({scale})">
    <circle cx="100" cy="100" r="115" fill="white" />
    <circle cx="100" cy="100" r="95" fill="{inner_circle_fill}" />
    {logo_content}
  </g>
"""
    branded_svg = branded_svg.replace('</svg>', f'{logo_wrapper}</svg>')
    
    # Save the file
    output_path = os.path.join(OUTPUT_DIR, filename)
    with open(output_path, 'w') as f:
        f.write(branded_svg)
    print(f"Generated: {output_path}")

if __name__ == "__main__":
    if not os.path.exists(OUTPUT_DIR):
        os.makedirs(OUTPUT_DIR)
        
    # Generate monochromatic
    generate_qr_svg("qr_code_lab_mono.svg", gradient=False)
    
    # Generate gradient
    generate_qr_svg("qr_code_lab_gradient.svg", gradient=True)
