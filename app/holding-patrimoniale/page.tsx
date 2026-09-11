import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Holding patrimoniale",
  description: "Structuration de holdings, apports de titres, régime mère-fille et transmission.",
};

export default function SeoPage() {
  return (
    <main>
      <PageHero kicker="Droit fiscal" title="Holding patrimoniale" description="Structuration de holdings, apports de titres, régime mère-fille et transmission." />
      <section className="py-20 md:py-24">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <h1 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">Holding patrimoniale</h1>
          <div className="space-y-6 text-[15px] leading-8 text-navy/72">
            <p>Le cabinet accompagne ses clients dans l’analyse des risques, la structuration des options et la mise en œuvre d’une stratégie adaptée.</p>
            <p>L’intervention est conduite avec une attention particulière portée à la lisibilité, à la sécurité juridique et aux enjeux économiques ou patrimoniaux du dossier.</p>
            <Link href="/domaines-dintervention/structuration-de-holdings" className="inline-flex bg-gold px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-white">Voir le domaine détaillé →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
