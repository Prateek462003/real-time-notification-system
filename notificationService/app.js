import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import notificationRoutes from "./src/routes/notification.js";

dotenv.config();

const app = express();

app.use("/api", notificationRoutes);

const PORT = process.env.PORT || 4001;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
