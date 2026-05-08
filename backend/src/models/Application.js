import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  worker: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  contractor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resumeSnapshotUrl: String,
  coverNote: String,
  status: {
    type: String,
    enum: ["applied", "shortlisted", "interview", "accepted", "rejected"],
    default: "applied"
  },
  interview: {
    startsAt: Date,
    mode: { type: String, enum: ["phone", "video", "onsite"] },
    notes: String
  }
}, { timestamps: true });

applicationSchema.index({ job: 1, worker: 1 }, { unique: true });

export const Application = mongoose.model("Application", applicationSchema);
