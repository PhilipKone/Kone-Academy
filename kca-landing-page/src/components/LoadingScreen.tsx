import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onFinished?: () => void;
  isInitialWelcome?: boolean;
}

const LoadingScreenContent: React.FC<LoadingScreenProps> = ({ onFinished, isInitialWelcome = false }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isPrerender = typeof window !== 'undefined' && (
      window.navigator.userAgent.includes('ReactSnap') ||
      (window as any).__PRERENDER_INJECTED
    );

    if (isPrerender) {
      setIsVisible(false);
      if (onFinished) onFinished();
      return;
    }

    if (isInitialWelcome) {
      // 1.5s total cinematic breathing intro duration
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onFinished) {
          setTimeout(onFinished, 500); // Allow fade-out transition to complete
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [onFinished, isInitialWelcome]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#0a0c10',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 999999,
          }}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0.8 }}
            animate={{
              scale: [0.94, 1.08, 0.98, 1.05],
              opacity: [0.85, 1, 0.9, 1],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              width: '110px',
              height: '110px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img 
              src="/favicon.svg" 
              alt="Kone Academy" 
              style={{ 
                width: '100%', 
                height: 'auto',
                filter: 'drop-shadow(0 0 25px rgba(0, 229, 255, 0.45)) drop-shadow(0 0 50px rgba(88, 166, 255, 0.2))'
              }} 
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 6, letterSpacing: '0.22em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.28em' }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            style={{
              marginTop: '1.8rem',
              fontSize: '0.72rem',
              color: '#00e5ff',
              textTransform: 'uppercase',
              fontWeight: 700,
              textShadow: '0 0 15px rgba(0, 229, 255, 0.5)'
            }}
          >
            Welcome to the Ecosystem
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const LoadingScreen: React.FC<LoadingScreenProps> = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || typeof document === 'undefined') return null;
  return createPortal(<LoadingScreenContent {...props} />, document.body);
};

export default LoadingScreen;
