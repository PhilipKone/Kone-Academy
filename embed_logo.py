import base64
import io
import os
from PIL import Image, ImageOps, ImageDraw

# Path to the screenshot saved by browser agent
SCREENSHOT_PATH = r"C:\Users\DELL\.gemini\antigravity\brain\bcf4840e-923e-4632-aa69-bff9ae93fed8\logo_final_1766514747347.png"

QR_PATH = r"C:\Users\DELL\KCA\Kone-Code-Academy\qr_code_high.png"
OUTPUT_PATH = r"C:\Users\DELL\KCA\Kone-Code-Academy\qr_code_branded.png"

def create_gradient(width, height, start_color, end_color):
    """
    Creates a vertical linear gradient image.
    """
    base = Image.new('RGBA', (width, height), start_color)
    top = Image.new('RGBA', (width, height), end_color)
    mask = Image.new('L', (width, height))
    mask_data = []
    for y in range(height):
        # Linear interpolation
        alpha = int(255 * (y / height))
        mask_data.extend([alpha] * width)
    mask.putdata(mask_data)
    base.paste(top, (0, 0), mask)
    return base

def main():
    try:
        # Load screenshot
        print(f"Loading logo from {SCREENSHOT_PATH}...")
        if not os.path.exists(SCREENSHOT_PATH):
            print("Screenshot file not found!")
            return
            
        logo = Image.open(SCREENSHOT_PATH)
        logo = logo.convert("RGBA")
        
        # Auto-crop to remove white background/margins
        gray = logo.convert("L")
        inverted = ImageOps.invert(gray)
        bbox = inverted.getbbox()
        
        if bbox:
            logo = logo.crop(bbox)
        
        # Make white transparent in logo
        datas = logo.getdata()
        new_data = []
        for item in datas:
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
        logo.putdata(new_data)
        
        # Open QR Code
        print(f"Processing QR code from {QR_PATH}...")
        try:
            qr = Image.open(QR_PATH)
            qr = qr.convert("RGBA")
        except FileNotFoundError:
            print(f"Error: QR code not found at {QR_PATH}")
            return

        # Prepare Gradient
        qr_width, qr_height = qr.size
        # Dark Blue (#00008B) to Purple (#800080)
        # Using nicer hex for "Telegram style" usually implies a brighter Blue to Purple
        # Telegram Logo is roughly Blue (0, 136, 204) #0088cc
        # Let's use a nice gradient: Blue (#0088cc) to Purple (#800080)
        start_color = (0, 0, 139, 255) # DarkBlue
        end_color = (128, 0, 128, 255) # Purple
        
        gradient = create_gradient(qr_width, qr_height, start_color, end_color)
        
        # Create Mask from QR Code
        # Black pixels (code) should show gradient, White (bg) should remain white.
        # We need a mask where Black pixels = 255 (Opaque) and White = 0 (Transparent)
        # Convert QR to grayscale
        qr_gray = qr.convert("L") 
        # Invert so black becomes white (255) -> this effectively selects the code modules
        qr_mask = ImageOps.invert(qr_gray)
        
        # Create final image
        final_qr = Image.new("RGBA", (qr_width, qr_height), (255, 255, 255, 255))
        # Paste gradient using the inverted QR as mask
        final_qr.paste(gradient, (0,0), qr_mask)
        
        print("QR Code gradient applied.")

        # Calculate position for logo
        # We want logo to be about 22% of QR width
        target_logo_width = int(qr_width * 0.22)
        
        # Resize logo
        logo_width, logo_height = logo.size
        aspect_ratio = logo_width / logo_height
        target_logo_height = int(target_logo_width / aspect_ratio)
        
        logo = logo.resize((target_logo_width, target_logo_height), Image.Resampling.LANCZOS)
        
        # Center position
        center_x = qr_width // 2
        center_y = qr_height // 2
        pos_x = (qr_width - target_logo_width) // 2
        pos_y = (qr_height - target_logo_height) // 2
        
        # Create "Creative Space" (White background behind logo)
        bg_width = int(target_logo_width * 1.2)
        bg_height = int(target_logo_height * 1.2)
        bg_x = center_x - (bg_width // 2)
        bg_y = center_y - (bg_height // 2)
        
        draw = ImageDraw.Draw(final_qr)
        # Draw white ellipse as buffer
        draw.ellipse((bg_x, bg_y, bg_x + bg_width, bg_y + bg_height), fill=(255, 255, 255, 255))
        
        # Colorize Logo with Gradient
        # We crop the corresponding section from the main gradient to ensure continuity
        logo_gradient = gradient.crop((pos_x, pos_y, pos_x + target_logo_width, pos_y + target_logo_height))
        
        # Use logo's alpha channel as mask
        # This assumes the logo has transparency where it shouldn't be colored
        logo_alpha = logo.split()[3]
        
        # Create a new image for the colored logo
        colored_logo = Image.new("RGBA", logo.size, (0,0,0,0))
        colored_logo.paste(logo_gradient, (0,0), mask=logo_alpha)
        
        # Paste colored logo
        final_qr.paste(colored_logo, (pos_x, pos_y), colored_logo)
        
        # Save
        final_qr.save(OUTPUT_PATH)
        print(f"Successfully saved branded and fully gradient QR code to {OUTPUT_PATH}")
        
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()
