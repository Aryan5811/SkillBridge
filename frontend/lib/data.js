export const jobs = [
  {
    id: "retail-fitout",
    title: "Commercial electrician for retail fit-out",
    company: "BuildCraft Group",
    category: "Electrical",
    salary: "$3.8k - $5.2k",
    location: "Austin, TX",
    remote: false,
    urgency: "High",
    match: 94,
    skills: ["Wiring", "Lighting", "Panels"],
    description: "Fast-moving retail build needing licensed electricians for finish wiring and panel work."
  },
  {
    id: "warehouse-welders",
    title: "Certified welders for warehouse expansion",
    company: "IronArc Contractors",
    category: "Welding",
    salary: "$4.5k - $6.5k",
    location: "Round Rock, TX",
    remote: false,
    urgency: "Immediate",
    match: 88,
    skills: ["MIG", "Steel", "Blueprints"],
    description: "Structural welding crew needed for a three-month expansion with milestone bonuses."
  },
  {
    id: "solar-install",
    title: "Solar installation crew lead",
    company: "HelioWorks",
    category: "Solar",
    salary: "$5k - $7k",
    location: "Hybrid",
    remote: true,
    urgency: "Medium",
    match: 82,
    skills: ["Solar", "Roofing", "Safety"],
    description: "Lead a five-person crew on residential solar installations across Central Texas."
  }
];

export const workers = [
  { name: "Carlos Rivera", role: "Electrician", rating: 4.9, distance: "2.4 mi", salary: "$4.2k", skills: ["Electrical", "Solar", "Wiring"], status: "Available" },
  { name: "Asha Patel", role: "Welder", rating: 4.8, distance: "4.1 mi", salary: "$5.1k", skills: ["MIG", "Fabrication", "Steel"], status: "Available" },
  { name: "Noah Kim", role: "HVAC Tech", rating: 4.7, distance: "7.8 mi", salary: "$4.8k", skills: ["HVAC", "Diagnostics", "Install"], status: "Busy" }
];

export const applications = [
  { job: "Retail fit-out electrician", company: "BuildCraft Group", status: "Interview", date: "May 14" },
  { job: "Solar crew lead", company: "HelioWorks", status: "Applied", date: "May 11" },
  { job: "Warehouse welders", company: "IronArc Contractors", status: "Saved", date: "May 09" }
];

export const messages = [
  { from: "Maya Stone", body: "Can you meet onsite Tuesday morning?", time: "9:42 AM", unread: true },
  { from: "IronArc Team", body: "We reviewed your certification. Looks strong.", time: "Yesterday", unread: false },
  { from: "HelioWorks", body: "Please share availability for next week.", time: "Mon", unread: false }
];
