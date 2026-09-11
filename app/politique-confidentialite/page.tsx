import type { Metadata } from "next";
import PageHero from "../../components/PageHero";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données personnelles du site Fauvel Avocat.",
  alternates: { canonical: "/politique-confidentialite" }
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero imageSrc="/images/hero/presentation.jpg" kicker="Données personnelles" title="Politique de confidentialité." description="Informations relatives aux données transmises via le site, au formulaire de contact et aux droits des personnes concernées." />
      <section className="bg-ivory py-20 md:py-24">
        <div className="container-premium max-w-3xl space-y-9 text-[15px] leading-8 text-navy/72">
          <section><h2 className="font-serif text-3xl text-navy">Responsable du traitement</h2><p>Le responsable du traitement est Fauvel Avocat, pour les données transmises via le formulaire de contact ou par courrier électronique.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Données collectées</h2><p>Les données collectées peuvent comprendre les nom, prénom, adresse électronique, numéro de téléphone, qualité, informations relatives à la demande et documents volontairement transmis.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Finalité</h2><p>Ces données sont utilisées exclusivement afin de répondre à la demande, d’apprécier l’existence éventuelle d’un conflit d’intérêts et, le cas échéant, de préparer une proposition d’intervention.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Durée de conservation</h2><p>Les données sont conservées pour la durée nécessaire au traitement de la demande, puis archivées ou supprimées selon les obligations professionnelles, légales et déontologiques applicables.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Cookies</h2><p>Le site n’a pas vocation à utiliser de cookies publicitaires. Les éventuels cookies strictement nécessaires au fonctionnement ou à la mesure technique d’audience seront précisés lors du déploiement.</p></section>
          <section><h2 className="font-serif text-3xl text-navy">Droits</h2><p>Vous pouvez demander l’accès, la rectification, l’effacement ou la limitation du traitement de vos données en écrivant à Fauvel Avocat.</p></section>
        </div>
      </section>
    </main>
  );
}
