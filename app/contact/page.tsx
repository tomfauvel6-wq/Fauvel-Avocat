import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contacter Fauvel Avocat – Avocat fiscaliste Paris",
  description: "Contacter Fauvel Avocat à Paris pour une question de fiscalité, contrôle ou contentieux fiscal, fiscalité internationale ou droit des sociétés. Réponse sous 48 heures ouvrées.",
  keywords: ["contact Fauvel Avocat", "avocat fiscaliste Paris", "avocat contrôle fiscal", "avocat fiscalité internationale"],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contacter Fauvel Avocat",
    description: "Présenter une situation fiscale, patrimoniale ou sociétaire à Fauvel Avocat.",
    url: "/contact",
    images: ["/images/og-image.png"]
  }
};

const contactItems = [
  ["Email", "tom.fauvel@fauvel-avocat.fr"],
  ["Téléphone", "06 24 06 76 81"],
  ["Adresse", "Avocap, 222 boulevard Saint-Germain, 75007 Paris"],
  ["Barreau", "Avocat au Barreau de Paris"]
];

export default function ContactPage() {
  return (
    <main>
      {/* HEADER + FORMULAIRE côte à côte */}
      <section className="relative overflow-hidden bg-navy pt-32 pb-14 text-white md:pt-40 md:pb-24 lg:pt-44">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.06] to-transparent" />

        <div className="container-premium relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-start">

          {/* GAUCHE, texte + coordonnées intégrées */}
          <div className="contents lg:block lg:pt-2">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.34em] text-gold">Contact</p>
            <h1 className="font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-ivory md:text-5xl">Présenter une situation au cabinet.</h1>
            <div className="my-7 h-px w-16 bg-gold" />
            <p className="max-w-md text-[17px] leading-8 text-white/82">Décrivez en quelques lignes la nature du sujet, les éventuels délais et les pièces disponibles. Le premier échange permet de situer le dossier et le cadre d’intervention envisageable.</p>

            {/* Coordonnées sous le texte */}
            <div className="order-3 mt-2 grid gap-3 sm:grid-cols-2 lg:order-none lg:mt-9">
              {contactItems.map(([label, value]) => (
                <div key={label} className="border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-gold">{label}</p>
                  <p className="mt-1.5 text-[15px] leading-6 text-white/85">
                    {label === "Email" ? (
                      <a href={`mailto:${value}`} className="transition hover:text-gold">{value}</a>
                    ) : label === "Téléphone" ? (
                      <a href={`tel:${value.replace(/\s/g, "")}`} className="transition hover:text-gold">{value}</a>
                    ) : (
                      value
                    )}
                  </p>
                </div>
              ))}
            </div>

            <figure className="order-4 mt-6 border-l border-gold/40 pl-5 lg:order-none lg:mt-9">
              <blockquote className="font-serif text-[17px] italic leading-8 text-white/65">« Bien écouter, c’est presque répondre. »</blockquote>
              <figcaption className="mt-2 text-[10px] uppercase tracking-[0.26em] text-white/40">Marivaux</figcaption>
            </figure>
          </div>

          {/* DROITE, encadré Votre demande */}
          <div className="order-2 flex flex-col bg-ivory p-6 text-navy shadow-[0_26px_75px_rgba(7,26,51,0.25)] sm:p-8 md:p-10 lg:order-none">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-gold-ink">Votre demande</p>
            <h2 className="mb-7 font-serif text-3xl leading-tight tracking-[-0.03em] text-navy">Écrire au cabinet.</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
