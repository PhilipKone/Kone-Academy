import base64
import random
import os

def create_christmas_svg_v2():
    # Asset Paths
    image_path = r'C:\Users\DELL\KCA\Kone-Code-Academy\services_illustration.png'
    logo_path = r'C:\Users\DELL\Downloads\SVG Logo Creation\public\logos\logo-circle-blue.svg'
    output_path = r'C:\Users\DELL\KCA\Kone-Code-Academy\christmas_card_v2.svg'
    
    # 1. Load Background Image (Illustration)
    if not os.path.exists(image_path):
        print(f"Error: {image_path} not found.")
        return
    with open(image_path, 'rb') as img_file:
        img_b64 = base64.b64encode(img_file.read()).decode('utf-8')

    # 2. Extract Logo Content (Inner SVG)
    # The file is small, we can just grab everything inside the <svg> tags or embed the whole thing.
    # We'll embed it as a nested SVG for easier positioning.
    if os.path.exists(logo_path):
        with open(logo_path, 'r') as f:
            logo_content = f.read()
            # unique ID to avoid conflicts
            logo_content = logo_content.replace('id="', 'id="logo_').replace('<svg', '<svg id="brandLogo" overflow="visible"') 
    else:
        print("Warning: Logo not found. Proceeding without it.")
        logo_content = ""

    width = 1600
    height = 900
    
    # SVG Assembly
    svg = ['<?xml version="1.0" encoding="UTF-8"?>']
    svg.append(f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 {width} {height}" width="{width}" height="{height}" style="background-color:#0a0c10;">')
    
    # --- DEFS & STYLES ---
    svg.append('<defs>')
    style = """
    <style>
    /* <![CDATA[ */
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;700&family=JetBrains+Mono:wght@400&display=swap');
        
        /* Animations */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        @keyframes snowfall {
            0% { transform: translateY(-100px); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { transform: translateY(1000px); opacity: 0; }
        }
        @keyframes neonPulse {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(88, 166, 255, 0.6)); }
            50% { filter: drop-shadow(0 0 20px rgba(88, 166, 255, 0.9)); }
        }
        @keyframes shine {
            to { background-position: 200% center; }
        }

        .text-title {
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            font-size: 120px;
            fill: #ffffff;
            filter: url(#glow);
            animation: neonPulse 3s infinite ease-in-out;
        }
        .text-subtitle {
            font-family: 'Outfit', sans-serif;
            font-weight: 300;
            font-size: 40px;
            fill: #d1d5db;
            letter-spacing: 0.2em;
            text-transform: uppercase;
        }
        .text-code {
            font-family: 'JetBrains Mono', monospace;
            fill: #58a6ff;
            font-size: 24px;
            opacity: 0.8;
        }
        .snow-particle {
            fill: white;
            opacity: 0.6;
            animation-name: snowfall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
        .card-glass {
            fill: rgba(22, 27, 34, 0.7);
            stroke: rgba(255,255,255,0.1);
            stroke-width: 2;
            backdrop-filter: blur(10px); /* Web support limited in SVG, simulated via filter */
        }
    /* ]]> */
    </style>
    """
    svg.append(style)
    
    # Filters
    svg.append("""
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0d1117" />
        <stop offset="100%" stop-color="#161b22" />
    </linearGradient>
    <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#58a6ff" />
        <stop offset="100%" stop-color="#bc8cff" />
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
    <filter id="glassBlur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
    </filter>
    <mask id="fadeMask">
        <linearGradient id="gMask" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="white" stop-opacity="0"/>
            <stop offset="0.3" stop-color="white" stop-opacity="1"/>
            <stop offset="0.7" stop-color="white" stop-opacity="1"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gMask)" />
    </mask>
    <clipPath id="cardClip">
        <rect x="200" y="100" width="1200" height="700" rx="30" />
    </clipPath>
    """)
    svg.append('</defs>')

    # --- LAYOUT ---
    
    # 1. Background
    svg.append(f'<rect width="{width}" height="{height}" fill="url(#bgGradient)" />')
    
    # Tech Grid (Subtle)
    svg.append("""
    <pattern id="smallGrid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#30363d" stroke-width="1" opacity="0.3"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#smallGrid)" />
    """)

    # 2. Embedded Illustration (As background texture on right side)
    # We place it on the right, taking up full height, masked
    img_w = 900
    img_h = 900 * (600/800) # Maintain aspect ratio roughly
    svg.append('<g opacity="0.2" style="mix-blend-mode: lighten;">')
    svg.append(f'<image x="{width-1000}" y="-50" width="1000" height="1000" href="data:image/png;base64,{img_b64}" preserveAspectRatio="xMidYMid slice" mask="url(#fadeMask)" />')
    svg.append('</g>')

    # 3. Snowfall Animation (Behind main text but front of BG)
    svg.append('<g id="snowSystem">')
    for i in range(50):
        x = random.randint(0, width)
        y = random.randint(-100, 0) # Start above
        r = random.randint(2, 5)
        dur = random.uniform(5, 10)
        delay = random.uniform(0, 5)
        opacity = random.uniform(0.3, 0.8)
        svg.append(f'<circle cx="{x}" cy="{0}" r="{r}" class="snow-particle" style="animation-duration:{dur}s; animation-delay:-{delay}s;" />')
    svg.append('</g>')

    # 4. Central Composition (Glass Card feel without actual card border, just layout)
    
    # Company Logo (Top Left or Centered Top) 
    # Let's put it Top Left for "Company Letterhead" feel
    svg.append('<g transform="translate(50, 50) scale(0.6)">')
    if logo_content:
         # Removing the absolute width/height in the logo string might be needed if it has them
         # But the viewBox usually handles it.
         svg.append(logo_content)
    svg.append('</g>')
    svg.append('<text x="180" y="120" font-family="Outfit, Arial, sans-serif" font-weight="700" font-size="50" fill="white">Kone Academy</text>')

    # Main Message (Centered)
    svg.append(f'<text x="{width//2}" y="{height//2 - 50}" text-anchor="middle" class="text-title">MERRY</text>')
    svg.append(f'<text x="{width//2}" y="{height//2 + 70}" text-anchor="middle" class="text-title">CHRISTMAS</text>')
    
    # Subtitle
    svg.append(f'<text x="{width//2}" y="{height//2 + 160}" text-anchor="middle" class="text-subtitle">Innovate. Elevate. Celebrate.</text>')

    # Decorative Elements (Code brackets around the year)
    year_group_y = height//2 + 250
    svg.append(f'<g transform="translate({width//2}, {year_group_y})" >')
       # Background capsule for 2026
    svg.append(f'<rect x="-120" y="-30" width="240" height="60" rx="30" fill="rgba(88, 166, 255, 0.1)" stroke="#58a6ff" stroke-width="2" />')
    svg.append(f'<text x="0" y="10" text-anchor="middle" font-family="Outfit, sans-serif" font-weight="700" font-size="32" fill="#ffffff" letter-spacing="4px">2026</text>')
    svg.append('</g>')

    # Footer Code
    svg.append(f'<text x="{width//2}" y="{height - 50}" text-anchor="middle" class="text-code">&lt;CodeTheFuture mode="festive" /&gt;</text>')

    svg.append('</svg>')
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(svg))
    print(f"SVG v2 created successfully: {output_path}")

if __name__ == "__main__":
    create_christmas_svg_v2()
