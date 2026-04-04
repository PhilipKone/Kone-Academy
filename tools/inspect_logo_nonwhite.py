from PIL import Image
from collections import Counter
import sys

path = sys.argv[1]
img = Image.open(path).convert('RGBA')
print('Path:', path)
print('Size:', img.size)

pixels = list(img.getdata())
# Filter out white-ish and transparent pixels
threshold = 250
non_white_pixels = [p for p in pixels if p[3] != 0 and not (p[0] >= threshold and p[1] >= threshold and p[2] >= threshold)]
print('Visible non-white pixels:', len(non_white_pixels))

counter = Counter(non_white_pixels)
most_common = counter.most_common(20)
print('Most common non-white RGBA:')
for color, count in most_common:
    print(color, count)

# show top unique RGB hex
from collections import defaultdict
rgb_counter = defaultdict(int)
for r,g,b,a in non_white_pixels:
    rgb_counter[(r,g,b)] += 1

rgb_most = sorted(rgb_counter.items(), key=lambda x:-x[1])[:20]
print('\nMost common non-white RGB (hex, count):')
for (r,g,b), cnt in rgb_most:
    print('#{0:02x}{1:02x}{2:02x}'.format(r,g,b), cnt)

# bounding box of non-white visible pixels
width, height = img.size
xs = [i % width for i,p in enumerate(pixels) if p in non_white_pixels]
ys = [i // width for i,p in enumerate(pixels) if p in non_white_pixels]
if xs:
    bbox = (min(xs), min(ys), max(xs), max(ys))
    print('\nBounding box (xmin, ymin, xmax, ymax):', bbox)
else:
    print('\nNo non-white pixels found')

