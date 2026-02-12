import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Poste Actuel',
      company: 'Entreprise',
      period: '2022 - Présent',
      description: 'Description de vos responsabilités et réalisations principales dans ce poste.',
      tasks: [
        'Tâche ou réalisation importante 1',
        'Tâche ou réalisation importante 2',
        'Tâche ou réalisation importante 3'
      ]
    },
    {
      id: 2,
      title: 'Poste Précédent',
      company: 'Autre Entreprise',
      period: '2020 - 2022',
      description: 'Description de vos responsabilités et réalisations dans ce rôle.',
      tasks: [
        'Tâche ou réalisation importante 1',
        'Tâche ou réalisation importante 2',
        'Tâche ou réalisation importante 3'
      ]
    },
    {
      id: 3,
      title: 'Premier Poste',
      company: 'Première Entreprise',
      period: '2018 - 2020',
      description: 'Début de votre parcours professionnel.',
      tasks: [
        'Tâche ou réalisation importante 1',
        'Tâche ou réalisation importante 2'
      ]
    }
  ];

  return (
    <div className="experience-section">
      <h2 className="section-title">Mon Parcours Professionnel</h2>
      
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <div className="experience-header">
                <h3>{exp.title}</h3>
                <span className="period">{exp.period}</span>
              </div>
              <h4 className="company">{exp.company}</h4>
              <p className="description">{exp.description}</p>
              <ul className="tasks">
                {exp.tasks.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="education-section">
        <h2 className="section-title">Formation</h2>
        <div className="education-grid">
          <div className="education-card">
            <div className="education-icon">🎓</div>
            <h3>Diplôme Principal</h3>
            <p className="institution">École/Université</p>
            <p className="year">Année</p>
          </div>
          <div className="education-card">
            <div className="education-icon">📚</div>
            <h3>Certifications</h3>
            <p className="institution">Organisme</p>
            <p className="year">Année</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
