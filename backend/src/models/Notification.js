import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, enum: ["application", "message", "interview", "system", "job-match"], required: true },
  title: String,
  body: String,
  href: String,
  readAt: Date
}, { timestamps: true });

export const Notification = mongoose.model("Notification", notificationSchema);
