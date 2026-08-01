import React, { useState, useEffect } from 'react';
import './InstallBanner.css';

const InstallBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isDismissing, setIsDismissing] = useState(false);

  useEffect(() => {
    // Don't show if user previously dismissed it (within 7 days)
    const dismissed = localStorage.getItem('kca-install-dismissed');
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - dismissedAt < sevenDays) return;
    }

    // Don't show if app is already installed (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches) return;

    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Fallback: show banner after 5 seconds even without the event
    // (for browsers that support PWA but fire the event early)
    const fallbackTimer = setTimeout(() => {
      // Only show if not already installed
      if (!window.matchMedia('(display-mode: standalone)').matches) {
        setShowBanner(true);
      }
    }, 5000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      // Use the native install prompt
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowBanner(false);
      }
      setDeferredPrompt(null);
    } else {
      // Fallback: show manual instructions
      alert(
        'To install Kone Academy:\n\n' +
        '• Chrome/Edge: Click the install icon (⊕) in the address bar\n' +
        '• Safari: Tap Share → Add to Home Screen\n' +
        '• Firefox: Not yet supported for PWA install'
      );
    }
  };

  const handleDismiss = () => {
    setIsDismissing(true);
    localStorage.setItem('kca-install-dismissed', Date.now().toString());
    setTimeout(() => setShowBanner(false), 350);
  };

  if (!showBanner) return null;

  return (
    <div className={`install-banner ${isDismissing ? 'dismissing' : ''}`}>
      <div className="install-banner-inner">
        <div className="install-banner-icon">
          <img src="/logo-circle-blue.svg" alt="Kone Academy" />
        </div>

        <div className="install-banner-text">
          <div className="install-banner-title">Install Kone Academy</div>
          <div className="install-banner-subtitle">Quick access from your home screen</div>
        </div>

        <div className="install-banner-actions">
          <button className="install-btn" onClick={handleInstall}>
            Install
          </button>
          <button
            className="install-dismiss"
            onClick={handleDismiss}
            aria-label="Dismiss install banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallBanner;
