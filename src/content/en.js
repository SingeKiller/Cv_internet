const en = {
  meta: {
    title: "Olivier Repauzet — Apprenticeship in data & statistics · Master's MAS, University of Bordeaux",
    description:
      "Digital CV of Olivier Repauzet, Master's student in Applied Mathematics & Statistics (Image, Optimisation and Data Science track) at the University of Bordeaux, seeking a 2-year apprenticeship in statistics, data science and image processing.",
  },

  ui: {
    skipLink: "Skip to content",
    navLabel: "Main navigation",
    nav: {
      profile: "Profile",
      education: "Education",
      projects: "Projects",
      journey: "Background",
      skills: "Skills",
      contact: "Contact",
    },
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langLabel: "Site language",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme",
    cvShort: "CV",
    cvDownload: "Download CV (PDF, in French)",
    backToTop: "Back to top",
    close: "Close",
    zoomImage: "Enlarge image",
    imageDialog: "Enlarged image",
    newTab: "(new tab)",
  },

  hero: {
    status: "Seeking a 2-year apprenticeship · data & statistics · Bordeaux",
    firstName: "Olivier",
    lastName: "Repauzet",
    tagline: ["Model.", "Evaluate.", "Interpret."],
    pitch:
      "Master's student in Applied Mathematics & Statistics at the University of Bordeaux (Image, Optimisation and Data Science track), I build models from data, assess how reliable they are and turn the results into useful conclusions, in Python and C++.",
    ctaPrimary: "Explore my projects",
    ctaSecondary: "Download CV",
    simCaption: "∂u/∂t = α Δu — heat equation solved live",
    simHint: "Hover or tap to add heat",
    simPause: "Pause the simulation",
    simPlay: "Resume the simulation",
    scrollHint: "Scroll to profile",
  },

  metrics: [
    { id: "projects", label: "scientific and technical projects showcased on this site" },
    { id: "experience", value: 4, suffix: " years", label: "of professional experience on fixed-term and permanent contracts" },
    { id: "master", value: "Master's", label: "Applied Mathematics & Statistics · IOD track · University of Bordeaux" },
    { id: "apprenticeship", value: 2, suffix: " years", label: "apprenticeship sought, from 2026 to 2028" },
  ],

  profile: {
    kicker: "Profile",
    title: "An unconventional path, a rigorous method.",
    paragraphs: [
      "After studying pure mathematics at university, I chose pastry: a vocational diploma (CAP), a one-year specialisation, then chef de partie at Le 7, the restaurant of La Cité du Vin in Bordeaux. A craft built on precision, process and composure.",
      "In 2025 I returned to mathematics through the applied route: a final-year Bachelor's in Mathematical Engineering at the University of Bordeaux, where our team calibrated an ODE model of mitochondrial activity against experimental data. From 2026 to 2028 I am taking the Master's in Applied Mathematics & Statistics, Image, Optimisation and Data Science track.",
      "I am looking for a 2-year apprenticeship to contribute to real-world projects in statistics, data science and image processing, and to grow alongside an experienced team.",
    ],
    valuesTitle: "What I bring",
    values: [
      {
        icon: "sigma",
        title: "Mathematical rigour",
        text: "Probability, inferential statistics, regression, ODEs: I formalise a problem before coding it.",
      },
      {
        icon: "code",
        title: "From model to code",
        text: "Python prototyping, object-oriented C++ implementation, numerical validation and clear visualisation of results.",
      },
      {
        icon: "flame",
        title: "Reliable under pressure",
        text: "Several years in professional kitchens: demanding processes, fast pace, mentoring apprentices, teamwork.",
      },
    ],
    factsTitle: "At a glance",
    facts: [
      { label: "Location", value: "Bordeaux · driving licence" },
      { label: "Availability", value: "2‑year apprenticeship · 2026–2028" },
      { label: "Education", value: "Master's MAS, IOD track · University of Bordeaux" },
      { label: "Languages", value: "French (native) · English B1 · Spanish A2 · Japanese A1" },
    ],
    seekingTitle: "What I'm looking for",
    seeking: [
      "Statistical analysis",
      "Data science",
      "Image processing",
      "Modelling & simulation",
      "Optimisation",
    ],
    sectorsLabel: "Target sectors",
    sectors: "healthcare and medical imaging, optics and photonics, environment, industry — ideally in R&D",
  },

  education: {
    kicker: "Education",
    title: "Statistics at the heart of my training.",
    lead: "A Master's that combines statistics, optimisation and image processing: the toolkit of R&D in healthcare, optics and the environment.",
    degree: {
      period: "2026 — 2028 · apprenticeship",
      title: "Master's in Applied Mathematics & Statistics",
      track: "Image, Optimisation and Data Science track (IOD)",
      school: "University of Bordeaux",
      logoAlt: "University of Bordeaux logo",
      text: "The IOD track, open to apprentices in both years, covers the statistical analysis of data, optimisation and the mathematics of image processing.",
    },
    coursesTitle: "Key courses",
    impactLabel: "At work:",
    appliedLabel: "Put into practice:",
    courses: [
      {
        icon: "dice",
        title: "Probability and statistics",
        text: "Probability distributions, estimation, limit theorems: quantifying the uncertainty of a measurement or a forecast.",
        impact: "making data-driven decisions more reliable.",
        applied: { label: "Bordeaux climate mini-project", href: "#projet-climat" },
      },
      {
        icon: "bell",
        title: "Inferential statistics",
        text: "Confidence intervals, hypothesis tests, p-values, bootstrap: drawing conclusions from a sample.",
        impact: "telling a real effect from mere noise.",
        applied: { label: "Bordeaux climate mini-project", href: "#projet-climat" },
      },
      {
        icon: "regression",
        title: "Linear regression",
        text: "Least squares, significance of coefficients, residual diagnostics, model comparison.",
        impact: "explaining a variable and estimating how it changes.",
        applied: { label: "Bordeaux climate mini-project", href: "#projet-climat" },
      },
      {
        icon: "bars",
        title: "Statistical data representation",
        text: "Descriptive statistics, choosing the right chart, critical reading of visualisations.",
        impact: "making a result clear and convincing for everyone.",
        applied: { label: "Bordeaux climate mini-project", href: "#projet-climat" },
      },
      {
        icon: "image",
        title: "Modelling for image processing",
        text: "Treating an image as a two-dimensional signal and processing it with mathematical models: filtering, denoising, optimisation.",
        impact: "extracting useful information from medical or industrial images.",
        applied: { label: "heat equation, the basic model of denoising", href: "#projet-chaleur" },
      },
    ],
  },

  projects: {
    kicker: "Projects",
    title: "Where theory meets data.",
    lead: "My scientific projects follow the same approach: understand a phenomenon, model it, test the model against data, then interpret the results.",

    climate: {
      badge: "Statistics mini-project",
      meta: "Personal project · 2026 · Météo-France open data",
      title: "80 years of temperatures in Bordeaux: measuring the warming",
      summary:
        "Quantifying the rise in temperatures at Bordeaux-Mérignac since 1946, testing its significance and measuring one concrete consequence: hot days. The statistical methods are hand-coded in Python, with no black box.",
      stack: ["Python", "NumPy", "pandas", "SciPy", "Matplotlib"],
      chart: {
        label: "Annual mean temperature at Bordeaux-Mérignac from {first} to {last}: {decade} °C per decade on average.",
        stripesLabel: "Warming stripes: each year's departure from the {refStart}–{refEnd} normal, from blue (colder) to red (warmer).",
        stripesTitle: "Departure from the {refStart}–{refEnd} normal",
        axisLabel: "Annual mean temperature (°C)",
        toggleLinear: "Regression line (95% CI)",
        toggleSegmented: "Change in slope",
        legendObserved: "Observed annual mean",
        legendLinear: "Linear regression",
        legendSegmented: "Change in slope (≈ {year}, uncertain date)",
        readout: "{year}: {value} °C, {anomaly} °C from the normal",
        hint: "Hover over the chart or use the arrow keys to read each year.",
      },
      resultsTitle: "Key results",
      results: {
        trend: {
          value: "+{decade} °C",
          unit: "per decade",
          text: "Trend {first}–{last}, 95% CI adjusted for autocorrelation [{low}, {high}].",
        },
        recent: {
          value: "+{decade} °C",
          unit: "per decade since {start}",
          text: "Non-linear warming that speeds up, 95% CI [{low}, {high}]. 2016–2025: +{lastDecade} °C above {refStart}–{refEnd}.",
        },
        hot: {
          value: "×{ratio}",
          unit: "per decade",
          text: "Days at 30 °C or more: {oldMean} → {newMean} per year between the two normals; negative binomial regression, CI [{low}, {high}].",
        },
        neighbours: {
          value: "+{difference} °C",
          unit: "per decade more than the neighbours",
          text: "Mérignac warms faster than {count} neighbouring stations ({composite} °C per decade), CI [{low}, {high}]: part of it may be local.",
        },
      },
      stepsTitle: "The approach",
      steps: [
        {
          icon: "sigma",
          title: "Model",
          text: "Linear regression of the annual temperature on time, then a change-in-slope model (two joined lines) and a count regression (Poisson, then negative binomial) for hot days.",
        },
        {
          icon: "check",
          title: "Evaluate",
          text: "Residual diagnostics and autocorrelation-adjusted intervals, block bootstrap, a parametric-bootstrap p-value for the change in slope, AIC model comparison, a negative binomial model for overdispersion, and a homogeneity check against 4 neighbouring stations (SNHT).",
        },
        {
          icon: "bulb",
          title: "Interpret",
          text: "A clear and significant warming that speeds up from the 1960s-1970s (uncertain date for the change in slope). Yet the gap with the neighbours grows in steps, in 1974 and again in the late 1980s: most likely a change of site or instruments, to be checked in Météo-France's station metadata.",
        },
      ],
      figuresTitle: "From the analysis",
      figures: [
        {
          id: "residus",
          alt: "Three diagnostic plots: residuals over time, a quantile-quantile plot close to the line, autocorrelation of the residuals.",
          caption: "Residual diagnostics: normality holds, lag-1 autocorrelation (r = {r1}) taken into account in the confidence interval.",
        },
        {
          id: "voisines",
          alt: "Left, the anomalies of Mérignac and of a composite of four neighbouring stations; right, their yearly gap, which moves in steps from about −0.3 to +0.3 °C.",
          caption: "Homogeneity check: the gap with the neighbours changes in steps (break detected in 1974).",
        },
        {
          id: "normales",
          alt: "Box plots of annual temperatures for 1961–1990 and 1991–2020, and a bootstrap histogram of their difference.",
          caption: "Two 30-year normals: +{difference} °C, block-bootstrap CI [{low}, {high}].",
        },
        {
          id: "chaleur",
          alt: "Bar chart of hot days per year, with the rising curve of the negative binomial model.",
          caption: "Days at 30 °C or more and negative binomial regression, preferred to Poisson (lower AIC).",
        },
      ],
      links: {
        code: "Code and full analysis",
        data: "Data source (Météo-France)",
      },
    },

    featured: {
      badge: "Final-year Bachelor's project",
      meta: "BSc Mathematics, final year (Mathematical Engineering) · University of Bordeaux · 2025–2026",
      title: "Calibrating an ODE model of mitochondrial activity with a genetic algorithm",
      summary:
        "Reproducing the oxygen consumption measured on mitochondria with a nonlinear biophysical model (Bertram et al., 2006): transcribing the model, implementing it in C++, extending it to the ADP additions of the experimental protocol, then calibrating 30 parameters against 5 measurement series.",
      team: "Team project (5 students) · Supervisor: Michael Leguèbe",
      role: "My main contribution: the genetic calibration algorithm and the C++ rewrite of Bertram's model, validated against the paper's reference figures.",
      stack: ["C++", "Python", "NumPy", "Matplotlib", "Runge-Kutta 4", "Genetic algorithm", "CellML", "LaTeX"],
      figure: {
        alt: "Normalised oxygen concentration between 14 and 20.7 minutes: the measurements (blue) and the calibrated model (red) overlap.",
        caption: "Normalised O₂ consumption: measurements (blue) and calibrated C++ model (red).",
      },
      open: "Show the detailed case study",
      close: "Hide the case study",
      tabsLabel: "Project stages",
      steps: {
        model: {
          label: "Model",
          title: "A system of 4 nonlinear ODEs",
          text: [
            "Bertram's model simplifies the Magnus–Keizer model: 4 state variables driven by 9 biochemical fluxes (NADH production, oxygen consumption, proton pumping, ATP synthesis, calcium exchange…).",
            "Written as an initial value problem dX/dt = F(X, θ) with F continuously differentiable on the physiological domain (positive concentrations), the system has a unique local solution by the Cauchy–Lipschitz (Picard–Lindelöf) theorem.",
          ],
          variables: [
            { symbol: "NADH", sub: "m", label: "mitochondrial NADH" },
            { symbol: "Ca", sub: "m", label: "mitochondrial calcium" },
            { symbol: "ΔΨ", sub: "", label: "membrane potential" },
            { symbol: "ADP", sub: "m", label: "mitochondrial ADP" },
          ],
          extension:
            "Model extension: a 5th variable, external ADP, represents the ADP additions of the experimental protocol, and the J_ANT flux is replaced by its Magnus–Keizer form.",
        },
        implement: {
          label: "Implement",
          title: "From a published model to C++ code ready for calibration",
          pipeline: [
            { name: "CellML", text: "Reading and translating the published reference model (XML)" },
            { name: "Python", text: "Readable prototype reproducing the paper's curves" },
            { name: "C++", text: "Bertram and BertramEtendue classes (inheritance), RK4 solver" },
            { name: "Python ⇄ C++", text: "Parameters passed via argv, simulations driven by subprocess.run" },
          ],
          text: [
            "Debugging required a systematic dimensional analysis of every flux to fix unit inconsistencies.",
            "The fourth-order Runge-Kutta solver was validated against an exact solution and an implicit Euler scheme before reproducing Bertram's reference figures.",
          ],
          figure: {
            alt: "Six plots of the C++ model outputs: cytosolic and mitochondrial calcium, NADH, membrane potential, oxygen flux and ATP in response to three calcium pulses.",
            caption: "Output of our C++ implementation: response to calcium pulses, matching the reference figures of Bertram et al.",
          },
          figureRk4: {
            alt: "Exact solution e^t overlaid with the RK4 approximation points, which coincide perfectly.",
            caption: "Solver validation: RK4 against the exact solution of y′ = y.",
          },
        },
        calibrate: {
          label: "Calibrate",
          title: "A genetic algorithm against the measurements",
          text: [
            "For each experimental series, piecewise linear regressions extract 4 characteristic slopes and their ratios, before and after the ADP additions.",
            "The genetic algorithm searches for the parameter vector X that minimises the sum of squared differences between simulated and experimental indicators:",
          ],
          costNote: "A lightly weighted point-by-point term (weight 0.2) completes this criterion.",
          specsTitle: "Algorithm settings",
          specs: [
            { label: "Population", value: "100 individuals, ±30% around Bertram's parameters" },
            { label: "Selection", value: "the 25 fittest (lowest cost)" },
            { label: "Reproduction", value: "linear combination of parents + Gaussian noise σ = 3%" },
            { label: "Generations", value: "25" },
            { label: "Anti-stagnation", value: "mutation range widened after 3 generations without progress" },
          ],
        },
        results: {
          label: "Results",
          title: "A calibrated model close to the measurements",
          figure: {
            alt: "Normalised oxygen concentration between 14 and 20.7 minutes: the noisy experimental data (blue) and the calibrated model (red) overlap.",
            caption: "Normalised O₂ consumption: experimental data (blue) and calibrated C++ model (red).",
          },
          highlights: [
            "Reference series: close fit to the measurements, final cost J = 1.92.",
            "30 parameters fitted simultaneously, starting from a population within ±30% of the published values.",
            "Same approach on the other 4 series, with some local discrepancies.",
          ],
          perspectivesTitle: "Next steps",
          perspectives:
            "Tune the hyperparameters (population, generations, mutation), shrink the search space by fixing low-sensitivity parameters, start from better initial guesses.",
          reportLink: "Read the report (PDF in French, 15 pages)",
          paperLink: "Bertram et al. (2006) paper",
        },
      },
      demo: {
        title: "Interactive demo: the genetic algorithm at work",
        intro:
          "A simplified JavaScript re-implementation of our algorithm (100 individuals, 25 parents, 3% noise, 25 generations), applied to a 4-parameter sigmoid as in our validation tests.",
        chartLabel: "Genetic-algorithm fit of a sigmoid to noisy measurements",
        legendData: "Noisy measurements",
        legendBest: "Best individual",
        legendParents: "25 selected parents",
        legendTruth: "True curve",
        showTruth: "Show the true curve",
        run: "Run",
        pause: "Pause",
        resume: "Resume",
        restart: "New draw",
        generation: "Generation",
        error: "Error (RMSE)",
        noise: "Measurement noise",
        params: "Estimated parameters",
        converged: "Converged: the error has reached the measurement-noise level, so the residuals are now pure noise.",
        finished: "25 generations done. Run a new draw to compare.",
      },
    },

    othersTitle: "Other projects",
    others: [
      {
        id: "chaleur",
        title: "1D heat equation: interactive visualisation",
        context: "Numerical analysis assignment, University of Bordeaux, extended as a personal project",
        text: "Numerical solution of the heat equation, a PDE (linear system solved with the conjugate gradient method), compared in real time with the analytical solution while tracking the L² error. C++/SFML interface: start, stop and tune the parameters (μ, α, mesh size).",
        note: "This site's header is a nod to it: a 2D version computed live in your browser.",
        tags: ["C++", "SFML", "Numerical analysis", "Conjugate gradient"],
        media: "heat",
        mediaAlt: "SFML interface simulating the 1D heat equation: parameter panel and bell-shaped temperature curve.",
        videoLabel: "Demo video of the simulation",
        links: [{ label: "Assignment brief (PDF, in French)", href: "heatAssignment" }],
      },
      {
        id: "cthulhu",
        title: "Role-playing game website: Call of Cthulhu",
        status: "In progress",
        text: "A web application for the Call of Cthulhu role-playing game: data structuring, application logic and user-interface design.",
        tags: ["Web development", "Data structuring", "User interface"],
        media: "cthulhu",
        links: [],
      },
      {
        id: "ia",
        title: "Agentic AI & community modding",
        text: "Designing my own AI agent harness (orchestrator) and using prompt engineering to build video-game mods and tools for a player community.",
        tags: ["Generative AI", "Agents", "Prompt engineering", "Git"],
        media: "agents",
        links: [],
      },
      {
        id: "cv",
        title: "This digital CV",
        text: "A bilingual site built with React and Vite: heat-equation simulation on canvas, interactive charts, light and dark themes, accessibility and continuous deployment with GitHub Actions.",
        tags: ["React", "Vite", "Canvas", "i18n", "GitHub Actions"],
        media: "site",
        links: [{ label: "Source code", href: "repo" }],
      },
    ],
  },

  skills: {
    kicker: "Skills",
    title: "From blackboard to code.",
    lead: "Solid mathematical foundations, put to work with modern tools.",
    groups: [
      {
        icon: "sigma",
        title: "Mathematics & statistics",
        items: [
          "Probability & inferential statistics: tests, confidence intervals, bootstrap",
          "Linear regression, breakpoint models, Poisson regression",
          "ODE / PDE modelling",
          "Numerical analysis: RK4, implicit Euler, conjugate gradient",
          "Optimisation: genetic algorithms, least squares",
          "Image processing: IOD track, in progress",
        ],
      },
      {
        icon: "code",
        title: "Programming",
        items: [
          "Python (NumPy, pandas, SciPy, Matplotlib)",
          "C++ (OOP, inheritance)",
          "R",
          "SQL",
          "JavaScript · React",
          "HTML · CSS",
          "SFML",
        ],
      },
      {
        icon: "tools",
        title: "Tools & environment",
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
        title: "AI & methods",
        items: [
          "Generative & agentic AI",
          "Prompt engineering",
          "Building an agent harness",
          "Scrum · PSPO",
          "ARE method (needs analysis)",
        ],
      },
    ],
    softTitle: "Soft skills",
    soft: [
      "Composure under pressure",
      "Rigour",
      "Analytical mind",
      "Intellectual curiosity",
      "Adaptability",
      "Teamwork",
      "Public speaking",
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "French", level: "Native", rank: 6 },
      { name: "English", level: "B1 · Linguaskill (145)", rank: 3 },
      { name: "Spanish", level: "A2", rank: 2 },
      { name: "Japanese", level: "A1", rank: 1 },
    ],
    cefrLabel: "CEFR level",
  },

  journey: {
    kicker: "Background",
    title: "From pastry kitchens to applied mathematics.",
    lead: "A career change built step by step: bringing kitchen discipline to mathematics.",
    educationTitle: "Education",
    experienceTitle: "Work experience",
    highlightTag: "Apprenticeship",
    education: [
      {
        period: "2026 — 2028",
        title: "Master's in Applied Mathematics & Statistics",
        org: "University of Bordeaux · Image, Optimisation and Data Science track (IOD)",
        details: ["Taken as an apprenticeship"],
        highlight: true,
      },
      {
        period: "2025 — 2026",
        title: "BSc Mathematics, final year (Mathematical Engineering)",
        org: "University of Bordeaux",
        details: ["Project: calibrating a mitochondrial ODE model with a genetic algorithm"],
      },
      {
        period: "2025",
        title: "ARE method & sales training",
        org: "Professional training",
      },
      {
        period: "2024",
        title: "PSPO — Scrum Product Owner",
        org: "Scrum training · agile project management",
      },
      {
        period: "2021 — 2024",
        title: "French vocational diploma in pastry (CAP) + one-year specialisation",
        org: "Institut des Saveurs",
        details: ["Specialisation in pastry, ice cream, chocolate and confectionery"],
      },
      {
        period: "2016 — 2019",
        title: "Undergraduate studies in pure mathematics",
        org: "University of Bordeaux",
      },
      {
        period: "2016",
        title: "French Baccalaureate, science track",
        org: "Lycée Gustave Eiffel",
      },
    ],
    experience: [
      {
        period: "Entrepreneurial project",
        title: "Co-running a small business",
        org: "Company of an illustrator & character designer",
        details: [
          "Administration and organisation: welcoming customers, inventory, bookkeeping",
          "Statistical analysis and management of company data",
          "Sales at events",
        ],
      },
      {
        period: "Jan. 2025 — Aug. 2025",
        title: "Admissions officer (new students)",
        org: "Youschool, online school",
        details: [
          "ARE method: needs analysis, helping prospects decide",
          "Sales pitching and communication",
          "Customer relations and quality standards",
        ],
      },
      {
        period: "Aug. 2023 — Jan. 2025",
        title: "Pastry chef de partie",
        org: "Le 7 Restaurant, La Cité du Vin · Bordeaux",
        details: [
          "Setting up and following rigorous processes",
          "Managing production constraints",
          "Supervising apprentices and interns",
        ],
      },
      {
        period: "Aug. 2021 — Jul. 2022",
        title: "Pastry apprentice",
        org: "Bérénils · Pessac",
        details: [
          "Food hygiene and safety best practices",
          "Stock and supply management",
          "Quality and presentation standards",
        ],
      },
    ],
  },

  contact: {
    kicker: "Contact",
    title: "Looking to take on an apprentice?",
    text: "Statistics, data science, image processing or modelling: I would be glad to discuss your projects and how I can contribute during my Master's (2026–2028).",
    emailCta: "Send an email",
    copyEmail: "Copy address",
    copied: "Address copied",
    cvCta: "Download CV",
    channels: {
      email: "Email",
      phone: "Phone",
      linkedin: "LinkedIn",
      github: "GitHub",
      location: "Location",
    },
    referencesTitle: "References",
    references: ["University of Bordeaux", "University of Bordeaux · supervisor of my final-year project"],
  },

  footer: {
    rights: "Bordeaux",
    source: "Source code",
    top: "Back to top",
  },
};

export default en;
