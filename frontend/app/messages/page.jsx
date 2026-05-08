"use client";

import { io } from "socket.io-client";
import { useMemo, useState } from "react";
import { Paperclip, Send, Video } from "lucide-react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { messages } from "../../lib/data";

export default function MessagesPage() {
  const [draft, setDraft] = useState("");
  const socket = useMemo(() => io(process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:5000", { autoConnect: false }), []);

  function sendMessage() {
    if (!draft.trim()) return;
    socket.connect();
    socket.emit("message:send", { sender: "demo-worker", recipient: "demo-contractor", body: draft });
    setDraft("");
  }

  return (
    <main className="mx-auto grid max-w-7xl gap-6 px-4 py-10 lg:grid-cols-[340px_1fr]">
      <Card className="h-max">
        <h1 className="text-2xl font-black">Messages</h1>
        <div className="mt-5 grid gap-3">
          {messages.map((message) => (
            <button className="rounded-lg bg-slate-100 p-3 text-left transition hover:bg-mint dark:bg-white/10 dark:hover:bg-teal-400/15" key={message.from}>
              <div className="flex items-center justify-between"><p className="font-black">{message.from}</p><span className="text-xs text-slate-500">{message.time}</span></div>
              <p className="mt-1 line-clamp-1 text-sm text-slate-500">{message.body}</p>
            </button>
          ))}
        </div>
      </Card>
      <Card className="flex min-h-[640px] flex-col">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
          <div><p className="font-black">Maya Stone</p><p className="text-sm text-slate-500">BuildCraft Group • usually replies in 8 minutes</p></div>
          <Button variant="ghost"><Video size={17} /> Interview</Button>
        </div>
        <div className="flex-1 space-y-4 py-6">
          <div className="max-w-[72%] rounded-lg bg-slate-100 p-4 text-sm dark:bg-white/10">Can you meet onsite Tuesday morning?</div>
          <div className="ml-auto max-w-[72%] rounded-lg bg-bridge p-4 text-sm text-white">Yes. I can do 9:30 AM and bring certifications.</div>
          <div className="max-w-[72%] rounded-lg bg-slate-100 p-4 text-sm dark:bg-white/10">Great. I’ll send the site pin and interview invite.</div>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-slate-100 p-2 dark:bg-white/10">
          <button aria-label="Attach file" className="grid h-10 w-10 place-items-center rounded-lg hover:bg-white/80 dark:hover:bg-white/10"><Paperclip size={18} /></button>
          <input value={draft} onChange={(event) => setDraft(event.target.value)} className="min-h-10 flex-1 bg-transparent text-sm outline-none" placeholder="Type a message..." />
          <Button variant="accent" onClick={sendMessage}><Send size={17} /> Send</Button>
        </div>
      </Card>
    </main>
  );
}
