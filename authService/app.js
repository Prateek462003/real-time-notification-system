import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./src/routes/auth.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", userRoutes);

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
