import { Server } from "socket.io";

let io;

export const init = (server) => {
  io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });
  io.on("connection", (socket) => {
    console.log("User connected");

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

export const broadcastNotification = (notification) => {
  if (io) {
    io.emit("newNotification", notification);
  } else {
    console.error("Socket.io is not initialized");
  }
};
