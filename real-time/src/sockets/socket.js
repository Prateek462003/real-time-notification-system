import { Server } from "socket.io";

export const init = (server) => {
  const io = new Server(server);
  io.on("connection", (socket) => {
    console.log("User connected");
    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

export const broadcastNotification = (notification) => {
  io.emit("newNotification", notification);
};
