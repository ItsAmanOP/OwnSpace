import { Server } from "socket.io";

const PORT = 9000;
const io = new Server(PORT, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

io.on('connection', socket => {
    socket.on('get-document', documentId => {
        const data = "";
        socket.join(documentId);
        socket.emit('load-document', data);

        socket.on('send-changes', delta => {                                  // Catching changes in socket sent by Quill from the frontend
            socket.broadcast.to(documentId).emit('receive-changes', delta);                  // Broadcasting the backend changes to all the frontend users with same Id
        })
    })
    
});