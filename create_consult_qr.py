import qrcode
import qrcode.image.svg
import os

# Configuration
URL = "https://consult.koneacademy.io"
LOGO_PATH = r"C:\Users\DELL\Downloads\SVG Logo Creation1\generated_logos\c_shape_circle_blue.svg"
OUTPUT_DIR = r"C:\Users\DELL\KCA\Kone-Code-Academy\Kone-Consult\public"

def generate_qr_svg(filename, color="black", background="white", gradient=False):
    # Generate QR Code - Version 4 matches the reference's 41x41 viewBox (33 modules + 8 for border)
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
    
    # Process logo to make it pure white (remove original gradients and colors)
    # The c_shape logo uses stroke attributes for its main parts
    logo_white = logo_svg
    logo_white = logo_white.replace('stroke="url(#c-gradient-blue)"', 'stroke="white"')
    logo_white = logo_white.replace('stroke="rgba(255,255,255,0.25)"', 'stroke="rgba(255,255,255,0.6)"') # Subtle highlight
    
    # Extract content between <svg> tags
    logo_content_start = logo_white.find('>', logo_white.find('<svg')) + 1
    logo_content_end = logo_white.rfind('</svg>')
    logo_content = logo_white[logo_content_start:logo_content_end].strip()
    
    # Calculate center and size for the logo
    # For a 41x41 viewBox (Version 4 with 41 modules)
    qr_viewbox_size = 41
    logo_box_size = 9.02 # To match the reference translate(15.99 15.99)
    logo_pos = 15.99
    
    # Create the branded SVG
    # Add white background rect
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
        branded_svg = branded_svg.replace('path ', 'path style="fill:url(#qr-gradient)" ')
    else:
        branded_svg = branded_svg.replace('path ', 'path style="fill:black" ')

    # Append the logo with THE SPECIFIC REFERENCE STYLE:
    # 1. White outer circle
    # 2. Gradient inner circle
    # 3. White logo content
    inner_circle_fill = "url(#qr-gradient)" if gradient else "black"
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
    generate_qr_svg("qr_code_consult_mono.svg", gradient=False)
    
    # Generate gradient
    generate_qr_svg("qr_code_consult_gradient.svg", gradient=True)
