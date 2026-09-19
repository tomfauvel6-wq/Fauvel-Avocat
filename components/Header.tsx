"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["Cabinet", "/cabinet"],
  ["Honoraires", "/methode-du-cabinet"]
];

const domainesMenu = [
  ["Droit fiscal", "/fiscal"],
  ["Droit des sociétés", "/societe"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [domainesOpen, setDomainesOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-navy text-white">
      <div className="container-premium flex h-24 items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
          <div className="relative h-14 w-[44px] flex-none">
            <Image src="/images/header/monogramme-gauche.jpg" alt="" fill sizes="44px" className="object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-serif text-lg uppercase tracking-[0.18em]">Fauvel Avocat</div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-gold">Avocat fiscaliste - Barreau de Paris</div>
            <div className="mt-0.5 hidden text-[10px] tracking-[0.08em] text-white/55 sm:block">222 boulevard Saint-Germain, Paris 7ème</div>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/90 md:flex">
          <div className="group relative flex h-24 items-center" onMouseEnter={() => setDomainesOpen(true)} onMouseLeave={() => setDomainesOpen(false)}>
            <Link
              href="/domaines-dintervention"
              className="relative py-2 uppercase tracking-[0.16em] transition-colors hover:text-gold after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setDomainesOpen(false)}
            >
              Domaines d’intervention
            </Link>

            <div
              className={`absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-0 transition duration-150 ${
                domainesOpen ? "visible opacity-100" : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
              }`}
            >
              <div className="h-3" />
              <div className="border border-gold/25 bg-navy p-3 shadow-2xl">
                {domainesMenu.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="block px-4 py-3 text-[12px] text-white/75 hover:bg-white/5 hover:text-gold"
                    onClick={() => setDomainesOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="relative py-2 transition-colors hover:text-gold after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex flex-col items-center gap-1.5">
            <Link
              href="/contact"
              className="bg-ocre px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-navy shadow-[0_8px_28px_rgba(201,169,97,0.45)] ring-1 ring-bone/40 transition hover:bg-bone hover:shadow-[0_10px_32px_rgba(201,169,97,0.6)]"
            >
              Être recontacté
            </Link>
            <a href="tel:+33624067681" className="border border-ocre/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.16em] text-ocre transition hover:bg-ocre/10">06 24 06 76 81</a>
          </div>

          <Link href="/cabinet" className="flex items-center gap-4">
            <div className="relative h-14 w-[46px] flex-none">
              <Image src="/images/header/monogramme-droite.jpg" alt="" fill sizes="46px" className="object-contain" />
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/contact"
            className="bg-ocre px-3 py-2.5 text-[10px] font-bold uppercase tracking-[0.14em] text-navy shadow-[0_6px_20px_rgba(201,169,97,0.45)]"
            onClick={() => setOpen(false)}
          >
            Être recontacté
          </Link>
          <button className="text-sm uppercase tracking-[0.25em] text-gold" onClick={() => setOpen(!open)}>
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy md:hidden">
          <nav className="container-premium grid gap-1 py-6 text-[13px] font-semibold uppercase tracking-[0.22em] text-white/75">
            <Link href="/domaines-dintervention" onClick={() => setOpen(false)} className="block py-3">Domaines d’intervention</Link>
            {domainesMenu.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="block py-3 pl-4 text-white/55">{label}</Link>)}
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="block py-3">Être recontacté</Link>
            <a href="tel:+33624067681" className="block py-3 text-white/70">06 24 06 76 81</a>
            <p className="pt-2 text-[11px] normal-case tracking-normal text-white/45">222 boulevard Saint-Germain, Paris 7ème</p>
          </nav>
        </div>
      )}
    </header>
  );
}
