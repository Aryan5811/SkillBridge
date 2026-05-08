import { Card } from "./ui/Card";

export function DashboardMetric({ icon, label, value, detail }) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-white dark:bg-white dark:text-ink">{icon}</div>
        <span className="text-xs font-bold uppercase text-slate-400">{label}</span>
      </div>
      <p className="mt-5 text-3xl font-black">{value}</p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{detail}</p>
    </Card>
  );
}
