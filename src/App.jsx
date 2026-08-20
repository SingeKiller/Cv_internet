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

const projects = [
  {
    id: "Cv Web",
    name: "Cv Web",
    stack: "React, Vite, HTML5, CSS",
    description: ["Site personnel avec sections dynamiques et animations légères."],
  },
  {
    id: "respiration-mitochondriale",
    name: "Respiration Mitochondriale",
    stack: "C++ , Python ", 
    description: "Algorithme génétique basée sur le modèle de Bertram et al.", 
    images: ["./ressources/resultats_graph.png","./ressources/resultats_graph13.png","./ressources/calibration_14h16_o2_comparison_14p0_20p68.png"], 
    paperUrl: "https://www.math.fsu.edu/~bertram/papers/beta/simpleMK.pdf", 
  },
  {
    id: "edo-chaleur",
    name: "EDO de la chaleur évolution temporelle",
    stack: "C++",
    description:
      "Basée sur un devoir de l'Université de Bordeaux, avec visualisation en temps réel.",
    video: "./ressources/edo_video.mp4",
    image: "./ressources/edo_image.png",
    pdf: "./ressources/edo_chaleur.pdf",
  },
];

const softSkills = [
  "Analyse des données",
  "Modélisation",
  "Traitement signaux & images",
  "Capacité d'adaptation",
  "Travail en équipe",
  "Éloquence",
];

const Stack = [
  "Python ( Numpy \ Pands , ...)",
  "C++",
  "SQL",
  "JavaScript",
  "Framework : React",
  "HTML5 \ CSS",
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
    title: "Master MAS : Image, optimisation de donnée",
    school: "Université de Bordeaux",
    period: "2026 - 2028",
  },
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

export default function App() {
  const [zoomedImage, setZoomedImage] = useState(null);

  return (
    <div className="page" id="top">
      
      <header className="hero">
  
        <div>
          <p className="eyebrow"></p>
          <h1>Olivier REPAUZET</h1>
          <p className="subtitle">Alternance pour Master Mathématiques Appliquées et Statistiques (MAS) </p>
          
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
            Étudiant en Master IOSD, je suis rigoureux et méthodique.
            Ce parcours me permettra d’exploiter la puissance des mathématiques et des sciences des données pour traiter et analyser des images, 
            optimiser des systèmes complexes et extraire des informations clés dans des contextes variés. 
            je maîtriserai des outils et techniques indispensables, tels que l’analyse de Fourier ou Deep-Learning.
            Que ce soit pour concevoir des algorithmes d’IA ou améliorer la précision des systèmes d’imagerie médicale.
          </p>
        </div>
      </header>

      <main className="grid grid--primary">
        
        <section className="card">
          <h2>Parcours</h2>
          <ul className="timeline">
            
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

        <section className="card">
          <h2>Expériences professionnelles</h2>
          <ul className="timeline">
            
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

        <section className="card">
          <h2>Projets</h2>
          <div className="projects">
            
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
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
       
            {languages.map((lang) => (
              <LanguageItem key={lang.name} lang={lang} />
            ))}
          </ul>
        </section>
        <section className="card">
          <h2>Recommandations</h2>
          <ul className="language-list">
            
            {recommendations.map((rec) => (
              <li key={rec.name}>
                <strong>{rec.name}</strong><br />
                <a href={`mailto:${rec.email}`}>{rec.email}</a>
              </li>
            ))}
          </ul>
        </section>
      </main>


      
      <section className="card card--wide" aria-label="Détails des projets">
        <h2>Détails des projets</h2>
        <div className="project-detail-list">
          
    
          {projects.map((project) => (
            <ProjectDetail
              key={project.id}
              project={project}
              onImageClick={setZoomedImage}
            />
          ))}
        </div>
      </section>
      <ImageModal image={zoomedImage} onClose={() => setZoomedImage(null)} />
    </div>
  );
}
