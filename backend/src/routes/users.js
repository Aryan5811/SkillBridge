import express from "express";
import { User } from "../models/User.js";
import { Job } from "../models/Job.js";
import { requireAuth } from "../middleware/auth.js";
import { scoreWorkerForJob } from "../services/recommendationService.js";

export const usersRouter = express.Router();

usersRouter.get("/workers", async (req, res) => {
  const { skill, q, limit = 20 } = req.query;
  const filter = { role: "worker" };
  if (skill) filter["workerProfile.skills"] = skill;
  if (q) filter.$text = { $search: q };
  const users = await User.find(filter).limit(Number(limit));
  res.json(users);
});

usersRouter.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).populate("savedJobs");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

usersRouter.patch("/me", requireAuth, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true });
  res.json(user);
});

usersRouter.get("/recommendations/candidates/:jobId", requireAuth, async (req, res) => {
  const job = await Job.findById(req.params.jobId);
  const workers = await User.find({ role: "worker", "workerProfile.availabilityStatus": "available" });
  const ranked = workers
    .map((worker) => ({ worker, score: scoreWorkerForJob(worker, job) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 12);
  res.json(ranked);
});
