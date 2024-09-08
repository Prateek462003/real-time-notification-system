import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";
import {
  createNotification,
  getNotification,
  getNotificationsById,
} from "../controllers/notification.js";

const router = Router();

router.post("/notifications", authMiddleware, createNotification);

router.get("/notifications", authMiddleware, getNotification);

router.put("/notifications/:id", authMiddleware, getNotificationsById);

export default router;
