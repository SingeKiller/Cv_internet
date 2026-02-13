/**
 * Composant pour afficher une langue avec son niveau et optionnellement une barre de progression
 * 
 * @param {object} lang - Objet contenant les infos de la langue
 * @param {string} lang.name - Nom de la langue
 * @param {string} lang.note - Niveau (A1, B1, Natif, etc.)
 * @param {number} lang.score - Score optionnel (ex: LinguaSkill)
 * @param {number} lang.max - Score maximum optionnel (défaut: 180)
 */
export default function LanguageItem({ lang }) {
  // Score maximum (180 par défaut pour LinguaSkill)
  const max = lang.max ?? 180;
  
  // Vérifie si un score numérique est fourni
  const hasScore = typeof lang.score === "number";
  
  // Calcule le pourcentage pour la barre de progression
  const percent = hasScore ? Math.round((lang.score / max) * 100) : 0;

  return (
    <li className="language-item">
        
      {/* En-tête: nom de la langue à gauche, niveau à droite */}
      <div className="row">
        <h3>{lang.name}</h3>
        <span>{lang.note}</span>
      </div>
      
      {/* Affichage conditionnel: barre de progression seulement si score existe */}
      {hasScore && (
        <div
          className="language-bar"
          aria-label={`LinguaSkill ${lang.score}/${max}`}
        >

          {/* Barre de remplissage colorée */}
          <div
            className="language-bar__fill"
            style={{ width: `${percent}%` }} // Largeur dynamique selon le score
          />
          {/* Label affichant le score */}
          <span className="language-bar__label">
            {lang.score}/{max}
          </span>
        </div>
      )}
    </li>
  );
}
