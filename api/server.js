const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const io = require('socket.io')(server);

// server
const server = express();

// imports

// global middlewares
server.use(helmet());
server.use(express.json());
server.use(cors());

// routes

// sanity check
server.get('/', (req, res) => {
  res.send('<h2>I am alive and well!</h2>');
});

// tag broadcasting (all CRUD)
io.on('connection', (socket) => {
    socket.on('tag broadcast', (tag) => {
        io.emit('tag broadcast', tag);
    });
});

module.exports = server;