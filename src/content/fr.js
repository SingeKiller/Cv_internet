const fr = {
  meta: {
    title: "Olivier Repauzet Alternance data & statistique · Master MAS, Université de Bordeaux",
    description:
      "CV numérique d'Olivier Repauzet, étudiant en Master Mathématiques appliquées, statistique (parcours Image, Optimisation et sciences des données) à l'Université de Bordeaux, à la recherche d'une alternance de 2 ans en statistique, science des données et traitement d'image.",
  },

  ui: {
    skipLink: "Aller au contenu",
    navLabel: "Navigation principale",
    nav: {
      profile: "Profil",
      journey: "Parcours",
      education: "Formation",
      skills: "Compétences",
      projects: "Projets",
      contact: "Contact",
    },
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    langLabel: "Langue du site",
    themeToDark: "Activer le thème sombre",
    themeToLight: "Activer le thème clair",
    cvShort: "CV",
    cvDownload: "Télécharger le CV (PDF)",
    backToTop: "Haut de page",
    close: "Fermer",
    zoomImage: "Agrandir l'image",
    imageDialog: "Image agrandie",
    newTab: "(nouvel onglet)",
  },

  hero: {
    status: "Recherche une alternance de 2 ans · data & statistique · Bordeaux",
    firstName: "Olivier",
    lastName: "Repauzet",
    tagline: ["Modéliser.", "Évaluer.", "Interpréter."],
    pitch:
      "Étudiant en Master Mathématiques appliquées, statistique à l'Université de Bordeaux (parcours Image, Optimisation et sciences des données), je construis des modèles à partir des données, j'évalue leur fiabilité et j'en tire des conclusions utiles, en Python et en C++.",
    ctaPrimary: "Découvrir mes projets",
    ctaSecondary: "Télécharger le CV",
    simCaption: "∂u/∂t = α Δu équation de la chaleur résolue en direct",
    simHint: "Survolez ou touchez pour chauffer",
    simPause: "Mettre la simulation en pause",
    simPlay: "Relancer la simulation",
    scrollHint: "Défiler vers le profil",
  },

  metrics: [
    { id: "projects", label: "projets scientifiques et techniques réalisés" },
    { id: "experience", value: 4, suffix: " ans", label: "d'expérience professionnelle en CDD et CDI" },
    { id: "master", value: "Master", label: "Mathématiques appliquées, statistique · parcours IOD · Université de Bordeaux" },
    { id: "apprenticeship", value: 2, suffix: " ans", label: "d'alternance recherchés, de 2026 à 2028" },
  ],

  profile: {
    kicker: "Profil",
    title: "Un parcours atypique, une méthode rigoureuse.",
    paragraphs: [
      "Je recherche une alternance de 2 ans pour contribuer à des projets concrets en statistique, science des données et traitement d'image, et progresser au contact d'une équipe.",
      "En 2025, je suis revenu aux mathématiques par la voie appliquée : Licence 3 Ingénierie mathématique à l'Université de Bordeaux, où nous avons calibré un modèle d'EDO de l'activité mitochondriale sur des données expérimentales. Je poursuis en Master Mathématiques appliquées, statistique, parcours Image, Optimisation et sciences des données, de 2026 à 2028.",
      "Par le passé j'ai effectué des études de mathématiques fondamentales à l'université de Bordeaux, j'ai éffectué en suivant reconversion professionelle et j'ai choisi la pâtisserie : CAP, mention complémentaire, puis chef de partie au restaurant Le 7 de La Cité du Vin. Un métier de précision, de processus et de sang-froid.",
    ],
    valuesTitle: "Ce que j'apporte",
    values: [
      {
        icon: "sigma",
        title: "Rigueur mathématique",
        text: "Probabilités, statistique inférentielle, régression, EDO : je formalise un problème avant de le coder.",
      },
      {
        icon: "code",
        title: "Du modèle au code",
        text: "Prototype en Python, implémentation orientée objet en C++, validation numérique et visualisation claire des résultats.",
      },
      {
        icon: "flame",
        title: "Fiabilité sous pression",
        text: "Plusieurs années en cuisine professionnelle : processus exigeants, cadence, encadrement d'apprentis, travail en équipe.",
      },
    ],
    factsTitle: "En bref",
    facts: [
      { label: "Localisation", value: "Bordeaux · permis B" },
      { label: "Disponibilité", value: "Alternance de 2 ans · 2026–2028" },
      { label: "Formation", value: "Master MAS, parcours IOD · Université de Bordeaux" },
      { label: "Langues", value: "Français (langue maternelle) · anglais B1 · espagnol A2 · japonais A1" },
    ],
    seekingTitle: "Ce que je recherche",
    seeking: [
      "Analyse statistique",
      "Science des données",
      "Traitement d'image",
      "Modélisation & simulation",
      "Optimisation",
    ],
    sectorsLabel: "Secteurs visés",
    sectors: "santé et imagerie médicale, optique et photonique, environnement, industrie de préférence en R&D",
  },

  education: {
    kicker: "Formation",
    title: "La statistique au cœur de ma formation.",
    lead: "Un Master qui associe statistique, optimisation et traitement d'image : les outils de la R&D en santé, en optique ou en environnement.",
    degree: {
      period: "2026 2028 · en alternance",
      title: "Master Mathématiques appliquées, statistique",
      track: "Parcours Image, Optimisation et sciences des données (IOD)",
      school: "Université de Bordeaux",
      logoAlt: "Logo de l'Université de Bordeaux",
      text: "Le parcours IOD, ouvert à l'alternance en M1 et en M2, forme à l'analyse statistique des données, à l'optimisation et aux mathématiques du traitement d'image.",
    },
    coursesTitle: "Enseignements clés",
    impactLabel: "En entreprise :",
    appliedLabel: "Mis en pratique :",
    courses: [
      {
        icon: "dice",
        title: "Probabilités et statistique",
        text: "Lois de probabilité, estimation, théorèmes limites : quantifier l'incertitude d'une mesure ou d'une prévision.",
        impact: "fiabiliser une décision fondée sur des données.",
        applied: { label: "mini-projet climat de Bordeaux", href: "#projet-climat" },
      },
      {
        icon: "bell",
        title: "Statistique inférentielle",
        text: "Intervalles de confiance, tests d'hypothèses, p-valeurs, bootstrap : conclure à partir d'un échantillon.",
        impact: "distinguer un effet réel du simple bruit.",
        applied: { label: "mini-projet climat de Bordeaux", href: "#projet-climat" },
      },
      {
        icon: "regression",
        title: "Régression linéaire",
        text: "Moindres carrés, significativité des coefficients, diagnostic des résidus, comparaison de modèles.",
        impact: "expliquer une variable et estimer son évolution.",
        applied: { label: "mini-projet climat de Bordeaux", href: "#projet-climat" },
      },
      {
        icon: "bars",
        title: "Représentation des données statistiques",
        text: "Statistique descriptive, choix du graphique adapté, lecture critique des visualisations.",
        impact: "rendre un résultat lisible et convaincant pour tous.",
        applied: { label: "mini-projet climat de Bordeaux", href: "#projet-climat" },
      },
      {
        icon: "image",
        title: "Modélisation pour le traitement d'image",
        text: "Voir une image comme un signal en deux dimensions et la traiter par des modèles mathématiques : filtrage, débruitage, optimisation.",
        impact: "extraire l'information utile d'images médicales ou industrielles.",
        applied: { label: "équation de la chaleur, modèle de base du débruitage", href: "#projet-chaleur" },
      },
    ],
  },

  projects: {
    kicker: "Projets",
    title: "Quand la théorie rencontre les données.",
    lead: "Mes projets scientifiques suivent la même démarche : comprendre un phénomène, le modéliser, évaluer le modèle face aux données, puis interpréter les résultats.",

    climate: {
      badge: "Mini-projet statistique",
      meta: "Projet personnel · 2026 · données ouvertes Météo-France",
      title: "80 ans de températures à Bordeaux : mesurer le réchauffement",
      summary:
        "Quantifier la hausse des températures à Bordeaux-Mérignac depuis 1946, tester sa significativité et en mesurer une conséquence concrète : les jours de forte chaleur. Les méthodes statistiques sont codées à la main en Python, sans boîte noire.",
      stack: ["Python", "NumPy", "pandas", "SciPy", "Matplotlib"],
      chart: {
        label: "Température moyenne annuelle à Bordeaux-Mérignac de {first} à {last} : {decade} °C par décennie en moyenne.",
        stripesLabel: "Bandes de réchauffement : écart de chaque année à la normale {refStart}–{refEnd}, du bleu (plus froid) au rouge (plus chaud).",
        stripesTitle: "Écart à la normale {refStart}–{refEnd}",
        axisLabel: "Température moyenne annuelle (°C)",
        toggleLinear: "Droite de régression (IC 95 %)",
        toggleSegmented: "Changement de pente",
        legendObserved: "Moyenne annuelle observée",
        legendLinear: "Régression linéaire",
        legendSegmented: "Changement de pente (≈ {year}, date incertaine)",
        readout: "{year} : {value} °C, écart à la normale {anomaly} °C",
        hint: "Survolez le graphique ou utilisez les flèches du clavier pour lire chaque année.",
      },
      resultsTitle: "Résultats clés",
      results: {
        trend: {
          value: "+{decade} °C",
          unit: "par décennie",
          text: "Tendance {first}–{last}, IC 95 % corrigé de l'autocorrélation [{low} ; {high}].",
        },
        recent: {
          value: "+{decade} °C",
          unit: "par décennie depuis {start}",
          text: "Réchauffement non linéaire : la hausse s'accélère, IC 95 % [{low} ; {high}]. 2016–2025 : +{lastDecade} °C par rapport à {refStart}–{refEnd}.",
        },
        hot: {
          value: "×{ratio}",
          unit: "par décennie",
          text: "Jours à 30 °C ou plus : {oldMean} → {newMean} par an entre les deux normales ; régression binomiale négative, IC [{low} ; {high}].",
        },
        neighbours: {
          value: "+{difference} °C",
          unit: "par décennie de plus que les voisines",
          text: "Mérignac se réchauffe plus vite que {count} stations voisines ({composite} °C par décennie), IC [{low} ; {high}] : une part locale est possible.",
        },
      },
      stepsTitle: "La démarche",
      steps: [
        {
          icon: "sigma",
          title: "Modéliser",
          text: "Régression linéaire de la température annuelle sur le temps, puis modèle à changement de pente (deux droites raccordées) et régression de comptage (Poisson, puis binomiale négative) pour les jours de forte chaleur.",
        },
        {
          icon: "check",
          title: "Évaluer",
          text: "Diagnostic des résidus et intervalles corrigés de l'autocorrélation, bootstrap par blocs, p-value du changement de pente par bootstrap paramétrique, comparaison des modèles par AIC, binomiale négative face à la surdispersion, et contrôle d'homogénéité face à 4 stations voisines (test SNHT).",
        },
        {
          icon: "bulb",
          title: "Interpréter",
          text: "Un réchauffement net et significatif, qui s'accélère à partir des années 1960-1970 (date du changement de pente incertaine). Mais l'écart avec les voisines progresse par paliers, en 1974 puis à la fin des années 1980 : un probable changement de site ou d'instruments, à vérifier dans les métadonnées de Météo-France.",
        },
      ],
      figuresTitle: "Extraits de l'analyse",
      figures: [
        {
          id: "residus",
          alt: "Trois graphiques de diagnostic : résidus en fonction du temps, diagramme quantile-quantile proche de la droite, autocorrélation des résidus.",
          caption: "Diagnostic des résidus : normalité correcte, autocorrélation d'ordre 1 (r = {r1}) prise en compte dans l'intervalle de confiance.",
        },
        {
          id: "voisines",
          alt: "À gauche, les anomalies de Mérignac et du composite de quatre stations voisines ; à droite, leur écart annuel, qui passe d'environ −0,3 à +0,3 °C par paliers.",
          caption: "Contrôle d'homogénéité : l'écart avec les voisines évolue par paliers (rupture détectée en 1974).",
        },
        {
          id: "normales",
          alt: "Boîtes à moustaches des températures annuelles pour 1961–1990 et 1991–2020, et histogramme bootstrap de leur différence.",
          caption: "Deux normales de 30 ans : +{difference} °C, IC par bootstrap par blocs [{low} ; {high}].",
        },
        {
          id: "chaleur",
          alt: "Diagramme en barres des jours de forte chaleur par an, avec la courbe croissante du modèle binomial négatif.",
          caption: "Jours à 30 °C ou plus et régression binomiale négative, préférée au modèle de Poisson (AIC plus faible).",
        },
      ],
      links: {
        code: "Code et analyse complète",
        data: "Source des données (Météo-France)",
      },
    },

    featured: {
      badge: "Projet de Licence 3",
      meta: "Licence 3 Ingénierie mathématique · Université de Bordeaux · 2025–2026",
      title: "Calibration d'un modèle d'EDO de l'activité mitochondriale par algorithme génétique",
      summary:
        "Reproduire la consommation d'oxygène mesurée sur des mitochondries à partir d'un modèle biophysique non linéaire (Bertram et al., 2006) : transcription du modèle, implémentation en C++, extension aux ajouts d'ADP du protocole expérimental, puis calibration de 30 paramètres sur 5 séries de mesures.",
      team: "Projet d'équipe (5 étudiants) · Tuteur : Michael Leguèbe",
      role: "Ma contribution principale : l'algorithme génétique de calibration et la réécriture du modèle de Bertram en C++, validée face aux figures de référence de l'article.",
      stack: ["C++", "Python", "NumPy", "Matplotlib", "Runge-Kutta 4", "Algorithme génétique", "CellML", "LaTeX"],
      figure: {
        alt: "Concentration en oxygène normalisée entre 14 et 20,7 minutes : les mesures (bleu) et le modèle calibré (rouge) se superposent.",
        caption: "Consommation d'O₂ normalisée : mesures (bleu) et modèle C++ calibré (rouge).",
      },
      open: "Voir l'étude de cas détaillée",
      close: "Masquer l'étude de cas",
      tabsLabel: "Étapes du projet",
      steps: {
        model: {
          label: "Modéliser",
          title: "Un système de 4 EDO non linéaires",
          text: [
            "Le modèle de Bertram simplifie celui de Magnus–Keizer : 4 variables d'état pilotées par 9 flux biochimiques (production de NADH, consommation d'oxygène, pompage de protons, synthèse d'ATP, échanges de calcium…).",
            "Le système s'écrit comme un problème de Cauchy dX/dt = F(X, θ). F étant de classe C¹ sur le domaine physiologique (concentrations positives), le théorème de Cauchy–Lipschitz garantit l'existence et l'unicité d'une solution locale.",
          ],
          variables: [
            { symbol: "NADH", sub: "m", label: "NADH mitochondrial" },
            { symbol: "Ca", sub: "m", label: "calcium mitochondrial" },
            { symbol: "ΔΨ", sub: "", label: "potentiel de membrane" },
            { symbol: "ADP", sub: "m", label: "ADP mitochondrial" },
          ],
          extension:
            "Extension du modèle : une 5ᵉ variable, l'ADP extérieur, représente les ajouts d'ADP du protocole expérimental, et le flux J_ANT est remplacé par sa forme de Magnus–Keizer.",
        },
        implement: {
          label: "Implémenter",
          title: "Du modèle publié à un code C++ prêt pour la calibration",
          pipeline: [
            { name: "CellML", text: "Lecture et traduction du modèle de référence publié (XML)" },
            { name: "Python", text: "Prototype lisible, reproduction des courbes de l'article" },
            { name: "C++", text: "Classes Bertram et BertramEtendue (héritage), solveur RK4" },
            { name: "Python ⇄ C++", text: "Paramètres passés en argv, simulations pilotées par subprocess.run" },
          ],
          text: [
            "Le débogage a demandé une analyse dimensionnelle systématique de chaque flux pour corriger des incohérences d'unités.",
            "Le solveur Runge-Kutta d'ordre 4 a été validé face à une solution exacte et à un schéma d'Euler implicite, avant de reproduire les figures de référence de Bertram.",
          ],
          figure: {
            alt: "Six graphiques des sorties du modèle C++ : calcium cytosolique et mitochondrial, NADH, potentiel de membrane, flux d'oxygène et ATP en réponse à trois impulsions de calcium.",
            caption: "Sorties de notre implémentation C++ : réponse aux impulsions de calcium, conforme aux figures de référence de Bertram et al.",
          },
          figureRk4: {
            alt: "Courbe de la solution exacte e^t superposée aux points de l'approximation RK4, parfaitement confondus.",
            caption: "Validation du solveur : RK4 face à la solution exacte de y′ = y.",
          },
        },
        calibrate: {
          label: "Calibrer",
          title: "Un algorithme génétique face aux mesures",
          text: [
            "Pour chaque série expérimentale, des régressions linéaires par segments extraient 4 pentes caractéristiques et leurs rapports, avant et après les ajouts d'ADP.",
            "L'algorithme génétique cherche le vecteur de paramètres X qui minimise la somme des écarts quadratiques entre indicateurs simulés et expérimentaux :",
          ],
          costNote: "Un terme d'écart point à point, faiblement pondéré (poids 0,2), complète ce critère.",
          specsTitle: "Réglages de l'algorithme",
          specs: [
            { label: "Population", value: "100 individus, ±30 % autour des paramètres de Bertram" },
            { label: "Sélection", value: "les 25 meilleurs (coût le plus faible)" },
            { label: "Reproduction", value: "combinaison linéaire des parents + bruit gaussien σ = 3 %" },
            { label: "Générations", value: "25" },
            { label: "Anti-stagnation", value: "mutation élargie après 3 générations sans progrès" },
          ],
        },
        results: {
          label: "Résultats",
          title: "Un modèle calibré proche des mesures",
          figure: {
            alt: "Courbe de concentration en oxygène normalisée entre 14 et 20,7 minutes : les données expérimentales bruitées (bleu) et le modèle calibré (rouge) se superposent.",
            caption: "Consommation d'O₂ normalisée : données expérimentales (bleu) et modèle C++ calibré (rouge).",
          },
          highlights: [
            "Série de référence : ajustement très proche des mesures, coût final J = 1,92.",
            "30 paramètres ajustés simultanément, à partir d'une population initiale à ±30 % des valeurs publiées.",
            "Même démarche sur les 4 autres séries, avec des écarts résiduels localisés.",
          ],
          perspectivesTitle: "Pistes d'amélioration",
          perspectives:
            "Régler les hyperparamètres (population, générations, mutation), réduire l'espace de recherche en fixant les paramètres peu influents, partir de meilleures initialisations.",
          reportLink: "Lire le rapport (PDF, 15 pages)",
          paperLink: "Article de Bertram et al. (2006)",
        },
      },
      demo: {
        title: "Démo interactive : l'algorithme génétique en action",
        intro:
          "Réimplémentation JavaScript simplifiée de notre algorithme (100 individus, 25 parents, bruit de 3 %, 25 générations), appliquée à une sigmoïde à 4 paramètres comme lors de nos tests de validation.",
        chartLabel: "Ajustement d'une sigmoïde à des mesures bruitées par algorithme génétique",
        legendData: "Mesures bruitées",
        legendBest: "Meilleur individu",
        legendParents: "25 parents sélectionnés",
        legendTruth: "Courbe réelle",
        showTruth: "Afficher la courbe réelle",
        run: "Lancer",
        pause: "Pause",
        resume: "Reprendre",
        restart: "Nouveau tirage",
        generation: "Génération",
        error: "Erreur (RMSE)",
        noise: "Bruit de mesure",
        params: "Paramètres estimés",
        converged: "Convergé : l'erreur rejoint le niveau du bruit de mesure ; les résidus ne sont plus que du bruit.",
        finished: "25 générations écoulées. Lancez un nouveau tirage pour comparer.",
      },
    },

    othersTitle: "Autres projets",
    others: [
      {
        id: "chaleur",
        title: "Équation de la chaleur 1D : visualisation interactive",
        context: "Devoir d'analyse numérique, Université de Bordeaux, prolongé en projet personnel",
        text: "Résolution numérique de l'équation de la chaleur, une EDP (système linéaire résolu par gradient conjugué), comparée en temps réel à la solution analytique avec suivi de l'erreur L². Interface C++/SFML : lancement, arrêt, réglage des paramètres (μ, α, taille du maillage).",
        note: "L'en-tête de ce site en est un clin d'œil : une version 2D, calculée en direct dans votre navigateur.",
        tags: ["C++", "SFML", "Analyse numérique", "Gradient conjugué"],
        media: "heat",
        mediaAlt: "Interface SFML de simulation de l'équation de la chaleur 1D : panneau de paramètres et courbe de température en cloche.",
        videoLabel: "Vidéo de démonstration de la simulation",
        links: [{ label: "Sujet du devoir (PDF)", href: "heatAssignment" }],
      },
      {
        id: "cthulhu",
        title: "Site de jeu de rôle : L'Appel de Cthulhu",
        status: "En développement",
        text: "Application web dédiée au jeu de rôle L'Appel de Cthulhu : structuration des données, logique applicative et conception de l'interface utilisateur.",
        tags: ["Développement web", "Structuration des données", "Interface utilisateur"],
        media: "cthulhu",
        links: [],
      },
      {
        id: "ia",
        title: "IA agentique & modding communautaire",
        text: "Conception de mon propre harness (orchestrateur) d'agents IA et prompt engineering pour développer des mods de jeux vidéo et des outils au service d'une communauté de joueurs.",
        tags: ["IA générative", "Agents", "Prompt engineering", "Git"],
        media: "agents",
        links: [],
      },
      {
        id: "cv",
        title: "Ce CV numérique",
        text: "Site bilingue développé en React et Vite : simulation de l'équation de la chaleur sur canvas, graphiques interactifs, thèmes clair et sombre, accessibilité et déploiement continu par GitHub Actions.",
        tags: ["React", "Vite", "Canvas", "i18n", "GitHub Actions"],
        media: "site",
        links: [{ label: "Code source", href: "repo" }],
      },
    ],
  },

  skills: {
    kicker: "Compétences",
    title: "Du tableau noir au code.",
    lead: "Des fondamentaux mathématiques solides, mis en œuvre avec des outils modernes.",
    groups: [
      {
        icon: "sigma",
        title: "Mathématiques & statistique",
        items: [
          "Probabilités & statistique inférentielle : tests, intervalles de confiance, bootstrap",
          "Régression linéaire, modèle à rupture, régression de Poisson",
          "Modélisation par EDO / EDP",
          "Analyse numérique : RK4, Euler implicite, gradient conjugué",
          "Optimisation : algorithme génétique, moindres carrés",
          "Traitement d'image : parcours IOD, en cours",
        ],
      },
      {
        icon: "code",
        title: "Programmation",
        items: [
          "Python (NumPy, pandas, SciPy, Matplotlib)",
          "C++ (POO, héritage)",
          "R",
          "SQL",
          "JavaScript · React",
          "HTML · CSS",
          "SFML",
        ],
      },
      {
        icon: "tools",
        title: "Outils & environnement",
        items: [
          "Git · GitHub · GitLab",
          "GitHub Actions",
          "LaTeX · Overleaf",
          "Linux (Ubuntu, Debian) · Windows",
          "Vite · npm",
        ],
      },
      {
        icon: "spark",
        title: "IA & méthodes",
        items: [
          "IA générative & agentique",
          "Prompt engineering",
          "Conception d'un harness d'agents",
          "Scrum · PSPO",
          "Méthode ARE (analyse des besoins)",
        ],
      },
    ],
    softTitle: "Savoir-être",
    soft: [
      "Gestion du stress",
      "Rigueur",
      "Esprit d'analyse",
      "Curiosité intellectuelle",
      "Adaptabilité",
      "Travail en équipe",
      "Aisance à l'oral",
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Français", level: "Langue maternelle", rank: 6 },
      { name: "Anglais", level: "B1 · Linguaskill (145)", rank: 3 },
      { name: "Espagnol", level: "A2", rank: 2 },
      { name: "Japonais", level: "A1", rank: 1 },
    ],
    cefrLabel: "Niveau CECRL",
  },

  journey: {
    kicker: "Parcours",
    title: "De la pâtisserie aux mathématiques appliquées.",
    lead: "Une reconversion construite étape par étape : la rigueur de la cuisine au service des mathématiques.",
    educationTitle: "Formation",
    experienceTitle: "Expérience professionnelle",
    highlightTag: "En alternance",
    education: [
      {
        period: "2026 2028",
        title: "Master Mathématiques appliquées, statistique",
        org: "Université de Bordeaux · parcours Image, Optimisation et sciences des données (IOD)",
        details: ["Formation suivie en alternance"],
        highlight: true,
      },
      {
        period: "2025 2026",
        title: "Licence 3 Ingénierie mathématique",
        org: "Université de Bordeaux",
        details: ["Projet : calibration d'un modèle d'EDO mitochondrial par algorithme génétique"],
      },
      {
        period: "2025",
        title: "Méthode ARE & formation commerciale",
        org: "Formation professionnelle",
      },
      {
        period: "2024",
        title: "PSPO Scrum Product Owner",
        org: "Formation Scrum · gestion de projet agile",
      },
      {
        period: "2021 2024",
        title: "CAP Pâtissier + mention complémentaire",
        org: "Institut des Saveurs",
        details: ["Mention complémentaire pâtisserie, glacerie, chocolaterie, confiserie spécialisées"],
      },
      {
        period: "2016 — 2019",
        title: "Études de licence de mathématiques fondamentales",
        org: "Université de Bordeaux",
      },
      {
        period: "2016",
        title: "Baccalauréat scientifique",
        org: "Lycée Gustave Eiffel",
      },
    ],
    experience: [
      {
        period: "Projet entrepreneurial",
        title: "Co-gestion d'entreprise",
        org: "Entreprise d'un artiste illustrateur & character designer",
        details: [
          "Gestion administrative et organisationnelle : accueil des clients, stocks, comptabilité",
          "Analyse statistique et gestion des données de l'entreprise",
          "Vente lors d'événements",
        ],
      },
      {
        period: "Janv. 2025 Août 2025",
        title: "Responsable d'admission de nouveaux élèves",
        org: "Youschool, école à distance",
        details: [
          "Méthode ARE : analyse des besoins, aide à la décision",
          "Argumentation commerciale et communication",
          "Relation client et exigence de qualité",
        ],
      },
      {
        period: "Août 2023 Janv. 2025",
        title: "Chef de partie pâtisserie",
        org: "Le 7 Restaurant, La Cité du Vin · Bordeaux",
        details: [
          "Mise en place et respect de processus rigoureux",
          "Gestion des contraintes de production",
          "Encadrement d'apprentis et de stagiaires",
        ],
      },
      {
        period: "Août 2021 Juil. 2022",
        title: "Apprenti pâtissier",
        org: "Bérénils · Pessac",
        details: [
          "Bonnes pratiques d'hygiène et de sécurité",
          "Gestion des stocks et des approvisionnements",
          "Respect des normes de qualité et de présentation",
        ],
      },
    ],
  },

  contact: {
    kicker: "Contact",
    title: "Vous recrutez un alternant ?",
    text: "Statistique, science des données, traitement d'image ou modélisation : je serais ravi d'échanger sur vos projets et sur la façon dont je peux y contribuer pendant mon Master (2026–2028).",
    emailCta: "Écrire un e-mail",
    copyEmail: "Copier l'adresse",
    copied: "Adresse copiée",
    cvCta: "Télécharger le CV",
    channels: {
      email: "E-mail",
      phone: "Téléphone",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Localisation",
    },
    referencesTitle: "Références",
    references: ["Université de Bordeaux", "Université de Bordeaux · tuteur de mon projet de Licence 3"],
  },

  footer: {
    rights: "Bordeaux",
    source: "Code source",
    top: "Haut de page",
  },
};

export default fr;
