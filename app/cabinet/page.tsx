import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Tom Fauvel – Avocat au Barreau de Paris",
  description: "Présentation de Maître Tom Fauvel et du cabinet Fauvel Avocat à Paris, intervenant principalement en droit fiscal et droit des sociétés.",
  keywords: ["Tom Fauvel", "Fauvel Avocat", "avocat fiscaliste Paris", "avocat Barreau de Paris"],
  alternates: { canonical: "/cabinet" }
};

const sequence = [
  ["Comprendre", "Identifier les faits, les interlocuteurs, les pièces, les délais et l’objectif réel de la demande, afin de rendre le dossier intelligible avant toute action."],
  ["Qualifier", "Retenir le bon fondement juridique, fiscal ou procédural, distinguer les points solides des fragilités et arrêter la ligne d’intervention."],
  ["Agir", "Formaliser les démarches avec précision : consultation, courrier, réclamation, acte, mémoire, négociation ou échange avec les interlocuteurs du dossier."],
  ["Suivre", "Tenir le cap jusqu’à la décision, l’accord ou la clôture, en surveillant les délais, les réponses reçues et les ajustements nécessaires."]
];

export default function CabinetPage() {
  return (
    <main>
      <PageHero
        kicker="Le cabinet"
        title="Une pratique exigeante, directe et stratégique."
        description="Le cabinet accompagne une clientèle de dirigeants, d’entrepreneurs et de particuliers patrimoniaux dans leurs enjeux fiscaux, sociétaires et commerciaux."
        imageLabel="Ambiance du cabinet"
        imageSrc="/images/hero/presentation.jpg"
        quote="Connaître les lois, ce n’est pas en retenir les termes, mais en saisir la force et le pouvoir."
        quoteAuthor="Celse"
        quoteSource="Digeste"
      />

      {/* PHOTO + PRÉSENTATION + BOUTON */}
      <section className="border-b border-navy/10 bg-ivory py-16 md:py-20 dark:border-white/10 dark:bg-navy">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px] overflow-hidden border border-navy/10 lg:sticky lg:top-32 dark:border-white/10">
            <Image src="/images/portrait-tom-fauvel.jpg" alt="Maître Tom Fauvel, avocat au barreau de Paris" fill sizes="(min-width: 1024px) 360px, 80vw" className="object-cover object-[50%_28%]" />
          </div>

          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.32em] text-gold-ink">Présentation</p>
            <h2 className="font-serif text-3xl leading-[1.08] tracking-[-0.03em] text-navy md:text-4xl dark:text-ivory">
              Le droit fiscal, en conseil comme en contentieux.
            </h2>
            <div className="my-7 h-px w-16 bg-gold" />
            <div className="space-y-5 text-[17px] leading-9 text-navy/78 dark:text-ivory/72">
              <p>Le cabinet Fauvel Avocat, fondé en 2026 par Maître Tom Fauvel, avocat au barreau de Paris, intervient en droit fiscal et en droit des sociétés, auprès de particuliers, de dirigeants et d’entreprises.</p>
              <p>Le cabinet conseille et défend ses clients à chaque étape de leurs enjeux fiscaux : sécuriser une opération, défendre une position face à l’administration, organiser une transmission, structurer un patrimoine ou une activité. Il intervient aussi bien en amont, pour anticiper et documenter les décisions, qu’en contentieux, devant l’administration et le juge de l’impôt.</p>
              <p>Sa pratique s’appuie sur une exigence d’analyse et une connaissance concrète du contentieux fiscal, acquise notamment au sein de la chambre fiscale du Tribunal administratif de Paris, puis en cabinet de droit fiscal. Cette double perspective, celle du juge et celle du conseil, nourrit une approche orientée vers la solidité des positions et la maîtrise du risque.</p>
              <p>Maître Tom Fauvel est issu d’une formation juridique exigeante : classes préparatoires (ENS D1), licences en droit et en science politique à l’Université Paris&nbsp;1 Panthéon-Sorbonne, où il se spécialise en Master&nbsp;II en droit international et comparé. Cette spécialisation lui donne une compréhension des systèmes juridiques étrangers et de leurs interactions, précieuse pour les problématiques de fiscalité internationale et de mobilité. Il obtient ensuite un Master&nbsp;II Philosophie du droit et droit politique à l’Université Paris&nbsp;2 Panthéon-Assas, dont il sort major de promotion.</p>
              <p>Quelle que soit la nature du dossier, la même ligne : précision de l’analyse, clarté de la stratégie, défense résolue des intérêts du client.</p>
            </div>
            <Link href="/contact" className="mt-9 inline-flex bg-gold px-8 py-4 text-[13px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy">
              Présenter une situation →
            </Link>
          </div>
        </div>
      </section>

      {/* MÉTHODE, déroulé en quatre temps */}
      <section className="border-b border-navy/10 bg-[#EFEBE1] py-16 md:py-20 dark:border-white/10 dark:bg-navy">
        <div className="container-premium">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.32em] text-gold-ink">Méthode</p>
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.03em] text-navy md:text-4xl dark:text-ivory">De la situation brute à la décision stratégique.</h2>
            <div className="my-7 h-px w-16 bg-gold" />
            <p className="text-[16px] leading-8 text-navy/72 dark:text-ivory/70">
              Rendre le dossier intelligible avant d’agir : les faits sont hiérarchisés, les risques identifiés et la réponse construite selon les objectifs du client, en quatre temps. L’accompagnement peut être ponctuel ou récurrent.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-gold via-gold/50 to-gold/10 md:left-0 md:right-0 md:top-[22px] md:bottom-auto md:h-px md:w-full md:bg-gradient-to-r md:from-gold md:via-gold/50 md:to-gold/10" />
            <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
              {sequence.map(([title, body], i) => (
                <li key={title} className="relative flex gap-5 md:flex-col md:gap-0">
                  <div className="flex flex-col items-center md:items-start">
                    <span className="relative z-10 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-navy font-serif text-lg text-gold ring-4 ring-[#EFEBE1] dark:bg-ivory dark:text-navy dark:ring-navy">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="md:mt-6">
                    <h3 className="font-serif text-xl tracking-[-0.02em] text-navy dark:text-ivory">{title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-navy/72 dark:text-ivory/68">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

    </main>
  );
}
