import Link from "next/link";
import PageHero from "./PageHero";
import { Article, getRelatedArticles, toISODate } from "../lib/articles-data";

function getArticleHeroImage(article: Article) {
  if (article.category === "Droit des sociétés") return "/images/hero/societe.jpg";
  if (article.category === "Droit commercial") return "/images/hero/commercial.jpg";
  if (article.category === "Fiscalité internationale") return "/images/hero/fiscal.jpg";
  if (article.category === "Fiscalité patrimoniale") return "/images/hero/fiscal.jpg";
  if (article.category === "Contrôle fiscal") return "/images/hero/fiscal.jpg";
  return "/images/hero/publications.jpg";
}


export default function TechnicalPublicationPage({ article }: { article: Article }) {
  const related = getRelatedArticles(article);

  return (
    <main>
      <PageHero
        kicker={`${article.category} · Publication technique`}
        title={article.title}
        description={article.description}
        imageSrc={getArticleHeroImage(article)}
        imageLabel={article.category}
        compact
      />

      <article className="py-20 md:py-24">
        <div className="container-premium grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="border border-navy/10 bg-white/35 p-7 dark:border-white/10 dark:bg-white/5">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-gold-ink">Publication</p>
              <div className="mt-5 space-y-3 text-sm leading-7 text-navy/70 dark:text-white/65">
                <p>Publié le <time dateTime={toISODate(article.publishedAt)}>{article.publishedAt}</time></p>
                <p>Dernière mise à jour le <time dateTime={toISODate(article.updatedAt)}>{article.updatedAt}</time></p>
                <p>Temps de lecture : {article.readingTime}</p>
              </div>
            </div>

            <div className="mt-6 border border-navy/10 bg-white/25 p-7 dark:border-white/10 dark:bg-white/5">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gold-ink">Sommaire</p>
              <nav className="space-y-3 text-sm leading-6 text-navy/70 dark:text-white/65">
                {article.sections.map((section, index) => (
                  <a key={section.id} href={`#${section.id}`} className="block hover:text-gold">
                    {index + 1}. {section.title}
                  </a>
                ))}
                <a href="#references" className="block hover:text-gold">Références principales</a>
                <a href="#faq" className="block hover:text-gold">Questions fréquentes</a>
              </nav>
            </div>
          </aside>

          <div>
            <div className="mb-10 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="border border-gold/30 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-gold-ink">
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose-premium space-y-12">
              <p className="border-l-2 border-gold pl-6 text-[18px] leading-9 text-navy/80 dark:text-white/75">{article.intro}</p>

              {article.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="mb-5 h-px w-12 bg-gold/50" />
                  <h2 className="!mt-0">{section.title}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <section id="references" className="scroll-mt-32 border border-gold/30 bg-white/35 p-8 dark:bg-white/5">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-gold-ink">Références principales</p>
                <div className="grid gap-3 text-sm leading-7 text-navy/75 dark:text-white/70">
                  {article.references.map((reference) => (
                    <p key={reference}>{reference}</p>
                  ))}
                </div>
              </section>

              <section id="faq" className="scroll-mt-32">
                <h2>Questions fréquentes</h2>
                <div className="space-y-4">
                  {article.faq.map((item) => (
                    <div key={item.question} className="border border-navy/10 bg-white/25 p-6 dark:border-white/10 dark:bg-white/5">
                      <h3 className="font-serif text-xl text-navy dark:text-white">{item.question}</h3>
                      <p>{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              {related.length > 0 && (
                <section>
                  <h2>Publications connexes</h2>
                  <div className="grid gap-4 md:grid-cols-3">
                    {related.map((item) => (
                      <Link key={item.slug} href={item.path} className="card-premium border border-navy/10 bg-white/35 p-5 dark:border-white/10 dark:bg-white/5">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-gold-ink">{item.category}</p>
                        <h3 className="font-serif text-xl leading-tight text-navy dark:text-white">{item.shortTitle}</h3>
                        <p className="mt-3 text-xs leading-6 text-navy/60 dark:text-white/55">{item.description}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              <section className="border-t border-navy/10 pt-10 dark:border-white/10">
                <h2>Échanger avec le cabinet</h2>
                <p>Cette présentation est générale et ne saurait tenir lieu de consultation. Chaque situation s’apprécie au regard des faits, des pièces, des délais et des objectifs propres au dossier.</p>
                <p>Le cabinet peut examiner une situation précise, en mesurer les enjeux et proposer la voie la plus adaptée, en conseil comme en contentieux.</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex bg-gold px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-white dark:hover:bg-white dark:hover:text-navy">Présenter une situation</Link>
                  <Link href="/publications" className="inline-flex border border-gold px-7 py-4 text-[12px] font-bold uppercase tracking-[0.18em] text-gold transition hover:bg-gold hover:text-navy">Voir les publications</Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            datePublished: toISODate(article.publishedAt),
            dateModified: toISODate(article.updatedAt),
            author: { "@type": "Person", name: "Tom Fauvel" },
            publisher: { "@type": "LegalService", name: "Fauvel Avocat" },
            mainEntityOfPage: `https://fauvel-avocat.fr${article.path}`
          })
        }}
      />

      {article.faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: article.faq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer }
              }))
            })
          }}
        />
      )}
    </main>
  );
}
