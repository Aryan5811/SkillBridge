import { AlertTriangle, BarChart3, ShieldAlert, UsersRound } from "lucide-react";
import { Card } from "../../components/ui/Card";
import { DashboardMetric } from "../../components/DashboardMetric";
import { Button } from "../../components/ui/Button";

const reports = [
  ["Fake contractor listing", "Warehouse job asked for off-platform payment", "Open"],
  ["Spam message", "Repeated contact after rejection", "Reviewing"],
  ["Credential dispute", "Certification photo unclear", "Open"]
];

export default function AdminDashboard() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <p className="text-sm font-black uppercase text-bridge">Admin dashboard</p>
      <h1 className="mt-2 text-4xl font-black">Moderation, analytics, and marketplace trust.</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        <DashboardMetric icon={<UsersRound />} label="Users" value="42k" detail="18% month growth" />
        <DashboardMetric icon={<BarChart3 />} label="Jobs" value="9.8k" detail="1.2k active today" />
        <DashboardMetric icon={<ShieldAlert />} label="Reports" value="37" detail="12 high priority" />
        <DashboardMetric icon={<AlertTriangle />} label="Spam removed" value="184" detail="Last 30 days" />
      </div>
      <Card className="mt-8">
        <div className="flex items-center justify-between"><h2 className="font-black">Report handling</h2><Button variant="ghost">Export CSV</Button></div>
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="text-xs uppercase text-slate-400"><tr><th className="py-3">Issue</th><th>Details</th><th>Status</th><th>Action</th></tr></thead>
            <tbody>
              {reports.map(([issue, detail, status]) => (
                <tr className="border-t border-slate-200 dark:border-white/10" key={issue}>
                  <td className="py-4 font-bold">{issue}</td><td className="text-slate-500">{detail}</td><td><span className="rounded-md bg-amber/20 px-2 py-1 font-bold text-amber">{status}</span></td><td><Button variant="ghost">Resolve</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </main>
  );
}
