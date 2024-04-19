

// AboutPage.js

import React from 'react';
import './AboutPage.css'; // Importez votre fichier de styles CSS

function AboutPage() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <p>Nous sommes Nada El Ouardi et Rewae AMJAHID, étudiantes en 3ème année à l'École Supérieure d'Ingénierie en Sciences Appliquées (ESISA). Nous avons l'honneur de partager avec vous notre projet de fin d'année, un système d'aide à la prise de décision dans le domaine de l'enseignement à distance.</p>
      <div className="contact-info">
        <p><strong>Si vous avez des questions, n'hésitez pas à nous contacter :</strong></p>
        <ul>
          <li><strong>Email :</strong> Nadaelouardi17@gmail.com / RewaeAmj@gmail.com</li>
          <li><strong>Téléphone :</strong> 06-91-22-20-65 / 06-13-39-61-79</li>
          <li><strong>Instagram :</strong> <a href="https://www.instagram.com/nada_el_ouardi/">nada_el_ouardi</a> / <a href="https://www.instagram.com/rewae_amj/">Rewae_amj</a></li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
