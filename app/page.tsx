import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "../components/ContactForm";
import AnimatedHomeColumn from "../components/AnimatedHomeColumn";
import { articles } from "../lib/articles-data";

export const metadata: Metadata = {
  title: "Fiscalité, droit des sociétés et droit commercial",
  description: "Fauvel Avocat accompagne dirigeants, entrepreneurs et particuliers en fiscalité, droit des sociétés, droit commercial et contentieux.",
  keywords: ["avocat fiscaliste Paris", "contrôle fiscal", "droit des sociétés", "droit commercial", "Fauvel Avocat"],
  alternates: { canonical: "/" }
};

const interventions = [
  {
    title: "Fiscalité",
    body: "Contrôle fiscal, réclamation, contentieux, fiscalité patrimoniale, dirigeants, actifs étrangers et opérations de structuration.",
    href: "/fiscal"
  },
  {
    title: "Sociétés",
    body: "Création, transformation, holding, pacte d’associés, gouvernance, opérations sur capital et relations entre associés.",
    href: "/societe"
  },
  {
    title: "Commercial",
    body: "Contrats commerciaux, impayés, rupture de relations, négociation et contentieux entre partenaires économiques.",
    href: "/commercial"
  }
];

const methodSteps = [
  ["01", "Comprendre", "Identifier les faits, les pièces, les délais et les risques immédiats."],
  ["02", "Qualifier", "Retenir le bon fondement juridique, fiscal ou procédural."],
  ["03", "Agir", "Déployer une réponse écrite, négociée ou contentieuse."],
  ["04", "Suivre", "Tenir le cap jusqu’à la décision, l’accord ou la clôture."]
];

const actualiteSlugs = [
  "regime-mere-fille",
  "optimiser-et-preparer-sa-succession",
  "fiscalite-franco-americaine"
];

const requestAreas: [string, string][] = [
  ["Fiscal", "Contrôle fiscal, réclamation, contentieux, fiscalité patrimoniale, résidence fiscale ou actifs étrangers."],
  ["Société", "Création, transformation, holding, pacte d’associés, gouvernance ou opérations sur capital."],
  ["Commercial", "Contrats commerciaux, impayés, rupture de relations ou litiges entre partenaires économiques."]
];

const actualites = actualiteSlugs
  .map((slug) => articles.find((a) => a.slug === slug))
  .filter((a): a is NonNullable<typeof a> => Boolean(a));

