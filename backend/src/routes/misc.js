import express from "express";
import { Review } from "../models/Review.js";
import { Notification } from "../models/Notification.js";
import { Report } from "../models/Report.js";
import { requireAuth } from "../middleware/auth.js";

export const miscRouter = express.Router();

miscRouter.get("/notifications", requireAuth, async (req, res) => {
  res.json(await Notification.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(50));
});

miscRouter.patch("/notifications/:id/read", requireAuth, async (req, res) => {
  res.json(await Notification.findOneAndUpdate({ _id: req.params.id, user: req.user._id }, { readAt: new Date() }, { new: true }));
});

miscRouter.post("/reviews", requireAuth, async (req, res) => {
  res.status(201).json(await Review.create({ ...req.body, reviewer: req.user._id }));
});

miscRouter.get("/reviews/:userId", async (req, res) => {
  res.json(await Review.find({ reviewee: req.params.userId }).populate("reviewer", "name avatarUrl"));
});

miscRouter.post("/reports", requireAuth, async (req, res) => {
  res.status(201).json(await Report.create({ ...req.body, reporter: req.user._id }));
});
