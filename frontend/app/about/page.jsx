import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export default function AboutPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[.9fr_1.1fr]">
      <div>
        <p className="text-sm font-black uppercase text-bridge">About SkillBridge</p>
        <h1 className="mt-2 text-4xl font-black">Built for the skilled work economy.</h1>
        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">SkillBridge combines job search, crew sourcing, verification, ratings, maps, real-time chat, and marketplace moderation into one focused platform for contractors and skilled workers.</p>
        <div className="mt-6 grid gap-3 text-sm">
          <p className="flex items-center gap-2"><Mail size={17} className="text-bridge" /> hello@skillbridge.dev</p>
          <p className="flex items-center gap-2"><Phone size={17} className="text-bridge" /> +1 555 0188</p>
          <p className="flex items-center gap-2"><MapPin size={17} className="text-bridge" /> Austin, TX</p>
        </div>
      </div>
      <Card>
        <h2 className="font-black">Contact us</h2>
        <div className="mt-5 grid gap-4">
          <input className="min-h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none dark:border-white/10 dark:bg-slate-950" placeholder="Name" />
          <input className="min-h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none dark:border-white/10 dark:bg-slate-950" placeholder="Email" />
          <textarea className="min-h-36 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm outline-none dark:border-white/10 dark:bg-slate-950" placeholder="How can we help?" />
          <Button variant="accent">Send message</Button>
        </div>
      </Card>
    </main>
  );
}
