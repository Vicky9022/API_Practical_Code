// Import the 'events' module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();


function greetHandler(name) {
  console.log(`Hello, ${name}! Welcome to Node.js Events.`);
}

eventEmitter.on('greet', greetHandler);
eventEmitter.emit('greet', 'Alice');
eventEmitter.emit('greet', 'Bob');

eventEmitter.on('exit', () => {
  console.log('Exiting the program... Goodbye!');
});

eventEmitter.emit('exit');
