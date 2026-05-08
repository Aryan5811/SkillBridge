import { BadgeCheck, Camera, FileUp, Languages, MapPin, ShieldCheck, Tag } from "lucide-react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export default function ProfilePage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <p className="text-sm font-black uppercase text-bridge">Profile</p>
      <h1 className="mt-2 text-4xl font-black">Build a verified skilled worker profile.</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
        <Card className="h-max">
          <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-mint text-bridge"><Camera size={34} /></div>
          <h2 className="mt-4 text-center text-2xl font-black">Carlos Rivera</h2>
          <p className="mt-1 text-center text-sm text-slate-500">Electrician • Austin, TX</p>
          <div className="mt-5 grid gap-2 text-sm">
            {[[BadgeCheck, "Verified worker"], [ShieldCheck, "OSHA 30 certified"], [MapPin, "Available within 25 mi"], [Languages, "English, Spanish"]].map(([Icon, text]) => <p className="flex items-center gap-2" key={text}><Icon size={17} className="text-bridge" /> {text}</p>)}
          </div>
        </Card>
        <Card>
          <h2 className="font-black">Worker details</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {["Name", "Field of work", "Experience", "Expected salary", "Preferred job type", "Current location", "Availability status", "Certifications"].map((label) => (
              <label className="block text-sm font-bold" key={label}>{label}<input className="mt-2 min-h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none dark:border-white/10 dark:bg-slate-950" placeholder={label} /></label>
            ))}
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Button variant="ghost"><FileUp size={17} /> Upload resume</Button>
            <Button variant="ghost"><Tag size={17} /> Parse and tag skills</Button>
          </div>
          <Button variant="accent" className="mt-6">Save profile</Button>
        </Card>
      </div>
    </main>
  );
}
