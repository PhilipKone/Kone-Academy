import qrcode
import qrcode.image.svg
import os

# Configuration
URL = "https://code.koneacademy.io"
LOGO_PATH = r"C:\Users\DELL\Downloads\SVG Logo Creation (1)\generated_logos(1)\cone_tag_circle_blue.svg"
OUTPUT_DIR = r"C:\Users\DELL\KCA\Kone-Code-Academy\Kone-Code\public"

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
    # We want to keep everything EXCEPT the background blue circle
    # The blue circle is: <circle cx="100" cy="100" r="95" fill="#2563EB" />
    
    # Simple extraction of paths, assuming they start after the circle
    circle_tag = '<circle'
    first_circle_end = logo_svg.find('>', logo_svg.find(circle_tag)) + 1
    logo_content_end = logo_svg.rfind('</svg>')
    logo_content = logo_svg[first_circle_end:logo_content_end].strip()
    
    # Ensure inner paths are white (though they already are in this logo)
    # But for consistency with the style:
    logo_content = logo_content.replace('stroke="white"', 'stroke="white"') # already white
    logo_content = logo_content.replace('fill="white"', 'fill="white"') # already white
    
    # Calculate center and size
    qr_viewbox_size = 41
    logo_box_size = 9.02
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
        branded_svg = branded_svg.replace('path ', 'path style="fill:url(#qr-gradient)" ')
    else:
        branded_svg = branded_svg.replace('path ', 'path style="fill:black" ')

    # Append tiered logo background (White frame -> Gradient/Black inner -> White logo)
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
    generate_qr_svg("qr_code_code_mono.svg", gradient=False)
    
    # Generate gradient
    generate_qr_svg("qr_code_code_gradient.svg", gradient=True)
