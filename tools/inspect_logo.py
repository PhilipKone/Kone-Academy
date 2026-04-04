from PIL import Image
from collections import Counter
import sys

path = sys.argv[1]

img = Image.open(path).convert('RGBA')
print('Path:', path)
print('Size:', img.size)
print('Mode:', img.mode)

# Get pixel data, ignore fully transparent pixels
pixels = [p for p in img.getdata() if p[3] != 0]
print('Total visible pixels:', len(pixels))

# Compute most common colors
counter = Counter(pixels)
most_common = counter.most_common(12)
print('Most common colors (RGBA and counts):')
for color, count in most_common:
    print(color, count)

# Compute approximate dominant color excluding white/near-white if present
# Map to RGB hex string with alpha ignored
from collections import defaultdict
rgb_counter = defaultdict(int)
for r,g,b,a in pixels:
    rgb_counter[(r,g,b)] += 1
rgb_most = sorted(rgb_counter.items(), key=lambda x:-x[1])[:10]
print('\nMost common RGB (hex, count):')
for (r,g,b), cnt in rgb_most:
    print('#{0:02x}{1:02x}{2:02x}'.format(r,g,b), cnt)

# Quick check: how many unique colors
print('\nUnique visible colors:', len(rgb_counter))
