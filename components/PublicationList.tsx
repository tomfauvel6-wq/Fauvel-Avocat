import Link from "next/link";
import type { Article } from "../lib/articles-data";

export default function PublicationList({ items }: { items: Article[] }) {
  if (items.length === 0) {
    return (
      <p className="border-y border-navy/10 py-8 text-[15px] leading-7 text-navy/60 dark:border-white/10 dark:text-white/55">
        Les publications de ce domaine seront prochainement mises en ligne. Pour toute question, le cabinet reste joignable via la page contact.
      </p>
    );
  }

  return (
    <div className="divide-y divide-navy/10 border-y border-navy/10 dark:divide-white/10 dark:border-white/10">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={item.path}
          className="group flex flex-col gap-3 py-6 transition md:flex-row md:items-baseline md:gap-8 hover:bg-white/40 dark:hover:bg-white/5"
        >
          <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-ink md:w-44 md:pt-1">
            {item.publishedAt} · {item.readingTime}
          </p>
          <div className="md:flex-1">
            <h3 className="font-serif text-2xl leading-snug tracking-[-0.02em] text-navy transition group-hover:text-gold-ink dark:text-white">
              {item.shortTitle}
            </h3>
            <p className="mt-2 text-[15px] leading-7 text-navy/65 dark:text-white/60">{item.description}</p>
          </div>
          <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-gold transition group-hover:translate-x-1 md:pt-1">
            Lire
          </span>
        </Link>
      ))}
    </div>
  );
}
