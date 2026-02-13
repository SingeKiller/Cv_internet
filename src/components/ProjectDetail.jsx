import MediaWithText from './MediaWithText';

/**
 * Composant détaillé d'un projet avec toutes les infos, médias et liens
 * 
 * @param {object} project - Objet contenant toutes les infos du projet
 * @param {function} onImageClick - Fonction pour gérer le clic sur les images (zoom)
 */
export default function ProjectDetail({ project, onImageClick }) {
  return (

    // Article avec ID pour l'ancrage de navigation
    <article
      id={`project-${project.id}`}
      className="project-detail"
    >

      {/* En-tête: nom du projet et stack technique */}
      <div className="row">
        <h3>{project.name}</h3>
        <span className="muted">{project.stack}</span>
      </div>
      
      {/* Description du projet */}
      <p>{project.description}, ce site effectue sur des connaissances basiques en HTML5 Js(React) et Css, 
        afin de transmettres ma personnalite et ma motivation a evolue pour un futur proche.
        Un autre projet web actuellement en developpement...
      </p>
      
      {/* Affichage conditionnel: lien vers article scientifique si fourni */}
      {project.paperUrl && (
        <p></p>
        <a
          className="project-link"
          href={project.paperUrl}
          target="_blank" // Ouvre dans un nouvel onglet
          rel="noreferrer" // Sécurité: empêche le partage du referrer
        >
          Article du Modèle de Bertram
        </a>
      )
      <p>ce site effectue sur des connaissances basiques en HTML5 Js(React) et Css, 
        afin de transmettres ma personnalite et ma motivation a evolue pour un futur proche.
        Un autre projet web actuellement en developpement...</p>}
      
      
      {/* Affichage conditionnel: galerie d'images avec commentaires si tableau fourni */}
      {Array.isArray(project.images) && project.images.length > 0 && (
        <>
        <p>Dans ce projet, on a étudié le modèle de Bertram qui a fait une simplification du modèle de Magnus-Keizer
        dans lequel il a introduit un substrat FBP (Fructose 1,6-bisphosphate) pour expliquer les oscillations de la respiration mitochondriale.
        Dans le modèle de Magnus-Keizer, des équations de la thermodynamique y sont introduites. Bertram souhaitait faire une approche analytique en se basant sur les résultats expérimentaux.
        Avec diverses méthodes, il a sorti des coefficients afin de minimiser l'erreur entre les résultats de son modèle et les résultats expérimentaux, et ainsi trouver une solution analytique pour expliquer les oscillations de la respiration mitochondriale.
        C'est en reprenant son modèle que j'ai recréé un code C++ pour simuler le modèle de Bertram, et j'ai obtenu des résultats similaires à ceux de Bertram, confirmant la validité de son modèle et de mon code.
        </p>
          {project.images[0] && (
            <MediaWithText
              title="Courbe du pulse de FBP"
              description="Les premières courbes avec un pulse de FBP (substrat) montrant les oscillations caractéristiques du modèle de Bertram, que l'on retrouve dans la Fig.12 de son article."
              type="image"
              src={project.images[0]}
              onImageClick={onImageClick}
            />
          )}
          {project.images[1] && (
            <MediaWithText
              title="Courbe du pulse de Ca_c"
              description="On effectue des pulses réguliers pour étudier le comportement de la création d'ATP. Dans un milieu stable et en saturant l'activité avec p3=0, on observe bien une saturation et des pertes de production à cause de la surcharge des ions calcium dans la mitochondrie."
              type="image"
              src={project.images[1]}
              onImageClick={onImageClick}
            />
          )}
          {project.images[2] && (
            <MediaWithText
              title="Surcharge du Flux Uniporteur"
              description="On effectue une surcharge de flux uniporteur que l'on compare à un état stable avec pulse, et on observe une accentuation de la dépolarisation de la mitochondrie à cause de son flux qui est doublé et ainsi surchargé."
              type="image"
              src={project.images[2]}
              onImageClick={onImageClick}
            />
          )}
          <p>Par la suite, on va utiliser le code obtenu afin de simuler divers modèles et paramétrages.
        Suite prochainement...
        </p>
        </>
      )}
      

      {/* Affichage conditionnel: image principale avec texte explicatif */}
      {project.image && (
        <MediaWithText
          title="Visualisation de l'Interface en SFML"
          description={
            <>
              J'ai choisi de reprendre notre devoir suivant: {project.pdf && (
                <a href={project.pdf} target="_blank" rel="noreferrer">EDO_chaleur.pdf</a>
              )}
              {' '}et d'aller plus loin, en implémentant une visualisation en temps réel de l'évolution de la chaleur avec évolution temporelle,
              en utilisant la bibliothèque SFML pour afficher les courbes de température au cours du temps, 
              et ainsi pouvoir observer l'évolution de la solution numérique et de son erreur par rapport à la solution analytique.
            </>
          }
          type="image"
          src={project.image}
          onImageClick={onImageClick} // Fonction pour zoomer l'image
        />
      )}
      
      {/* Affichage conditionnel: vidéo avec texte explicatif */}
      {project.video && (
        <MediaWithText
          title="Vidéo de démonstration"
          description="Ici on peut constater l'évolution de la chaleur avec évolution temporelle. Au cours du temps, on observe l'erreur de la solution numérique par rapport à la solution analytique, et on peut voir que l'erreur diminue au cours du temps, ce qui confirme la validité de notre approche numérique, via le gradient conjugué."
          type="video"
          src={project.video}
        />
      )}

      {/* Lien pour retourner en haut de la page */}
      <a className="back-link" href="#top">
        Retour en haut
      </a>
    </article>
  );
}
