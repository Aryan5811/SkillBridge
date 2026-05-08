import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  targetType: { type: String, enum: ["user", "job", "message"], required: true },
  targetId: { type: mongoose.Schema.Types.ObjectId, required: true },
  reason: String,
  status: { type: String, enum: ["open", "reviewing", "resolved", "dismissed"], default: "open" },
  resolutionNote: String
}, { timestamps: true });

export const Report = mongoose.model("Report", reportSchema);
