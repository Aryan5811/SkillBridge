import { BriefcaseBusiness, CalendarCheck, Heart, MessageSquareText, Sparkles } from "lucide-react";
import { DashboardMetric } from "../../components/DashboardMetric";
import { Card } from "../../components/ui/Card";
import { JobCard } from "../../components/JobCard";
import { applications, jobs, messages } from "../../lib/data";

export default function WorkerDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <p className="text-sm font-black uppercase text-bridge">Worker dashboard</p>
      <h1 className="mt-2 text-4xl font-black">Your jobs, interviews, and contractor messages.</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <DashboardMetric icon={<BriefcaseBusiness />} label="Applied" value="12" detail="3 moved this week" />
        <DashboardMetric icon={<Heart />} label="Saved" value="18" detail="5 high match roles" />
        <DashboardMetric icon={<CalendarCheck />} label="Interviews" value="4" detail="Next: May 14" />
        <DashboardMetric icon={<Sparkles />} label="Match score" value="94%" detail="Electrical roles" />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-4 md:grid-cols-2">{jobs.slice(0, 2).map((job) => <JobCard job={job} key={job.id} />)}</div>
        <Card>
          <h2 className="font-black">Pipeline</h2>
          <div className="mt-4 grid gap-3">
            {applications.map((item) => <div className="rounded-lg bg-slate-100 p-3 dark:bg-white/10" key={item.job}><p className="font-bold">{item.job}</p><p className="text-sm text-slate-500">{item.company} • {item.status} • {item.date}</p></div>)}
          </div>
          <h2 className="mt-6 flex items-center gap-2 font-black"><MessageSquareText size={18} /> Messages</h2>
          <div className="mt-4 grid gap-3">{messages.slice(0, 2).map((message) => <p className="text-sm text-slate-600 dark:text-slate-300" key={message.from}><b>{message.from}:</b> {message.body}</p>)}</div>
        </Card>
      </div>
    </main>
  );
}
