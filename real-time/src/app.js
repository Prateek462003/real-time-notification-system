import express from "express";
import http from "http";
import { init } from "./sockets/socket.js";
import { listenToNotifications } from "./queues/listenNotifications.js";

const app = express();
const server = http.createServer(app);

init(server);
listenToNotifications();

server.listen(3000, () => {
  console.log("Real-time service running on port 3000");
});
