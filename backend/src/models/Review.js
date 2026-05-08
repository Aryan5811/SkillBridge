import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  reviewee: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String
}, { timestamps: true });

export const Review = mongoose.model("Review", reviewSchema);
