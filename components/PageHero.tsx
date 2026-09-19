import Image from "next/image";

type PageHeroProps = {
  kicker: string;
  title: string;
  description: string;
  imageLabel?: string;
  imageSrc?: string;
  imagePosition?: string;
  imageCardClassName?: string;
  imageClassName?: string;
  compact?: boolean;
  quote?: string;
  quoteAuthor?: string;
  quoteSource?: string;
};

export default function PageHero({
  kicker,
  title,
  description,
  imageLabel = "Visuel du cabinet",
  imageSrc = "/images/hero/fiscal.jpg",
  imagePosition = "center center",
  imageCardClassName,
  imageClassName = "object-cover",
  compact = false,
  quote,
  quoteAuthor,
  quoteSource
}: PageHeroProps) {
  const cardClass = imageCardClassName ?? (compact ? "h-[420px] w-[330px]" : "h-[620px] w-[420px]");

  return (
    <section
      className={`relative flex items-center overflow-hidden bg-navy text-white ${
        compact ? "pt-28 lg:min-h-[58vh] lg:pt-32" : "pt-24 lg:min-h-screen lg:pt-28"
      }`}
    >
      {/* Voile lumineux discret en haut, sans halo agressif : bleu légèrement plus clair */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.06] to-transparent" />

      <div
        className={`container-premium relative grid w-full items-center gap-12 lg:grid-cols-[1fr_0.78fr] ${
          compact ? "py-10 md:py-14" : "py-12 md:py-20"
        }`}
      >
        <div>
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.34em] text-gold">{kicker}</p>
          <h1
            className={`max-w-4xl font-serif leading-[1.04] tracking-[-0.035em] text-ivory ${
              compact ? "text-3xl md:text-5xl" : "text-[2.15rem] md:text-6xl"
            }`}
          >
            {title}
          </h1>
          <div className="my-8 h-px w-16 bg-gold" />
          <p className="max-w-2xl text-[17px] leading-8 text-white/82">
            {description}
          </p>

          {quote && (
            <figure className="mt-10 max-w-xl border-l border-gold/40 pl-5">
              <blockquote className="font-serif text-[18px] italic leading-8 text-white/70">
                « {quote} »
              </blockquote>
              {(quoteAuthor || quoteSource) && (
                <figcaption className="mt-3 text-[10px] uppercase tracking-[0.26em] text-white/45">
                  {quoteAuthor}
                  {quoteSource && <span className="text-white/35"> · {quoteSource}</span>}
                </figcaption>
              )}
            </figure>
          )}
        </div>

        <div className="hidden lg:flex justify-end">
          <div className={`relative overflow-hidden ${cardClass}`}>
            <Image
              src={imageSrc}
              alt={imageLabel}
              fill
              priority
              sizes="(min-width: 1024px) 460px, 100vw"
              className={imageClassName}
              style={{ objectPosition: imagePosition }}
            />
          </div>
        </div>
      </div>

      {!compact && (
        <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45 lg:flex">
          <span>Découvrir</span>
          <span className="h-8 w-px bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      )}
    </section>
  );
}
