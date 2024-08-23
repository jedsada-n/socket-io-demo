require("dotenv").config();

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("connected");
  io.emit("message", "Hello from the server");
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log("listening on *:" + port);
});
