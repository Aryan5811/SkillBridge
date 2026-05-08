import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const locationSchema = new mongoose.Schema({
  address: String,
  city: String,
  state: String,
  coordinates: { type: [Number], index: "2dsphere", default: undefined }
}, { _id: false });

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ["worker", "contractor", "admin"], required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, select: false },
  googleId: String,
  phone: String,
  isVerified: { type: Boolean, default: false },
  verifiedBadge: { type: Boolean, default: false },
  avatarUrl: String,
  language: { type: String, default: "en" },
  workerProfile: {
    skills: [String],
    field: String,
    experienceYears: Number,
    expectedSalary: Number,
    preferredJobType: { type: String, enum: ["full-time", "part-time", "contract", "remote"], default: "contract" },
    location: locationSchema,
    resumeUrl: String,
    certifications: [String],
    availabilityStatus: { type: String, enum: ["available", "busy", "offline"], default: "available" },
    rating: { type: Number, default: 0 }
  },
  companyProfile: {
    companyName: String,
    industry: String,
    website: String,
    description: String,
    location: locationSchema,
    rating: { type: Number, default: 0 }
  },
  savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Job" }],
  pushTokens: [String],
  lastLoginAt: Date
}, { timestamps: true });

userSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password") || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = function comparePassword(candidate) {
  return bcrypt.compare(candidate, this.password);
};

userSchema.index({ "workerProfile.skills": 1, role: 1 });
userSchema.index({ name: "text", "workerProfile.skills": "text", "companyProfile.companyName": "text" });

export const User = mongoose.model("User", userSchema);
