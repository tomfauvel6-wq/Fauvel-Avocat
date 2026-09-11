import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Honoraires | Fauvel Avocat",
  description: "Honoraires de Fauvel Avocat : modalités d’honoraires transparentes (accompagnement récurrent, forfait, temps passé, honoraire de résultat) et convention écrite préalable.",
  alternates: { canonical: "/methode-du-cabinet" },
  openGraph: {
    title: "Honoraires | Fauvel Avocat",
    description: "Des honoraires définis avec clarté pour les dossiers fiscaux, sociétaires et commerciaux.",
    images: ["/images/hero/honoraires.jpg"]
  }
};

const modes = [
  ["Accompagnement récurrent", "Pour les dirigeants, sociétés ou patrimoines familiaux, une intervention régulière permet de traiter les sujets au fil de l’eau et d’anticiper les décisions sensibles."],
  ["Au forfait", "Lorsque des diligences prédéfinies peuvent être identifiées : consultations, réclamations, créations de structures, déclarations complexes ou séquences contentieuses circonscrites."],
  ["Au temps passé", "Lorsque le dossier évolue, comporte plusieurs interlocuteurs ou nécessite un suivi contentieux, afin d’ajuster l’intervention aux diligences réellement nécessaires."],
  ["Honoraire fixe et résultat", "Dans certains dossiers contentieux ou transactionnels, un honoraire fixe peut être complété par un honoraire de résultat, fonction du gain obtenu ou de l’économie réalisée."]
];

export default function HonorairesPage() {
  return (
    <main>
      <PageHero
        kicker="Honoraires"
        title="Des honoraires lisibles et proportionnés."
        imageSrc="/images/hero/honoraires.jpg"
        description="Les conditions de l’intervention sont précisées en amont, dans une convention d’honoraires adaptée au dossier et au mode de facturation retenu."
        imageLabel="Convention d’honoraires"
        quote="Ce que l’on conçoit bien s’énonce clairement."
        quoteAuthor="Nicolas Boileau"
        quoteSource="L’Art poétique"
      />

      <section className="py-16 md:py-20">
        <div className="container-premium">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.32em] text-gold-ink">Honoraires</p>
            <h2 className="font-serif text-3xl leading-[1.1] tracking-[-0.03em] text-navy md:text-4xl dark:text-ivory">Une intervention écrite, lisible et proportionnée.</h2>
            <div className="my-7 h-px w-16 bg-gold" />
            <p className="text-[16px] leading-8 text-navy/72 dark:text-ivory/70">
              Chaque mission débute par une analyse de la situation, des pièces, des délais et des objectifs. Le périmètre, les diligences et le mode de facturation sont ensuite précisés. Selon les cas, l’une des modalités suivantes est retenue.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {modes.map(([title, body]) => (
              <article key={title} className="border border-navy/10 bg-white/55 p-7 dark:border-white/10 dark:bg-white/5">
                <h3 className="font-serif text-xl tracking-[-0.02em] text-navy dark:text-ivory">{title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-navy/72 dark:text-ivory/68">{body}</p>
              </article>
            ))}
          </div>

          <p className="mt-7 border-l border-gold pl-5 text-[14px] leading-7 text-navy/65 dark:text-ivory/65">
            Conformément aux règles de la profession, les honoraires font l’objet d’une convention écrite avant l’ouverture de la mission, sauf urgence ou situation particulière.
          </p>

          <Link href="/contact" className="mt-9 inline-flex bg-gold px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-white dark:hover:bg-ivory dark:hover:text-navy">Demander une proposition d’intervention →</Link>
        </div>
      </section>
    </main>
  );
}
