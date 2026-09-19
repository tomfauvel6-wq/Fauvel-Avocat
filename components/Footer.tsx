import Link from "next/link";
import { articles } from "../lib/articles-data";

const recent = articles.slice(0, 5);

export default function Footer() {
  return (
    <footer className="bg-[#050E1A] py-16 text-white">
      <div className="container-premium grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr_1fr]">
        <div className="max-w-sm">
          <div className="font-serif text-2xl uppercase tracking-[0.2em]">Fauvel Avocat</div>
          <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-gold">Avocat fiscaliste · Barreau de Paris</div>
          <div className="mt-6 h-px w-12 bg-gold/50" />
          <p className="mt-6 text-[15px] leading-7 text-white/70">
            Conseil, stratégie et contentieux pour dirigeants, entrepreneurs et particuliers patrimoniaux.
          </p>
          <address className="mt-6 not-italic text-[15px] leading-7 text-white/55">
            Avocap, 222 boulevard Saint-Germain<br />
            75007 Paris
          </address>
          <div className="mt-4 space-y-1 text-[15px] leading-7 text-white/70">
            <p><a href="mailto:tom.fauvel@fauvel-avocat.fr" className="transition hover:text-gold">tom.fauvel@fauvel-avocat.fr</a></p>
            <p><a href="tel:+33624067681" className="transition hover:text-gold">06 24 06 76 81</a></p>
          </div>
        </div>

        <div className="space-y-3 text-[15px] text-white/70">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Cabinet</p>
          <p><Link href="/cabinet" className="transition hover:text-gold">Présentation</Link></p>
          <p><Link href="/methode-du-cabinet" className="transition hover:text-gold">Honoraires</Link></p>
          <p><Link href="/contact" className="transition hover:text-gold">Contact</Link></p>
        </div>

        <div className="space-y-3 text-[15px] text-white/70">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Droit fiscal</p>
          <p><Link href="/fiscal" className="transition hover:text-gold">Droit fiscal</Link></p>
          <p><Link href="/domaines-dintervention/controle-fiscal" className="transition hover:text-gold">Contrôle fiscal</Link></p>
          <p><Link href="/domaines-dintervention/fiscalite-patrimoniale" className="transition hover:text-gold">Fiscalité patrimoniale</Link></p>
          <p><Link href="/domaines-dintervention/fiscalite-internationale" className="transition hover:text-gold">Fiscalité internationale</Link></p>
        </div>

        <div className="space-y-3 text-[15px] text-white/70">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Droit des sociétés</p>
          <p><Link href="/domaines-dintervention/droit-des-societes" className="transition hover:text-gold">Droit des sociétés</Link></p>
          <p><Link href="/domaines-dintervention/structuration-de-holdings" className="transition hover:text-gold">Holdings</Link></p>
          <p><Link href="/domaines-dintervention" className="transition hover:text-gold">Domaines d’intervention</Link></p>
        </div>

        <div className="space-y-3 text-[15px] text-white/70">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Publications</p>
          {recent.map((item) => <p key={item.slug}><Link href={item.path} className="transition hover:text-gold">{item.shortTitle}</Link></p>)}
          <p className="pt-4"><Link href="/mentions-legales" className="text-white/55 transition hover:text-gold">Mentions légales</Link></p>
          <p><Link href="/politique-confidentialite" className="text-white/55 transition hover:text-gold">Politique de confidentialité</Link></p>
        </div>
      </div>
      <div className="container-premium mt-12 border-t border-white/10 pt-6 text-[13px] text-white/45">
        © Fauvel Avocat · Avocat au Barreau de Paris · Intervention dans toute la France
      </div>
    </footer>
  );
}
