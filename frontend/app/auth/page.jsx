"use client";

import { Chrome, KeyRound, Mail, UserRound } from "lucide-react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";

export default function AuthPage() {
  return (
    <main className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
      <div>
        <p className="text-sm font-black uppercase text-bridge">Secure access</p>
        <h1 className="mt-2 text-4xl font-black">Login, register, verify, and start matching.</h1>
        <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">JWT sessions, Google login, OTP verification hooks, and role-based onboarding are prepared for production integrations.</p>
      </div>
      <Card>
        <div className="grid grid-cols-2 gap-2 rounded-lg bg-slate-100 p-1 dark:bg-white/10">
          <button className="rounded-md bg-white py-2 text-sm font-black shadow-sm dark:bg-slate-900">Job seeker</button>
          <button className="rounded-md py-2 text-sm font-black text-slate-500">Contractor</button>
        </div>
        <div className="mt-6 grid gap-4">
          {[["Full name", UserRound], ["Email", Mail], ["Password", KeyRound]].map(([label, Icon]) => (
            <label className="block text-sm font-bold" key={label}>{label}<span className="mt-2 flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 dark:border-white/10 dark:bg-slate-950"><Icon size={17} className="text-slate-400" /><input className="min-h-12 w-full bg-transparent outline-none" placeholder={label} /></span></label>
          ))}
          <Button variant="accent">Create account</Button>
          <Button variant="ghost"><Chrome size={17} /> Continue with Google</Button>
        </div>
      </Card>
    </main>
  );
}
