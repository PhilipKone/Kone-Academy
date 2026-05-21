import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <ErrorBoundary appName="KCA-Landing">
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary appName="KCA-Landing">
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
}
