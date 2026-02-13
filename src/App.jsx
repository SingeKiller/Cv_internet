// Import de React hooks et composants
import { useState } from 'react';
import ImageModal from './components/ImageModal';
import TimelineItem from './components/TimelineItem';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import LanguageItem from './components/LanguageItem';

// Expériences professionnelles


const recommendations = [
  {
    name: "Weynans Lisl",
    email: "lisl.weynans@u-bordeaux.fr",
  },
  {
    name:"Leguebe Michael",
    email:"michael.leguebe@u-bordeaux.fr",
  },
]

const experiences = [
  {
    title: "Responsable d'Admission Commercial",
    company: "Youschool",
    period: "Janvier 2025 - Août 2025",
    details: [
      "Méthode ARE : Analyse des besoins, aide à la décision",
      "Communication et argumentation",
      "Relation client et exigence de qualité",
    ],
  },
  {
    title: "Chef de Partie Pâtisserie",
    company: "Le 7 Restaurant, Cité du Vin",
    period: "2023-2025",
    details: [
      "Mise en place et respect des processus rigoureux",
      "Gestion des contraintes de production",
      "Relation client et exigence de qualité",
      "Supervision d'apprentis et de stagiaires",
    ],
  },
  {
    title: "Apprenti Pâtissier",
    company: "Berenils, Pessac",
    period: "2022-2023",
    details: ["Mise en place des règles de bonnes pratiques d'hygiène et de sécurité",
        "Gestion des stocks et approvisionnements",
        "Respect des normes de qualité et de présentation",
    ],
  },
  {
    title: "Employé polyvalent mi-temps",
    company: "Courtepaille, Villenave-d'Ornon",
    period:"2017-2018",
    details:["Assignation à diverses tâches différentes selon les besoins du restaurant",
        "Développement de polyvalence et d'adaptabilité",
    ],
  },
];

// Projets techniques

const projects = [
  {
    id: "portfolio-interactif",
    name: "Portfolio interactif",
    stack: "React, Vite, HTML5, CSS",
    description: ["Site personnel avec sections dynamiques et animations légères. ce site effectue sur des connaissances basiques en HTML5 Js(React) et Css,  afin de transmettres ma personnalite et ma motivation a evolue pour un futur proche.Un autre projet web actuellement en developpement...",
]},
  {
    id: "respiration-mitochondriale",
    name: "Respiration Mitochondriale",
    stack: "C++ , Python ", 
    description: "Basée sur le modèle de Bertram et al.", 
        images: ["./ressources/resultats_graph.png","./ressources/resultats_graph13.png","./ressources/resultats_graph14.png"], 
    paperUrl: "https://www.math.fsu.edu/~bertram/papers/beta/simpleMK.pdf", 
  },
  {
    id: "edo-chaleur",
    name: "EDO de la chaleur instationnaire",
    stack: "C++",
    description:
      "Basée sur un devoir de l'Université de Bordeaux, avec visualisation en temps réel.",
    video: "./ressources/edo_video.mp4",
    image: "./ressources/edo_image.png",
    pdf: "./ressources/edo_chaleur.pdf",
  },
];


//  Compétences transversales

const softSkills = [
  "Maîtrise du stress",
  "Rigueur",
  "Esprit d'analyse",
  "Curiosité intellectuelle",
  "Capacité d'adaptation",
  "Travail en équipe",
  "Éloquence",
];


// Langues maîtrisées

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

// Parcours scolaire et diplômes

const parcours = [
  {
    title: "Licence Ingénierie Mathématiques",
    school: "Université de Bordeaux",
    period: "2025 - 2026",
  },
  {
    title: "Brevet Technique de Maîtrise Pâtisserie",
    school: "Institut des Saveurs",
    period: "2024 - 2025",
  },
  {
    title: "Mention Complémentaire Pâtisserie",
    school: "Institut des Saveurs",
    period:"2023 - 2024",
  },
  {
    title: "CAP Pâtisserie",
    school: "Institut des Saveurs",
    period:"2022 - 2023",
    },
  {
    title: "Licence Mathématiques Fondamentales",
    school: "Université de Bordeaux",
    period: "2016 - 2021",
  },
  {
    title: "Baccalauréat Scientifique",
    school: "Lycée Gustave Eiffel",
    period: "2013 - 2016",
  },
];

