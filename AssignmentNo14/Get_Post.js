// Import Express module
const express = require('express');

// Create Express app
const app = express();

// Middleware to parse form and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve HTML form with CSS
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Express.js GET & POST Demo</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .container {
          background: white;
          padding: 30px 40px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          text-align: center;
          width: 350px;
        }
        h2 {
          color: #0078d7;
        }
        form {
          margin-top: 20px;
        }
        input[type="text"],
        input[type="number"] {
          width: 90%;
          padding: 10px;
          margin: 10px 0;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        button {
          background-color: #0078d7;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:hover {
          background-color: #005fa3;
        }
        p {
          color: #333;
          font-size: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>Express.js GET & POST Demo</h2>
        <form action="/user" method="POST">
          <input type="text" name="name" placeholder="Enter your name" required />
          <input type="number" name="age" placeholder="Enter your age" required />
          <button type="submit">Submit</button>
        </form>
        <p>Or try: <a href="/user?name=Sandhya">GET Request Example</a></p>
      </div>
    </body>
    </html>
  `);
});

// Handle GET request
app.get('/user', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`
    <h2 style="font-family:Arial; color:#0078d7;">Hello, ${name}!</h2>
    <p>This is a GET request handled by Express.js.</p>
    <a href="/" style="font-family:Arial;">Go Back</a>
  `);
});

// Handle POST request
app.post('/user', (req, res) => {
  const { name, age } = req.body;
  res.send(`
    <h2 style="font-family:Arial; color:#0078d7;">POST Request Received</h2>
    <p>Name: <strong>${name}</strong></p>
    <p>Age: <strong>${age}</strong></p>
    <a href="/" style="font-family:Arial;">Go Back</a>
  `);
});

// Start the server
app.listen(3000, () => {
  console.log('🚀 Server running at http://localhost:3000/');
});
