import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer();
const io = new Server(server);

io.on("connection", (socket) => {
        console.log("A user connected: ", socket.id);

        socket.on("register", (username) => {
                console.log("User registered: ", username);
                // Handle user registration logic
        });

        socket.on("sendEmoji", (data) => {
                const { emoji, recipient } = data;
                console.log(`Emoji sent: ${emoji} to ${recipient}`);
                // Handle sending emojis
        });

        socket.on("disconnect", () => {
                console.log("A user disconnected: ", socket.id);
        });
});

const PORT = 3003;
server.listen(PORT, () => {
        console.log(`Socket.IO server running on port ${PORT}`);
});

export { io, server };
