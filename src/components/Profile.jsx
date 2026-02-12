import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-section">
      <div className="profile-header">
        <div className="profile-image-container">
          <div className="profile-image-placeholder">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </div>
          <p className="image-note">Photo de profil</p>
        </div>
        <div className="profile-info">
          <h2>Votre Nom</h2>
          <p className="title">Titre Professionnel</p>
          <p className="description">
            Une brève description de votre profil professionnel. 
            Présentez-vous ici avec vos principales qualités et objectifs.
          </p>
        </div>
      </div>
      
      <div className="profile-details">
        <div className="detail-card">
          <h3>📧 Contact</h3>
          <p>email@example.com</p>
          <p>+33 6 12 34 56 78</p>
        </div>
        
        <div className="detail-card">
          <h3>📍 Localisation</h3>
          <p>Ville, Pays</p>
        </div>
        
        <div className="detail-card">
          <h3>🔗 Réseaux</h3>
          <p>LinkedIn</p>
          <p>GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
