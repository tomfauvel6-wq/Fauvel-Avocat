"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function AnimatedHomeColumn() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Progression du scroll relative au hero.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallaxe verticale + léger zoom, pilotés uniquement par le scroll
  // (pas de boucle perpétuelle : plus léger pour le GPU et la batterie).
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1.03, 1.03] : [1.03, 1.14]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.92, 0.68]);

  // Voile sombre qui se renforce au fil de la descente (scroll-driven).
  const veilOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.42]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div className="absolute inset-0 will-change-transform" style={{ y, scale, opacity: imgOpacity }}>
        {/* Reveal au chargement : fondu + léger dézoom, une seule fois */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.1 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1.03 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/colonne-grecque.jpg"
            alt="Colonne grecque"
            fill
            priority
            sizes="48vw"
            className="object-cover object-[75%_center]"
          />
        </motion.div>
      </motion.div>

      {/* Sheen statique discret en haut (remplace les halos animés perpétuels) */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-44 w-[34rem] rounded-full bg-ivory/40 blur-3xl" />

      {/* Dégradé de base + voile qui s'assombrit au scroll */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/5 to-transparent" />
      <motion.div aria-hidden="true" className="absolute inset-0 bg-navy" style={{ opacity: veilOpacity }} />
    </div>
  );
}
