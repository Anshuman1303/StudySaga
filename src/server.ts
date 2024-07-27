import { createServer } from "http";
import { Server } from "socket.io";

const server = createServer();
const io = new Server(server, {
        cors: {
                origin: "http://localhost:3000", // Update this to match your frontend URL
                methods: ["GET", "POST"],
        },
});

io.on("connection", (socket) => {
        console.log("A user connected:", socket.id);

        // Handle sending an emoji to a specific recipient
        socket.on("send_emoji", ({ recipientId, emoji }) => {
                console.log(`Sending emoji ${emoji} to ${recipientId}`);
                io.to(recipientId).emit("receive_emoji", {
                        emoji,
                        senderId: socket.id,
                });
        });

        // Handle user disconnection
        socket.on("disconnect", () => {
                console.log("User disconnected:", socket.id);
        });
});

server.listen(3003, () => {
        console.log("Socket.IO server running on port 3003");
});
