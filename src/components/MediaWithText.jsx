/**
 * Composant pour afficher un média (image ou vidéo) avec un texte explicatif à gauche
 * 
 * @param {string} title - Titre du bloc explicatif
 * @param {string|JSX} description - Description/explication du média
 * @param {string} type - Type de média: 'image' ou 'video'
 * @param {string} src - URL du fichier média
 * @param {function} onImageClick - Fonction appelée au clic sur l'image (pour le zoom)
 */
export default function MediaWithText({ title, description, type, src, onImageClick }) {
  return (
    
    // Conteneur principal avec layout en grille (1/3 texte, 2/3 média sur desktop)
    <div className="project-media-container">

      {/* Bloc de texte explicatif à gauche */}
      <div className="project-media-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      
      {/* Affichage conditionnel: image ou vidéo selon le type */}
      {type === 'image' ? (

        // Image cliquable pour le zoom
        <img
          className="project-image project-image--zoomable"
          src={src}
          alt={title}
          style={{ border: 'none', cursor: 'pointer' }}
          onClick={() => onImageClick(src)} // Appelle la fonction de zoom
          title="Cliquer pour agrandir"
        />
      ) : (

        // Vidéo avec contrôles natifs du navigateur
        <video 
          className="project-video" 
          controls // Affiche play/pause, volume, timeline, etc.
          style={{ border: 'none' }}
        >
          <source src={src} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      )}
    </div>
  );
}
