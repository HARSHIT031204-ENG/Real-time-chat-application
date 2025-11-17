import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const port = 3000;
const app = express();


app.use(cors({
  origin: "http://localhost:5173",
  methods: ["POST", "GET"],
  credentials: true
}));

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);

  socket.emit("welcome", "Welcome to the server");

  // listen for message from client
  socket.on("send-message", (msg) => {
    console.log("message from client:", msg);
    socket.broadcast.emit("message", msg); // send to all clients
  });
});

server.listen(port, () => console.log(`Server running on ${port}`));
