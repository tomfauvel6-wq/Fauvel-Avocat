"use client";

import Link from "next/link";
import { useState } from "react";

type Item = {
  slug: string;
  path: string;
  shortTitle: string;
  description: string;
  publishedAt: string;
  readingTime: string;
};

type Group = {
  category: string;
  items: Item[];
};

function Row({ item }: { item: Item }) {
  return (
    <Link
      href={item.path}
      className="group flex flex-col gap-2 py-5 transition md:flex-row md:items-baseline md:gap-8 hover:bg-white/50 dark:hover:bg-white/5"
    >
      <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-ink md:w-40 md:pt-1">
        {item.publishedAt} · {item.readingTime}
      </p>
      <div className="md:flex-1">
        <h3 className="font-serif text-xl leading-snug tracking-[-0.02em] text-navy transition group-hover:text-gold-ink dark:text-white">
          {item.shortTitle}
        </h3>
        <p className="mt-1.5 text-[14px] leading-7 text-navy/65 dark:text-white/60">{item.description}</p>
      </div>
      <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-gold transition group-hover:translate-x-1 md:pt-1">
        Lire
      </span>
    </Link>
  );
}

function Section({ group }: { group: Group }) {
  const [open, setOpen] = useState(false);
  const visible = group.items.slice(0, 3);
  const hidden = group.items.slice(3);

  return (
    <section className="border-t-2 border-navy/15 pt-8 dark:border-white/15">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] text-navy md:text-4xl dark:text-white">
          {group.category}
        </h2>
        <span className="text-[13px] font-semibold text-navy/45 dark:text-white/45">
          {group.items.length} publication{group.items.length > 1 ? "s" : ""}
        </span>
      </div>

      <div className="divide-y divide-navy/10 border-y border-navy/10 dark:divide-white/10 dark:border-white/10">
        {visible.map((item) => <Row key={item.slug} item={item} />)}
      </div>

      {hidden.length > 0 && (
        <>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="divide-y divide-navy/10 border-b border-navy/10 dark:divide-white/10 dark:border-white/10">
                {hidden.map((item) => <Row key={item.slug} item={item} />)}
              </div>
            </div>
          </div>

          <button
            type="button"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-gold-ink transition hover:text-navy dark:hover:text-white"
          >
            {open ? "Replier" : `Voir les ${hidden.length} autre${hidden.length > 1 ? "s" : ""} publication${hidden.length > 1 ? "s" : ""}`}
            <span className={`text-lg transition-transform duration-300 ${open ? "rotate-45" : ""}`} aria-hidden="true">+</span>
          </button>
        </>
      )}
    </section>
  );
}

export default function PublicationsExplorer({ groups }: { groups: Group[] }) {
  return (
    <div className="space-y-14">
      {groups.map((group) => <Section key={group.category} group={group} />)}
    </div>
  );
}
