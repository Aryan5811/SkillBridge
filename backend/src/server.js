import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import http from "http";
import { Server } from "socket.io";
import { connectDB } from "./config/db.js";
import { authRouter } from "./routes/auth.js";
import { usersRouter } from "./routes/users.js";
import { jobsRouter } from "./routes/jobs.js";
import { applicationsRouter } from "./routes/applications.js";
import { messagesRouter } from "./routes/messages.js";
import { miscRouter } from "./routes/misc.js";
import { uploadsRouter } from "./routes/uploads.js";
import { adminRouter } from "./routes/admin.js";
import { registerChatSocket } from "./sockets/chatSocket.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: process.env.CLIENT_URL || "http://localhost:3000" } });

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3000", credentials: true }));
app.use(express.json({ limit: "2mb" }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, limit: 300 }));

app.get("/health", (_req, res) => res.json({ ok: true, service: "skillbridge-api" }));
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/jobs", jobsRouter);
app.use("/api/applications", applicationsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/uploads", uploadsRouter);
app.use("/api/admin", adminRouter);
app.use("/api", miscRouter);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || "Server error" });
});

registerChatSocket(io);

const port = process.env.PORT || 5000;
connectDB()
  .then(() => server.listen(port, () => console.log(`API listening on ${port}`)))
  .catch((err) => {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  });
