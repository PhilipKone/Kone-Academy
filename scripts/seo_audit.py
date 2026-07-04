import os
import re
import json
import sys

# Portable workspace directory resolution
script_dir = os.path.dirname(os.path.abspath(__file__))
workspace_dir = os.path.dirname(script_dir)

ignore_dirs = {".git", "node_modules", ".venv", "dist", "build", "coverage", ".vscode", ".github", ".agents"}

results = {}

# Patterns for extraction
title_pattern = re.compile(r"<title>(.*?)</title>", re.IGNORECASE | re.DOTALL)
meta_desc_pattern = re.compile(r'<meta\s+name=["\']description["\']\s+content=["\'](.*?)["\']', re.IGNORECASE | re.DOTALL)
meta_desc_pattern2 = re.compile(r'<meta\s+content=["\'](.*?)["\']\s+name=["\']description["\']', re.IGNORECASE | re.DOTALL)
canonical_pattern = re.compile(r'<link\s+rel=["\']canonical["\']\s+href=["\'](.*?)["\']', re.IGNORECASE | re.DOTALL)

og_title_pattern = re.compile(r'<meta\s+(?:property|name)=["\']og:title["\']\s+content=["\'](.*?)["\']', re.IGNORECASE | re.DOTALL)
og_desc_pattern = re.compile(r'<meta\s+(?:property|name)=["\']og:description["\']\s+content=["\'](.*?)["\']', re.IGNORECASE | re.DOTALL)
og_image_pattern = re.compile(r'<meta\s+(?:property|name)=["\']og:image["\']\s+content=["\'](.*?)["\']', re.IGNORECASE | re.DOTALL)
og_url_pattern = re.compile(r'<meta\s+(?:property|name)=["\']og:url["\']\s+content=["\'](.*?)["\']', re.IGNORECASE | re.DOTALL)

twitter_card_pattern = re.compile(r'<meta\s+(?:property|name)=["\']twitter:card["\']\s+content=["\'](.*?)["\']', re.IGNORECASE | re.DOTALL)

ld_json_pattern = re.compile(r'<script\s+type=["\']application/ld\+json["\'].*?>(.*?)</script>', re.IGNORECASE | re.DOTALL)

def scan_html(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
    except Exception as e:
        return {"error": str(e)}

    # Extract info
    title_match = title_pattern.search(content)
    title = title_match.group(1).strip() if title_match else None

    desc_match = meta_desc_pattern.search(content) or meta_desc_pattern2.search(content)
    desc = desc_match.group(1).strip() if desc_match else None

    canonical_match = canonical_pattern.search(content)
    canonical = canonical_match.group(1).strip() if canonical_match else None

    og_title_match = og_title_pattern.search(content)
    og_title = og_title_match.group(1).strip() if og_title_match else None

    og_desc_match = og_desc_pattern.search(content)
    og_desc = og_desc_match.group(1).strip() if og_desc_match else None

    og_image_match = og_image_pattern.search(content)
    og_image = og_image_match.group(1).strip() if og_image_match else None

    og_url_match = og_url_pattern.search(content)
    og_url = og_url_match.group(1).strip() if og_url_match else None

    twitter_card_match = twitter_card_pattern.search(content)
    twitter_card = twitter_card_match.group(1).strip() if twitter_card_match else None

    # Schema/JSON-LD
    ld_jsons = []
    has_invalid_json = False
    for m in ld_json_pattern.finditer(content):
        try:
            ld_json_data = json.loads(m.group(1).strip())
            ld_jsons.append(ld_json_data)
        except Exception:
            ld_jsons.append("invalid_json")
            has_invalid_json = True

    return {
        "title": title,
        "description": desc,
        "canonical": canonical,
        "og_title": og_title,
        "og_description": og_desc,
        "og_image": og_image,
        "og_url": og_url,
        "twitter_card": twitter_card,
        "ld_jsons_count": len(ld_jsons),
        "ld_jsons": ld_jsons,
        "has_invalid_json": has_invalid_json
    }

# Find all projects
for root, dirs, files in os.walk(workspace_dir):
    # Prune dirs
    dirs[:] = [d for d in dirs if d not in ignore_dirs]
    
    # We want to find index.html at root of subdirectories or under public/
    for file in files:
        if file.lower() == 'index.html':
            rel_path = os.path.relpath(os.path.join(root, file), workspace_dir)
            parts = rel_path.split(os.sep)
            # Limit depth to keep focus on primary subdomains
            if len(parts) > 3:
                continue
            results[rel_path] = scan_html(os.path.join(root, file))

# Check for CNAME files in each project directory
cnames = {}
for root, dirs, files in os.walk(workspace_dir):
    dirs[:] = [d for d in dirs if d not in ignore_dirs]
    for file in files:
        if file == 'CNAME':
            rel_path = os.path.relpath(os.path.join(root, file), workspace_dir)
            try:
                with open(os.path.join(root, file), 'r') as f:
                    cnames[rel_path] = f.read().strip()
            except Exception:
                pass

# Guardrail validation logic
failed = False
validation_report = []

for file_path, info in results.items():
    # Ignore nested directories that aren't main subdomains (like demo folders)
    if "Logo-Creation" in file_path or "sedemson" in file_path or "marketing" in file_path:
        continue
    
    errors = []
    if not info.get("title"):
        errors.append("Missing HTML Title")
    if not info.get("description"):
        errors.append("Missing Meta Description")
    if not info.get("canonical"):
        errors.append("Missing Canonical Link")
    if info.get("has_invalid_json"):
        errors.append("Invalid/Malformed JSON-LD Script Block")
    
    if errors:
        failed = True
        validation_report.append(f"[FAIL] {file_path}: {', '.join(errors)}")
    else:
        validation_report.append(f"[PASS] {file_path}: Fully Optimized")

# Print output
output_data = {"html_files": results, "cnames": cnames}
print(json.dumps(output_data, indent=2))

print("\n=== SEO GUARDRAIL VALIDATION REPORT ===")
for line in validation_report:
    print(line)

if failed:
    print("\n[ERROR] SEO Guardrails failed. Fix the errors above before committing.")
    sys.exit(1)
else:
    print("\n[SUCCESS] All primary SEO configurations are valid.")
    sys.exit(0)
