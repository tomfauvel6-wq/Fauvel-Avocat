# Tom Fauvel Avocat — V13 raisonnable

## Lancer

```bash
cd ~/Downloads/tom-fauvel-avocat-v13
npm install
npm run dev
```

Puis ouvrir :

```text
http://localhost:3000
```

## Ajouts V13

- Framer Motion installé et composant `Reveal` prêt à l’emploi ;
- MDX activé via `@next/mdx` ;
- dossier `content/articles` pour articles MDX ;
- moteur de recherche interne `/recherche` ;
- dark/light mode via `next-themes` ;
- SEO renforcé ;
- OpenGraph premium dynamique ;
- sitemap dynamique `/sitemap.xml` ;
- robots dynamique `/robots.txt`.

## Images

À placer dans `public/images` :

```text
logo.png
portrait-tom-fauvel.jpg
colonne-grecque.jpg
bureau-premium.jpg
```

## Formulaire

Configurer `.env.local` à partir de `.env.example`, puis ajouter les variables dans Vercel.


## V14 réelle

La page `/honoraires` a été entièrement remplacée par une version premium intégrant :
- temps passé ;
- forfait ;
- honoraire fixe + honoraire de résultat ;
- devis personnalisé ;
- rédaction harmonisée avec la direction artistique du site.


## V15

Corrections intégrées :
- page Honoraires rendue plus lisible ;
- titres “Au temps passé”, “Au forfait” et “Honoraire fixe et honoraire de résultat” agrandis ;
- suppression des sous-titres intermédiaires ;
- page Cabinet enrichie avec droit des sociétés et droit commercial.

## Notes V23

Cette version stabilise les visuels :

- les monogrammes attendus par le code sont bien fournis en `.jpg` dans `public/images/header/` ;
- les six images de page sont harmonisées au même format vertical dans `public/images/hero/` ;
- le composant `PageHero` affiche désormais un visuel vertical cohérent à droite du header de page ;
- les pages Cabinet, Méthode, Honoraires, Contact, Recherche et Publications appellent chacune un visuel cohérent.

Noms attendus :

- `public/images/header/monogramme-gauche.jpg`
- `public/images/header/monogramme-droite.jpg`
- `public/images/hero/fiscal.jpg`
- `public/images/hero/societe.jpg`
- `public/images/hero/commercial.jpg`
- `public/images/hero/publications.jpg`
- `public/images/hero/presentation.jpg`
- `public/images/hero/honoraires.jpg`
