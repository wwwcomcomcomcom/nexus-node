import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

interface ChatMessageDto {
    room: string;
    message: string;
}

io.on('connection', (socket: Socket) => {
    console.log('A user connected');

    socket.on('chat message', (chatRequest: ChatMessageDto) => {
        io.to(chatRequest.room).emit('chat message', chatRequest.message);
    });
    socket.on("join room", (room: string) => {
        socket.join(room);
    });
    socket.on("leave room", (room: string) => {
        socket.leave(room);
    });
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});