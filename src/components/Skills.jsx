import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Git', level: 80 },
    { name: 'SQL', level: 70 }
  ];

  const softSkills = [
    'Communication',
    'Travail d\'équipe',
    'Résolution de problèmes',
    'Gestion du temps',
    'Adaptabilité',
    'Créativité'
  ];

  const languages = [
    { name: 'Français', level: 'Langue maternelle' },
    { name: 'Anglais', level: 'Courant' },
    { name: 'Espagnol', level: 'Intermédiaire' }
  ];

  return (
    <div className="skills-section">
      <div className="skills-container">
        <div className="skills-column">
          <h2 className="section-title">Compétences Techniques</h2>
          <div className="technical-skills">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-column">
          <h2 className="section-title">Compétences Personnelles</h2>
          <div className="soft-skills">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-badge">
                <span className="badge-icon">✓</span>
                {skill}
              </div>
            ))}
          </div>

          <h2 className="section-title" style={{ marginTop: '2rem' }}>Langues</h2>
          <div className="languages">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <div className="language-icon">🌍</div>
                <div className="language-info">
                  <h3>{lang.name}</h3>
                  <p>{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="projects-section">
        <h2 className="section-title">Projets Réalisés</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
              </svg>
              <p>Image du projet</p>
            </div>
            <h3>Projet 1</h3>
            <p>Description brève du projet et des technologies utilisées.</p>
          </div>
          
          <div className="project-card">
            <div className="project-image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
              </svg>
              <p>Image du projet</p>
            </div>
            <h3>Projet 2</h3>
            <p>Description brève du projet et des technologies utilisées.</p>
          </div>
          
          <div className="project-card">
            <div className="project-image-placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
              </svg>
              <p>Image du projet</p>
            </div>
            <h3>Projet 3</h3>
            <p>Description brève du projet et des technologies utilisées.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
