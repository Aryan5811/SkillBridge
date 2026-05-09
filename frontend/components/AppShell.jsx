"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BriefcaseBusiness, Moon, ShieldCheck, Sun, UserRoundSearch } from "lucide-react";
import { Button } from "./ui/Button";

const nav = [
  ["Jobs", "/jobs"],
  ["Worker", "/worker"],
  ["Contractor", "/contractor"],
  ["Messages", "/messages"],
  ["Admin", "/admin"]
];

export function AppShell({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,124,134,.16),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(242,184,75,.16),transparent_28%),linear-gradient(180deg,#F7FAFC,#EEF6F4)] dark:bg-[radial-gradient(circle_at_top_left,rgba(14,124,134,.22),transparent_34%),linear-gradient(180deg,#020617,#0F172A)]" />
      <header className="sticky top-0 z-40 border-b border-white/50 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-black tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white dark:bg-white dark:text-ink"><BriefcaseBusiness size={20} /></span>
            <span className="text-xl">SkillBridge</span>
          </Link>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map(([label, href]) => (
              <Link className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white/70 hover:text-ink dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white" href={href} key={href}>{label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" aria-label="Toggle theme" onClick={() => setDark((value) => !value)} className="w-11 px-0">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <Link href="/auth"><Button variant="accent"><UserRoundSearch size={17} /> Sign in</Button></Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2"><ShieldCheck size={18} /> Verified skilled work, faster hiring.</div>
        <div className="flex gap-4"><Link href="/about">About</Link><Link href="/profile">Profile</Link><Link href="/jobs">Explore jobs</Link></div>
      </footer>
    </div>
  );
}
