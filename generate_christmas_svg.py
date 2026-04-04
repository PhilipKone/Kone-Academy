import base64
import random
import os

def create_christmas_svg():
    image_path = r'C:\Users\DELL\KCA\Kone-Code-Academy\services_illustration.png'
    
    # Check if image exists
    if not os.path.exists(image_path):
        print(f"Error: {image_path} not found.")
        return

    # Load image
    with open(image_path, 'rb') as img_file:
        img_data = base64.b64encode(img_file.read()).decode('utf-8')

    width = 1200
    height = 800
    
    # SVG Content
    svg_content = [
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" width="{width}" height="{height}">',
        '<defs>',
        '    <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">',
        '        <stop offset="0%" stop-color="#58a6ff" />',
        '        <stop offset="100%" stop-color="#bc8cff" />',
        '    </linearGradient>',
        '    <filter id="glow">',
        '        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>',
        '        <feMerge>',
        '            <feMergeNode in="coloredBlur"/>',
        '            <feMergeNode in="SourceGraphic"/>',
        '        </feMerge>',
        '    </filter>',
        '    <style>',
        '        .title { font-family: "Arial", sans-serif; font-size: 90px; font-weight: bold; fill: url(#neonGradient); filter: url(#glow); letter-spacing: 2px; }',
        '        .subtitle { font-family: "Courier New", monospace; font-size: 32px; fill: #d1d5db; letter-spacing: 1px; }',
        '        .code-accent { fill: #3fb950; font-family: "Courier New", monospace; font-size: 24px; }',
        '    </style>',
        '</defs>',
        
        # Background
        f'<rect width="100%" height="100%" fill="#0a0c10" />',
        
        # Grid Pattern (Tech vibe)
        '<defs>',
        '  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">',
        '    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#161b22" stroke-width="1"/>',
        '  </pattern>',
        '</defs>',
        '<rect width="100%" height="100%" fill="url(#grid)" />'
    ]
    
    # Snowflakes
    svg_content.append('<g id="snowflakes">')
    for _ in range(70):
        x = random.randint(0, width)
        y = random.randint(0, height)
        r = random.randint(1, 4)
        opacity = random.uniform(0.2, 0.7)
        svg_content.append(f'  <circle cx="{x}" cy="{y}" r="{r}" fill="white" opacity="{opacity}" />')
    svg_content.append('</g>')

    # Embedded Image (Centered)
    # Assuming landscape, let's fit it nicely under the title
    # Center X: 600. Let's make it 600px wide.
    img_w = 600
    img_h = 400 # Approximation
    img_x = (width - img_w) // 2
    img_y = 200 # Below title
    
    svg_content.append(f'<image x="{img_x}" y="{img_y}" width="{img_w}" height="{img_h}" href="data:image/png;base64,{img_data}" preserveAspectRatio="xMidYMid meet" />')
    
    # Text Overlay
    svg_content.append(f'<text x="50%" y="150" text-anchor="middle" class="title">MERRY CHRISTMAS</text>')
    svg_content.append(f'<text x="50%" y="680" text-anchor="middle" class="subtitle">FROM KONE CODE ACADEMY</text>')
    
    # Code styling for new year
    svg_content.append(f'<text x="50%" y="740" text-anchor="middle" class="code-accent">&lt;HappyNewYear year={{2026}} /&gt;</text>')
    
    svg_content.append('</svg>')
    
    output_path = r'C:\Users\DELL\KCA\Kone-Code-Academy\christmas_card.svg'
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(svg_content))
    print(f"SVG created successfully: {output_path}")

if __name__ == "__main__":
    create_christmas_svg()
