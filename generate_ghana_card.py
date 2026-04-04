import base64
import random
import os

def create_ghana_svg():
    # Asset Paths
    image_path = r'C:\Users\DELL\KCA\Kone-Code-Academy\services_illustration.png'
    logo_path = r'C:\Users\DELL\Downloads\SVG Logo Creation\public\logos\logo-circle-blue.svg'
    output_path = r'C:\Users\DELL\KCA\Kone-Code-Academy\ghana_card.svg'
    
    # 1. Load Background Image (Illustration)
    img_b64 = ""
    if os.path.exists(image_path):
        with open(image_path, 'rb') as img_file:
            img_b64 = base64.b64encode(img_file.read()).decode('utf-8')
    else:
        print(f"Warning: {image_path} not found.")

    # 2. Extract Logo Content (Inner SVG)
    if os.path.exists(logo_path):
        with open(logo_path, 'r') as f:
            logo_content = f.read()
            logo_content = logo_content.replace('id="', 'id="logo_').replace('<svg', '<svg id="brandLogo" overflow="visible"') 
    else:
        logo_content = ""

    width = 1600
    height = 900
    
    # Colors
    gh_red = "#ce1126"
    gh_gold = "#fcd116"
    gh_green = "#006b3f"
    gh_black = "#000000"
    
    svg = ['<?xml version="1.0" encoding="UTF-8"?>']
    svg.append(f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 {width} {height}" width="{width}" height="{height}" style="background-color:#0d0d0d;">')
    
    # --- DEFS & STYLES ---
    svg.append('<defs>')
    style = """
    <style>
    /* <![CDATA[ */
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;700;900&family=JetBrains+Mono:wght@400&display=swap');
        
        /* Animations */
        @keyframes fallAndSway {
            0% { transform: translateY(-50px) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(950px) rotate(360deg); opacity: 0; }
        }
        @keyframes floatStar {
            0% { transform: translateY(0px) scale(0.8) rotate(0deg); opacity: 0; }
            10% { opacity: 0.9; }
            90% { opacity: 0.9; }
            100% { transform: translateY(-900px) scale(1.5) rotate(180deg); opacity: 0; }
        }
        @keyframes neonPulseGold {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(252, 209, 22, 0.6)); }
            50% { filter: drop-shadow(0 0 25px rgba(252, 209, 22, 0.9)); }
        }
        
        .text-title {
            font-family: 'Outfit', sans-serif;
            font-weight: 900;
            font-size: 85px;
            fill: #ffffff;
            letter-spacing: 2px;
            filter: url(#glowGold);
            animation: neonPulseGold 4s infinite ease-in-out;
        }
        .text-ghana {
            font-family: 'Outfit', sans-serif;
            font-weight: 900;
            font-size: 110px;
            fill: #fcd116; /* Gold */
            letter-spacing: 5px;
            filter: drop-shadow(0 0 15px rgba(252, 209, 22, 0.4));
        }
        .text-subtitle {
            font-family: 'Outfit', sans-serif;
            font-weight: 300;
            font-size: 35px;
            fill: #dcdcdc;
            letter-spacing: 0.3em;
            text-transform: uppercase;
        }
        .confetti {
            animation-name: fallAndSway;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
        .black-star {
            fill: #111111;
            stroke: #333333;
            stroke-width: 1px;
            animation-name: floatStar;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }
        .text-small {
            font-family: 'Outfit', sans-serif;
            font-weight: 400;
            font-size: 20px;
            fill: #a0a0a0;
            letter-spacing: 1px;
        }
    /* ]]> */
    </style>
    """
    svg.append(style)
    
    # Filters
    svg.append("""
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a0a0a" />
        <stop offset="100%" stop-color="#141414" />
    </linearGradient>
    <filter id="glowGold" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
    <mask id="fadeMask">
        <linearGradient id="gMask" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="white" stop-opacity="0"/>
            <stop offset="0.2" stop-color="white" stop-opacity="0.8"/>
            <stop offset="0.8" stop-color="white" stop-opacity="0.8"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gMask)" />
    </mask>
    <filter id="hueRotateLogo">
        <!-- Make logo grayscale and lighter to fit dark theme -->
        <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0.4   0.33 0.33 0.33 0 0.4   0.33 0.33 0.33 0 0.4   0 0 0 1 0"/>
    </filter>
    """)
    svg.append('</defs>')

    # --- LAYOUT ---
    
    # 1. Background
    svg.append(f'<rect width="{width}" height="{height}" fill="url(#bgGradient)" />')
    
    # Subtle Flag Stripes overlay at top and bottom
    svg.append(f'<rect width="{width}" height="6" y="0" fill="{gh_red}" opacity="0.8" />')
    svg.append(f'<rect width="{width}" height="6" y="6" fill="{gh_gold}" opacity="0.8" />')
    svg.append(f'<rect width="{width}" height="6" y="12" fill="{gh_green}" opacity="0.8" />')
    
    svg.append(f'<rect width="{width}" height="6" y="{height-18}" fill="{gh_red}" opacity="0.8" />')
    svg.append(f'<rect width="{width}" height="6" y="{height-12}" fill="{gh_gold}" opacity="0.8" />')
    svg.append(f'<rect width="{width}" height="6" y="{height-6}" fill="{gh_green}" opacity="0.8" />')

    # Tech Grid 
    svg.append("""
    <pattern id="smallGrid" width="80" height="80" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="#333333" opacity="0.5"/>
    </pattern>
    <rect width="100%" height="100%" fill="url(#smallGrid)" />
    """)

    # 2. Embedded Illustration (As background texture on right side)
    if img_b64:
        svg.append('<g opacity="0.1" style="mix-blend-mode: screen;">')
        svg.append(f'<image x="{width-900}" y="0" width="900" height="900" href="data:image/png;base64,{img_b64}" preserveAspectRatio="xMidYMid slice" mask="url(#fadeMask)" />')
        svg.append('</g>')

    # 3. Particle Animation (Confetti and Stars)
    svg.append('<g id="particleSystem">')
    star_d = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    colors = [gh_red, gh_gold, gh_green]
    
    # Confetti (falling)
    for i in range(50):
        x = random.randint(0, width)
        y = random.randint(-150, -50)
        scale = random.uniform(0.5, 1.2)
        dur = random.uniform(6, 15)
        delay = random.uniform(0, 10)
        color = random.choice(colors)
        
        # simple rect confetti
        svg.append(f'<g transform="translate({x}, {y}) scale({scale})">')
        svg.append(f'<rect width="8" height="15" rx="2" fill="{color}" class="confetti" style="animation-duration:{dur}s; animation-delay:-{delay}s; opacity: 0.8;" />')
        svg.append('</g>')

    # Floating Black Stars
    for i in range(25):
        x = random.randint(0, width)
        y = random.randint(height, height + 200)
        scale = random.uniform(0.6, 2.0)
        dur = random.uniform(10, 25)
        delay = random.uniform(0, 15)
        
        svg.append(f'<g transform="translate({x}, {y}) scale({scale})">')
        svg.append(f'<path d="{star_d}" class="black-star" style="animation-duration:{dur}s; animation-delay:-{delay}s;" />')
        svg.append('</g>')
        
    svg.append('</g>')

    # 4. Central Composition
    
    # Company Logo 
    svg.append('<g transform="translate(50, 50) scale(0.6)" filter="url(#hueRotateLogo)">')
    if logo_content:
         svg.append(logo_content)
    svg.append('</g>')
    svg.append('<text x="180" y="120" font-family="Outfit, Arial, sans-serif" font-weight="700" font-size="50" fill="#a0a0a0">Kone Academy</text>')

    # Main Message
    center_y = height // 2 - 20
    
    svg.append(f'<text x="{width//2}" y="{center_y - 70}" text-anchor="middle" class="text-title">HAPPY</text>')
    svg.append(f'<text x="{width//2}" y="{center_y + 30}" text-anchor="middle" class="text-title">INDEPENDENCE DAY</text>')
    
    # Highlighted "GHANA @ 69" Container
    ghana_y = center_y + 160
    svg.append(f'<g transform="translate({width//2}, {ghana_y})" >')
    # Background accent for Ghana
    svg.append(f'<path d="M-300,-80 L300,-80 L280,20 L-280,20 Z" fill="rgba(252, 209, 22, 0.05)" stroke="rgba(252, 209, 22, 0.3)" stroke-width="1" />')
    svg.append(f'<text x="0" y="0" text-anchor="middle" class="text-ghana">GHANA @ 69</text>')
    
    # Mini flag accent
    svg.append(f'<rect x="-40" y="30" width="80" height="4" fill="{gh_red}"/>')
    svg.append(f'<rect x="-40" y="34" width="80" height="4" fill="{gh_gold}"/>')
    svg.append(f'<rect x="-40" y="38" width="80" height="4" fill="{gh_green}"/>')
    svg.append(f'<path d="{star_d}" transform="translate(-10, 22) scale(0.8)" fill="{gh_black}"/>')
    svg.append('</g>')

    # Social Media Icons
    # Centering calculation: Icons (0-125) + Gap (30) + Text (~120) = ~275 width. 
    # Center is ~137.5. Scaled by 1.5 -> ~206.
    svg.append('<g transform="translate(' + str(width//2 - 200) + ', ' + str(height - 120) + ') scale(1.5)">')
    
    # Icon color: subtle gray
    icon_color = "#888888"
    
    # TikTok
    svg.append(f'<g transform="translate(0,0) scale(1.2)" fill="{icon_color}">')
    svg.append('<path d="m 9,0 h 1.98 c 0.144,0.715 0.54,1.617 1.235,2.512 C 12.895,3.389 13.797,4 15,4 V 6 C 13.247,6 11.93,5.186 11,4.171 V 11 A 5,5 0 1 1 6,6 v 2 a 3,3 0 1 0 3,3 z" />')
    svg.append('</g>')

    # Instagram
    svg.append(f'<g transform="translate(25,0) scale(1.2)" fill="{icon_color}">')
    svg.append('<path d="M 8,0 C 5.829,0 5.556,0.01 4.703,0.048 3.85,0.088 3.269,0.222 2.76,0.42 A 3.9,3.9 0 0 0 1.343,1.343 3.9,3.9 0 0 0 0.42,2.76 C 0.222,3.268 0.087,3.85 0.048,4.7 0.01,5.555 0,5.827 0,8.001 c 0,2.172 0.01,2.444 0.048,3.297 0.04,0.852 0.174,1.433 0.372,1.942 0.205,0.526 0.478,0.972 0.923,1.417 0.444,0.445 0.89,0.719 1.416,0.923 0.51,0.198 1.09,0.333 1.942,0.372 C 5.555,15.99 5.827,16 8,16 c 2.173,0 2.444,-0.01 3.298,-0.048 0.851,-0.04 1.434,-0.174 1.943,-0.372 a 3.9,3.9 0 0 0 1.416,-0.923 c 0.445,-0.445 0.718,-0.891 0.923,-1.417 0.197,-0.509 0.332,-1.09 0.372,-1.942 C 15.99,10.445 16,10.173 16,8 16,5.827 15.99,5.555 15.952,4.701 15.912,3.85 15.777,3.268 15.58,2.76 A 3.9,3.9 0 0 0 14.657,1.343 3.9,3.9 0 0 0 13.24,0.42 C 12.73,0.222 12.148,0.087 11.297,0.048 10.443,0.01 10.172,0 7.998,0 Z M 7.283,1.442 h 0.718 c 2.136,0 2.389,0.007 3.232,0.046 0.78,0.035 1.204,0.166 1.486,0.275 0.373,0.145 0.64,0.319 0.92,0.599 0.28,0.28 0.453,0.546 0.598,0.92 0.11,0.281 0.24,0.705 0.275,1.485 0.039,0.843 0.047,1.096 0.047,3.231 0,2.135 -0.008,2.389 -0.047,3.232 -0.035,0.78 -0.166,1.203 -0.275,1.485 a 2.5,2.5 0 0 1 -0.599,0.919 c -0.28,0.28 -0.546,0.453 -0.92,0.598 -0.28,0.11 -0.704,0.24 -1.485,0.276 -0.843,0.038 -1.096,0.047 -3.232,0.047 -2.136,0 -2.39,-0.009 -3.233,-0.047 -0.78,-0.036 -1.203,-0.166 -1.485,-0.276 a 2.5,2.5 0 0 1 -0.92,-0.598 2.5,2.5 0 0 1 -0.6,-0.92 C 1.654,12.433 1.523,12.009 1.488,11.229 1.45,10.386 1.442,10.133 1.442,7.996 1.442,5.859 1.45,5.608 1.488,4.765 1.524,3.985 1.654,3.561 1.764,3.279 1.909,2.906 2.083,2.639 2.363,2.359 2.643,2.079 2.909,1.906 3.283,1.761 3.565,1.651 3.988,1.521 4.768,1.485 5.506,1.451 5.792,1.441 7.283,1.44 Z m 4.988,1.328 a 0.96,0.96 0 1 0 0,1.92 0.96,0.96 0 0 0 0,-1.92 m -4.27,1.122 a 4.109,4.109 0 1 0 0,8.217 4.109,4.109 0 0 0 0,-8.217 m 0,1.441 a 2.667,2.667 0 1 1 0,5.334 2.667,2.667 0 0 1 0,-5.334" />')
    svg.append('</g>')

    # Facebook
    svg.append(f'<g transform="translate(50,0) scale(1.2)" fill="{icon_color}">')
    svg.append('<path d="M 16,8.049 C 16,3.603 12.418,-0.001 8,-0.001 3.58,0 -0.002,3.603 -0.002,8.05 c 0,4.017 2.926,7.347 6.75,7.951 V 10.376 H 4.718 V 8.05 H 6.75 V 6.275 c 0,-2.017 1.195,-3.131 3.022,-3.131 0.876,0 1.791,0.157 1.791,0.157 v 1.98 h -1.009 c -0.993,0 -1.303,0.621 -1.303,1.258 v 1.51 h 2.218 l -0.354,2.326 H 9.25 V 16 C 13.074,15.396 16,12.066 16,8.049" />')
    svg.append('</g>')

    # X (Twitter)
    svg.append(f'<g transform="translate(75,0) scale(1.2)" fill="{icon_color}">')
    svg.append('<path d="m 12.6,0.75 h 2.454 L 9.694,6.892 16,15.25 H 11.063 L 7.196,10.18 2.771,15.25 H 0.316 L 6.049,8.68 0,0.75 H 5.063 L 8.558,5.383 12.601,0.75 Z M 11.74,13.778 H 13.1 L 4.323,2.145 H 2.865 Z" />')
    svg.append('</g>')

    # Youtube
    svg.append(f'<g transform="translate(100,0) scale(1.2)" fill="{icon_color}">')
    svg.append('<path d="M 8.051,1.999 H 8.14 c 0.822,0.003 4.987,0.033 6.11,0.335 a 2.01,2.01 0 0 1 1.415,1.42 c 0.101,0.38 0.172,0.883 0.22,1.402 l 0.01,0.104 0.022,0.26 0.008,0.104 c 0.065,0.914 0.073,1.77 0.074,1.957 v 0.075 c -0.001,0.194 -0.01,1.108 -0.082,2.06 L 15.909,9.821 15.9,9.925 c -0.05,0.572 -0.124,1.14 -0.235,1.558 a 2.01,2.01 0 0 1 -1.415,1.42 c -1.16,0.312 -5.569,0.334 -6.18,0.335 H 7.928 c -0.309,0 -1.587,-0.006 -2.927,-0.052 L 4.831,13.18 4.744,13.176 4.573,13.169 4.402,13.162 C 3.292,13.113 2.235,13.034 1.748,12.902 A 2.01,2.01 0 0 1 0.333,11.483 C 0.222,11.066 0.148,10.497 0.098,9.925 L 0.09,9.82 0.082,9.716 A 31,31 0 0 1 0,7.68 V 7.557 C 0.002,7.342 0.01,6.599 0.064,5.779 L 0.071,5.676 0.074,5.624 0.082,5.52 0.104,5.26 0.114,5.156 C 0.162,4.637 0.233,4.133 0.334,3.754 A 2.01,2.01 0 0 1 1.749,2.334 C 2.236,2.204 3.293,2.124 4.403,2.074 L 4.573,2.067 4.745,2.061 4.831,2.058 5.002,2.051 A 100,100 0 0 1 7.858,2 Z M 6.4,5.209 v 4.818 l 4.157,-2.408 z" />')
    svg.append('</g>')

    # LinkedIn
    svg.append(f'<g transform="translate(125,0) scale(1.2)" fill="{icon_color}">')
    svg.append('<path d="M 0,1.146 C 0,0.513 0.526,0 1.175,0 h 13.65 C 15.474,0 16,0.513 16,1.146 V 14.854 C 16,15.487 15.474,16 14.825,16 H 1.175 C 0.526,16 0,15.487 0,14.854 Z M 4.943,13.394 V 6.169 H 2.542 v 7.225 z M 3.743,5.182 C 4.58,5.182 5.101,4.628 5.101,3.934 5.086,3.225 4.581,2.686 3.759,2.686 2.937,2.686 2.4,3.226 2.4,3.934 c 0,0.694 0.521,1.248 1.327,1.248 z m 4.908,8.212 V 9.359 c 0,-0.216 0.016,-0.432 0.08,-0.586 0.173,-0.431 0.568,-0.878 1.232,-0.878 0.869,0 1.216,0.662 1.216,1.634 v 3.865 H 13.58 V 9.25 c 0,-2.22 -1.184,-3.252 -2.764,-3.252 -1.274,0 -1.845,0.7 -2.165,1.193 V 7.216 H 8.635 L 8.651,7.191 V 6.169 h -2.4 c 0.03,0.678 0,7.225 0,7.225 z" />')
    svg.append('</g>')

    # Text "koneacademy"
    svg.append(f'<text x="155" y="20" class="text-small">koneacademy</text>')

    svg.append('</g>')

    svg.append('</svg>')
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(svg))
    print(f"SVG Ghana Independence Card created successfully: {output_path}")

if __name__ == "__main__":
    create_ghana_svg()
