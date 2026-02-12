const experiences = [
  {
    title: "Responsable d'Admission Commercial",
    company: "Youschool",
    period: "Janvier 2025 - Aout 2025",
    details: [
      "Methode ARE: Analyse des besoins, aide a la decision",
      "Communication et argumentation",
      "Relaion client et exigence de qualite",
    ],
  },
  {
    title: "Chef de Partie Patisserie",
    company: "Le 7 Restaurant, Cite du vin",
    period: "2023-2025",
    details: [
      "Mise en place et respect des processus rigoureux",
      "Gestion des contraintes de production",
      "Relation client et Exigence de qualite",
      "Supervisation d'apprentis et de stagiaires",
    ],
  },
  {
    title: "Apprenti Pâtissier",
    company: "Berenils, Pessac",
    period: "2022-2023",
    details: ["Mise en place des regles des bonne pratiques d'hygiene et de securite",
        "Gestion des stocks et approvisionnements",
        "Respect des normes de qualite et de presentation",
    ],
  },
  {
    title: "employee polyvalent mi-temps",
    company:"courtepaille, villenave d'ornon",
    period:"2017-2018",
    details:["assignation a divers tache differentes selon les besoins du restaurant",
        "developpement de polyvalence et d'adaptabilite",
    ],
  },
];

const projects = [
  {
    id: "portfolio-interactif",
    name: "Portfolio interactif",
    stack: "React, Vite, HTML5, CSS",
    description: "Site personnel avec sections dynamiques et animations légères.",
    details: [
      "Architecture en composants réutilisables.",
      "Mise en page responsive pour mobile et desktop.",
    ],
  },
  {
    id: "respiration-mitochondriale",
    name: "Respiration Mitochondriale",
    stack: "C++ , Python ", 
    description: "Basee sur le modele de Bertram et al.", 
        images: ["/ressources/resultats_graph.png","/ressources/resultats_graph13.png","/ressources/resultats_graph14.png"], 
    paperUrl: "https://www.math.fsu.edu/~bertram/papers/beta/simpleMK.pdf", 
    details: [ "Simulation numérique et interprétation des résultats.", 
        "Génération de graphiques pour l'analyse.", 
    ],
  },
  {
    id: "edo-chaleur",
    name: "EDO de la chaleur instationnaire",
    stack: "C++",
    description:
      "Basee sur un devoir de l'Universite de Bordeaux, avec visualisation en temps reel.",
    details: [
      "Résolution numérique d'équations différentielles.",
      "Affichage en temps réel des évolutions thermiques.",
    ],
  },
];

const softSkills = [
  "Maitrise de stress",
  "Rigueur",
  "Esprit d'analyse",
  "Curiosite intellectuelle",
  "Capacite d'adaptation",
  "Travail en equipe",
  "Eloquence",
];

const languages = [
  {
    name: "Français",
    note: "Natif",
  },
  {
    name: "Anglais",
    note: "B1 (Linguaskill)",
    score: 145,
    max: 180,
  },
  {
    name: "Espagnol",
    note: "A2",
  },
  {
    name: "Japonais",
    note: "A1",
  },
];

const parcours = [
  {
    title: "Licence Ingenierie Mathematiques",
    school: "Université de Bordeaux",
    period: "2025 - 2026",
  },
  {
    title: "Brevet Technique de Maitrise Patisserie",
    school: "institut des saveurs",
    period: "2024 - 2025",
  },
  {
    title:"Mention Complementaire Patisserie",
    school:"institut des saveurs",
    period:"2023 - 2024",
  },
  {
    title:"CAP patisserie",
    school:"institut des saveurs",
    period:"2022 - 2023",
    },
  {
    title: "Licence Mathematiques fondemmentales",
    school: "Université de Bordeaux",
    period: "2016 - 2021",
  },
  {
    title: "Baccalauréat Scientifique",
    school: "Lycée Gustave Eiffel",
    period: "2013 - 2016",
  },
];

