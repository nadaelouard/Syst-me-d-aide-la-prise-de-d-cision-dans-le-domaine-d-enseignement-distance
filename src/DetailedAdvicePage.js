import React from 'react';
import './DetailedAdvicePage.css'; // Assurez-vous de créer et inclure ce fichier CSS
import ReactPlayer from 'react-player';
function DetailedAdvicePage() {
  return (
    <div className="detailed-advice-page">
      <h1>Compétences et stratégies pour s'adapter à l'apprentissage à distance</h1>
      <ul>
        <li>
          <strong>Développez des compétences en gestion du temps :</strong> Utilisez des calendriers, des agendas et des applications de gestion du temps pour organiser vos journées et respecter les délais.
          <section className="video-section">
        <h2>Gestion de temps</h2>
        <div className="video-wrapper">
          <ReactPlayer
            url='https://youtu.be/S9dX_JEJoJQ?si=_9rCVI2fX7v9hi6G'
           
          />
        </div>
        </section>
        </li>
        <li>
          <strong>Maîtrisez les outils technologiques :</strong> Familiarisez-vous avec les plateformes de cours en ligne, les outils de visioconférence et les applications de collaboration comme Zoom, Microsoft Teams, et Google Classroom.
          <a href="https://example.com/online-tools" className="advice-link">En savoir plus</a>
          <section className="video-section">
        <h2>Maîtrisez les outils technologiques </h2>
        <div className="video-wrapper">
          <ReactPlayer
            url='https://youtu.be/BbE2X0l-pXc?si=8ZZ8Q0yPP48LSAcl'
           
          />
        </div>
        </section>
        </li>
        <li>
          <strong>Développez des compétences en auto-apprentissage :</strong> Apprenez à rechercher des informations par vous-même, à évaluer les sources et à résoudre des problèmes de manière autonome.
          <a href="https://example.com/self-learning" className="advice-link">En savoir plus</a>
          <section className="video-section">
        <h2>Auto-apprentissage</h2>
        <div className="video-wrapper">
          <ReactPlayer
            url='https://youtu.be/NOIFI-K7Zyg?si=buXMkLzf-Vqc_UeJ'
           
          />
        </div>
        </section>
        </li>
        <li>
          <strong>Adoptez des stratégies d'étude efficaces :</strong> Utilisez des techniques comme la prise de notes active, le mind mapping et les sessions d'étude espacées pour améliorer votre compréhension et votre rétention des connaissances.
          <a href="https://example.com/study-strategies" className="advice-link">En savoir plus</a>
          <section className="video-section">
        <h2>Adoptez des stratégies d'étude efficaces</h2>
        <div className="video-wrapper">
          <ReactPlayer
            url='https://youtu.be/m5MJ6OGhV8c?si=gtxWWpZICx-UWmnJ'
           
          />
        </div>
        </section>
        </li>
      </ul>
    </div>
  );
}

export default DetailedAdvicePage;
