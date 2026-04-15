import React from 'react';

export const Logo = ({ size = 192, variant = 'circle', className = '', ...props }) => {
    // Base SVG props
    const svgProps = {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 192 192",
        width: size,
        height: size,
        className: className,
        ...props
    };

    // Content paths (The K and Chevrons)
    // We use these for the mask
    const contentPaths = (
        <>
            {/* Stylized K */}
            <g fill="black">
                <rect x="50" y="46" width="20" height="100" rx="2" />
                <path d="M 78 92 L 118 52 L 132 66 L 92 106 Z" />
                <path d="M 78 100 L 118 140 L 132 126 L 92 86 Z" />
            </g>

            {/* Chevrons */}
            <g stroke="black" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M 145 55 L 165 75 L 145 95" />
                <path d="M 145 97 L 165 117 L 145 137" />
            </g>
        </>
    );

    return (
        <svg {...svgProps}>
            <defs>
                <mask id="logo-mask">
                    <rect width="100%" height="100%" fill="white" />
                    {contentPaths}
                </mask>
            </defs>

            {variant === 'rounded-square' ? (
                <rect
                    x="0"
                    y="0"
                    width="192"
                    height="192"
                    rx="48"
                    fill="currentColor"
                    mask="url(#logo-mask)"
                />
            ) : (
                <circle
                    cx="96"
                    cy="96"
                    r="96"
                    fill="currentColor"
                    mask="url(#logo-mask)"
                />
            )}
        </svg>
    );
};
