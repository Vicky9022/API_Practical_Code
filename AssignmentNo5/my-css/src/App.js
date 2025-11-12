import React from 'react';
import './styles.css'; // Import external CSS

function App() {
  // Internal CSS style object
  const internalParagraphStyle = {
    fontStyle: 'italic',
    color: '#6d4c41',
    marginBottom: '20px',
  };


  

  return (
    <div className="app-container"> {}
      
      <h1 className="app-header">Welcome to My React App</h1> {}

      {/* Internal CSS */}
      <p style={internalParagraphStyle}>
        This paragraph is styled with <strong>internal CSS</strong>
      </p>



      {/* Inline CSS */}
      <button style={{
        backgroundColor: '#f57c00',
        color: 'white',
        padding: '12px 24px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
      }}>
        Click Me
      </button>
      
    </div>
  );
}

export default App;
