import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page about-background">
      <div className="about-header">
        <p className="intro-text">
          Notre équipe, composée de <strong>Nada El OUARDI</strong> et <strong>Rewae AMJAHID</strong>, étudiantes en troisième année à l'<strong>É</strong>cole <strong>S</strong>upérieure d'<strong>I</strong>ngénierie en <strong>S</strong>ciences <strong>A</strong>ppliquées (<strong>ESISA</strong>), a développé ce système afin d'aider les enseignants et les établissements d'enseignement à mieux gérer leurs cours en ligne. De plus, les élèves pourront facilement trouver des informations pour améliorer leur apprentissage. Enfin, notre application a pour objectif de faciliter la prise de décision concernant l'adaptation de l'enseignement à distance.
        </p>
        <img src="/rewae-nada.jpeg" alt="notre photo" className="profile-photo" />
      </div>
      
      <h2 className="section-title">Contactez-nous :</h2>
      <div className="contact-info-container">
        <div className="contact-info-block">
          <img src="/loc.jpg" alt="Location" className="icon" />
          <p>ESISA - Ecole supérieure d'ingénierie en Sciences Appliquées</p>
        </div>
        <div className="contact-info-block">
          <img src="/insta.jpg" alt="Instagram" className="icon" />
          <p>nada_elouardii</p>
          <p>rewae_amj</p>
        </div>
        <div className="contact-info-block">
          <img src="/télé.png" alt="Phone" className="icon" />
          <p>Téléphone</p>
          <p>+212 691 222 065</p>
          <p>+212 613 396 179</p>
        </div>
        <div className="contact-info-block">
          <img src="/gmail.png" alt="Email" className="icon" />
          <p>E-mail</p>
          <p>
            <a href="mailto:nadaelouardi17@gmail.com">nadaelouardi17@gmail.com</a><br />
            <a href="mailto:amjahidrawae28@gmail.com">amjahidrawae28@gmail.com</a>
          </p>
        </div>
      </div>
      
      <h2 className="section-title">Nous Contacter</h2>
      <div className="contact-form-container">
        <form className="contact-form">
          <input type="text" name="name" placeholder="Enter your Name" required />
          <input type="email" name="email" placeholder="Enter a valid email address" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">Nous Faire Parvenir</button>
        </form>
      </div>
    </div>
  );
}

export default AboutPage;
