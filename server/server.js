const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
var {generateMesage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit admin, welcom
    socket.emit('newMessage', generateMesage('Admin', 'Welcome to the chat app'));

    // socket.broadcast.emit from admin new user joined
    socket.broadcast.emit('newMessage', generateMesage('Admin', 'New user joint'));

    socket.on('createMessage', (message) => {
        console.log('create new message event', message);

        io.emit('newMessage', generateMesage(message.from, message.text));

        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('New user disconnected');
    });
});

server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});
