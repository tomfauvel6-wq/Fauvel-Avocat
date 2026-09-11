import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PublicationList from "../../components/PublicationList";
import { articles } from "../../lib/articles-data";

export const metadata: Metadata = {
  title: "Droit fiscal | Fauvel Avocat",
  description: "Publications et interventions du cabinet en droit fiscal : contrôle fiscal, contentieux, fiscalité patrimoniale, fiscalité internationale et fiscalité des dirigeants.",
  alternates: { canonical: "/fiscal" }
};

export default function Page() {
  const items = articles.filter(
    (article) =>
      article.category?.toLowerCase().includes("fiscal") ||
      article.category === "Cabinet"
  );

  return (
    <main>
      <PageHero
        kicker="Domaines d’intervention"
        title="Droit fiscal"
        description="Publications et interventions du cabinet en droit fiscal : contrôle fiscal, contentieux, fiscalité patrimoniale, fiscalité internationale et fiscalité des dirigeants."
        imageSrc="/images/hero/fiscal.jpg"
        imageLabel="Colonne classique et inscription Fiscal"
        imagePosition="center center"
        quote="L’art de l’imposition consiste à plumer l’oie de façon à obtenir le plus de plumes possible avec le moins de cris possible."
        quoteAuthor="Attribuée à Jean-Baptiste Colbert"
      />

      <section className="py-20 md:py-24">
        <div className="container-premium space-y-10">
          <div className="max-w-3xl space-y-5 text-[15px] leading-8 text-navy/70 dark:text-white/65">
            <p>Le cabinet intervient en droit fiscal avec une approche technique et stratégique, en conseil comme en contentieux, pour les particuliers, les dirigeants et les sociétés.</p>
            <p>Les publications ci-dessous présentent les principaux sujets traités, dans une logique à la fois pratique et opérationnelle.</p>
          </div>

          <div>
            <h2 className="mb-2 text-[11px] font-bold uppercase tracking-[0.28em] text-gold-ink">Publications</h2>
            <PublicationList items={items} />
          </div>
        </div>
      </section>
    </main>
  );
}
