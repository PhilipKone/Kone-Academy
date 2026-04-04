import cv2
import qrcode
import sys
import os

ORIGINAL_QR = r"C:\Users\DELL\KCA\Kone-Code-Academy\qr_code.png"
HIGH_QR = r"C:\Users\DELL\KCA\Kone-Code-Academy\qr_code_high.png"

def regenerate():
    print(f"Reading original QR from {ORIGINAL_QR}...")
    if not os.path.exists(ORIGINAL_QR):
        print("File not found.")
        return

    # Use OpenCV to read
    img = cv2.imread(ORIGINAL_QR)
    detector = cv2.QRCodeDetector()
    data, bbox, straight_qrcode = detector.detectAndDecode(img)
    
    if bbox is not None and data:
        print(f"Decoded data: {data}")
        
        print("Generating new QR code with High Error Correction (30%)...")
        qr = qrcode.QRCode(
            version=None, # Auto-size
            error_correction=qrcode.constants.ERROR_CORRECT_H,
            box_size=10,
            border=4,
        )
        qr.add_data(data)
        qr.make(fit=True)
        
        img_high = qr.make_image(fill_color="black", back_color="white")
        img_high.save(HIGH_QR)
        print(f"Saved high-res QR code to {HIGH_QR}")
    else:
        print("Opencv failed to decode QR code. It might be too small or complex?")

if __name__ == "__main__":
    regenerate()
