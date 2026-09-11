import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import PublicationList from "../../components/PublicationList";
import { articles } from "../../lib/articles-data";

export const metadata: Metadata = {
  title: "Droit des sociétés | Fauvel Avocat",
  description: "Accompagnement en droit des sociétés : constitution, gouvernance, opérations sur capital, transmission, groupes et relations entre associés.",
  alternates: { canonical: "/societe" }
};

export default function Page() {
  const items = articles.filter((article) => article.category === "Droit des sociétés");

  return (
    <main>
      <PageHero
        kicker="Domaines"
        title="Droit des sociétés"
        description="Le cabinet accompagne les dirigeants, associés et entrepreneurs dans la structuration, la gouvernance, la transmission et les opérations sensibles de leurs sociétés."
        imageSrc="/images/hero/societe.jpg"
        quote="S’associer, c’est mettre en commun."
      />
      <section className="py-20 md:py-24">
        <div className="container-premium space-y-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="max-w-xl">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gold">Dirigeants et associés</p>
              <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-navy dark:text-white">Structurer la société autour d’une logique juridique et fiscale cohérente.</h2>
            </div>
            <div className="space-y-5 text-[15px] leading-8 text-navy/70 dark:text-white/65">
              <p>Le cabinet intervient lors de la constitution, de l’évolution et de la transmission des sociétés : statuts, pactes d’associés, gouvernance, opérations sur capital, groupes et holdings.</p>
              <p>L’objectif est de sécuriser les décisions des dirigeants et associés tout en anticipant leurs conséquences fiscales, patrimoniales et opérationnelles.</p>
              <p>Cette approche permet de traiter les opérations sociétaires non comme des formalités isolées, mais comme des actes structurants pour l’entreprise, ses associés et son patrimoine.</p>
            </div>
          </div>
          <PublicationList items={items} />
        </div>
      </section>
    </main>
  );
}
