// Import the Express module
const express = require('express');

// Create an Express app
const app = express();

// Middleware to handle JSON body
app.use(express.json());

// Root route (GET request)
app.get('/', (req, res) => {
  res.send('<h2>Welcome to Express.js!</h2><p>This is a GET request example.</p>');
});

// Route with URL parameter
app.get('/hello/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`<h2>Hello, ${userName}!</h2><p>This response uses a URL parameter.</p>`);
});

// POST route
app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  res.send(`<h3>Data Received:</h3><p>Name: ${name}</p><p>Message: ${message}</p>`);
});

// Handle all other routes (404)
app.use((req, res) => {
  res.status(404).send('<h3>404 - Page Not Found</h3>');
});

// Start the server
app.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000/');
});
