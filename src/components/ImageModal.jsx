/**
 * Composant Modal pour afficher une image en plein écran
 * 
 * @param {string} image - URL de l'image à afficher
 * @param {function} onClose - Fonction appelée pour fermer le modal
 */
export default function ImageModal({ image, onClose }) {
  // Si aucune image n'est fournie, ne rien afficher
  if (!image) return null;

  return (
    // Overlay sombre qui couvre tout l'écran, clic dessus ferme le modal
    <div className="image-modal" onClick={onClose}>

      {/* Conteneur pour l'image et le bouton de fermeture */}
      <div className="image-modal__content">
        
        {/* Bouton x pour fermer le modal */}
        <button 
          className="image-modal__close" 
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>
        {/* Image agrandie - stopPropagation empêche la fermeture quand on clique sur l'image */}
        <img 
          src={image} 
          alt="Image agrandie" 
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}
