import express from "express";
import { Job } from "../models/Job.js";
import { User } from "../models/User.js";
import { requireAuth, requireRole } from "../middleware/auth.js";
import { scoreJobForWorker } from "../services/recommendationService.js";

export const jobsRouter = express.Router();

jobsRouter.get("/", async (req, res) => {
  const { q, category, remote, minSalary, maxSalary, page = 1, limit = 12 } = req.query;
  const filter = { status: "open" };
  if (q) filter.$text = { $search: q };
  if (category) filter.category = category;
  if (remote !== undefined) filter["location.remote"] = remote === "true";
  if (minSalary || maxSalary) filter["salaryOffered.max"] = { $gte: Number(minSalary || 0), $lte: Number(maxSalary || 999999) };
  const skip = (Number(page) - 1) * Number(limit);
  const [jobs, total] = await Promise.all([
    Job.find(filter).populate("contractor", "name companyProfile verifiedBadge").sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
    Job.countDocuments(filter)
  ]);
  res.json({ jobs, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
});

jobsRouter.get("/nearby", async (req, res) => {
  const { lng, lat, radius = 25000 } = req.query;
  const jobs = await Job.find({
    status: "open",
    "location.coordinates": {
      $near: { $geometry: { type: "Point", coordinates: [Number(lng), Number(lat)] }, $maxDistance: Number(radius) }
    }
  }).limit(50);
  res.json(jobs);
});

jobsRouter.get("/recommendations/me", requireAuth, async (req, res) => {
  const jobs = await Job.find({ status: "open" }).populate("contractor", "name companyProfile verifiedBadge");
  const ranked = jobs.map((job) => ({ job, score: scoreJobForWorker(job, req.user) })).sort((a, b) => b.score - a.score).slice(0, 12);
  res.json(ranked);
});

jobsRouter.post("/", requireAuth, requireRole("contractor", "admin"), async (req, res) => {
  const job = await Job.create({ ...req.body, contractor: req.user._id });
  res.status(201).json(job);
});

jobsRouter.get("/:id", async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, { $inc: { views: 1 } }, { new: true }).populate("contractor", "name companyProfile verifiedBadge");
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});

jobsRouter.post("/:id/bookmark", requireAuth, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, { $addToSet: { savedJobs: req.params.id } }, { new: true }).populate("savedJobs");
  res.json(user.savedJobs);
});

jobsRouter.patch("/:id", requireAuth, async (req, res) => {
  const job = await Job.findOneAndUpdate({ _id: req.params.id, contractor: req.user._id }, req.body, { new: true });
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});
