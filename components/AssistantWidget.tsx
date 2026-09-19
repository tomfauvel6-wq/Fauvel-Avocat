"use client";

import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const OPENING: Msg = {
  role: "assistant",
  content:
    "Bonjour, je suis l’assistant automatique du cabinet Fauvel Avocat. Je ne donne pas d’avis juridique, mais je peux comprendre votre situation, vous dire si le cabinet peut vous aider et vous indiquer quoi lui transmettre. De quoi s’agit-il ? Merci de ne pas indiquer de montants ni de données confidentielles ici."
};

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([OPENING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next.slice(1) })
      });
      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply || data.error || "Réponse indisponible." }]);
    } catch {
      setMessages([...next, { role: "assistant", content: "L’assistant est momentanément indisponible. Vous pouvez utiliser le formulaire de contact ou appeler le 06 24 06 76 81." }]);
    } finally {
      setLoading(false);
    }
  }

  function transmit() {
    const summary = messages
      .filter((m) => m.role === "user")
      .map((m) => m.content)
      .join("\n");
    try {
      window.sessionStorage.setItem("fa-assistant-summary", summary);
    } catch {}
    window.location.href = "/contact#formulaire";
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 left-5 z-40 border border-gold/50 bg-navy px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ivory shadow-[0_16px_40px_rgba(7,26,51,0.35)] transition hover:border-gold hover:text-gold md:bottom-6 md:left-6"
        >
          Une question ?
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="Assistant du cabinet"
          className="fixed inset-x-3 bottom-3 z-40 flex max-h-[80vh] flex-col border border-gold/40 bg-navy text-white shadow-[0_24px_70px_rgba(7,26,51,0.5)] md:inset-x-auto md:bottom-6 md:left-6 md:w-[380px]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Assistant du cabinet</p>
              <p className="text-[11px] text-white/50">Automatique, sans avis juridique</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Fermer" className="px-2 text-lg text-white/60 hover:text-gold">×</button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4 text-[14px] leading-6">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "ml-8 border border-gold/30 bg-white/[0.05] p-3 text-white/90" : "mr-8 bg-white/[0.06] p-3 text-white/85"}>
                {m.content}
              </div>
            ))}
            {loading && <div className="mr-8 bg-white/[0.06] p-3 text-white/50">…</div>}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-white/10 p-3">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") send(); }}
                placeholder="Décrivez votre situation en quelques mots"
                aria-label="Votre message"
                className="flex-1 border border-white/15 bg-transparent px-3 py-2 text-[14px] text-white outline-none placeholder:text-white/35 focus:border-gold"
              />
              <button type="button" onClick={send} disabled={loading} className="bg-gold px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition hover:bg-ivory disabled:opacity-50">
                Envoyer
              </button>
            </div>
            <button type="button" onClick={transmit} className="mt-2 w-full border border-gold/50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-gold transition hover:bg-gold/10">
              Transmettre au cabinet
            </button>
          </div>
        </div>
      )}
    </>
  );
}
