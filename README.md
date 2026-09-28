# CV numérique — Olivier Repauzet

*English: bilingual (French/English) digital CV of Olivier Repauzet, Applied Mathematics & Statistics master's student at the University of Bordeaux, seeking a work-study apprenticeship — [view it in English](https://singekiller.github.io/Cv_internet/?lang=en); the documentation below is in French.*

CV numérique bilingue (français / anglais) d'Olivier Repauzet, étudiant en Master Mathématiques Appliquées & Statistique à l'Université de Bordeaux, en recherche d'alternance.

Site : <https://singekiller.github.io/Cv_internet/>

Page unique : accueil, chiffres clés, profil, projets, compétences, parcours et contact, avec le CV au format PDF en téléchargement.

## Fonctionnalités

- **Bilingue FR / EN** : sélecteur dans la barre de navigation, choix mémorisé (`localStorage`). À l'arrivée, la langue suit le paramètre `?lang=`, sinon le choix mémorisé, sinon la langue du navigateur (à défaut, l'anglais). En anglais, l'URL porte `?lang=en` : le lien se partage tel quel. Le titre et la description de la page suivent la langue.
- **Thème clair / sombre** : suit le réglage du système jusqu'au premier choix, ensuite mémorisé ; appliqué avant le premier affichage, sans flash.
- **En-tête animé** : l'écran d'accueil affiche l'équation de la chaleur 2D résolue en direct sur un `<canvas>` (différences finies, schéma explicite, laplacien à 5 points). Le survol ou un appui ajoute de la chaleur ; un bouton met la simulation en pause, et le calcul s'arrête quand la section est hors écran ou l'onglet masqué.
- **Étude de cas** du projet de calibration d'un modèle EDO de l'activité mitochondriale : quatre onglets (Modéliser, Implémenter, Calibrer, Résultats), équations en MathML, figures agrandissables dans une fenêtre modale, lien vers le rapport PDF.
- **Démo interactive de l'algorithme génétique** : réimplémentation JavaScript simplifiée, avec les réglages du projet, qui ajuste une sigmoïde à des mesures bruitées. Erreur (RMSE) suivie à chaque génération ; démarrage automatique à la première apparition, pause, nouveau tirage, affichage de la courbe réelle.
- **Accessibilité** : lien d'évitement, navigation au clavier (onglets aux flèches et Début / Fin, Échap pour fermer le menu et la fenêtre modale), libellés ARIA. Avec `prefers-reduced-motion`, animations et transitions sont neutralisées, la simulation se fige sur une image et la démo ne démarre pas seule.
- **Responsive** : mise en page adaptée du mobile au grand écran, menu repliable sur petit écran. Une feuille de style d'impression masque les éléments interactifs et affiche tous les onglets.

## Stack

- React 19 et Vite 5 (`@vitejs/plugin-react`).
- CSS natif, sans préprocesseur ni framework : styles globaux dans `src/index.css`, feuilles propres à certains composants.
- Aucune dépendance supplémentaire : simulation en canvas 2D, graphiques en SVG, équations en MathML natif, traductions gérées par un contexte React.
- Polices Inter, Space Grotesk et JetBrains Mono chargées depuis Google Fonts (`index.html`).

## Structure du projet

```text
Cv_internet/
├── .github/workflows/deploy.yml  # build et déploiement sur GitHub Pages
├── index.html                    # balises meta, script thème + langue avant le rendu
├── vite.config.js                # base '/Cv_internet/' : chemin du site sur GitHub Pages
├── public/
│   ├── favicon.svg
│   └── ressources/               # PDF, figures, vidéo (copiés tels quels au build)
└── src/
    ├── main.jsx                  # point d'entrée : <App> dans <I18nProvider>
    ├── App.jsx                   # page unique : assemblage des sections
    ├── index.css                 # styles globaux, thèmes, mouvement réduit, impression
    ├── i18n/I18nProvider.jsx     # langue courante, mémorisation, ?lang=, titre de la page
    ├── content/
    │   ├── fr.js, en.js          # textes du site (structure identique)
    │   └── site.js               # coordonnées, liens, chemins des médias
    ├── components/               # composants React et leurs feuilles CSS
    │   ├── HeatField.jsx         # simulation de l'équation de la chaleur (canvas)
    │   ├── FeaturedProject.jsx   # étude de cas à onglets, équations MathML
    │   ├── GeneticDemo.jsx       # démo de l'algorithme génétique (SVG)
    │   └── …                     # Header, Hero, Profile, Projects, Skills, Journey, Contact…
    └── hooks/                    # thème, mouvement réduit, défilement, apparition, compteurs
```

## Modifier le contenu

- **Textes** : tous les textes traduisibles sont dans `src/content/fr.js` et `src/content/en.js`. Les deux fichiers doivent garder exactement la même structure (mêmes clés, mêmes tableaux, dans le même ordre) : toute modification se reporte dans les deux.
  - Typographie française : les espaces insécables (avant `: ; ! ? %`, à l'intérieur des guillemets « ») sont ajoutées automatiquement ; écrire des espaces normales dans `fr.js`.
  - `contact.references` donne le rôle des personnes listées dans `site.references`, dans le même ordre.
  - Dans `projects.others[].links`, `href` est un nom de lien (clé de `links` dans `site.js`, ou `repo`), pas une URL.
- **Coordonnées, liens et médias** : `src/content/site.js` (e-mail, téléphone, GitHub, références, URL du dépôt, chemins du CV, du rapport, des figures et de la vidéo).
- **Fichiers** (PDF, images, vidéo) : `public/ressources/`. Les référencer dans `site.js` avec `asset("ressources/…")`, qui ajoute le préfixe `/Cv_internet/`. Pour remplacer le CV, écraser `public/ressources/CV_Olivier_Repauzet.pdf` en gardant ce nom.
- **`index.html`** : titre, description, balises Open Graph, données JSON-LD et lien `<noscript>` vers le CV y sont écrits en dur ; ils ne sont pas générés depuis `src/content/` et se mettent à jour à la main.

## Développement

Prérequis : Node.js 18 ou ≥ 20 (la CI utilise Node 20).

```bash
npm ci           # installe les versions exactes de package-lock.json
npm run dev      # serveur de développement (par défaut http://localhost:5173/Cv_internet/)
npm run build    # build de production dans dist/
npm run preview  # sert dist/ en local (par défaut http://localhost:4173/Cv_internet/)
```

> **Note** : `node_modules` contient des binaires propres au système (esbuild, rollup). Après un passage Linux ⇄ Windows sur le même disque, relancer `npm ci` avant toute autre commande.

## Déploiement

Automatique via GitHub Actions (`.github/workflows/deploy.yml`) à chaque push sur `main` :

1. **build** : `npm ci` puis `npm run build` sous Node 20 ;
2. **deploy** : publication du dossier `dist/` sur GitHub Pages.

Déclenchement manuel possible depuis l'onglet **Actions** (workflow « Deploy to GitHub Pages », bouton *Run workflow*). Un seul déploiement s'exécute à la fois.

Côté dépôt, la source de GitHub Pages doit être « GitHub Actions » (*Settings > Pages*). Si le dépôt est renommé, mettre à jour `base` dans `vite.config.js`, les URL de `index.html` et `repoUrl` dans `site.js`.
