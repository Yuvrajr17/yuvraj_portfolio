import React from 'react';
import { Toaster } from 'react-hot-toast';
import { PortfolioProvider } from './pages/PortfolioContext';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <PortfolioProvider>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1a2030',
            color: '#e2e8f0',
            border: '1px solid rgba(99,179,237,0.25)',
            fontFamily: "'Space Mono', monospace",
            fontSize: '12px',
          },
        }}
      />
      <Portfolio />
    </PortfolioProvider>
  );
}

export default App;
