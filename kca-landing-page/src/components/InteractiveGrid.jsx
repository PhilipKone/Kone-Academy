import React from 'react';
import { motion, useScroll, useTransform, useVelocity, useSpring } from 'framer-motion';

const InteractiveGrid = () => {
  const { scrollY } = useScroll();
  
  // Track the velocity of scrolling for 6D flow
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 30,
    stiffness: 150
  });

  // Map velocity to physical distortions
  const skewY = useTransform(smoothVelocity, [-2000, 2000], [-5, 5]);
  const yFlow = useTransform(smoothVelocity, [-2000, 2000], [-25, 25]);
  const stretch = useTransform(smoothVelocity, [-2000, 2000], [0.92, 1.08]);

  // Parallax Base
  const yParallax = useTransform(scrollY, [0, 5000], [0, -400]);

  return (
    <div className="interactive-grid-container" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
      overflow: 'hidden',
      backgroundColor: 'var(--bg-primary)'
    }}>
      {/* Grid Layer: The 6D Water Flow */}
      <motion.div 
        style={{ 
          y: yParallax,
          skewY: skewY,
          scaleY: stretch,
          position: 'absolute',
          top: '-20%',
          left: 0,
          width: '100%',
          height: '140%', 
          transformOrigin: 'center center'
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <motion.g style={{ y: yFlow }}>
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(88, 166, 255, 0.05)" strokeWidth="0.5"/>
                <circle cx="0" cy="0" r="1.3" fill="var(--accent-primary)" opacity="0.4" filter="url(#glow)">
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="5s" repeatCount="indefinite" />
                </circle>
              </motion.g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </motion.div>
      
      {/* Decorative Glows */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(10, 12, 16, 0.7) 100%)',
        pointerEvents: 'none'
      }} />
    </div>
  );
};

export default InteractiveGrid;
