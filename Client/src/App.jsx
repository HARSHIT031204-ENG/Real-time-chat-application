import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Hero from "./HeroSection";

const socket = io("http://localhost:3000");   // created only once

function App() {
  const [socketID, setsocketID] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected new socket ", socket.id);
    });

    socket.on("welcome", (msg) => {
      console.log("server says:", msg);
    });

    socket.on("message", (msg) => {
      console.log("message from server:", msg);
    });
  }, []);

  return <Hero socket={socket} />;
}

export default App;
