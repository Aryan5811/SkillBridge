import express from "express";
import { Message } from "../models/Message.js";
import { requireAuth } from "../middleware/auth.js";

export const messagesRouter = express.Router();

messagesRouter.get("/", requireAuth, async (req, res) => {
  const messages = await Message.find({
    $or: [{ sender: req.user._id }, { recipient: req.user._id }]
  }).populate("sender recipient", "name avatarUrl role").sort({ createdAt: -1 }).limit(100);
  res.json(messages);
});

messagesRouter.post("/", requireAuth, async (req, res) => {
  const { recipient, body, attachments = [] } = req.body;
  const conversationId = [String(req.user._id), String(recipient)].sort().join(":");
  const message = await Message.create({ sender: req.user._id, recipient, body, attachments, conversationId });
  res.status(201).json(message);
});
