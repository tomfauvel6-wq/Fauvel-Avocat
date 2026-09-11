import type { Metadata } from "next";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales, éditeur, hébergeur, barreau, responsabilité et médiation du site Fauvel Avocat.",
  alternates: { canonical: "/mentions-legales" }
};

export default function MentionsLegalesPage() {
  return (
    <main>
      <PageHero kicker="Informations légales" title="Mentions légales." description="Informations relatives à l’éditeur du site, à l’exercice professionnel et aux conditions d’utilisation." imageSrc="/images/hero/presentation.jpg" />
      <section className="bg-ivory py-20 md:py-24">
        <div className="container-premium max-w-3xl space-y-9 text-[15px] leading-8 text-navy/78">
          <section><h2 className="font-serif text-3xl text-navy">Éditeur du site</h2><p>Le site est édité par Maître Tom Fauvel, avocat inscrit au Barreau de Paris.</p><p>Email : <a href="mailto:tom.fauvel@fauvel-avocat.fr" className="text-gold-ink underline">tom.fauvel@fauvel-avocat.fr</a>, Téléphone : <a href="tel:+33624067681" className="text-gold-ink underline">06 24 06 76 81</a></p><p>Adresse professionnelle : Avocap, 222 boulevard Saint-Germain, 75007 Paris. Toque : F1. SIREN : 904 572 781. Numéro de TVA intracommunautaire : FR 86 904 572 781.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Directeur de la publication</h2><p>Maître Tom Fauvel, en qualité d’éditeur du site.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Structure et règles d’exercice</h2><p>Maître Tom Fauvel exerce la profession d’avocat dans le respect des règles professionnelles applicables, notamment le Règlement intérieur national de la profession d’avocat (RIN) et les règles du Barreau de Paris. L’avocat est soumis au secret professionnel.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Assurance de responsabilité civile professionnelle</h2><p>Conformément à l’article 27 de la loi n° 71-1130 du 31 décembre 1971, l’avocat est couvert par une assurance de responsabilité civile professionnelle souscrite par l’Ordre des avocats du barreau de Paris auprès de MMA IARD Assurances Mutuelles et MMA IARD SA, 14 boulevard Marie et Alexandre Oyon, 72030 Le Mans Cedex 9 (police n° 127 103 713), à hauteur de 4.000.000 euros par sinistre. Couverture géographique : monde entier, à l’exception des établissements permanents aux États-Unis d’Amérique et au Canada. Les fonds confiés à l’avocat sont garantis par une assurance de représentation des fonds souscrite par l’Ordre auprès de COVEA CAUTION, 160 rue Henri Champion, 72030 Le Mans Cedex 9, à concurrence de 35.000.000 euros par défaillance.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Hébergement</h2><p>Le site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Propriété intellectuelle</h2><p>L’ensemble des contenus du site (textes, identité visuelle, structure) est protégé. Toute reproduction ou réutilisation sans autorisation préalable est interdite.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Contenu du site</h2><p>Les informations publiées ont une vocation générale et d’information. Elles ne constituent ni une consultation juridique personnalisée, ni une garantie de résultat, ni une sollicitation individualisée. Chaque situation doit faire l’objet d’une analyse propre.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Médiation de la consommation</h2><p>Conformément aux articles L.612-1 et suivants du Code de la consommation, le client consommateur peut recourir gratuitement au médiateur de la consommation de la profession d’avocat : Médiateur de la consommation de la profession d’avocat, 180 boulevard Haussmann, 75008 Paris, <a href="https://mediateur-consommation-avocat.fr" className="text-gold-ink underline">mediateur-consommation-avocat.fr</a>.</p></section>
        </div>
      </section>
    </main>
  );
}
