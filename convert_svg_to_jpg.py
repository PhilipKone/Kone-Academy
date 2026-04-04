import sys
try:
    from svglib.svglib import svg2rlg
    from reportlab.graphics import renderPM
    
    input_file = "business_plan_v2.svg"
    output_file = "business_plan_v2.jpg"
    
    print(f"Converting {input_file} to {output_file}...")
    drawing = svg2rlg(input_file)
    renderPM.drawToFile(drawing, output_file, fmt="JPG")
    print("Conversion successful.")
except ImportError:
    print("Error: Required libraries (svglib, reportlab) are not installed.")
    sys.exit(1)
except Exception as e:
    print(f"Error during conversion: {e}")
    sys.exit(1)
