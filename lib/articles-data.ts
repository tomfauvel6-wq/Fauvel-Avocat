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
    publishedAt: "11 septembre 2026",
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
    publishedAt: "11 septembre 2026",
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
    publishedAt: "11 septembre 2026",
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
  },
  {
    slug: "contester-taxe-fonciere",
    path: "/fiscalite-patrimoniale/contester-taxe-fonciere",
    category: "Fiscalité patrimoniale",
    title: "Taxe foncière : comment contester son avis",
    shortTitle: "Contester sa taxe foncière",
    description: "Avis de taxe foncière reçu à l’automne : délai de réclamation, motifs de contestation (valeur locative, exonérations, dégrèvements) et marche à suivre.",
    publishedAt: "19 septembre 2026",
    updatedAt: "19 septembre 2026",
    readingTime: "5 minutes",
    tags: ["taxe foncière", "réclamation", "valeur locative", "dégrèvement", "exonération"],
    intro: "Vous venez de recevoir votre avis de taxe foncière et le montant vous paraît élevé, ou a bondi sans raison apparente. Avant de payer sans discuter, sachez que la base de calcul repose sur des données parfois anciennes ou erronées, que des exonérations passent inaperçues, et que la réclamation reste ouverte bien après l’échéance d’octobre. Voici comment vérifier, et ce que le cabinet peut faire pour vous.",
    sections: [
      { id: "delai", title: "Le délai pour réclamer", body: ["La réclamation peut être présentée jusqu’au 31 décembre de l’année qui suit celle de la mise en recouvrement. Pour une taxe foncière 2026, il est donc possible de contester jusqu’au 31 décembre 2027.", "Réclamer ne dispense pas de payer à l’échéance : la taxe reste due tant que l’administration n’a pas statué, sauf à demander expressément un sursis de paiement, qui suppose la constitution de garanties lorsque le montant contesté dépasse 4 500 euros. Dans la plupart des cas, il est plus simple de payer puis d’obtenir un dégrèvement."] },
      { id: "valeur-locative", title: "Vérifier la base : la valeur locative", body: ["La taxe foncière est assise sur la valeur locative cadastrale du bien, elle-même fonction de la surface pondérée, de la catégorie du logement, des éléments de confort et de coefficients propres à la commune. Ces données figurent sur la fiche d’évaluation du local, que l’on peut demander au centre des impôts fonciers.", "Les erreurs sont fréquentes : surface annexe comptée deux fois, catégorie attribuée il y a des décennies et jamais révisée, dépendance ou piscine qui n’existe plus, travaux de démolition non pris en compte. Chaque écart se traduit directement sur la cotisation, et pour les années suivantes.", "Le taux, en revanche, est voté par la commune et l’intercommunalité : il ne se conteste pas devant l’administration fiscale."] },
      { id: "exonerations", title: "Exonérations et dégrèvements à ne pas oublier", body: ["Les constructions nouvelles bénéficient, sous conditions et sur déclaration dans les 90 jours de l’achèvement, d’une exonération temporaire de deux ans. Certaines communes l’ont réduite, d’où l’intérêt de vérifier.", "Des exonérations ou dégrèvements existent aussi en fonction de l’âge, du handicap et des ressources du propriétaire, ainsi qu’un plafonnement de la taxe en fonction du revenu. Ils sont en principe appliqués automatiquement, mais un changement de situation en cours d’année peut être passé inaperçu.", "Enfin, un logement resté vacant au moins trois mois pour des raisons indépendantes de la volonté du propriétaire, ou un local professionnel inexploité, peut ouvrir droit à un dégrèvement partiel."] },
      { id: "demarche", title: "La marche à suivre", body: ["La réclamation se fait par la messagerie de l’espace particulier sur impots.gouv.fr ou par courrier au service dont dépend l’immeuble. Elle doit identifier le bien, l’imposition contestée et les motifs, et joindre les justificatifs : plans, photographies, factures de démolition, attestation de vacance.", "En cas de rejet, ou de silence de l’administration pendant six mois, le contribuable peut saisir le tribunal administratif."] },
      { id: "cabinet", title: "Ce que fait le cabinet", body: ["Le cabinet commence par obtenir la fiche d’évaluation du bien et la confronter à la réalité : surfaces, catégorie, dépendances, éléments de confort. Cette lecture, qui prend peu de temps, dit tout de suite si une réclamation a du sens et pour quel montant.", "Si c’est le cas, il rédige la réclamation, réunit les justificatifs, suit l’instruction avec le service des impôts fonciers et, si nécessaire, porte le dossier devant le tribunal administratif. L’intérêt d’une réclamation fondée ne se limite pas à l’année en cours : la valeur locative corrigée s’applique aux années suivantes.", "Vous pouvez transmettre votre avis et, si vous l’avez, la fiche d’évaluation via le formulaire de contact : une première lecture vous est retournée sous 48 heures ouvrées, sans engagement."] }
    ],
    references: ["CGI, articles 1380 et suivants (taxe foncière sur les propriétés bâties)", "CGI, articles 1494 et suivants (valeur locative)", "CGI, articles 1383, 1389, 1390, 1391 et 1391 B (exonérations et dégrèvements)", "LPF, article R*196-2 (délai de réclamation)"],
    faq: [
      { question: "Puis-je contester une taxe foncière déjà payée ?", answer: "Oui. La réclamation est possible jusqu’au 31 décembre de l’année suivant la mise en recouvrement, que la taxe ait été payée ou non. En cas de succès, le trop-versé est restitué." },
      { question: "Ma taxe a fortement augmenté cette année, est-ce contestable ?", answer: "La hausse résulte le plus souvent de la revalorisation annuelle des bases et des taux votés localement, qui ne se contestent pas. En revanche, si elle traduit une modification de la valeur locative du bien (nouvelle catégorie, surface, éléments de confort), elle peut être discutée." }
    ],
    related: ["donation-avant-31-decembre", "regime-mere-fille"]
  },
  {
    slug: "donation-avant-31-decembre",
    path: "/fiscalite-patrimoniale/donation-avant-31-decembre",
    category: "Fiscalité patrimoniale",
    title: "Donation avant le 31 décembre 2026 : ce qui compte vraiment",
    shortTitle: "Donner avant le 31 décembre",
    description: "Abattements, rappel fiscal, exonération temporaire des dons pour la résidence principale (jusqu’au 31 décembre 2026), Dutreil : les points à vérifier avant une donation de fin d’année.",
    publishedAt: "19 septembre 2026",
    updatedAt: "19 septembre 2026",
    readingTime: "6 minutes",
    tags: ["donation", "abattement", "rappel fiscal", "don familial", "article 790 A bis", "pacte Dutreil"],
    intro: "Vous envisagez d’aider un enfant à acheter, de transmettre des titres de votre société ou simplement d’avancer une donation avant la fin de l’année. En 2026, une échéance précise s’ajoute aux raisons habituelles : l’exonération des dons d’argent affectés à la résidence principale disparaît le 31 décembre. Une donation bien construite s’appuie sur les bons abattements, dans le bon ordre, au bon moment ; une donation improvisée peut coûter des droits inutiles ou créer un risque de requalification. Voici les repères, et la façon dont le cabinet vous accompagne.",
    sections: [
      { id: "abattements", title: "Les abattements et le rappel fiscal", body: ["Chaque parent peut donner à chaque enfant 100 000 euros en franchise de droits, un grand-parent 31 865 euros à chaque petit-enfant, et d’autres abattements existent entre frères et sœurs ou avec les neveux et nièces. Ces abattements se reconstituent tous les quinze ans.", "C’est le mécanisme du rappel fiscal : toute donation consentie depuis moins de quinze ans est prise en compte pour calculer les droits sur la nouvelle. Donner tôt, c’est faire courir ce délai plus tôt ; d’où l’intérêt, à situation égale, de ne pas repousser une donation décidée.", "S’y ajoute le don familial de sommes d’argent de 31 865 euros, exonéré si le donateur a moins de 80 ans et le bénéficiaire est majeur, cumulable avec l’abattement ordinaire."] },
      { id: "exoneration-2026", title: "L’exonération temporaire qui expire le 31 décembre 2026", body: ["La loi de finances pour 2025 a créé une exonération exceptionnelle pour les dons d’argent consentis à un enfant, petit-enfant, arrière-petit-enfant, ou à défaut à un neveu ou une nièce : 100 000 euros par donateur et par bénéficiaire, dans la limite de 300 000 euros reçus par bénéficiaire, sans droits.", "La condition est l’emploi des fonds, dans les six mois, à l’acquisition d’un logement neuf ou en état futur d’achèvement affecté à la résidence principale, ou à des travaux de rénovation énergétique de la résidence principale, avec une obligation de conservation de cinq ans. Le dispositif se cumule avec les abattements ordinaires et n’entre pas dans le rappel fiscal.", "Il ne s’applique qu’aux dons réalisés jusqu’au 31 décembre 2026. Pour un projet immobilier en cours, le calendrier de la donation et celui de l’acquisition doivent donc être coordonnés dès maintenant."] },
      { id: "entreprise", title: "Transmettre une entreprise : le pacte Dutreil", body: ["Pour les titres de société ou une entreprise individuelle, le pacte Dutreil permet, sous conditions, d’exonérer 75 % de la valeur transmise. La loi de finances pour 2026 a allongé l’engagement individuel de conservation, portant la durée totale des engagements à huit ans au minimum.", "Une donation Dutreil ne s’improvise pas en décembre : engagement collectif préalable, éligibilité de l’activité, condition de direction, actifs non professionnels à isoler. Mais lorsque la préparation est faite, la fin d’année est un moment naturel pour la signer."] },
      { id: "vigilance", title: "Trois points de vigilance", body: ["La chronologie d’abord : donner des titres juste avant de les vendre est licite et efficace, à condition que la donation soit réelle et précède un accord de cession ; l’inverse expose à une requalification.", "La forme ensuite : une donation d’immeuble ou de titres suppose un acte notarié ; un don d’argent se déclare dans le mois, en ligne ou par formulaire, même s’il est exonéré.", "Le contexte enfin : le projet de loi de finances pour 2027 sera discuté à l’automne. Les règles exposées ici sont celles en vigueur à la date de publication ; un projet engagé sur la base d’un dispositif temporaire doit être sécurisé avant son échéance."] },
      { id: "cabinet", title: "Ce que fait le cabinet", body: ["Le cabinet établit d’abord le tableau des donations antérieures et des abattements encore disponibles, par donateur et par bénéficiaire : c’est ce qui détermine combien peut être transmis sans droits, et sous quelle forme.", "Il propose ensuite une articulation : ordre des dons, choix entre pleine propriété et démembrement, recours au dispositif temporaire de l’article 790 A bis pour un projet immobilier, préparation d’un pacte Dutreil pour une entreprise. Il coordonne la mise en œuvre avec le notaire lorsqu’un acte est nécessaire et prend en charge les déclarations.", "Pour un projet à réaliser avant le 31 décembre, le temps compte : présentez votre situation via le formulaire, une première analyse vous est retournée sous 48 heures ouvrées, sans engagement."] }
    ],
    references: ["CGI, articles 779 et 790 B (abattements)", "CGI, article 784 (rappel fiscal des donations antérieures)", "CGI, article 790 G (dons familiaux de sommes d’argent)", "CGI, article 790 A bis (exonération temporaire résidence principale, jusqu’au 31 décembre 2026)", "CGI, articles 787 B et 787 C (pacte Dutreil)"],
    faq: [
      { question: "Le don de 100 000 euros pour la résidence principale est-il cumulable avec l’abattement classique ?", answer: "Oui. L’exonération de l’article 790 A bis s’ajoute à l’abattement de 100 000 euros entre parent et enfant et au don familial de 31 865 euros, et n’est pas prise en compte dans le rappel fiscal des quinze ans." },
      { question: "Faut-il un notaire pour un don d’argent ?", answer: "Non, un don manuel d’argent se déclare simplement à l’administration dans le mois. Un acte notarié devient nécessaire pour un immeuble, des titres de société ou lorsqu’on souhaite organiser précisément les conditions de la donation." }
    ],
    related: ["contester-taxe-fonciere", "comptes-etrangers-non-declares"]
  },
  {
    slug: "comptes-etrangers-non-declares",
    path: "/fiscalite-internationale/comptes-etrangers-non-declares",
    category: "Fiscalité internationale",
    title: "Comptes à l’étranger non déclarés : régulariser avant le contrôle",
    shortTitle: "Comptes à l’étranger non déclarés",
    description: "Obligation de déclaration des comptes, contrats d’assurance-vie et actifs numériques détenus à l’étranger : sanctions, prescription de dix ans, échange automatique d’informations et démarche de régularisation.",
    publishedAt: "19 septembre 2026",
    updatedAt: "19 septembre 2026",
    readingTime: "6 minutes",
    tags: ["comptes à l’étranger", "formulaire 3916", "régularisation", "échange automatique", "prescription"],
    intro: "Vous détenez un compte ouvert pendant des études ou une expatriation, un contrat d’assurance-vie souscrit à l’étranger, un portefeuille de crypto-actifs sur une plateforme étrangère, et vous réalisez qu’il n’a jamais été déclaré. Ou vous venez de recevoir un courrier de l’administration qui vous interroge à ce sujet. Dans les deux cas, la situation se traite, mais pas n’importe comment ni n’importe quand. Voici ce que vous risquez, ce que l’administration sait déjà, et la façon dont le cabinet organise une régularisation.",
    sections: [
      { id: "obligation", title: "Ce qui doit être déclaré", body: ["Toute personne domiciliée en France doit déclarer chaque année, avec sa déclaration de revenus, les comptes bancaires ouverts, détenus, utilisés ou clos à l’étranger, ainsi que les contrats d’assurance-vie et de capitalisation souscrits hors de France et les comptes d’actifs numériques ouverts auprès de plateformes étrangères.", "La déclaration se fait sur les formulaires 3916 et 3916 bis, compte par compte, même pour un compte inactif ou au solde nul. C’est l’existence du compte qui est déclarée, pas seulement les revenus qu’il produit."] },
      { id: "sanctions", title: "Ce que coûte l’oubli", body: ["Chaque compte non déclaré expose à une amende de 1 500 euros par compte et par année, portée à 10 000 euros lorsque le compte est situé dans un État non coopératif. Ces amendes s’additionnent sur toutes les années non prescrites.", "Le délai de reprise de l’administration est porté de trois à dix ans pour les revenus liés aux avoirs non déclarés, sauf lorsque le total des soldes n’a pas dépassé 50 000 euros, et les rappels d’impôt sont assortis d’une majoration de 80 %.", "Surtout, l’administration peut demander l’origine des fonds ; en l’absence de justification, les sommes sont réputées constituer des revenus imposables, et l’origine non établie des avoirs peut donner lieu à une taxation aux droits de mutation au taux le plus élevé."] },
      { id: "detection", title: "Pourquoi l’administration sait", body: ["Depuis 2017, la France reçoit chaque année, dans le cadre de l’échange automatique d’informations, les données des comptes détenus par ses résidents dans plus d’une centaine de pays : identité, solde, revenus. Les flux arrivent à l’automne et alimentent des demandes de justification dans les mois qui suivent.", "Un courrier de l’administration demandant des informations sur des avoirs à l’étranger n’est donc jamais une demande de routine : il signifie que la donnée est déjà connue, et le délai de réponse est de soixante jours."] },
      { id: "regulariser", title: "Régulariser : comment et pourquoi maintenant", body: ["La régularisation spontanée consiste à déposer des déclarations rectificatives pour les années non prescrites, à déclarer les comptes et à acquitter les impôts, intérêts et pénalités correspondants. Une demande de modération des pénalités peut accompagner la démarche, l’administration tenant compte du caractère spontané et de la bonne foi.", "L’intérêt est double : maîtriser le calendrier et le périmètre plutôt que de subir un contrôle, et se placer dans une situation bien plus favorable pour la discussion des pénalités."] },
      { id: "cabinet", title: "Ce que fait le cabinet", body: ["Le cabinet reconstitue d’abord la situation : comptes et contrats concernés, années non prescrites, revenus générés, conventions fiscales applicables. Cette étape détermine ce qui est réellement dû, souvent moins que ce que l’on redoute, et ce qui ne l’est pas.", "Il prépare ensuite les déclarations rectificatives et les formulaires 3916, rédige le courrier d’accompagnement et la demande de modération des pénalités, puis conduit l’échange avec le service jusqu’à la mise en recouvrement. Si un courrier de l’administration a déjà été reçu, il organise la réponse dans le délai de soixante jours, en veillant à ce que chaque justification soit complète et cohérente.", "La confidentialité de ces échanges est couverte par le secret professionnel de l’avocat. Vous pouvez présenter votre situation via le formulaire, sans détailler les montants : une première analyse vous est retournée sous 48 heures ouvrées, sans engagement."] }
    ],
    references: ["CGI, articles 1649 A, 1649 AA et 1649 bis C (obligations déclaratives)", "CGI, article 1736 IV (amendes)", "CGI, article 1729-0 A (majoration de 80 %)", "CGI, article 755 (taxation des avoirs d’origine non justifiée)", "LPF, articles L. 23 C et L. 169 (demande de justifications, délai de reprise de dix ans)"],
    faq: [
      { question: "Un compte étranger vide ou fermé doit-il être déclaré ?", answer: "Oui, dès lors qu’il a été ouvert, utilisé ou clos au cours de l’année, quel que soit son solde. L’amende s’applique à l’absence de déclaration, indépendamment des revenus." },
      { question: "Est-il trop tard pour régulariser si j’ai reçu un courrier de l’administration ?", answer: "La régularisation n’est plus spontanée, mais une réponse complète et documentée dans le délai de soixante jours reste déterminante pour limiter les conséquences. Il faut alors agir vite et de façon structurée." }
    ],
    related: ["fiscalite-franco-americaine", "donation-avant-31-decembre"]
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
