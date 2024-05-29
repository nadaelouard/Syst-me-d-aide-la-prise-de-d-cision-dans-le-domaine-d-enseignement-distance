// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './ContactPage';
import './App.css';
import './ContactPage.css';
import AdaptiveDescriptionPage from './AdaptiveDescription';
import AdvicePage from './AdvicePage';
import DetailedAdvicePage from './DetailedAdvicePage';
import NavBar from './NavBar'; 
import AboutPage from './AboutPage';
import YouTubeVideo from './YouTubeVideo';
import RecommendationsPage from './RecommendationsPage';
import Chatbot from './Chatbot';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          {/* Définition des routes pour chaque page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/adaptive-description" element={<AdaptiveDescriptionPage />} />
          <Route path="/advice" element={<AdvicePage />} />
          <Route path="/detailed-advice" element={<DetailedAdvicePage />} />
          <Route path="/conseil" element={<RecommendationsPage />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

// Composant pour la page "Statistics"
function StatisticsPage() {
  return (
    <div>
      <h2>Statistics Page</h2>
      <iframe title="powerBI" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiMTYwNDk3MjktYzEzMS00Y2QwLTlhMGMtZDNmYjZkNGMzNzRmIiwidCI6ImQ3ZmYxMDAzLWU2NTUtNDA0OC05NDhmLTlkODZjNTAyZWU1NCJ9" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <main className="main">
        <section className="hero" style={{ backgroundImage: 'url(/p.webp)' }}>
          <div className="hero-content">
            <h1 >Bienvenue sur votre application ACADEMICS</h1>
            <p>Optimisez votre enseignement à distance avec des décisions éclairées.</p>
          </div>
        </section>
        <section className="services">
          <div className="service">
            <h2>Amélioration de la Motivation</h2>
            <p>En offrant des contenus qui correspondent mieux aux intérêts et au niveau des étudiants, leur motivation et leur engagement augmentent</p>
          </div>
          <div className="service">
            <h2>Efficacité de l'Apprentissage</h2>
            <p>Les étudiants progressent à leur propre rythme, ce qui peut améliorer la rétention des connaissances et la réussite académique</p>
          </div>
          <div className="service">
            <h2>Soutien Personnalisé</h2>
            <p>Les enseignants peuvent fournir un soutien plus ciblé et pertinent basé sur les besoins individuels des étudiants.</p>
          </div>
        </section>
        <section className="video">
          <h2>L'Application pour l'Enseignement à Distance</h2>
          <YouTubeVideo />
          <p>
            Améliorez l'expérience d'apprentissage avec notre système de prise de décision intégré, basé sur les meilleures pratiques en éducation à distance.
          </p>
        </section>
      </main>
    </>
  );
}
export default App;
