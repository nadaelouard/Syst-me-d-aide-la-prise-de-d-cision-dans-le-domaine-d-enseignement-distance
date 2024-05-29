import React from 'react';
import ReactPlayer from 'react-player';
import './RecommendationsPage.css';

function RecommendationsPage() {
  return (
    <div className="recommendations-page">
      <h1>Conseils pour l'Enseignement à Distance</h1>

      <section className="advice-section">
        <h2>Conseils Utiles</h2>
        <div className="advice-container">
          <div className="advice-card">Créez un espace d'étude dédié pour minimiser les distractions.</div>
          <div className="advice-card">Établissez un emploi du temps régulier pour vos études.</div>
          <div className="advice-card">Faites des pauses régulières pour éviter la fatigue.</div>
          <div className="advice-card">Utilisez des outils numériques pour organiser votre travail.</div>
          <div className="advice-card">Communiquez régulièrement avec vos enseignants et camarades de classe.</div>
        </div>
      </section>

      <section className="video-section">
        <h2>Vidéos Utiles</h2>
        <div className="video-wrapper">
          <ReactPlayer
            url='https://youtu.be/bLtd3Gr4LPw?si=qXo0-1RVGVfnQn2i'
           
          />
        </div>
        <div className="video-wrapper">
          <ReactPlayer
            url='https://youtu.be/mXisYYXRLX4?si=AZbiqko-kmVizO68'
           
          />
        </div>
        
      </section>
      

      <section className="resources-section">
        <h2>Sites Utiles</h2>
        <div className="resources-container">
          <div className="resource-card">
            <a href="https://www.khanacademy.org" target="_blank" rel="noopener noreferrer">
              Khan Academy
            </a>
            <p>Cours en ligne gratuits pour tous les niveaux.</p>
          </div>
          <div className="resource-card">
            <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer">
              Coursera
            </a>
            <p>Plateforme de formation en ligne avec des cours de qualité.</p>
          </div>
          <div className="resource-card">
            <a href="https://www.edx.org" target="_blank" rel="noopener noreferrer">
              edX
            </a>
            <p>Cours en ligne des meilleures universités et institutions.</p>
          </div>
          <div className="resource-card">
            <a href="https://www.udemy.com" target="_blank" rel="noopener noreferrer">
              Udemy
            </a>
            <p>Apprenez de nouvelles compétences avec des cours en ligne.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RecommendationsPage;
