import os
from PIL import Image

ROOT_DIR = "c:/Users/DELL/KCA/Kone-Code-Academy"

def compress_webp(src_path, quality=75):
    if not os.path.exists(src_path):
        print(f"[WARN] File not found: {src_path}")
        return
    
    orig_size = os.path.getsize(src_path)
    im = Image.open(src_path)
    im.save(src_path, "WEBP", quality=quality)
    new_size = os.path.getsize(src_path)
    reduction = (orig_size - new_size) / orig_size * 100
    print(f"Compressed WebP: {os.path.basename(src_path)}")
    print(f"   Original Size: {orig_size / 1024:.1f} KB")
    print(f"   New Size: {new_size / 1024:.1f} KB (reduced by {reduction:.1f}%)")

def convert_png_to_webp(src_path, quality=75):
    if not os.path.exists(src_path):
        return
    
    dest_path = os.path.splitext(src_path)[0] + ".webp"
    orig_size = os.path.getsize(src_path)
    
    im = Image.open(src_path)
    # Save as WebP
    im.save(dest_path, "WEBP", quality=quality)
    new_size = os.path.getsize(dest_path)
    reduction = (orig_size - new_size) / orig_size * 100
    print(f"Converted PNG -> WebP: {os.path.basename(dest_path)}")
    print(f"   Original PNG Size: {orig_size / 1024:.1f} KB")
    print(f"   New WebP Size: {new_size / 1024:.1f} KB (reduced by {reduction:.1f}%)")

def main():
    # 1. Compress landing page images
    print("--- Optimizing Landing Page Blog WebP Images ---")
    blog_dir = os.path.join(ROOT_DIR, "kca-landing-page/src/assets/blog")
    compress_webp(os.path.join(blog_dir, "hero_agentic.webp"))
    compress_webp(os.path.join(blog_dir, "architecture_diagram.webp"))
    
    # 2. Convert Kone-Shop product images
    print("\n--- Converting Kone-Shop PNG Product Images to WebP ---")
    shop_products_dir = os.path.join(ROOT_DIR, "Kone-Shop/public/products")
    if os.path.exists(shop_products_dir):
        for f in os.listdir(shop_products_dir):
            if f.endswith(".png"):
                convert_png_to_webp(os.path.join(shop_products_dir, f))

if __name__ == "__main__":
    main()
