import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  conversationId: { type: String, index: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  body: String,
  attachments: [String],
  readAt: Date
}, { timestamps: true });

export const Message = mongoose.model("Message", messageSchema);
