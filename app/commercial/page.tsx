import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PublicationList from "../../components/PublicationList";
import { articles } from "../../lib/articles-data";

export const metadata: Metadata = {
  title: "Avocat en droit commercial",
  description: "Droit commercial : contrats, impayés, négociations, mise en demeure, contentieux et procédures d’urgence.",
  alternates: { canonical: "/commercial" }
};

export default function Page() {
  const items = articles.filter((article) => article.category === "Droit commercial");

  return (
    <main>
      <PageHero
        kicker="Domaines"
        title="Droit commercial"
        description="Le cabinet accompagne les entreprises, dirigeants et partenaires économiques dans la sécurisation de leurs relations commerciales, la résolution des différends et la défense de leurs intérêts."
        imageSrc="/images/hero/commercial.jpg"
        quote="Donnant, donnant."
        quoteAuthor="Proverbe"
      />
      <section className="py-20 md:py-24">
        <div className="container-premium space-y-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-xl">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Relations d’affaires</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-navy dark:text-white">Sécuriser, négocier et défendre les relations commerciales.</h2>
            </div>
            <div className="space-y-5 text-[15px] leading-8 text-navy/70 dark:text-white/65">
              <p>Le cabinet intervient dans les relations contractuelles, les négociations sensibles, les impayés, les mises en demeure et les litiges entre partenaires économiques.</p>
              <p>L’approche consiste à identifier rapidement le levier utile : sécurisation contractuelle, règlement amiable, protocole, action en paiement, référé ou procédure devant le tribunal de commerce.</p>
              <p>La matière commerciale est traitée en cohérence avec les enjeux fiscaux et sociétaires du dossier, afin d’éviter une réponse isolée qui fragiliserait l’entreprise ou son dirigeant.</p>
            </div>
          </div>
          <PublicationList items={items} />
        </div>
      </section>
    </main>
  );
}
