export const domaines = [
  {
    slug: "fiscalite-patrimoniale",
    title: "Fiscalité patrimoniale",
    kicker: "Patrimoine privé",
    description: "Structuration, transmission, détention immobilière, IFI et fiscalité des revenus du patrimoine.",
    intro: "Le cabinet accompagne les particuliers patrimoniaux et les dirigeants dans l’organisation fiscale de leur patrimoine privé et professionnel.",
    items: [
      { title: "Transmission et donation", text: "Analyse des schémas de transmission, donations simples ou graduées, démembrement, pactes Dutreil et sécurisation fiscale des opérations familiales." },
      { title: "Détention immobilière", text: "Choix entre détention directe, SCI, société à l’IS ou à l’IR, arbitrages fiscaux, revenus fonciers et stratégie de cession." },
      { title: "IFI", text: "Détermination du patrimoine taxable, valorisation, dettes déductibles, structuration des actifs immobiliers et assistance déclarative." },
      { title: "Arbitrages patrimoniaux", text: "Analyse des conséquences fiscales des opérations patrimoniales : cession, donation, apport, démembrement et réinvestissement." }
    ],
    keywords: "avocat fiscalité patrimoniale, transmission patrimoine, IFI, fiscalité immobilière"
  },
  {
    slug: "controle-fiscal",
    title: "Contrôle fiscal",
    kicker: "Défense fiscale",
    description: "Assistance en cas d’ESFP, vérification de comptabilité, proposition de rectification, réclamation et contentieux.",
    intro: "Le cabinet intervient dès les premières demandes de l’administration afin de construire une stratégie de défense cohérente, documentée et adaptée aux enjeux.",
    items: [
      { title: "ESFP", text: "Accompagnement des particuliers lors de l’examen contradictoire de leur situation fiscale personnelle : demandes de justifications, origine des fonds, comptes bancaires et revenus présumés." },
      { title: "Vérification de comptabilité", text: "Assistance des entreprises pendant le contrôle, préparation des réponses, échanges avec le vérificateur et défense des écritures comptables et fiscales." },
      { title: "Réponse à proposition de rectification", text: "Analyse de la motivation du service, contestation des rehaussements, discussion des pénalités et rédaction d’observations circonstanciées." },
      { title: "Réclamation contentieuse et sursis de paiement", text: "Dépôt de réclamations, demandes de sursis, discussion des garanties et suivi du contentieux devant l’administration ou le tribunal administratif." }
    ],
    keywords: "avocat contrôle fiscal, ESFP, vérification de comptabilité, proposition de rectification, contentieux fiscal"
  },
  {
    slug: "droit-des-societes",
    title: "Droit des sociétés",
    kicker: "Sociétés",
    description: "Création, transformation, opérations sur capital, gouvernance et restructurations.",
    intro: "Le cabinet accompagne les dirigeants, associés et entrepreneurs dans la vie juridique de leurs sociétés, avec une lecture fiscale intégrée.",
    items: [
      { title: "Création et structuration", text: "Choix de la forme sociale, statuts, pactes d’associés, organisation des pouvoirs et structuration initiale." },
      { title: "Opérations sur capital", text: "Augmentation, réduction de capital, apports, valorisation, entrée ou sortie d’associés." },
      { title: "Restructurations", text: "Fusions, apports partiels d’actifs, TUP, transformation de sociétés et réorganisation de groupes." },
      { title: "Gouvernance", text: "Sécurisation des décisions sociales, assemblées, pouvoirs des dirigeants et relations entre associés." }
    ],
    keywords: "avocat droit des sociétés, création société, restructuration, statuts, pacte associés"
  },
  {
    slug: "fiscalite-internationale",
    title: "Fiscalité internationale",
    kicker: "International",
    description: "Résidence fiscale, conventions fiscales, mobilité internationale et flux transfrontaliers.",
    intro: "Le cabinet assiste les contribuables mobiles, les entrepreneurs et les familles ayant des intérêts dans plusieurs États.",
    items: [
      { title: "Résidence fiscale", text: "Analyse des critères de résidence fiscale, foyer, centre des intérêts économiques, durée de séjour et risques de double résidence." },
      { title: "Conventions fiscales internationales", text: "Application des conventions bilatérales pour éviter les doubles impositions, qualification des revenus et traitement des flux transfrontaliers." },
      { title: "Impatriation et expatriation", text: "Accompagnement des départs et retours en France, régimes fiscaux favorables, obligations déclaratives et risques de contrôle." },
      { title: "Flux transfrontaliers", text: "Analyse fiscale des dividendes, intérêts, prestations de services, retenues à la source et structurations internationales." }
    ],
    keywords: "avocat fiscalité internationale, résidence fiscale, convention fiscale, expatriation"
  },
  {
    slug: "structuration-de-holdings",
    title: "Structuration de holdings",
    kicker: "Holdings",
    description: "Création de holdings, apports de titres, restructurations et organisation fiscale de groupes.",
    intro: "Le cabinet accompagne la mise en place et la sécurisation des structures de détention et de réinvestissement.",
    items: [
      { title: "Apports de titres", text: "Analyse des opérations d’apport, report d’imposition, obligations de remploi, valorisation et cohérence économique du schéma." },
      { title: "Régime mère-fille", text: "Mise en place et sécurisation du régime mère-fille, remontée de dividendes et traitement fiscal des distributions intragroupe." },
      { title: "Intégration fiscale", text: "Étude de l’opportunité d’un groupe intégré, conditions d’application, conventions d’intégration et effets sur le résultat fiscal." },
      { title: "Restructurations intragroupe", text: "Fusions, apports partiels d’actifs, TUP, cessions internes, simplification de groupe et anticipation des risques fiscaux." }
    ],
    keywords: "avocat holding, apport de titres, régime mère-fille, intégration fiscale"
  }
];

export function getDomaine(slug: string) {
  return domaines.find((item) => item.slug === slug);
}
