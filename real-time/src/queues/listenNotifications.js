import amqp from "amqplib";
import { broadcastNotification } from "../sockets/socket.js";

export const listenToNotifications = async () => {
  const conn = await amqp.connect(process.env.RABBITMQ_URL);
  const channel = await conn.createChannel();
  const queue = "notifications";

  await channel.assertQueue(queue, { durable: true });
  channel.consume(queue, (msg) => {
    const notification = JSON.parse(msg.content.toString());
    broadcastNotification(notification);
    channel.ack(msg);
  });
};
