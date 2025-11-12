import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#007bff',
    backgroundColor: '#ffffff',
    textColor: '#333333',
    fontSize: '16px'
  });

  const updateTheme = (newTheme) => {
    setTheme(prev => ({ ...prev, ...newTheme }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <div style={{
        '--primary-color': theme.primaryColor,
        '--bg-color': theme.backgroundColor,
        '--text-color': theme.textColor,
        '--font-size': theme.fontSize
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};