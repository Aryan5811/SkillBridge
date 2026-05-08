import { Message } from "../models/Message.js";

export function registerChatSocket(io) {
  io.on("connection", (socket) => {
    socket.on("join:user", (userId) => socket.join(`user:${userId}`));
    socket.on("message:send", async (payload) => {
      const conversationId = [String(payload.sender), String(payload.recipient)].sort().join(":");
      const message = await Message.create({ ...payload, conversationId });
      io.to(`user:${payload.recipient}`).emit("message:new", message);
      socket.emit("message:sent", message);
    });
    socket.on("typing", ({ recipient, sender }) => {
      io.to(`user:${recipient}`).emit("typing", { sender });
    });
  });
}
