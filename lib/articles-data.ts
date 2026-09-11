export type Article = {
  slug: string;
  path: string;
  category: string;
  title: string;
  shortTitle: string;
  description: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  tags: string[];
  intro: string;
  sections: { id: string; title: string; body: string[] }[];
  references: string[];
  faq: { question: string; answer: string }[];
  related: string[];
};

export const articles: Article[] = [
  {
    slug: "esfp-avocat",
    path: "/controle-fiscal/esfp-avocat",
    category: "Contrôle fiscal",
    title: "ESFP : défendre un contribuable lors d’un examen de situation fiscale personnelle",
    shortTitle: "ESFP",
    description: "Assistance en examen contradictoire de situation fiscale personnelle, analyse des flux bancaires et stratégie de réponse.",
    publishedAt: "9 juin 2026",
    updatedAt: "11 septembre 2026",
    readingTime: "4 minutes",
    tags: ["ESFP", "revenus", "comptes bancaires"],
    intro: "L’examen contradictoire de situation fiscale personnelle (ESFP) permet à l’administration de vérifier la cohérence entre les revenus déclarés par une personne physique et l’ensemble de sa situation patrimoniale et de trésorerie : train de vie, comptes bancaires, flux financiers et éléments de patrimoine. C’est une procédure exigeante, qui appelle des réponses précises et documentées. Le cabinet accompagne le contribuable à chacune de ses étapes.",
    sections: [
      { id: "objet", title: "Une procédure personnelle et approfondie", body: ["L’ESFP porte sur la situation fiscale d’ensemble d’une personne physique, et non sur une activité ou une société déterminée. L’administration cherche à s’assurer que les revenus déclarés sont en rapport avec la situation patrimoniale et le train de vie du contribuable.", "À cette fin, elle peut examiner les comptes bancaires, y compris détenus à l’étranger, les mouvements de fonds, les donations, les prêts familiaux, les cessions d’actifs ou encore les revenus susceptibles de ne pas avoir été déclarés. La procédure se distingue de la vérification de comptabilité, qui concerne les entreprises, par son caractère personnel.", "Sa durée est en principe encadrée et le contribuable bénéficie de garanties spécifiques, dont le respect doit être vérifié dès l’engagement du contrôle."] },
      { id: "flux", title: "L’analyse des crédits bancaires", body: ["Le cœur d’un ESFP réside fréquemment dans l’examen des crédits figurant sur les comptes. L’administration peut demander au contribuable de justifier l’origine et la nature des sommes portées au crédit, faute de quoi elles risquent d’être regardées comme des revenus imposables.", "La défense consiste à qualifier précisément chaque flux : revenus déjà déclarés, virements entre comptes personnels, remboursements, prêts, avances en compte courant, produits de cession ou opérations patrimoniales. Une lecture méthodique, compte par compte et opération par opération, est souvent indispensable.", "La cohérence d’ensemble des explications, leur correspondance avec les pièces et leur chronologie pèsent autant que chaque justificatif pris isolément."] },
      { id: "procedure", title: "Garanties procédurales et stratégie de réponse", body: ["Le respect du débat contradictoire, des délais et des garanties prévues par le livre des procédures fiscales conditionne la régularité du contrôle. Certaines irrégularités peuvent avoir des conséquences sur la procédure elle-même.", "La stratégie de réponse mérite d’être arrêtée dès les premières demandes : une réponse hâtive ou incomplète peut fragiliser la position du contribuable pour la suite, tandis qu’une réponse construite, hiérarchisée et étayée permet souvent de circonscrire le débat.", "Lorsque l’examen débouche sur une proposition de rectification, les observations doivent être préparées avec le même soin, chef de rehaussement par chef de rehaussement."] }
    ],
    references: ["LPF, article L.12", "LPF, article L.16", "LPF, article L.69", "BOI-CF-PGR relatif à l’ESFP"],
    faq: [
      { question: "L’administration peut-elle demander tous les relevés bancaires ?", answer: "Dans le cadre de l’ESFP, l’administration dispose de pouvoirs étendus, mais leur mise en œuvre doit respecter les garanties prévues par le LPF." },
      { question: "Comment justifier un virement familial ?", answer: "Il faut réunir des pièces cohérentes : contrat, reconnaissance de dette, justificatifs bancaires, éléments patrimoniaux et explication chronologique." }
    ],
    related: ["regime-mere-fille", "fiscalite-franco-americaine"]
  },
  {
    slug: "fiscalite-franco-americaine",
    path: "/fiscalite-internationale/fiscalite-franco-americaine",
    category: "Fiscalité internationale",
    title: "Fiscalité franco-américaine : résidence, revenus US et obligations déclaratives",
    shortTitle: "Fiscalité franco-américaine",
    description: "Accompagnement des contribuables concernés par la fiscalité France États-Unis : résidence, dividendes, salaires, retraites et comptes étrangers.",
    publishedAt: "9 juin 2026",
    updatedAt: "11 septembre 2026",
    readingTime: "4 minutes",
    tags: ["États-Unis", "convention fiscale", "comptes étrangers"],
    intro: "Les situations franco-américaines sont parmi les plus sensibles en fiscalité internationale, du fait de la combinaison entre résidence fiscale, éventuelle citoyenneté américaine, retenues à la source et obligations déclaratives dans les deux pays. Les États-Unis imposent en effet leurs citoyens sur une base mondiale, quel que soit leur lieu de résidence. Le cabinet accompagne ces dossiers exigeants.",
    sections: [
      { id: "residence", title: "Résidence fiscale et convention France – États-Unis", body: ["La convention fiscale franco-américaine permet de déterminer les règles applicables à de nombreux revenus et de répartir le droit d’imposer entre les deux États, mais l’analyse doit toujours partir de la situation concrète du contribuable.", "La particularité américaine tient à l’imposition fondée sur la citoyenneté : un citoyen américain résidant en France peut demeurer soumis à des obligations fiscales et déclaratives aux États-Unis, ce qui impose une coordination étroite avec un conseil américain.", "Cette double dimension rend l’articulation des règles particulièrement délicate."] },
      { id: "revenus", title: "Dividendes, salaires, retraites et plus-values", body: ["La nature du revenu détermine la règle conventionnelle applicable et le mécanisme d’élimination de la double imposition en France, qui peut prendre la forme d’un crédit d’impôt.", "Salaires, revenus de capitaux mobiliers, pensions et plus-values obéissent à des stipulations distinctes. Une lecture catégorie par catégorie, plutôt qu’une approche globale, est indispensable pour éviter erreurs et doubles impositions."] },
      { id: "obligations", title: "Comptes, formulaires et risques déclaratifs", body: ["Les comptes financiers détenus à l’étranger, les revenus de source américaine et les informations échangées automatiquement entre administrations peuvent donner lieu à des demandes de renseignements, voire à un contrôle.", "La cohérence entre les déclarations souscrites en France et les éléments connus de l’administration est essentielle. Une mise en conformité documentée est généralement préférable à une régularisation contrainte."] }
    ],
    references: ["Convention fiscale France États-Unis", "CGI, article 4 B", "CGI, article 1649 A", "BOI-INT-CVB-USA"],
    faq: [
      { question: "Un résident français doit-il déclarer ses revenus américains ?", answer: "Oui, un résident fiscal français doit en principe déclarer ses revenus mondiaux, sous réserve des modalités conventionnelles." },
      { question: "La retenue à la source américaine suffit-elle ?", answer: "Non nécessairement. Il faut vérifier le traitement français et le mécanisme d’élimination de la double imposition." }
    ],
    related: ["regime-mere-fille", "esfp-avocat"]
  },
  {
    slug: "regime-mere-fille",
    path: "/societe/regime-mere-fille",
    category: "Droit des sociétés",
    title: "Le régime mère-fille : exonérer la remontée des dividendes au sein d’un groupe",
    shortTitle: "Le régime mère-fille",
    description: "Conditions, mécanisme et points de vigilance du régime mère-fille (articles 145 et 216 du CGI) : seuil de 5 %, conservation des titres, quote-part de frais et charges.",
    publishedAt: "9 juin 2026",
    updatedAt: "11 septembre 2026",
    readingTime: "4 minutes",
    tags: ["régime mère-fille", "dividendes", "article 145 CGI", "article 216 CGI", "holding"],
    intro: "Le régime mère-fille est l’un des dispositifs centraux de la fiscalité des groupes. Il permet à une société mère de ne quasiment pas être imposée sur les dividendes reçus de ses filiales, afin d’éviter une double imposition économique des mêmes bénéfices. Sa mise en œuvre obéit toutefois à des conditions strictes, dont le non-respect peut entraîner la perte de l’avantage et un risque de rectification.",
    sections: [
      { id: "principe", title: "Le principe : éviter la double imposition", body: ["Les bénéfices d’une filiale sont en principe imposés à l’impôt sur les sociétés, puis de nouveau lorsqu’ils remontent sous forme de dividendes vers la société mère. Le régime mère-fille, prévu aux articles 145 et 216 du code général des impôts, neutralise cette seconde imposition.", "Les dividendes reçus sont retranchés du résultat imposable de la société mère, à l’exception d’une quote-part de frais et charges. L’avantage est donc significatif pour organiser la circulation de la trésorerie au sein d’un groupe ou d’une structure de holding."] },
      { id: "conditions", title: "Les conditions d’application", body: ["Le régime suppose, pour l’essentiel, que la société mère et la filiale soient soumises à l’impôt sur les sociétés, que la mère détienne au moins 5 % du capital de la filiale, et qu’elle s’engage à conserver les titres pendant au moins deux ans.", "Le seuil de détention s’apprécie à la date de mise en paiement des dividendes, et les titres doivent en principe revêtir la forme nominative. Le régime est exercé sur option, formalisée dans la déclaration de résultats. Ces conditions sont cumulatives et doivent être vérifiées avec rigueur."] },
      { id: "quote-part", title: "La quote-part de frais et charges", body: ["L’exonération n’est pas totale : une quote-part forfaitaire de frais et charges, fixée à 5 % du produit total des participations, crédit d’impôt compris, est réintégrée dans le résultat imposable de la société mère.", "Cette quote-part est forfaitaire et irréductible : elle s’applique même si les frais réels de gestion de la participation sont inférieurs. Au sein d’un groupe d’intégration fiscale, ce taux peut, sous conditions, être ramené à 1 %."] },
      { id: "vigilance", title: "Points de vigilance et risques", body: ["Le non-respect de la durée de conservation, une détention inférieure au seuil au moment de la distribution ou une qualification contestable des produits peuvent remettre en cause le bénéfice du régime.", "L’administration est attentive aux montages dépourvus de substance économique et aux opérations principalement motivées par un objectif fiscal. La sécurisation passe par une documentation soignée de la détention, des distributions et de la logique économique du groupe."] }
    ],
    references: ["CGI, article 145", "CGI, article 216", "CGI, articles 223 A et suivants (intégration fiscale)", "BOI-IS-BASE-10-10-10 relatif au régime des sociétés mères"],
    faq: [
      { question: "Quel pourcentage des dividendes est réellement exonéré ?", answer: "En pratique, environ 95 % des dividendes sont exonérés, puisque seule une quote-part de frais et charges de 5 % est réintégrée dans le résultat imposable de la société mère." },
      { question: "Faut-il conserver les titres deux ans avant de bénéficier du régime ?", answer: "La société mère doit prendre l’engagement de conserver les titres pendant au moins deux ans. Le non-respect de cet engagement entraîne la remise en cause de l’avantage." },
      { question: "Le régime s’applique-t-il automatiquement ?", answer: "Non. Il s’exerce sur option, formalisée dans la déclaration de résultats, et suppose le respect de l’ensemble des conditions légales." }
    ],
    related: ["fiscalite-franco-americaine", "esfp-avocat"]
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: Article) {
  return article.related
    .map((slug) => getArticle(slug))
    .filter((item): item is Article => Boolean(item));
}

// Convertit une date au format français "J mois AAAA" (ex: "6 mai 2025")
// en date ISO "AAAA-MM-JJ", utilisable par les balises <time> et le JSON-LD.
const MONTHS_FR: Record<string, string> = {
  janvier: "01", février: "02", fevrier: "02", mars: "03", avril: "04",
  mai: "05", juin: "06", juillet: "07", août: "08", aout: "08",
  septembre: "09", octobre: "10", novembre: "11", décembre: "12", decembre: "12"
};

export function toISODate(frenchDate: string): string {
  const match = frenchDate.trim().toLowerCase().match(/^(\d{1,2})\s+([a-zéûôîà]+)\s+(\d{4})$/);
  if (!match) return "";
  const [, day, month, year] = match;
  const mm = MONTHS_FR[month];
  if (!mm) return "";
  return `${year}-${mm}-${day.padStart(2, "0")}`;
}
