import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/PageHero";

export const metadata: Metadata = {
  title: "Déclaration et régularisation fiscale | Fauvel Avocat",
  description: "Régularisation fiscale : déclaration spontanée, comptes et actifs étrangers, revenus omis, régularisation avant ou pendant un contrôle et sécurisation des obligations déclaratives.",
  alternates: { canonical: "/fiscal/declaration-et-regularisation" },
  openGraph: {
    title: "Déclaration et régularisation fiscale | Fauvel Avocat",
    description: "Régulariser sa situation fiscale de manière spontanée, documentée et maîtrisée.",
    images: ["/images/hero/fiscal.jpg"]
  }
};

const axes = [
  ["Régularisation spontanée", "Déclaration rectificative présentée avant l’engagement d’une procédure de contrôle, afin de corriger une omission ou une erreur et de limiter les pénalités encourues."],
  ["Comptes et actifs étrangers", "Déclaration des comptes, contrats d’assurance-vie et actifs détenus à l’étranger, régularisation des avoirs non déclarés et traitement des revenus correspondants."],
  ["Revenus et opérations omis", "Régularisation des revenus fonciers, plus-values, distributions, crypto-actifs ou revenus de source étrangère qui n’auraient pas été correctement déclarés."],
  ["Obligations déclaratives", "Sécurisation des déclarations récurrentes : IFI, revenus du patrimoine, déclarations de sociétés, et anticipation des points susceptibles d’attirer un contrôle."]
];

export default function Page() {
  return (
    <main>
      <PageHero
        kicker="Fiscal · Déclaration et régularisation"
        title="Déclaration et régularisation : reprendre la main sur sa situation fiscale."
        description="La régularisation consiste à corriger une situation fiscale incomplète ou erronée, idéalement de manière spontanée, afin de sécuriser les obligations déclaratives et de réduire le risque de sanction."
        imageSrc="/images/hero/fiscal.jpg"
        imageLabel="Déclaration et régularisation fiscale"
      />

      <section className="py-20 md:py-24">
        <div className="container-premium grid gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.32em] text-gold">Approche</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-navy md:text-5xl dark:text-ivory">Régulariser avant d’y être contraint.</h2>
            <div className="my-8 h-px w-16 bg-gold" />
            <p className="text-[15px] leading-8 text-navy/70 dark:text-ivory/65">Une démarche spontanée, documentée et cohérente est généralement plus favorable qu’une régularisation subie à l’occasion d’un contrôle. Le cabinet aide à apprécier l’opportunité, le périmètre et les modalités de la régularisation, puis à formaliser la déclaration.</p>
            <Link href="/contact" className="mt-10 inline-flex bg-gold px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy">Évoquer une régularisation →</Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {axes.map(([title, body]) => (
              <article key={title} className="border border-navy/10 bg-white/45 p-7 md:p-8 dark:border-white/10 dark:bg-white/5">
                <h3 className="mb-4 font-serif text-2xl leading-tight tracking-[-0.02em] text-navy dark:text-ivory">{title}</h3>
                <p className="text-sm leading-7 text-navy/68 dark:text-ivory/65">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