export default function HomePage() {
  return (
    <main>
      <section className="relative grid h-[100svh] min-h-[640px] overflow-hidden bg-navy pt-24 text-white lg:grid-cols-[52%_48%]">
        <AnimatedHomeColumn />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy via-navy/55 to-navy/5" />
        <div className="relative z-20 flex items-center">
          <div className="container-premium py-10 lg:mr-0 lg:max-w-[630px]">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.34em] text-gold">Fauvel Avocat · Paris</p>
            <h1 className="font-serif text-4xl leading-[1.02] tracking-[-0.035em] text-ivory md:text-6xl lg:text-[4.45rem]">
              Fiscalité, droit des sociétés et contentieux des affaires.
            </h1>
            <div className="my-8 h-px w-16 bg-gold" />
            <p className="max-w-xl text-[17px] leading-8 text-white/80 md:text-lg">
              Fauvel Avocat défend et accompagne dirigeants, entrepreneurs et particuliers patrimoniaux, là où chaque décision exige une analyse juste, une stratégie claire et une parfaite discrétion.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="bg-gold px-7 py-4 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-ivory">Prendre rendez-vous →</Link>
              <Link href="/domaines-dintervention" className="border border-gold/65 px-7 py-4 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-ivory transition hover:bg-white/5">Domaines d’intervention</Link>
            </div>

            <div className="mt-11 flex items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/80">Formation</span>
              <span className="h-px flex-1 bg-white/15" />
            </div>
            <p className="mt-3 text-[13px] leading-7 tracking-[0.02em] text-white/55">
              <span className="text-white/90">Paris 1 Panthéon-Sorbonne</span><span className="mx-2 text-gold/50">·</span><span className="text-white/90">Paris 2 Panthéon-Assas</span><span className="mx-2 text-gold/50">·</span>EFB<span className="mx-2 text-gold/50">·</span>IDPA
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 text-navy md:py-20 border-b border-navy/10">
        <div className="container-premium grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative mx-auto h-[390px] w-[292px] overflow-hidden shadow-[0_26px_75px_rgba(7,26,51,0.14)]">
            <Image src="/images/portrait-tom-fauvel.jpg" alt="Maître Tom Fauvel, avocat au barreau de Paris" fill sizes="(min-width: 1024px) 420px, 90vw" className="object-cover object-[50%_28%]" />
          </div>

          <div className="max-w-2xl">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.32em] text-gold-ink">Présentation</p>
            <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-navy md:text-5xl">
              Fauvel Avocat, une pratique engagée de la fiscalité et du droit des affaires.
            </h2>
            <div className="my-8 h-px w-16 bg-gold" />
            <div className="space-y-5 text-[17px] leading-9 text-navy/72">
              <p>Fondé en 2026 par Maître Tom Fauvel, avocat au barreau de Paris, le cabinet Fauvel Avocat intervient en droit fiscal et en droit des sociétés.</p>
              <p>Il conseille et défend dirigeants, entreprises et particuliers, de la sécurisation d’une opération à la défense devant le juge de l’impôt, avec une exigence constante d’analyse et de stratégie.</p>
              <p className="text-[15px] leading-8 text-navy/60">Le cabinet reçoit sur rendez-vous à Avocap, 222 boulevard Saint-Germain, 75007 Paris.</p>
            </div>

            <figure className="mt-8 border-l border-gold/50 pl-5">
              <blockquote className="font-serif text-[17px] italic leading-8 text-navy/70">
                « Le droit est l’ensemble des conditions qui permettent à la liberté de chacun de s’accorder avec la liberté de tous. »
              </blockquote>
              <figcaption className="mt-3 text-[10px] uppercase tracking-[0.26em] text-gold-ink">
                Emmanuel Kant
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-[#EFEBE1] py-16 text-navy md:py-20">
        <div className="container-premium">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.34em] text-gold-ink">Domaines d’intervention</p>
            <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-navy md:text-5xl">
              Une pratique resserrée autour de trois lignes d’intervention.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-9 text-navy/72">
              Fauvel Avocat articule fiscalité, droit des sociétés et droit commercial afin de traiter les dossiers dans leur continuité juridique, économique et contentieuse.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {interventions.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative min-h-[245px] overflow-hidden border border-navy/10 bg-white/55 p-8 shadow-[0_18px_60px_rgba(7,26,51,0.045)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 hover:bg-white/80"
              >
                <div className="mb-10 flex items-center justify-between border-b border-navy/10 pb-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-ink">{String(index + 1).padStart(2, "0")}</p>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy/45 transition group-hover:text-gold-ink">Domaine</span>
                </div>
                <h3 className="font-serif text-3xl tracking-[-0.025em] text-navy">{item.title}</h3>
                <p className="mt-5 text-[15px] leading-7 text-navy/72">{item.body}</p>
                <p className="mt-8 text-[12px] font-bold uppercase tracking-[0.2em] text-gold-ink">Voir le domaine →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-ivory py-16 md:py-20">
        <div className="container-premium grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.32em] text-gold-ink">Actualités</p>
            <h2 className="font-serif text-4xl tracking-[-0.03em] text-navy md:text-5xl">Actualités et analyses récentes.</h2>
            <p className="mt-6 text-[16px] leading-8 text-navy/72">Décisions marquantes, évolutions de la pratique et éclairages sur les dossiers fiscaux, sociétaires et internationaux.</p>
            <Link href="/publications" className="mt-8 inline-flex text-[13px] font-bold uppercase tracking-[0.18em] text-gold-ink">Voir toutes les publications →</Link>
          </div>
          <div className="grid gap-5">
            {actualites.map((item) => (
              <Link href={item.path} key={item.slug} className="card-premium border border-navy/10 bg-white/35 p-7 hover:border-gold/50 hover:bg-white/65">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.24em] text-gold-ink">{item.category} · {item.publishedAt}</p>
                <h3 className="font-serif text-2xl text-navy">{item.shortTitle}</h3>
                <p className="mt-3 text-[15px] leading-7 text-navy/72">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-[#EFEBE1] py-16 md:py-20">
        <div className="container-premium grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.32em] text-gold-ink">Méthode</p>
            <h2 className="font-serif text-4xl leading-[1.08] tracking-[-0.03em] text-navy md:text-5xl">Une méthode claire, avant la prise de contact.</h2>
            <p className="mt-7 text-[17px] leading-9 text-navy/72">
              La démarche repose sur une lecture rapide des faits, une qualification juridique précise et une réponse proportionnée aux enjeux du dossier.
            </p>
            <Link href="/methode-du-cabinet" className="mt-9 inline-flex text-[13px] font-bold uppercase tracking-[0.18em] text-gold-ink">Voir la méthode →</Link>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute left-[35px] top-6 bottom-6 hidden w-px bg-gradient-to-b from-gold/70 via-gold/30 to-transparent sm:block" />
            <div className="space-y-4">
              {methodSteps.map(([number, title, body]) => (
                <div key={title} className="relative flex items-start gap-6 border border-navy/10 bg-white/55 p-6 shadow-[0_14px_44px_rgba(7,26,51,0.04)] transition hover:border-gold/40 hover:bg-white/80 md:p-7">
                  <div className="relative z-10 flex h-16 w-16 flex-none items-center justify-center bg-navy font-serif text-2xl text-gold shadow-[0_12px_34px_rgba(7,26,51,0.18)]">{number}</div>
                  <div className="pt-1.5">
                    <h3 className="font-serif text-2xl tracking-[-0.02em] text-navy">{title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-navy/72">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white md:py-20">
        <div className="container-premium grid items-stretch gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.32em] text-gold">Contact</p>
            <h2 className="font-serif text-4xl leading-tight tracking-[-0.03em] text-ivory md:text-5xl">Échanger directement sur votre situation.</h2>
            <div className="my-8 h-px w-16 bg-gold" />
            <p className="max-w-xl text-[16px] leading-8 text-white/75">
              Un premier échange permet de situer le sujet, les délais éventuels et les pièces utiles.
            </p>

            <div className="mt-9 grid gap-4">
              {requestAreas.map(([title, body]) => (
                <div key={title} className="border-l border-gold bg-white/[0.04] p-5">
                  <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-gold">{title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-white/72">{body}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-9 space-y-1 text-[15px] text-white/70">
              <a href="mailto:tom.fauvel@fauvel-avocat.fr" className="block transition hover:text-gold">tom.fauvel@fauvel-avocat.fr</a>
              <a href="tel:+33624067681" className="block transition hover:text-gold">06 24 06 76 81</a>
              <p className="text-white/55">Avocap, 222 boulevard Saint-Germain, 75007 Paris</p>
            </div>
            <p className="mt-4 text-[13px] leading-6 text-white/50">Réponse sous 48&nbsp;h ouvrées · première prise de contact sans engagement.</p>
          </div>

          <div className="flex flex-col bg-ivory p-8 text-navy shadow-[0_26px_75px_rgba(7,26,51,0.25)] md:p-10">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.32em] text-gold-ink">Votre demande</p>
            <h3 className="mb-7 font-serif text-3xl leading-tight tracking-[-0.03em] text-navy">Écrire au cabinet.</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
