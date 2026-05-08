import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock, MapPin, MessageSquareText, Search, ShieldCheck, Sparkles } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { JobCard } from "../components/JobCard";
import { MapPreview } from "../components/MapPreview";
import { jobs, workers } from "../lib/data";

export default function LandingPage() {
  return (
    <>
      <AnimatedSection className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-white/70 px-3 py-2 text-sm font-bold text-bridge backdrop-blur dark:border-teal-400/20 dark:bg-white/10">
            <Sparkles size={16} /> AI-matched hiring for skilled work
          </div>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-normal md:text-7xl">SkillBridge</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Connect verified electricians, welders, plumbers, carpenters, HVAC pros, and field crews with contractors who need trusted labor now.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/jobs"><Button variant="accent" className="w-full sm:w-auto">Find jobs <ArrowRight size={17} /></Button></Link>
            <Link href="/contractor"><Button variant="ghost" className="w-full sm:w-auto">Hire workers</Button></Link>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {[["42k", "verified workers"], ["8 min", "median response"], ["96%", "job match lift"]].map(([value, label]) => (
              <div className="rounded-lg border border-white/70 bg-white/65 p-4 backdrop-blur dark:border-white/10 dark:bg-white/10" key={label}>
                <p className="text-2xl font-black">{value}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[560px] overflow-hidden rounded-lg shadow-soft">
          <Image src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80" alt="Skilled construction workers coordinating on a job site" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5 grid gap-3 md:grid-cols-2">
            {workers.slice(0, 2).map((worker) => (
              <Card className="bg-white/82" key={worker.name}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-black text-ink">{worker.name}</p>
                    <p className="text-sm text-slate-600">{worker.role} • {worker.distance}</p>
                  </div>
                  <BadgeCheck className="text-bridge" />
                </div>
                <p className="mt-3 text-sm font-bold text-ink">{worker.rating} rating • {worker.status}</p>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            [Search, "Smart matching", "Skills, salary, distance, availability, and experience scoring."],
            [MapPin, "Location-first", "Nearby jobs and workers with live radius filtering."],
            [MessageSquareText, "Real-time chat", "Socket.io messaging for interview and site coordination."],
            [ShieldCheck, "Verified trust", "Ratings, reviews, reports, and admin moderation."]
          ].map(([Icon, title, copy]) => (
            <Card key={title}>
              <Icon className="text-bridge" />
              <h2 className="mt-4 font-black">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{copy}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-[.95fr_1.05fr]">
        <div>
          <p className="text-sm font-black uppercase text-bridge">Live marketplace</p>
          <h2 className="mt-2 text-3xl font-black">High-intent jobs, mapped to available talent.</h2>
          <div className="mt-6 grid gap-4">
            {jobs.slice(0, 2).map((job) => <JobCard job={job} key={job.id} />)}
          </div>
        </div>
        <MapPreview />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <Card className="flex flex-col items-start justify-between gap-5 bg-ink text-white dark:bg-white dark:text-ink md:flex-row md:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold text-amber"><Clock size={17} /> Urgent crew need?</p>
            <h2 className="mt-2 text-3xl font-black">Post a job and get ranked candidates instantly.</h2>
          </div>
          <Link href="/auth"><Button variant="ghost">Create free account</Button></Link>
        </Card>
      </section>
    </>
  );
}
