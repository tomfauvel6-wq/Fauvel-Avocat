import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../../components/PageHero";
import InterventionAccordion from "../../../components/InterventionAccordion";
import { getDomaine } from "../../../lib/domaines-data";

const domaine = getDomaine("droit-commercial");

export const metadata: Metadata = {
  title: domaine?.title || "Domaine d’intervention",
  description: domaine?.description || "Domaine d’intervention de Fauvel Avocat.",
  keywords: domaine?.keywords,
  alternates: { canonical: "/domaines-dintervention/droit-commercial" }
};

export default function Page() {
  if (!domaine) return null;
  return (
    <main>
      <PageHero kicker={domaine.kicker} title={domaine.title} description={domaine.description} imageSrc="/images/hero/commercial.jpg" />
      <section className="py-20 md:py-24">
        <div className="container-premium grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">Un accompagnement sur mesure, de l’analyse à la mise en œuvre.</h2>
            <h2 className="mt-8 text-[11px] font-bold uppercase tracking-[0.32em] text-gold">Points d’intervention</h2>
          </div>
          <div className="space-y-8">
            <p className="text-[16px] leading-8 text-navy/72">{domaine.intro}</p>
            <InterventionAccordion items={domaine.items} />
            <h2 className="font-serif text-3xl">Méthode du cabinet</h2>
            <p className="text-sm leading-7 text-navy/68">L’intervention vise à identifier les risques, sécuriser les options envisageables et construire une stratégie adaptée au contexte économique et patrimonial du client.</p>
            <Link href="/contact" className="inline-flex bg-gold px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-white">Échanger sur votre situation →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
