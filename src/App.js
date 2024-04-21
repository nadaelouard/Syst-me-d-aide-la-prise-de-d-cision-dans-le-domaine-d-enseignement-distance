import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';
import Footer from './Footer';
import AboutPage from './AboutPage';

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

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Stockez le jeton d'accès retourné dans le stockage local ou les cookies
        localStorage.setItem('accessToken', data.token);
        // Redirigez l'utilisateur vers la page protégée ou effectuez une autre action souhaitée
        // Par exemple, vous pouvez utiliser React Router pour rediriger l'utilisateur
        // history.push('/profil');
      } else {
        console.error('Erreur lors de la connexion:', response.statusText);
        // Affichez un message d'erreur à l'utilisateur
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error.message);
      // Affichez un message d'erreur à l'utilisateur
    }
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
          <p>Simplifiez vos décisions pédagogiques avec notre outil d'analyse et de recommandation pour l'enseignement à distance</p>
          <nav>
  <ul>
    <li><button>Home</button></li>
    <li><button><Link to="/about">About</Link></button></li>
    <li><button>Service</button></li>
    <li><Link to="#" onClick={handleContactClick}>Contact</Link></li>
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
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

