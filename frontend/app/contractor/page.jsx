import { BadgeCheck, BriefcaseBusiness, CalendarClock, UsersRound } from "lucide-react";
import { DashboardMetric } from "../../components/DashboardMetric";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { workers } from "../../lib/data";

export default function ContractorDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-black uppercase text-bridge">Contractor dashboard</p>
          <h1 className="mt-2 text-4xl font-black">Post jobs, rank candidates, and schedule interviews.</h1>
        </div>
        <Button variant="accent">Post new job</Button>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <DashboardMetric icon={<BriefcaseBusiness />} label="Open jobs" value="9" detail="32 workers needed" />
        <DashboardMetric icon={<UsersRound />} label="Applicants" value="148" detail="27 high match" />
        <DashboardMetric icon={<CalendarClock />} label="Interviews" value="16" detail="This week" />
        <DashboardMetric icon={<BadgeCheck />} label="Trust score" value="4.8" detail="Verified contractor" />
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-[420px_1fr]">
        <Card>
          <h2 className="font-black">Create job</h2>
          <div className="mt-4 grid gap-3">
            {["Job title", "Required skills", "Qualifications", "Salary offered", "Exact location", "Urgency level"].map((label) => <input className="min-h-11 rounded-lg border border-slate-200 bg-white px-3 text-sm outline-none dark:border-white/10 dark:bg-slate-950" placeholder={label} key={label} />)}
          </div>
        </Card>
        <Card>
          <h2 className="font-black">AI candidate suggestions</h2>
          <div className="mt-4 grid gap-3">
            {workers.map((worker, index) => (
              <div className="flex flex-col justify-between gap-3 rounded-lg bg-slate-100 p-4 dark:bg-white/10 md:flex-row md:items-center" key={worker.name}>
                <div><p className="font-black">{worker.name}</p><p className="text-sm text-slate-500">{worker.role} • {worker.distance} • {worker.salary}</p></div>
                <div className="flex items-center gap-3"><span className="font-black text-bridge">{94 - index * 6}%</span><Button variant="ghost">Schedule</Button></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  );
}
