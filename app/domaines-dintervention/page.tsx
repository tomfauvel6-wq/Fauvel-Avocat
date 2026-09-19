import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Domaines d’intervention",
  description: "Fiscalité et droit des sociétés : domaines d’intervention de Fauvel Avocat à Paris et dans toute la France.",
  alternates: { canonical: "/domaines-dintervention" }
};

const blocs = [
  {
    id: "fiscal",
    title: "Droit fiscal",
    kicker: "Conseil & contentieux",
    text: "De la sécurisation d’une opération à la défense devant le juge de l’impôt, le cabinet couvre l’ensemble de la matière fiscale, au national comme à l’international.",
    services: [
      "Assistance au contrôle fiscal et réponse aux propositions de rectification",
      "Réclamations et contentieux devant l’administration et le juge de l’impôt",
      "Fiscalité patrimoniale, IFI et transmission",
      "Fiscalité internationale, résidence et actifs étrangers"
    ],
    href: "/fiscal",
    cta: "Voir le droit fiscal"
  },
  {
    id: "societe",
    title: "Droit des sociétés",
    kicker: "Dirigeants & associés",
    text: "Le cabinet accompagne la vie juridique des sociétés et de leurs dirigeants, de la constitution aux opérations sensibles, en sécurisant chaque étape.",
    services: [
      "Constitution, structuration et choix de la forme sociale",
      "Pactes d’associés et gouvernance",
      "Opérations sur capital et restructurations",
      "Accompagnement récurrent des dirigeants"
    ],
    href: "/societe",
    cta: "Voir le droit des sociétés"
  }
];

export default function DomainesPage() {
  return (
    <main>
      <PageHero
        imageSrc="/images/hero/domaines.jpg"
        kicker="Domaines d’intervention"
        title="Droit fiscal et droit des sociétés."
        description="Une intervention complète, en conseil comme en contentieux, au service des dirigeants, des entrepreneurs et des particuliers patrimoniaux."
        imageLabel="Architecture des domaines"
        quote="L’État est le plus froid de tous les monstres froids."
        quoteAuthor="Friedrich Nietzsche"
        quoteSource="Ainsi parlait Zarathoustra"
      />

      {/* DOMAINES, blocs orientés services et action */}
      <section className="py-20 md:py-24">
        <div className="container-premium space-y-8">
          {blocs.map((bloc) => (
            <section
              id={bloc.id}
              key={bloc.id}
              className="group relative overflow-hidden border border-navy/10 bg-white/40 p-8 transition hover:border-gold/40 md:p-10 dark:border-white/10 dark:bg-white/5"
            >
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">{bloc.kicker}</p>
                  <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-navy md:text-5xl dark:text-ivory">{bloc.title}</h2>
                  <p className="mt-6 max-w-md text-[16px] leading-8 text-navy/70 dark:text-ivory/65">{bloc.text}</p>
                  <Link
                    href={bloc.href}
                    className="mt-8 inline-flex bg-gold px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-white dark:hover:bg-ivory dark:hover:text-navy"
                  >
                    {bloc.cta} →
                  </Link>
                </div>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {bloc.services.map((service) => (
                    <li key={service} className="flex gap-3 border-l-2 border-gold/60 bg-ivory/60 p-4 text-[14px] leading-6 text-navy/75 dark:bg-white/5 dark:text-ivory/70">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-navy/10 bg-navy py-16 text-white md:py-20">
        <div className="container-premium flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-ivory md:text-4xl">Une question précise, un dossier à confier ?</h2>
            <p className="mt-4 max-w-xl text-[16px] leading-8 text-white/70">Présentez votre situation en quelques lignes : le cabinet vous répond sous 48 heures ouvrées, sans engagement pour ce premier échange.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex flex-none bg-gold px-8 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-ivory"
          >
            Prendre contact →
          </Link>
        </div>
      </section>
    </main>
  );
}
