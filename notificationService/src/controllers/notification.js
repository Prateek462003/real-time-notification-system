import { sendNotificationToQueue } from "../queues/sendNotification";
import { Notification } from "../models/notification";

export const createNotification = async (req, res) => {
  const { message } = req.body;
  const notification = new Notification({ userId: req.user.id, message });
  await notification.save();
  await sendNotificationToQueue(notification);
  res.status(201).json(notification);
};

export const getNotification = async (req, res) => {
  const notifications = await Notification.find({ userId: req.user.id });
  res.json(notifications);
};

export const getNotificationsById = async (req, res) => {
  await Notification.findByIdAndUpdate(req.params.id, { read: true });
  res.json({ message: "Notification marked as read" });
};
