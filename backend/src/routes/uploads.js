import express from "express";
import { Readable } from "stream";
import { cloudinary } from "../config/cloudinary.js";
import { requireAuth } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

export const uploadsRouter = express.Router();

uploadsRouter.post("/", requireAuth, upload.single("file"), async (req, res) => {
  if (!req.file) return res.status(400).json({ message: "File required" });
  if (!process.env.CLOUDINARY_CLOUD_NAME) {
    return res.json({ url: `local-preview://${req.file.originalname}`, provider: "mock" });
  }
  const result = await new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ resource_type: "auto", folder: "skillbridge" }, (error, uploaded) => {
      if (error) reject(error);
      else resolve(uploaded);
    });
    Readable.from(req.file.buffer).pipe(stream);
  });
  res.json({ url: result.secure_url, provider: "cloudinary" });
});
