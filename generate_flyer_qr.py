import qrcode
import sys
import os

OUTPUT_FILE = r"C:\Users\DELL\KCA\Kone-Code-Academy\qr_code_consult.png"
URL = "https://consult.koneacademy.io"

def generate():
    print(f"Generating QR code for {URL}...")
    
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )
    qr.add_data(URL)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color="black", back_color="white")
    img.save(OUTPUT_FILE)
    print(f"Saved QR code to {OUTPUT_FILE}")

if __name__ == "__main__":
    generate()
