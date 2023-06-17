const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('open', () => {
  console.log('WebSocket connection established');

  // Send a message to the server
  socket.send('Hello, server!');
});

socket.addEventListener('message', (event) => {
  console.log('Received message:', event.data);

  // Handle incoming message
  // ...
});

socket.addEventListener('close', () => {
  console.log('WebSocket connection closed');
});