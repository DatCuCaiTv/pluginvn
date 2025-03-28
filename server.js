const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 3000 });
const clients = new Set();

server.on("connection", socket => {
    clients.add(socket);

    socket.on("message", message => {
        const data = JSON.parse(message);

        // Gửi tin nhắn tới tất cả client trong mạng WiFi
        clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(data));
            }
        });
    });

    socket.on("close", () => {
        clients.delete(socket);
    });
});

console.log("WebSocket server đang chạy tại ws://localhost:3000");
