import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PublicationsExplorer from "../../components/PublicationsExplorer";
import { articles } from "../../lib/articles-data";

export const metadata: Metadata = {
  title: "Publications",
  description: "Analyses de Fauvel Avocat en fiscalité, fiscalité internationale, droit des sociétés et contentieux.",
  alternates: { canonical: "/publications" }
};

const macroSections: { label: string; categories: string[] }[] = [
  { label: "Fiscal", categories: ["Contrôle fiscal", "Fiscalité patrimoniale", "Fiscalité internationale"] },
  { label: "Sociétés", categories: ["Droit des sociétés"] },
  { label: "Cabinet", categories: ["Cabinet"] },
  { label: "Commercial", categories: ["Droit commercial"] }
];

export default function PublicationsPage() {
  const groups = macroSections
    .map(({ label, categories }) => ({
      category: label,
      items: articles
        .filter((article) => categories.includes(article.category))
        .map((a) => ({
          slug: a.slug,
          path: a.path,
          shortTitle: a.shortTitle,
          description: a.description,
          publishedAt: a.publishedAt,
          readingTime: a.readingTime
        }))
    }))
    .filter((group) => group.items.length > 0);

  const total = groups.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <main>
      <PageHero
        kicker="Publications"
        title="Analyses et réflexions juridiques."
        description="Des publications à vocation pratique consacrées aux situations fiscales, sociétaires et commerciales : contrôle fiscal, structuration, gouvernance, contrats et contentieux."
        imageSrc="/images/hero/publications.jpg"
        quote="La science du droit est la connaissance des choses divines et humaines, la science du juste et de l’injuste."
        quoteAuthor="Ulpien"
        quoteSource="Digeste"
      />

      <section className="py-20 md:py-24">
        <div className="container-premium">
          <div className="mb-12 max-w-3xl">
            <p className="text-[12px] font-bold uppercase tracking-[0.28em] text-gold-ink">Sommaire</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.03em] text-navy md:text-4xl dark:text-white">
              {total} publications, classées par domaine.
            </h2>
            <p className="mt-5 text-[16px] leading-8 text-navy/72 dark:text-white/65">
              Quatre domaines : fiscal, sociétés, cabinet et commercial. Les publications les plus récentes apparaissent directement ; les autres se déroulent d’un clic.
            </p>
          </div>

          <PublicationsExplorer groups={groups} />
        </div>
      </section>
    </main>
  );
}
