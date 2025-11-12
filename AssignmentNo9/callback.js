// callbackExample.js

// Step 1: A function that simulates data fetching
function fetchData(callback) {
  console.log("Fetching data...");

  // Simulate a delay using setTimeout (like async database call)
  setTimeout(() => {
    const data = { name: "Sanika", age: 21 };
    console.log("Data fetched successfully!");
    
    // Step 2: Call the callback with the fetched data
    callback(data);
  }, 2000);
}

// Step 3: Function that handles data after it’s fetched
function displayData(data) {
  console.log("Displaying data:");
  console.log(data);
}

// Step 4: Call the fetchData function and pass displayData as a callback
fetchData(displayData);