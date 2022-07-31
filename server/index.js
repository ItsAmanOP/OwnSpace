import { Server } from "socket.io";

const PORT = 9000;
const io = new Server(PORT, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', socket => {
    socket.on('send-changes', delta => {                                  // Catching changes sent by the frontend.
        socket.broadcast.emit('recieve-changes', delta);                  // Broadcasting the backend changes to all the frontend users.
    })
    
});