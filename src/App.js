import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import ContactPage from './ContactPage';
import './App.css';
import './ContactPage.css'
import AdaptiveDescriptionPage from './AdaptiveDescription';
import AdvicePage from './AdvicePage';


function App() {
  return (
    <Router>
  <div className="App">
    <nav className="navbar">
      <Link to="/Home" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/statistics" className="nav-link">Statistics</Link>
    </nav>
    <Routes>
      {/* Définition des routes pour chaque page */}
      <Route path="/Home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/statistics" element={<StatisticsPage />} />
      <Route path="/adaptive-description" element={<AdaptiveDescriptionPage/>} />
      <Route path="/advice" element={<AdvicePage/>} />
    </Routes>
  </div>
</Router>
  );
}

// Composant pour la page "About"
function AboutPage() {
  return (
    <div className="about-page">
  <p className="intro">EduNR est une application web conçue pour simplifier la prise de décision dans le domaine de l'enseignement à distance.</p>
  <p>Notre équipe, composée de Nada El Ouardi et Rewae AMJAHID, étudiantes en 3ème année à l'École Supérieure d'Ingénierie en Sciences Appliquées (ESISA), a développé cet outil avec pour objectif d'aider les enseignants et les institutions éducatives à mieux gérer leurs cours en ligne.</p>
  -
  <h2 className="section-title">Contactez-nous</h2>
  <p>Pour toute question ou demande d'information, n'hésitez pas à nous contacter :</p>
  <ul className="contact-list">
    <li><strong>Email :</strong> <a href="mailto:Nadaelouardi17@gmail.com">Nadaelouardi17@gmail.com</a> / <a href="mailto:RewaeAmj@gmail.com">RewaeAmj@gmail.com</a></li>
    <li><strong>Téléphone :</strong> 06-91-22-20-65 / 06-13-39-61-79</li>
    <li><strong>Instagram :</strong> <a href="https://www.instagram.com/nada_el_ouardi" target="_blank" rel="noopener noreferrer">nada_el_ouardi</a> / <a href="https://www.instagram.com/Rewae_amj" target="_blank" rel="noopener noreferrer">Rewae_amj</a></li>
  </ul>
</div>
  );
}

// Composant pour la page "Contact"



// Composant pour la page "Statistics"
function StatisticsPage() {
  return (
    <div>
      <h2>Statistics Page</h2>
      
      <img src={"C:\\Users\\hp\\syst-me-d-aide-la-prise-de-d-cision\\BI\\BI.png"} alt="Statistique" />
    </div>
  );
}
function HomePage() {
  return (
    <main className="main">
  <section className="hero">
    <div className="hero-content">
      <h1>Bienvenue sur Votre Application EduNR</h1>
      <p>Optimisez votre enseignement à distance avec des décisions éclairées.</p>
      <button>En savoir plus</button>
    </div>
  </section>
  <section className="services">
    <div className="service">
      <h2>Analyse des Performances</h2>
      <p>Identifiez les domaines de réussite et les points à améliorer chez vos étudiants.</p>
    </div>
    <div className="service">
      <h2>Recommandations Personnalisées</h2>
      <p>Recevez des recommandations spécifiques pour optimiser votre enseignement.</p>
    </div>
    <div className="service">
      <h2>Suivi et Certification</h2>
      <p>Suivez l'engagement de vos étudiants et délivrez des certifications en ligne.</p>
    </div>
  </section>
  <section className="video">
    <h2>L'Application pour l'Enseignement à Distance</h2>
    <video controls>
      <source src="video-url.mp4" type="video/mp4" />
      Votre navigateur ne prend pas en charge la lecture de la vidéo.
    </video>
    <p>
      Améliorez l'expérience d'apprentissage avec notre système de prise de décision intégré, basé sur les meilleures pratiques en éducation à distance.
    </p>
  </section>
</main>
);
}

  
    
 

export default App;