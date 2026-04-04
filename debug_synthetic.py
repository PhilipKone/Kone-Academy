from PIL import Image, ImageDraw
import io

def test_synthetic():
    try:
        # Create a new image
        img = Image.new('RGBA', (64, 64), color = (255, 0, 0, 255))
        d = ImageDraw.Draw(img)
        d.text((10,10), "Hello", fill=(0,255,0))
        
        # Save to bytes
        b = io.BytesIO()
        img.save(b, format='PNG')
        data = b.getvalue()
        
        print(f"Generated PNG size: {len(data)} bytes")
        
        # Try to read it back
        img2 = Image.open(io.BytesIO(data))
        img2.load()
        print("Success! Can generate and read PNG in PIL.")
        
    except Exception as e:
        print(f"FAILED synthetic test: {e}")

if __name__ == "__main__":
    test_synthetic()
