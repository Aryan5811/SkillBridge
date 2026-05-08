import { Filter, Search } from "lucide-react";
import { AnimatedSection } from "../../components/AnimatedSection";
import { JobCard } from "../../components/JobCard";
import { Card } from "../../components/ui/Card";
import { jobs } from "../../lib/data";

export default function JobsPage() {
  return (
    <AnimatedSection className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase text-bridge">Job search</p>
          <h1 className="mt-2 text-4xl font-black">Find work that fits your skills.</h1>
        </div>
        <div className="glass flex min-h-12 items-center gap-2 rounded-lg px-4 md:w-[420px]">
          <Search size={18} className="text-slate-400" />
          <input className="w-full bg-transparent text-sm outline-none" placeholder="Search electrical, welding, HVAC..." />
        </div>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[280px_1fr]">
        <Card className="h-max">
          <div className="flex items-center gap-2 font-black"><Filter size={18} /> Filters</div>
          {["Salary range", "Distance", "Category", "Experience", "Remote/on-site"].map((label) => (
            <label className="mt-5 block text-sm font-bold" key={label}>
              {label}
              <select className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-slate-900">
                <option>Any</option>
                <option>Best match</option>
              </select>
            </label>
          ))}
        </Card>
        <div className="grid gap-4 md:grid-cols-2">
          {jobs.map((job) => <JobCard job={job} key={job.id} />)}
        </div>
      </div>
    </AnimatedSection>
  );
}
