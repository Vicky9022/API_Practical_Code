/**
 * Title: Node.js Callback Demonstration
 * Author: Shreya Patil
 * Description: A simple Node.js application demonstrating
 *              how asynchronous callbacks work using fs.readFile().
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Serve HTML file
    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error: Unable to load HTML file.");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else if (req.url === "/style.css") {
    // Serve CSS file
    fs.readFile(path.join(__dirname, "public", "style.css"), (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("CSS file not found.");
      } else {
        res.writeHead(200, { "Content-Type": "text/css" });
        res.end(data);
      }
    });
  } else if (req.url === "/get-message") {
    // Demonstrating Node.js Callback: Reading file asynchronously
    fs.readFile(path.join(__dirname, "message.txt"), "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error: Unable to read message file.");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
      }
    });
  } else {
    // Handle 404 (Not Found)
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 - Page Not Found");
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}/`);
});
