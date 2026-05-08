import Link from "next/link";
import { ArrowLeft, BadgeCheck, BriefcaseBusiness, CalendarClock, MapPin, MessageSquareText } from "lucide-react";
import { jobs } from "../../../lib/data";
import { Card } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";

export default async function JobDetailsPage({ params }) {
  const { id } = await params;
  const job = jobs.find((item) => item.id === id) || jobs[0];
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Link href="/jobs" className="inline-flex items-center gap-2 text-sm font-bold text-bridge"><ArrowLeft size={16} /> Back to jobs</Link>
      <Card className="mt-6">
        <div className="flex flex-col justify-between gap-5 md:flex-row">
          <div>
            <p className="text-sm font-black uppercase text-bridge">{job.category}</p>
            <h1 className="mt-2 text-4xl font-black">{job.title}</h1>
            <p className="mt-3 flex items-center gap-2 text-slate-600 dark:text-slate-300"><BadgeCheck className="text-bridge" size={18} /> {job.company}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="accent">One-click apply</Button>
            <Button variant="ghost"><MessageSquareText size={17} /> Message</Button>
          </div>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {[[BriefcaseBusiness, job.salary], [MapPin, job.location], [CalendarClock, "6 weeks"], [BadgeCheck, `${job.match}% match`]].map(([Icon, value]) => (
            <div className="rounded-lg bg-slate-100 p-4 dark:bg-white/10" key={value}><Icon className="text-bridge" /><p className="mt-3 font-black">{value}</p></div>
          ))}
        </div>
        <h2 className="mt-8 text-xl font-black">About the job</h2>
        <p className="mt-3 leading-8 text-slate-600 dark:text-slate-300">{job.description} Applicants are ranked by skills, distance, salary compatibility, availability, ratings, and certification signals.</p>
        <h2 className="mt-8 text-xl font-black">Required skills</h2>
        <div className="mt-3 flex flex-wrap gap-2">{job.skills.map((skill) => <span className="rounded-md bg-mint px-3 py-1.5 text-sm font-bold text-teal-900 dark:bg-teal-400/15 dark:text-teal-100" key={skill}>{skill}</span>)}</div>
      </Card>
    </main>
  );
}
