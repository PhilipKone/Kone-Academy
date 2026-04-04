import os

def generate_github_raw_links():
    repo_name = "PhilipKone/Kone-Code-Academy"
    branch = "main"
    base_url = f"https://raw.githubusercontent.com/{repo_name}/{branch}/Kone-Consult/public/assets/blog/"
    
    # Path to the blog assets folder
    assets_dir = r"c:\Users\DELL\KCA\Kone-Code-Academy\Kone-Consult\public\assets\blog"
    
    if not os.path.exists(assets_dir):
        print(f"Error: Directory {assets_dir} not found.")
        return

    print("\n" + "="*60)
    print(" KONE ACADEMY - BLOG ASSET LINK GENERATOR ")
    print("="*60)
    print(f"Base Repository: {repo_name} (branch: {branch})")
    print("-" * 60)
    
    found_any = False
    for filename in os.listdir(assets_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp')):
            raw_url = f"{base_url}{filename}"
            print(f"Asset: {filename}")
            print(f"Link:  {raw_url}")
            print("-" * 60)
            found_any = True
            
    if not found_any:
        print("No image assets found in the blog folder.")
    else:
        print("Tip: Use these links directly in your Blog Admin Dashboard!")
    print("="*60 + "\n")

if __name__ == "__main__":
    generate_github_raw_links()
