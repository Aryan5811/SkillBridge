import express from "express";
import { z } from "zod";
import { User } from "../models/User.js";
import { signToken } from "../utils/token.js";
import { requireAuth } from "../middleware/auth.js";

export const authRouter = express.Router();

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(["worker", "contractor"])
});

authRouter.post("/register", async (req, res) => {
  const data = registerSchema.parse(req.body);
  const exists = await User.findOne({ email: data.email });
  if (exists) return res.status(409).json({ message: "Email already registered" });
  const user = await User.create(data);
  res.status(201).json({ user, token: signToken(user) });
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  user.lastLoginAt = new Date();
  await user.save();
  res.json({ user: await User.findById(user._id), token: signToken(user) });
});

authRouter.post("/google", async (req, res) => {
  const { email, name, googleId, avatarUrl, role = "worker" } = req.body;
  let user = await User.findOne({ email });
  if (!user) user = await User.create({ email, name, googleId, avatarUrl, role, isVerified: true });
  res.json({ user, token: signToken(user) });
});

authRouter.post("/otp/request", async (_req, res) => {
  res.json({ message: "OTP provider hook ready. Connect Twilio/Firebase in production." });
});

authRouter.post("/otp/verify", async (_req, res) => {
  res.json({ verified: true });
});

authRouter.get("/me", requireAuth, (req, res) => res.json(req.user));
