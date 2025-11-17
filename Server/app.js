import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const port = 3000;
const app = express();


app.use(cors({
    origin : "http://localhost:5173",
    methods: ["POST", "GET", "PUT"],
    credentials : true
}));


const server = createServer(app);

// const io = new Server(server);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["POST", "GET", "PUT"],
        credentials: true
    }
});


io.on("connection", (socket) => {
    console.log("user connected! success ");
    console.log("user connected socket id ", socket.id);
    socket.emit("welcome", "welcome to the server ")
});

app.get("/", (req, res) => {
    res.send("hello brother odwkjbkjebk");
    console.log("hello world !");
});

server.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});