import express from "express";
import { User } from "../models/User.js";
import { Job } from "../models/Job.js";
import { Application } from "../models/Application.js";
import { Report } from "../models/Report.js";
import { requireAuth, requireRole } from "../middleware/auth.js";

export const adminRouter = express.Router();
adminRouter.use(requireAuth, requireRole("admin"));

adminRouter.get("/analytics", async (_req, res) => {
  const [users, jobs, applications, reports] = await Promise.all([
    User.countDocuments(),
    Job.countDocuments(),
    Application.countDocuments(),
    Report.countDocuments({ status: { $in: ["open", "reviewing"] } })
  ]);
  res.json({ users, jobs, applications, openReports: reports });
});

adminRouter.get("/reports", async (_req, res) => {
  res.json(await Report.find().populate("reporter", "name email").sort({ createdAt: -1 }));
});

adminRouter.patch("/reports/:id", async (req, res) => {
  res.json(await Report.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

adminRouter.patch("/jobs/:id/moderate", async (req, res) => {
  res.json(await Job.findByIdAndUpdate(req.params.id, { status: req.body.status || "flagged" }, { new: true }));
});
