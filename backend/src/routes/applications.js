import express from "express";
import { Application } from "../models/Application.js";
import { Job } from "../models/Job.js";
import { requireAuth } from "../middleware/auth.js";
import { createNotification } from "../services/notificationService.js";

export const applicationsRouter = express.Router();

applicationsRouter.post("/:jobId/apply", requireAuth, async (req, res) => {
  const job = await Job.findById(req.params.jobId);
  if (!job) return res.status(404).json({ message: "Job not found" });
  const application = await Application.create({
    job: job._id,
    worker: req.user._id,
    contractor: job.contractor,
    resumeSnapshotUrl: req.user.workerProfile?.resumeUrl,
    coverNote: req.body.coverNote
  });
  await createNotification({
    user: job.contractor,
    type: "application",
    title: "New applicant",
    body: `${req.user.name} applied for ${job.title}`,
    href: `/contractor`
  });
  res.status(201).json(application);
});

applicationsRouter.get("/me", requireAuth, async (req, res) => {
  const filter = req.user.role === "worker" ? { worker: req.user._id } : { contractor: req.user._id };
  const applications = await Application.find(filter).populate("job worker contractor").sort({ createdAt: -1 });
  res.json(applications);
});

applicationsRouter.patch("/:id", requireAuth, async (req, res) => {
  const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("job worker");
  res.json(application);
});
