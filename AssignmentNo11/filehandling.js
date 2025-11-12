// Import the 'fs' (File System) module
const fs = require('fs');

// Create a new file and write some content
fs.writeFile('example.txt', 'Hello, this is a file system demo!', (err) => {
  if (err) throw err;
  console.log('✅ File created and content written successfully.');

  // Read the file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('📖 File content:');
    console.log(data);

    // Append new content to the file
    fs.appendFile('example.txt', '\nThis line was added later.', (err) => {
      if (err) throw err;
      console.log('📝 Content appended successfully.');

      // Read the file again to show updated content
      fs.readFile('example.txt', 'utf8', (err, updatedData) => {
        if (err) throw err;
        console.log('📚 Updated file content:');
        console.log(updatedData);

        // Delete the file
        fs.unlink('example.txt', (err) => {
          if (err) throw err;
          console.log('🗑️ File deleted successfully.');
        });
      });
    });
  });
});
