import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeCustomizer from './ThemeCustomizer';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <header className="app-header">
          <h1>Theme Customization Demo</h1>
        </header>
        
        <main className="app-main">
          <div className="content">
            <h2>Sample Content</h2>
            <p>This is sample text that will change based on your theme settings.</p>
            <button className="sample-button">Sample Button</button>
          </div>
          
          <ThemeCustomizer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;