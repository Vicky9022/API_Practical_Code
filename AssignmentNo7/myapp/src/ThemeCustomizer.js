import React from 'react';
import { useTheme } from './contexts/ThemeContext';

const ThemeCustomizer = () => {
  const { theme, updateTheme } = useTheme();

  return (
    <div className="theme-customizer">
      <h3>Theme Customizer</h3>
      
      <div className="control-group">
        <label>Primary Color:</label>
        <input
          type="color"
          value={theme.primaryColor}
          onChange={(e) => updateTheme({ primaryColor: e.target.value })}
        />
      </div>

      <div className="control-group">
        <label>Background Color:</label>
        <input
          type="color"
          value={theme.backgroundColor}
          onChange={(e) => updateTheme({ backgroundColor: e.target.value })}
        />
      </div>

      <div className="control-group">
        <label>Text Color:</label>
        <input
          type="color"
          value={theme.textColor}
          onChange={(e) => updateTheme({ textColor: e.target.value })}
        />
      </div>

      <div className="control-group">
        <label>Font Size:</label>
        <select
          value={theme.fontSize}
          onChange={(e) => updateTheme({ fontSize: e.target.value })}
        >
          <option value="14px">Small</option>
          <option value="16px">Medium</option>
          <option value="18px">Large</option>
        </select>
      </div>
    </div>
  );
};

export default ThemeCustomizer;