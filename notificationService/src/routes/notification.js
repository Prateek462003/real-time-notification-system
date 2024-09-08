import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import {
  createNotification,
  getNotification,
  getNotificationById,
  markNotificationAsRead,
} from "../controllers/notification.js";

const router = Router();

router.post("/notifications", authMiddleware, createNotification);

router.get("/notifications", authMiddleware, getNotification);

router.put("/notifications/:id", authMiddleware, markNotificationAsRead);

router.put("/notifications/:id", authMiddleware, getNotificationById);

export default router;
