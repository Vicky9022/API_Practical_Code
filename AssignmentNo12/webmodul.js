// Import the 'http' module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // HTML with white background and CSS styling
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Node.js Web Module Demo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #ffffff;
          color: #333;
          text-align: center;
          margin-top: 100px;
        }
        h1 {
          font-size: 2.5rem;
          color: #0078D7;
          margin-bottom: 10px;
        }
        p {
          font-size: 1.2rem;
        }
        .box {
          background: #f9f9f9;
          border: 1px solid #ddd;
          padding: 20px 40px;
          border-radius: 10px;
          display: inline-block;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>Hello from Node.js Web Module!</h1>
        <p>This is a simple web server styled with a clean white background.</p>
      </div>
    </body>
    </html>
  `);

  res.end();
});

// Start the server
server.listen(3000, () => {
  console.log('🌐 Server running at http://localhost:3000/');
});
