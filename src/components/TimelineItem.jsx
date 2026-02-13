/**
 * Composant pour afficher un élément de timeline (parcours ou expérience)
 * 
 * @param {string} title - Titre principal (poste ou diplôme)
 * @param {string} period - Période (dates)
 * @param {string} subtitle - Sous-titre (entreprise ou école)
 * @param {array} details - Liste optionnelle de détails/tâches
 */
export default function TimelineItem({ title, period, subtitle, details }) {
  return (
    <li>
      {/* En-tête avec titre à gauche et période à droite */}
      <div className="row">
        <h3>{title}</h3>
        <span>{period}</span>
      </div>
      
      {/* Sous-titre en gris (entreprise/école) */}
      <p className="muted">{subtitle}</p>
      
      {/* Affichage conditionnel: liste de détails si elle existe */}
      {details && (
        <ul className="bullets">
          {/* Boucle pour afficher chaque détail */}
          {details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
