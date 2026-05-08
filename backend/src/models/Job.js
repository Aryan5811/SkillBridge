import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  contractor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  requiredSkills: [String],
  qualifications: [String],
  salaryOffered: { min: Number, max: Number, currency: { type: String, default: "USD" } },
  workersNeeded: { type: Number, default: 1 },
  location: {
    address: String,
    city: String,
    state: String,
    remote: { type: Boolean, default: false },
    coordinates: { type: [Number], index: "2dsphere", default: undefined }
  },
  duration: String,
  urgencyLevel: { type: String, enum: ["low", "medium", "high", "immediate"], default: "medium" },
  contactDetails: { name: String, email: String, phone: String },
  experienceRequired: { type: Number, default: 0 },
  description: String,
  status: { type: String, enum: ["open", "paused", "closed", "flagged"], default: "open" },
  views: { type: Number, default: 0 }
}, { timestamps: true });

jobSchema.index({ title: "text", category: "text", requiredSkills: "text", description: "text" });
jobSchema.index({ category: 1, status: 1, urgencyLevel: 1 });

export const Job = mongoose.model("Job", jobSchema);