export default function App() {
  return (
    <div className="page" id="top">
      <header className="hero">
        <div>
          <p className="eyebrow"></p>
          <h1>Olivier REPAUZET</h1>
          <p className="subtitle">Futur Ingenieur Mathematiques appliquees et statistiques</p>
          <div className="meta">
            <span>Bordeaux, France</span>
            <span>olivier.repauzet@etu.u-bordeaux.fr</span>
            <span>+33 6 28 56 51 09</span>
            <span>Github : https://github.com/SingeKiller</span>
          </div>
        </div>
        <div className="summary">
          <h2>Profil</h2>
          <p>
            Etudiant en Licence ingenierie mathematiques, je suis rigoureux et methodique.
            Ma curiosite alimente une approche analytique structuree, tounee vers la resolution
            de probleme,l'optimisation et l'adaptabilite. J'aime la simulation des donnees pour ses
            representations et ses visualisation concretes des experiences.
          </p>
        </div>
      </header>

      <main className="grid grid--primary">
        <section className="card">
          <h2>Parcours</h2>
          <ul className="timeline">
            {parcours.map((item) => (
              <li key={item.title}>
                <div className="row">
                  <h3>{item.title}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="muted">{item.school}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Expériences professionnelles</h2>
          <ul className="timeline">
            {experiences.map((exp) => (
              <li key={exp.title}>
                <div className="row">
                  <h3>{exp.title}</h3>
                  <span>{exp.period}</span>
                </div>
                <p className="muted">{exp.company}</p>
                <ul className="bullets">
                  {exp.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="card">
          <h2>Projets</h2>
          <div className="projects">
            {projects.map((project) => (
              <article key={project.name} className="project">
                <h3>{project.name}</h3>
                <p className="muted">{project.stack}</p>
                <p>{project.description}</p>
                <div className="project-actions">
                  <a
                    className="button"
                    href={`#project-${project.id}`}
                    aria-label={`Aller au projet ${project.name}`}
                  >
                    Voir détails
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Soft skills</h2>
          <div className="chips">
            {softSkills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Langues</h2>
          <ul className="language-list">
            {languages.map((lang) => {
              const max = lang.max ?? 180;
              const hasScore = typeof lang.score === "number";
              const percent = hasScore ? Math.round((lang.score / max) * 100) : 0;

              return (
                <li key={lang.name} className="language-item">
                  <div className="row">
                    <h3>{lang.name}</h3>
                    <span>{lang.note}</span>
                  </div>
                  {hasScore && (
                    <div
                      className="language-bar"
                      aria-label={`LinguaSkill ${lang.score}/${max}`}
                    >
                      <div
                        className="language-bar__fill"
                        style={{ width: `${percent}%` }}
                      />
                      <span className="language-bar__label">
                        {lang.score}/{max}
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </main>

      <section className="card card--wide" aria-label="Détails des projets">
        <h2>Détails des projets</h2>
        <div className="project-detail-list">
          {projects.map((project) => (
            <article
              key={project.id}
              id={`project-${project.id}`}
              className="project-detail"
            >
              <div className="row">
                <h3>{project.name}</h3>
                <span className="muted">{project.stack}</span>
              </div>
              <p>{project.description}</p>
              {project.paperUrl && (
                <a
                  className="project-link"
                  href={project.paperUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Article du Modele de Bertram
                </a>
              )}
              {Array.isArray(project.images) && project.images.length > 0 && (
                <div className="project-images">
                  {project.images.map((image) => (
                    <img
                      key={image}
                      className="project-image"
                      src={image}
                      alt={`Courbe du projet ${project.name}`}
                    />
                  ))}
                </div>
              )}
              {project.image && (
                <img
                  className="project-image"
                  src={project.image}
                  alt={`Courbe du projet ${project.name}`}
                />
              )}
              <ul className="bullets">
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <a className="back-link" href="#top">
                Retour en haut
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
