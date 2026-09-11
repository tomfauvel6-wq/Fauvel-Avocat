
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Fiscalité internationale",
  description: "Résidence fiscale, conventions fiscales, revenus étrangers, expatriation, impatriation et problématiques transfrontalières.",
  alternates: { canonical: "/fiscalite-internationale" }
};

export default function Page() {
  return (
    <main>
      <PageHero
        kicker="International"
        title="Fiscalité internationale"
        description="Résidence fiscale et conventions fiscales internationales."
       imageSrc="/images/hero/fiscal.jpg" />

      <section className="py-20 md:py-24">
        <div className="container-premium grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] md:text-5xl">
              Une approche stratégique et documentée.
            </h2>

            <div className="mt-10 space-y-5 text-[15px] leading-8 text-navy/72">
              <p>
                Le cabinet accompagne dirigeants, entrepreneurs et particuliers patrimoniaux dans leurs problématiques fiscales et contentieuses.
              </p>

              <p>
                Chaque dossier fait l’objet d’une analyse technique approfondie afin de sécuriser les options envisageables et construire une stratégie adaptée.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-premium border border-navy/10 bg-white/40 p-8">
              <h3 className="font-serif text-3xl">Intervention du cabinet</h3>

              <div className="mt-5 space-y-4 text-sm leading-7 text-navy/68">
                <p>Résidence fiscale.</p>
                <p>Flux internationaux.</p>
                <p>Mobilité et expatriation.</p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex bg-gold px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-white"
            >
              Échanger sur votre situation →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
