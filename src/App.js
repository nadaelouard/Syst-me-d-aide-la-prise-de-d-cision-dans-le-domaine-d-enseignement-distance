import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Utilisez Routes au lieu de Route
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import AboutPage from './AboutPage'; // Importez le composant AboutPage

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleContactClick = () => {
    setShowLogin(true);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>Accueil - EduNR</title>
          <meta name="description" content="Bienvenue sur l'application EduNR - Education Online." />
        </Helmet>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Bienvenue sur EduNR - Education Online</h1>
          <p>
            Simplifiez vos décisions pédagogiques avec notre outil d'analyse et de recommandation pour l'enseignement à distance
          </p>
          <nav>
            <ul>
              <li><button>Home</button></li>
              <li><button><Link to="/about">About</Link></button></li>
              <li><button>Service</button></li>
              <li><button onClick={handleContactClick}>Contact</button></li>
            </ul>
          </nav>
        </header>
        {showLogin ? (
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLoginFormSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" value={email} onChange={handleEmailChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Mot de passe:</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} />
              </div>
              <button type="submit">Connexion</button>
            </form>
          </div>
        ) : null}
        <Routes> {/* Utilisez Routes ici */}
          <Route path="/about" element={<AboutPage />} /> {/* Utilisez element pour définir le composant */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