/**
 * Composant principal de l'application - Portfolio/CV
 * Gère l'état du modal de zoom d'image et orchestre tous les autres composants
 */
export default function App() {
  // State pour gérer l'image zoomée (null = pas de zoom, string = URL de l'image zoomée)
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    // Conteneur principal avec ID pour la navigation "retour en haut"
    <div className="page" id="top">
     
      {/* En-tête avec présentation */}
      
      <header className="hero">
        {/* Bloc gauche: informations personnelles */}
        <div>
          <p className="eyebrow"></p>
          <h1>Olivier REPAUZET</h1>
          <p className="subtitle">Futur Ingénieur Mathématiques Appliquées et Statistiques</p>
          
          {/* données de contact */}
          <div className="meta">
            <span>Bordeaux, France</span>
            <span>olivier.repauzet@etu.u-bordeaux.fr</span>
            <span>+33 6 28 56 51 09</span>
            <span>Github : https://github.com/SingeKiller</span>
          </div>
        </div>

        {/* Bloc droite: résumé/profil */}
        <div className="summary">
          <h2>Profil</h2>
          <p>
            Étudiant en Licence ingénierie mathématiques, je suis rigoureux et méthodique.
            Ma curiosité alimente une approche analytique structurée, tournée vers la résolution
            de problèmes, l'optimisation et l'adaptabilité. J'aime la simulation des données pour ses
            représentations et ses visualisations concrètes des expériences.
          </p>
        </div>
      </header>

      <main className="grid grid--primary">
        
        {/* Colonne 1: Parcours scolaire */}
        <section className="card">
          <h2>Parcours</h2>
          <ul className="timeline">

            {/* Boucle pour afficher chaque diplôme */}
            {parcours.map((item) => (
              <TimelineItem
                key={item.title}
                title={item.title}
                period={item.period}
                subtitle={item.school}
              />
            ))}
          </ul>
        </section>

        {/* Colonne 2: Expériences professionnelles */}
        <section className="card">
          <h2>Expériences professionnelles</h2>
          <ul className="timeline">
            
            {/* Boucle pour afficher chaque expérience */}
            {experiences.map((exp) => (
              <TimelineItem
                key={exp.title}
                title={exp.title}
                period={exp.period}
                subtitle={exp.company}
                details={exp.details}
              />
            ))}
          </ul>
        </section>

        {/* Colonne 3: Grille de projets */}
        <section className="card">
          <h2>Projets</h2>
          <div className="projects">
            
            {/* Boucle pour afficher chaque carte de projet */}
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>

        {/* Section: Soft Skills (compétences transversales) */}
        <section className="card">
          <h2>Soft skills</h2>
          <div className="chips">

            {/* Boucle pour afficher chaque compétence en badge */}
            {softSkills.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Section: Langues avec niveaux */}
        <section className="card">
          <h2>Langues</h2>
          <ul className="language-list">
            
            {/* Boucle pour afficher chaque langue */}
            {languages.map((lang) => (
              <LanguageItem key={lang.name} lang={lang} />
            ))}
          </ul>
        </section>
        <section className="card">
          <h2>Recommandations</h2>
          <ul className="language-list">
            
            {/* Boucle pour afficher chaque recommandation */}
            {recommendations.map((rec) => (
              <li key={rec.name}>
                <strong>{rec.name}</strong><br />
                <a href={`mailto:${rec.email}`}>{rec.email}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Section des Projets detaillee */}
      
      <section className="card card--wide" aria-label="Détails des projets">
        <h2>Détails des projets</h2>
        <div className="project-detail-list">
          
          {/* Boucle pour afficher les détails complets de chaque projet */}
          {projects.map((project) => (
            <ProjectDetail
              key={project.id}
              project={project}
              onImageClick={setZoomedImage} // Passe la fonction pour zoomer les images
            />
          ))}
        </div>
      </section>

      {/* parametre de zoom */}
      <ImageModal image={zoomedImage} onClose={() => setZoomedImage(null)} />
    </div>
  );
}
