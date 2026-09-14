"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const KEY = "fa-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function apply(granted: boolean) {
  const v = granted ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
    analytics_storage: v
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(KEY);
    if (saved === "granted" || saved === "denied") {
      apply(saved === "granted");
    } else {
      setVisible(true);
    }
  }, []);

  const choose = (granted: boolean) => {
    window.localStorage.setItem(KEY, granted ? "granted" : "denied");
    apply(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md border border-gold/40 bg-navy p-5 text-white shadow-[0_20px_60px_rgba(7,26,51,0.45)] md:inset-x-auto md:right-6 md:bottom-6"
    >
      <p className="text-[14px] leading-6 text-white/85">
        Ce site utilise des cookies.{" "}
        <Link href="/politique-confidentialite" className="underline decoration-gold/60 underline-offset-2 hover:text-gold">En savoir plus</Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose(true)} className="bg-gold px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-ivory">
          Accepter
        </button>
        <button type="button" onClick={() => choose(false)} className="border border-white/30 px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85 transition hover:border-gold hover:text-gold">
          Refuser
        </button>
      </div>
    </div>
  );
}
