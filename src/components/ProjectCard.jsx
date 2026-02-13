/**
 * Composant carte de projet pour la vue grille (aperçu rapide)
 * 
 * @param {object} project - Objet contenant les infos du projet
 * @param {string} project.name - Nom du projet
 * @param {string} project.stack - Technologies utilisées
 * @param {string} project.description - Description courte
 * @param {string} project.id - Identifiant unique pour le lien d'ancrage
 */
export default function ProjectCard({ project }) {
  return (
    <article className="project">
      {/* Nom du projet */}
      <h3>{project.name}</h3>
      
      {/* Stack technique en gris */}
      <p className="muted">{project.stack}</p>
      
      {/* Description courte */}
      <p>{project.description}</p>
      
      {/* Bouton pour aller vers les détails du projet */}
      <div className="project-actions">
        <a
          className="button"
          href={`#project-${project.id}`} // Lien d'ancrage vers la section détails
          aria-label={`Aller au projet ${project.name}`}
        >
          Voir détails
        </a>
      </div>
    </article>
  );
}
