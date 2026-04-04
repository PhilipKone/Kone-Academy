import sys
try:
    from svglib.svglib import svg2rlg
    from reportlab.graphics import renderPM
    
    files = [
        "linkedin_banner_v4_personal",
        "linkedin_banner_v4_company",
        "facebook_cover"
    ]
    
    for base_name in files:
        input_file = f"{base_name}.svg"
        output_file = f"{base_name}.jpg"
        
        print(f"Converting {input_file} to {output_file}...")
        drawing = svg2rlg(input_file)
        renderPM.drawToFile(drawing, output_file, fmt="JPG")
        print(f"Converted {output_file}")
except Exception as e:
    print(f"Error: {e}")
