import qrcode
import qrcode.image.svg
import io
import xml.etree.ElementTree as ET

# Data
QR_DATA = "https://www.koneacademy.io/"
OUTPUT_PATH = r"C:\Users\DELL\KCA\Kone-Code-Academy\qr_code_dark.svg"
BRAND_BLACK = "#000000"

def generate_dark_svg():
    print("Generating High-Res Dark QR Code...")
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
    f = io.BytesIO()
    img.save(f)
    f.seek(0)
    
    # Parse with standard ElementTree
    tree = ET.parse(f)
    root = tree.getroot()
    
    # Register namespace to avoid ns0:
    ET.register_namespace("", "http://www.w3.org/2000/svg")
    
    # 1. Apply Black Fill to QR Path
    qr_path = None
    for child in root.iter():
        if "path" in child.tag:
            qr_path = child
            break
            
    if qr_path is not None:
        qr_path.set("fill", BRAND_BLACK)
        # Add white background rect for robustness
        bg_rect = ET.Element("rect", x="0", y="0", width="100%", height="100%", fill="white")
        root.insert(0, bg_rect)
    
    # 2. Add Logo
    viewbox = root.get("viewBox").split()
    vw = float(viewbox[2])
    vh = float(viewbox[3])
    
    logo_scale_percent = 0.22
    logo_size = vw * logo_scale_percent
    
    center_x = vw / 2
    center_y = vh / 2
    original_size = 200.0
    scale = logo_size / original_size
    
    logo_group = ET.Element("g", id="logo")
    dest_x = center_x - (logo_size / 2)
    dest_y = center_y - (logo_size / 2)
    
    logo_group.set("transform", f"translate({dest_x} {dest_y}) scale({scale})")
    
    # 2.1 Creative Space (White Buffer)
    ET.SubElement(logo_group, "circle", cx="100", cy="100", r="115", fill="white")
    
    # 2.2 Logo Container (Black)
    ET.SubElement(logo_group, "circle", cx="100", cy="100", r="95", fill=BRAND_BLACK)
    
    # 2.3 Logo Paths (White)
    # Left Bracket
    ET.SubElement(logo_group, "path", d="M 60 55 Q 45 100 60 145", stroke="white", **{"stroke-width":"16", "stroke-linecap":"round", "fill":"none"})
    # Right Bracket
    ET.SubElement(logo_group, "path", d="M 140 55 Q 155 100 140 145", stroke="white", **{"stroke-width":"16", "stroke-linecap":"round", "fill":"none"})
    # Droplet
    ET.SubElement(logo_group, "path", d="M 100 55 C 100 55 128 82 128 108 C 128 125 115 138 100 142 C 85 138 72 125 72 108 C 72 82 100 55 100 55 Z", fill="white")
    # Notch
    # For dark mode, notch should probably be transparent or slightly lighter?
    # Original was rgba(0,0,0,0.15), let's make it darker/transparent equivalent or just omit for cleanliness?
    # Actually, against black, a dark shadow is invisible.
    # To mimic the notch, we might need it to be white with opacity?
    # Or just skip it for a clean flat icon look. Let's keep it simple and flat.
    
    root.append(logo_group)
    
    # Save
    raw_str = ET.tostring(root, encoding="unicode")
    # Pretty print
    from xml.dom import minidom
    parsed = minidom.parseString(raw_str)
    with open(OUTPUT_PATH, "w") as f:
        f.write(parsed.toprettyxml(indent="  "))
        
    print(f"SVG saved to {OUTPUT_PATH}")

if __name__ == "__main__":
    generate_dark_svg()
