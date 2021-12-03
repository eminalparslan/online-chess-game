const express = require('express');
const http = require('http');
const path = require('path');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
    socket.emit('message', 'Welcome to the game!')
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
}); 

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

