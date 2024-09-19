import express from "express";
import http from "http";
import { init } from "./src/sockets/socket.js";
import { listenToNotifications } from "./src/queues/listenNotifications.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

init(server);
listenToNotifications();

server.listen(5000, () => {
  console.log("Real-time service running on port 5000");
});
