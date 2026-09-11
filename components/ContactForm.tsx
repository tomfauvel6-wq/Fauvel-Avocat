"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Envoi en cours…");

    const form = event.currentTarget;
    const data = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone"),
        message: data.get("message"),
        company: data.get("company")
      }),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      setStatus("Votre message a bien été envoyé.");
      form.reset();

      // Google Ads : comptabilise une conversion uniquement après un envoi réussi.
      const googleWindow = window as typeof window & {
        gtag?: (...args: unknown[]) => void;
      };

      if (typeof googleWindow.gtag === "function") {
        googleWindow.gtag("event", "conversion", {
          send_to: "AW-18445047687/9E30CJDJo_QcEIevpNtE",
          value: 1.0,
          currency: "EUR"
        });
      }
    } else {
      setStatus("Erreur lors de l’envoi. Vous pouvez écrire directement à tom.fauvel@fauvel-avocat.fr.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative flex flex-1 flex-col gap-5 text-navy" noValidate={false}>
      {/* Honeypot anti-spam, invisible et hors tabulation */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="cf-company">Société</label>
        <input id="cf-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="cf-name" className="sr-only">Nom</label>
        <input id="cf-name" name="name" required autoComplete="name" className="w-full border border-navy/15 bg-transparent px-5 py-4 text-[15px] outline-none focus:border-gold" placeholder="Nom" />
      </div>
      <div>
        <label htmlFor="cf-email" className="sr-only">Email</label>
        <input id="cf-email" name="email" required type="email" autoComplete="email" className="w-full border border-navy/15 bg-transparent px-5 py-4 text-[15px] outline-none focus:border-gold" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="cf-phone" className="sr-only">Téléphone</label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className="w-full border border-navy/15 bg-transparent px-5 py-4 text-[15px] outline-none focus:border-gold" placeholder="Téléphone" />
      </div>
      <div className="flex flex-1 flex-col">
        <label htmlFor="cf-message" className="sr-only">Votre message</label>
        <textarea id="cf-message" name="message" required className="min-h-40 w-full flex-1 border border-navy/15 bg-transparent px-5 py-4 text-[15px] outline-none focus:border-gold" placeholder="Votre message" />
      </div>
      <p className="text-[13px] leading-6 text-navy/60">
        En envoyant ce message, vous acceptez que les informations transmises soient utilisées pour répondre à votre demande. Elles ne sont communiquées à aucun tiers.
      </p>
      <button className="bg-gold px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-white" type="submit">
        Envoyer la demande →
      </button>
      <p className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[12px] text-navy/55">
        <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 flex-none rounded-full bg-gold" />Réponse sous 48&nbsp;h ouvrées</span>
        <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 flex-none rounded-full bg-gold" />Première prise de contact sans engagement</span>
        <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 flex-none rounded-full bg-gold" />Échanges confidentiels</span>
      </p>
      {status && <p role="status" aria-live="polite" className="text-sm text-navy/70">{status}</p>}
    </form>
  );
}
