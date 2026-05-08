import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../src/config/db.js";
import { User } from "../src/models/User.js";
import { Job } from "../src/models/Job.js";

await connectDB();
await Promise.all([User.deleteMany({}), Job.deleteMany({})]);

const [admin, contractor, worker] = await User.create([
  { role: "admin", name: "Admin Lead", email: "admin@skillbridge.dev", password: "password123", isVerified: true },
  {
    role: "contractor",
    name: "Maya Stone",
    email: "maya@buildcraft.dev",
    password: "password123",
    verifiedBadge: true,
    companyProfile: { companyName: "BuildCraft Group", industry: "Commercial Renovation", rating: 4.8, location: { city: "Austin", state: "TX", coordinates: [-97.7431, 30.2672] } }
  },
  {
    role: "worker",
    name: "Carlos Rivera",
    email: "carlos@skillbridge.dev",
    password: "password123",
    verifiedBadge: true,
    workerProfile: { skills: ["electrical", "solar", "wiring"], field: "Electrician", experienceYears: 6, expectedSalary: 4200, preferredJobType: "contract", availabilityStatus: "available", rating: 4.9, location: { city: "Austin", state: "TX", coordinates: [-97.75, 30.27] }, certifications: ["OSHA 30", "Licensed Electrician"] }
  }
]);

await Job.create([
  {
    contractor: contractor._id,
    title: "Commercial electrician for retail fit-out",
    category: "Electrical",
    requiredSkills: ["electrical", "wiring", "lighting"],
    qualifications: ["Licensed electrician", "OSHA preferred"],
    salaryOffered: { min: 3800, max: 5200, currency: "USD" },
    workersNeeded: 4,
    location: { address: "Downtown Austin", city: "Austin", state: "TX", coordinates: [-97.7431, 30.2672] },
    duration: "6 weeks",
    urgencyLevel: "high",
    contactDetails: { name: "Maya Stone", email: "maya@buildcraft.dev" },
    experienceRequired: 3,
    description: "Install lighting, panels, and finish wiring for a fast-moving retail build."
  },
  {
    contractor: contractor._id,
    title: "Certified welders for warehouse expansion",
    category: "Welding",
    requiredSkills: ["welding", "steel", "fabrication"],
    salaryOffered: { min: 4500, max: 6500, currency: "USD" },
    workersNeeded: 8,
    location: { city: "Round Rock", state: "TX", coordinates: [-97.6789, 30.5083] },
    duration: "3 months",
    urgencyLevel: "immediate",
    experienceRequired: 4,
    description: "Structural welding crew needed for warehouse expansion with weekly milestone bonuses."
  }
]);

console.log(`Seeded SkillBridge with ${admin.email}, ${contractor.email}, ${worker.email}`);
await mongoose.disconnect();
