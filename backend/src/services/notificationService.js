import nodemailer from "nodemailer";
import { Notification } from "../models/Notification.js";

export async function createNotification(payload) {
  return Notification.create(payload);
}

export async function sendEmail({ to, subject, html }) {
  if (!process.env.SMTP_HOST) return { skipped: true };
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined
  });
  return transporter.sendMail({ from: process.env.MAIL_FROM, to, subject, html });
}
