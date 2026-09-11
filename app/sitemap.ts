import type { MetadataRoute } from "next";
import { articles } from "../lib/articles-data";

const baseUrl = "https://fauvel-avocat.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/cabinet",
    "/methode-du-cabinet",
    "/domaines-dintervention",
    "/contact",
    "/publications",
    "/fiscal",
    "/fiscal/declaration-et-regularisation",
    "/societe",
    "/commercial",
    "/contentieux-fiscal",
    "/holding-patrimoniale",
    "/mentions-legales",
    "/politique-confidentialite",
    "/fiscalite-patrimoniale",
    "/fiscalite-internationale",
    "/domaines-dintervention/controle-fiscal",
    "/domaines-dintervention/fiscalite-patrimoniale",
    "/domaines-dintervention/fiscalite-internationale",
    "/domaines-dintervention/fiscalite-des-dirigeants",
    "/domaines-dintervention/structuration-de-holdings",
    "/domaines-dintervention/crypto-actifs",
    "/domaines-dintervention/droit-des-societes",
    "/domaines-dintervention/droit-commercial"
  ];

  const articleRoutes = articles.map((article) => article.path);

  return [...staticRoutes, ...articleRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-09-11"),
    changeFrequency: route === "/publications" || articleRoutes.includes(route) ? "monthly" : "yearly",
    priority: route === "" ? 1 : articleRoutes.includes(route) ? 0.9 : 0.7
  }));
}
