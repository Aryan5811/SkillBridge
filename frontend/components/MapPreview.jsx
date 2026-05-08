"use client";

import { MapPin, Navigation } from "lucide-react";
import { Card } from "./ui/Card";

export function MapPreview() {
  return (
    <Card className="relative min-h-[340px] overflow-hidden p-0">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,.08)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,.08)_1px,transparent_1px)] bg-[size:42px_42px] dark:bg-[linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,.07)_1px,transparent_1px)]" />
      <div className="absolute left-[18%] top-[28%] grid h-12 w-12 place-items-center rounded-full bg-bridge text-white shadow-soft"><MapPin /></div>
      <div className="absolute right-[22%] top-[40%] grid h-12 w-12 place-items-center rounded-full bg-coral text-white shadow-soft"><MapPin /></div>
      <div className="absolute bottom-[20%] left-[45%] grid h-12 w-12 place-items-center rounded-full bg-amber text-ink shadow-soft"><Navigation /></div>
      <div className="absolute inset-x-5 bottom-5 rounded-lg border border-white/70 bg-white/80 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
        <p className="text-sm font-black">Live radius search</p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className="h-full w-2/3 rounded-full bg-bridge" />
        </div>
        <p className="mt-2 text-xs text-slate-500">Showing 42 jobs and 128 available workers within 25 miles.</p>
      </div>
    </Card>
  );
}
