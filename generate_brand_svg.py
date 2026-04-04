import qrcode
import qrcode.image.svg
from xml.etree.ElementTree import Element, SubElement, tostring, fromstring
from xml.dom import minidom

# Data
QR_DATA = "https://www.koneacademy.io/"
OUTPUT_PATH = r"C:\Users\DELL\KCA\Kone-Code-Academy\qr_code_branded.svg"
BRAND_BLUE = "#00008B"
BRAND_PURPLE = "#800080"

# Logo Paths (Extracted from logo-circle-blue.svg)
# Container: cx="100" cy="100" r="95"
# Left Bracket: d="M 60 55 Q 45 100 60 145" stroke-width="16" ...
# Right Bracket: d="M 140 55 Q 155 100 140 145" ...
# Droplet: d="M 100 55 C 100 55 128 82 128 108 C 128 125 115 138 100 142 C 85 138 72 125 72 108 C 72 82 100 55 100 55 Z"
# Notch: d="M 102 132 Q 115 130 120 120 Q 116 128 108 132 Q 105 133 102 132 Z"

def generate_svg():
    print("Generating High-Res QR Code...")
    # Generate QR Code Path
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
        image_factory=qrcode.image.svg.SvgPathImage
    )
    qr.add_data(QR_DATA)
    qr.make(fit=True)
    
    # Get standard QR SVG XML
    img = qr.make_image()
    
    # Serialize to string first to avoid lxml/ElementTree mismatch
    import io
    f = io.BytesIO()
    img.save(f)
    f.seek(0)
    
    # Parse with standard ElementTree
    # The default SVG factory might include an XML declaration, which fromstring might complain about if not handled, 
    # but usually ElementTree.fromstring handles standard XML. 
    # However, qrcode's SVG might have ns0 prefixes.
    import xml.etree.ElementTree as ET
    
    # Remove namespace prefixes for easier handling if needed, or just parse
    tree = ET.parse(f)
    root = tree.getroot()
    
    # Register namespace to avoid ns0:
    ET.register_namespace("", "http://www.w3.org/2000/svg")
    # We want to inject defs and modify the path fill
    
    # 1. Add Definitions (Gradient)
    defs = Element("defs")
    lgrad = SubElement(defs, "linearGradient", id="brandGradient", x1="0%", y1="0%", x2="0%", y2="100%")
    stop1 = SubElement(lgrad, "stop", offset="0%")
    stop1.set("style", f"stop-color:{BRAND_BLUE};stop-opacity:1")
    stop2 = SubElement(lgrad, "stop", offset="100%")
    stop2.set("style", f"stop-color:{BRAND_PURPLE};stop-opacity:1")
    
    root.insert(0, defs)
    
    # 2. Apply Gradient to QR Path
    # The path is usually the first child after style/defs in standard output
    # Let's find the <path> element
    qr_path = None
    for child in root.iter():
        if "path" in child.tag:
            qr_path = child
            break
            
    if qr_path is not None:
        qr_path.set("fill", "url(#brandGradient)")
        # Ensure black background is removed or changed to white if present?
        # SvgPathImage usually creates a path for the black modules.
        # Background is handled by a rect or just transparency.
        # Let's add a white background rect just in case for robustness
        bg_rect = Element("rect", x="0", y="0", width="100%", height="100%", fill="white")
        root.insert(0, bg_rect) # Put at bottom
    
    # 3. Add Logo
    # Size calculation
    viewbox = root.get("viewBox").split()
    vw = float(viewbox[2])
    vh = float(viewbox[3])
    
    # Logo config
    logo_scale_percent = 0.22
    logo_size = vw * logo_scale_percent
    
    center_x = vw / 2
    center_y = vh / 2
    
    # Logo is originally 200x200
    original_size = 200.0
    scale = logo_size / original_size
    
    # Calculate translation to center
    # Original centered at 100,100.
    # We want to move (100,100) to (center_x, center_y) after scaling
    # translate pixel: T = center - (100 * scale) ???
    # Easier: Group -> Translate to center -> Scale
    
    logo_group = Element("g", id="logo")
    # Transform: Translate to top-left of where logo should be, then scale
    # Top-left of logo dest:
    dest_x = center_x - (logo_size / 2)
    dest_y = center_y - (logo_size / 2)
    
    logo_group.set("transform", f"translate({dest_x} {dest_y}) scale({scale})")
    
    # 3.1 Creative Space (White Buffer)
    # Circle at center of logo group (100, 100) with radius > 95
    # r=95 is logo radius. Buffer r=115 (approx 1.2x)
    buffer = SubElement(logo_group, "circle", cx="100", cy="100", r="115", fill="white")
    
    # 3.2 Logo Container (Gradient)
    # Replaces the blue circle
    container = SubElement(logo_group, "circle", cx="100", cy="100", r="95", fill="url(#brandGradient)")
    
    # 3.3 Logo Paths (White)
    # Left Bracket
    SubElement(logo_group, "path", d="M 60 55 Q 45 100 60 145", stroke="white", **{"stroke-width":"16", "stroke-linecap":"round", "fill":"none"})
    # Right Bracket
    SubElement(logo_group, "path", d="M 140 55 Q 155 100 140 145", stroke="white", **{"stroke-width":"16", "stroke-linecap":"round", "fill":"none"})
    # Droplet
    SubElement(logo_group, "path", d="M 100 55 C 100 55 128 82 128 108 C 128 125 115 138 100 142 C 85 138 72 125 72 108 C 72 82 100 55 100 55 Z", fill="white")
    # Notch
    SubElement(logo_group, "path", d="M 102 132 Q 115 130 120 120 Q 116 128 108 132 Q 105 133 102 132 Z", fill="rgba(0,0,0,0.15)")
    
    root.append(logo_group)
    
    # Save
    raw_str = tostring(root, encoding="unicode")
    # Pretty print?
    parsed = minidom.parseString(raw_str)
    with open(OUTPUT_PATH, "w") as f:
        f.write(parsed.toprettyxml(indent="  "))
        
    print(f"SVG saved to {OUTPUT_PATH}")

if __name__ == "__main__":
    generate_svg()
