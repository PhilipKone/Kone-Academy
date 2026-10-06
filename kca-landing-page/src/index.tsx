import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

const rootElement = document.getElementById('root');

if (rootElement) {
  // Clean up any stale body portals injected by react-snap prerenderer
  if (typeof document !== 'undefined') {
    const stalePortals = document.querySelectorAll('body > .modal-overlay');
    stalePortals.forEach(el => el.remove());
  }

  const appElement = (
    <React.StrictMode>
      <ErrorBoundary appName="KCA-Landing">
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );

  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, appElement, {
      onRecoverableError: (error: any) => {
        // React automatically recovers from minor SSR/prerender text or whitespace differences
        if (import.meta.env?.DEV) {
          console.warn('Hydration recoverable notice:', error);
        }
      }
    });
  } else {
    createRoot(rootElement).render(appElement);
  }
}
