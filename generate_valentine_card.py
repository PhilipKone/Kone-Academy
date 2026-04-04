import base64
import random
import os

def create_valentine_svg():
    # Asset Paths
    image_path = r'C:\Users\DELL\KCA\Kone-Code-Academy\services_illustration.png'
    logo_path = r'C:\Users\DELL\Downloads\SVG Logo Creation\public\logos\logo-circle-blue.svg'
    output_path = r'C:\Users\DELL\KCA\Kone-Code-Academy\valentine_card.svg'
    
    # 1. Load Background Image (Illustration)
    if not os.path.exists(image_path):
        print(f"Error: {image_path} not found.")
        return
    with open(image_path, 'rb') as img_file:
        img_b64 = base64.b64encode(img_file.read()).decode('utf-8')

    # 2. Extract Logo Content (Inner SVG)
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
    svg.append(f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 {width} {height}" width="{width}" height="{height}" style="background-color:#0f0505;">')
    
    # --- DEFS & STYLES ---
    svg.append('<defs>')
    style = """
    <style>
    /* <![CDATA[ */
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;700&family=JetBrains+Mono:wght@400&display=swap');
        
        /* Animations */
        @keyframes floatUp {
            0% { transform: translateY(0px) scale(0.8); opacity: 0; }
            10% { opacity: 0.8; }
            90% { opacity: 0.8; }
            100% { transform: translateY(-800px) scale(1.2); opacity: 0; }
        }
        @keyframes neonPulseRed {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(255, 0, 80, 0.6)); }
            50% { filter: drop-shadow(0 0 25px rgba(255, 0, 80, 0.9)); }
        }
        
        .text-title {
            font-family: 'Outfit', sans-serif;
            font-weight: 700;
            font-size: 100px;
            fill: #ffffff;
            filter: url(#glow);
            animation: neonPulseRed 3s infinite ease-in-out;
        }
        .text-subtitle {
            font-family: 'Outfit', sans-serif;
            font-weight: 300;
            font-size: 40px;
            fill: #ffb3c1;
            letter-spacing: 0.2em;
            text-transform: uppercase;
        }
        .text-code {
            font-family: 'JetBrains Mono', monospace;
            fill: #ff5c8a;
            font-size: 24px;
            opacity: 0.8;
        }
        .heart-particle {
            fill: #ff0055;
            opacity: 0.6;
            animation-name: floatUp;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
    /* ]]> */
    </style>
    """
    svg.append(style)
    
    # Filters
    svg.append("""
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#1a0005" />
        <stop offset="100%" stop-color="#2b0009" />
    </linearGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
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
    <filter id="hueRotateLogo">
        <feColorMatrix type="hueRotate" values="140"/> 
    </filter>
    """)
    svg.append('</defs>')

    # --- LAYOUT ---
    
    # 1. Background
    svg.append(f'<rect width="{width}" height="{height}" fill="url(#bgGradient)" />')
    
    # Tech Grid (Reddish)
    svg.append("""
    <pattern id="smallGrid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#500010" stroke-width="1" opacity="0.3"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#smallGrid)" />
    """)

    # 2. Embedded Illustration (As background texture on right side)
    svg.append('<g opacity="0.15" style="mix-blend-mode: lighten;">')
    svg.append(f'<image x="{width-1000}" y="-50" width="1000" height="1000" href="data:image/png;base64,{img_b64}" preserveAspectRatio="xMidYMid slice" mask="url(#fadeMask)" />')
    svg.append('</g>')

    # 3. Hearts Animation
    svg.append('<g id="heartSystem">')
    heart_d = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    for i in range(40):
        x = random.randint(0, width)
        y = random.randint(height, height + 100) # Start below
        scale = random.uniform(0.5, 2.5)
        dur = random.uniform(5, 12)
        delay = random.uniform(0, 5)
        color = random.choice(["#ff0055", "#ff5c8a", "#ffb3c1"])
        
        svg.append(f'<g transform="translate({x}, {y}) scale({scale})">')
        svg.append(f'<path d="{heart_d}" fill="{color}" class="heart-particle" style="animation-duration:{dur}s; animation-delay:-{delay}s;" />')
        svg.append('</g>')
    svg.append('</g>')

    # 4. Central Composition
    
    # Company Logo (Tinted to match theme)
    svg.append('<g transform="translate(50, 50) scale(0.6)" filter="url(#hueRotateLogo)">')
    if logo_content:
         svg.append(logo_content)
    svg.append('</g>')
    svg.append('<text x="180" y="120" font-family="Outfit, Arial, sans-serif" font-weight="700" font-size="50" fill="#ffb3c1">Kone Academy</text>')

    # Main Message
    svg.append(f'<text x="{width//2}" y="{height//2 - 50}" text-anchor="middle" class="text-title">HAPPY</text>')
    svg.append(f'<text x="{width//2}" y="{height//2 + 70}" text-anchor="middle" class="text-title">VALENTINE\'S DAY</text>')
    
    # Subtitle
    svg.append(f'<text x="{width//2}" y="{height//2 + 160}" text-anchor="middle" class="text-subtitle">Code Is Love.</text>')

    # Decorative Elements (Code brackets around the year)
    year_group_y = height//2 + 250
    svg.append(f'<g transform="translate({width//2}, {year_group_y})" >')
       # Background capsule
    svg.append(f'<rect x="-120" y="-30" width="240" height="60" rx="30" fill="rgba(255, 0, 85, 0.1)" stroke="#ff0055" stroke-width="2" />')
    svg.append(f'<text x="0" y="10" text-anchor="middle" font-family="Outfit, sans-serif" font-weight="700" font-size="32" fill="#ffffff" letter-spacing="4px">2026</text>')
    svg.append('</g>')

    # Social Media Icons (Extracted from flyer, recolored)
    # Centering calculation: Icons (0-125) + Gap (30) + Text (~120) = ~275 width. 
    # Center is ~137.5. Scaled by 1.5 -> ~206.
    svg.append('<g transform="translate(' + str(width//2 - 200) + ', ' + str(height - 120) + ') scale(1.5)">')
    
    # TikTok
    svg.append('<g transform="translate(0,0) scale(1.2)" fill="#ff5c8a">')
    svg.append('<path d="m 9,0 h 1.98 c 0.144,0.715 0.54,1.617 1.235,2.512 C 12.895,3.389 13.797,4 15,4 V 6 C 13.247,6 11.93,5.186 11,4.171 V 11 A 5,5 0 1 1 6,6 v 2 a 3,3 0 1 0 3,3 z" />')
    svg.append('</g>')

    # Instagram
    svg.append('<g transform="translate(25,0) scale(1.2)" fill="#ff5c8a">')
    svg.append('<path d="M 8,0 C 5.829,0 5.556,0.01 4.703,0.048 3.85,0.088 3.269,0.222 2.76,0.42 A 3.9,3.9 0 0 0 1.343,1.343 3.9,3.9 0 0 0 0.42,2.76 C 0.222,3.268 0.087,3.85 0.048,4.7 0.01,5.555 0,5.827 0,8.001 c 0,2.172 0.01,2.444 0.048,3.297 0.04,0.852 0.174,1.433 0.372,1.942 0.205,0.526 0.478,0.972 0.923,1.417 0.444,0.445 0.89,0.719 1.416,0.923 0.51,0.198 1.09,0.333 1.942,0.372 C 5.555,15.99 5.827,16 8,16 c 2.173,0 2.444,-0.01 3.298,-0.048 0.851,-0.04 1.434,-0.174 1.943,-0.372 a 3.9,3.9 0 0 0 1.416,-0.923 c 0.445,-0.445 0.718,-0.891 0.923,-1.417 0.197,-0.509 0.332,-1.09 0.372,-1.942 C 15.99,10.445 16,10.173 16,8 16,5.827 15.99,5.555 15.952,4.701 15.912,3.85 15.777,3.268 15.58,2.76 A 3.9,3.9 0 0 0 14.657,1.343 3.9,3.9 0 0 0 13.24,0.42 C 12.73,0.222 12.148,0.087 11.297,0.048 10.443,0.01 10.172,0 7.998,0 Z M 7.283,1.442 h 0.718 c 2.136,0 2.389,0.007 3.232,0.046 0.78,0.035 1.204,0.166 1.486,0.275 0.373,0.145 0.64,0.319 0.92,0.599 0.28,0.28 0.453,0.546 0.598,0.92 0.11,0.281 0.24,0.705 0.275,1.485 0.039,0.843 0.047,1.096 0.047,3.231 0,2.135 -0.008,2.389 -0.047,3.232 -0.035,0.78 -0.166,1.203 -0.275,1.485 a 2.5,2.5 0 0 1 -0.599,0.919 c -0.28,0.28 -0.546,0.453 -0.92,0.598 -0.28,0.11 -0.704,0.24 -1.485,0.276 -0.843,0.038 -1.096,0.047 -3.232,0.047 -2.136,0 -2.39,-0.009 -3.233,-0.047 -0.78,-0.036 -1.203,-0.166 -1.485,-0.276 a 2.5,2.5 0 0 1 -0.92,-0.598 2.5,2.5 0 0 1 -0.6,-0.92 C 1.654,12.433 1.523,12.009 1.488,11.229 1.45,10.386 1.442,10.133 1.442,7.996 1.442,5.859 1.45,5.608 1.488,4.765 1.524,3.985 1.654,3.561 1.764,3.279 1.909,2.906 2.083,2.639 2.363,2.359 2.643,2.079 2.909,1.906 3.283,1.761 3.565,1.651 3.988,1.521 4.768,1.485 5.506,1.451 5.792,1.441 7.283,1.44 Z m 4.988,1.328 a 0.96,0.96 0 1 0 0,1.92 0.96,0.96 0 0 0 0,-1.92 m -4.27,1.122 a 4.109,4.109 0 1 0 0,8.217 4.109,4.109 0 0 0 0,-8.217 m 0,1.441 a 2.667,2.667 0 1 1 0,5.334 2.667,2.667 0 0 1 0,-5.334" />')
    svg.append('</g>')

    # Facebook
    svg.append('<g transform="translate(50,0) scale(1.2)" fill="#ff5c8a">')
    svg.append('<path d="M 16,8.049 C 16,3.603 12.418,-0.001 8,-0.001 3.58,0 -0.002,3.603 -0.002,8.05 c 0,4.017 2.926,7.347 6.75,7.951 V 10.376 H 4.718 V 8.05 H 6.75 V 6.275 c 0,-2.017 1.195,-3.131 3.022,-3.131 0.876,0 1.791,0.157 1.791,0.157 v 1.98 h -1.009 c -0.993,0 -1.303,0.621 -1.303,1.258 v 1.51 h 2.218 l -0.354,2.326 H 9.25 V 16 C 13.074,15.396 16,12.066 16,8.049" />')
    svg.append('</g>')

    # X (Twitter)
    svg.append('<g transform="translate(75,0) scale(1.2)" fill="#ff5c8a">')
    svg.append('<path d="m 12.6,0.75 h 2.454 L 9.694,6.892 16,15.25 H 11.063 L 7.196,10.18 2.771,15.25 H 0.316 L 6.049,8.68 0,0.75 H 5.063 L 8.558,5.383 12.601,0.75 Z M 11.74,13.778 H 13.1 L 4.323,2.145 H 2.865 Z" />')
    svg.append('</g>')

    # Youtube
    svg.append('<g transform="translate(100,0) scale(1.2)" fill="#ff5c8a">')
    svg.append('<path d="M 8.051,1.999 H 8.14 c 0.822,0.003 4.987,0.033 6.11,0.335 a 2.01,2.01 0 0 1 1.415,1.42 c 0.101,0.38 0.172,0.883 0.22,1.402 l 0.01,0.104 0.022,0.26 0.008,0.104 c 0.065,0.914 0.073,1.77 0.074,1.957 v 0.075 c -0.001,0.194 -0.01,1.108 -0.082,2.06 L 15.909,9.821 15.9,9.925 c -0.05,0.572 -0.124,1.14 -0.235,1.558 a 2.01,2.01 0 0 1 -1.415,1.42 c -1.16,0.312 -5.569,0.334 -6.18,0.335 H 7.928 c -0.309,0 -1.587,-0.006 -2.927,-0.052 L 4.831,13.18 4.744,13.176 4.573,13.169 4.402,13.162 C 3.292,13.113 2.235,13.034 1.748,12.902 A 2.01,2.01 0 0 1 0.333,11.483 C 0.222,11.066 0.148,10.497 0.098,9.925 L 0.09,9.82 0.082,9.716 A 31,31 0 0 1 0,7.68 V 7.557 C 0.002,7.342 0.01,6.599 0.064,5.779 L 0.071,5.676 0.074,5.624 0.082,5.52 0.104,5.26 0.114,5.156 C 0.162,4.637 0.233,4.133 0.334,3.754 A 2.01,2.01 0 0 1 1.749,2.334 C 2.236,2.204 3.293,2.124 4.403,2.074 L 4.573,2.067 4.745,2.061 4.831,2.058 5.002,2.051 A 100,100 0 0 1 7.858,2 Z M 6.4,5.209 v 4.818 l 4.157,-2.408 z" />')
    svg.append('</g>')

    # LinkedIn
    svg.append('<g transform="translate(125,0) scale(1.2)" fill="#ff5c8a">')
    svg.append('<path d="M 0,1.146 C 0,0.513 0.526,0 1.175,0 h 13.65 C 15.474,0 16,0.513 16,1.146 V 14.854 C 16,15.487 15.474,16 14.825,16 H 1.175 C 0.526,16 0,15.487 0,14.854 Z M 4.943,13.394 V 6.169 H 2.542 v 7.225 z M 3.743,5.182 C 4.58,5.182 5.101,4.628 5.101,3.934 5.086,3.225 4.581,2.686 3.759,2.686 2.937,2.686 2.4,3.226 2.4,3.934 c 0,0.694 0.521,1.248 1.327,1.248 z m 4.908,8.212 V 9.359 c 0,-0.216 0.016,-0.432 0.08,-0.586 0.173,-0.431 0.568,-0.878 1.232,-0.878 0.869,0 1.216,0.662 1.216,1.634 v 3.865 H 13.58 V 9.25 c 0,-2.22 -1.184,-3.252 -2.764,-3.252 -1.274,0 -1.845,0.7 -2.165,1.193 V 7.216 H 8.635 L 8.651,7.191 V 6.169 h -2.4 c 0.03,0.678 0,7.225 0,7.225 z" />')
    svg.append('</g>')

    # Text "koneacademy"
    svg.append('<text x="155" y="20" font-family="Outfit, sans-serif" font-weight="400" font-size="20" fill="#ff5c8a" letter-spacing="1px">koneacademy</text>')

    svg.append('</g>')

    # Footer Code


    svg.append('</svg>')
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(svg))
    print(f"SVG Valentine created successfully: {output_path}")

if __name__ == "__main__":
    create_valentine_svg()
