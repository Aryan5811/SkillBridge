import Link from "next/link";
import { Bookmark, MapPin, Sparkles } from "lucide-react";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";

export function JobCard({ job }) {
  return (
    <Card className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-bridge">{job.category}</p>
          <h3 className="mt-1 text-lg font-black leading-tight">{job.title}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{job.company}</p>
        </div>
        <button aria-label="Bookmark job" className="grid h-10 w-10 place-items-center rounded-lg bg-white/70 text-slate-600 transition hover:text-bridge dark:bg-white/10 dark:text-slate-200"><Bookmark size={18} /></button>
      </div>
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{job.description}</p>
      <div className="flex flex-wrap gap-2">
        {job.skills.map((skill) => <span className="rounded-md bg-mint px-2.5 py-1 text-xs font-bold text-teal-900 dark:bg-teal-400/15 dark:text-teal-100" key={skill}>{skill}</span>)}
      </div>
      <div className="mt-auto grid grid-cols-2 gap-3 text-sm">
        <span className="font-bold">{job.salary}</span>
        <span className="flex items-center justify-end gap-1 text-slate-500"><MapPin size={15} /> {job.location}</span>
      </div>
      <div className="flex items-center justify-between gap-3 border-t border-slate-200/70 pt-4 dark:border-white/10">
        <span className="inline-flex items-center gap-1 text-sm font-black text-bridge"><Sparkles size={16} /> {job.match}% match</span>
        <Link href={`/jobs/${job.id}`}><Button variant="primary">View role</Button></Link>
      </div>
    </Card>
  );
}
