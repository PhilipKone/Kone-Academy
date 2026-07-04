import os
from PIL import Image

ROOT_DIR = "c:/Users/DELL/KCA/Kone-Code-Academy"

def compress_webp_inplace(path, quality=75):
    if not os.path.exists(path):
        return
    orig_size = os.path.getsize(path)
    im = Image.open(path)
    im.save(path, "WEBP", quality=quality)
    new_size = os.path.getsize(path)
    reduction = (orig_size - new_size) / orig_size * 100
    print(f"Re-compressed WebP: {os.path.basename(path)}")
    print(f"   Original Size: {orig_size / 1024:.1f} KB -> New Size: {new_size / 1024:.1f} KB (reduced by {reduction:.1f}%)")

def convert_png_to_webp(src_path, dest_path, quality=75):
    if not os.path.exists(src_path):
        print(f"[WARN] File not found: {src_path}")
        return
    orig_size = os.path.getsize(src_path)
    im = Image.open(src_path)
    im.save(dest_path, "WEBP", quality=quality)
    new_size = os.path.getsize(dest_path)
    reduction = (orig_size - new_size) / orig_size * 100
    print(f"Converted PNG -> WebP: {os.path.basename(dest_path)}")
    print(f"   Original PNG Size: {orig_size / 1024:.1f} KB -> New WebP Size: {new_size / 1024:.1f} KB (reduced by {reduction:.1f}%)")

def main():
    # 1. Compress Kone-Consult blog images
    print("--- Optimizing Kone-Consult Blog WebP Images ---")
    consult_blog_dir = os.path.join(ROOT_DIR, "Kone-Consult/public/assets/blog")
    if os.path.exists(consult_blog_dir):
        for f in os.listdir(consult_blog_dir):
            if f.endswith(".webp"):
                compress_webp_inplace(os.path.join(consult_blog_dir, f))

    # 2. Convert Kone-Kids programs and series cover images to WebP
    print("\n--- Converting Kone-Kids PNG Images to WebP ---")
    
    kids_programs = ["ai.png", "coding.png", "robotics.png"]
    kids_series = ["platformer-pro-cover.png", "retro-arcade-cover.png", "word-search-cover.png"]
    
    kids_public_dir = os.path.join(ROOT_DIR, "Kone-Kids/public")
    
    for img in kids_programs:
        src = os.path.join(kids_public_dir, "programs", img)
        dest = os.path.join(kids_public_dir, "programs", img.replace(".png", ".webp"))
        convert_png_to_webp(src, dest)
        
    for img in kids_series:
        src = os.path.join(kids_public_dir, "series", img)
        dest = os.path.join(kids_public_dir, "series", img.replace(".png", ".webp"))
        convert_png_to_webp(src, dest)

if __name__ == "__main__":
    main()
