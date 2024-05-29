import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdvicePage.css';

function AdvicePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/detailed-advice');
  };

  return (
    <div className="advice-page">
      <div className="message-box">
        <h1>Malheureusement, l'élève n'est pas adaptatif pour l'enseignement à distance</h1>
        <button onClick={handleButtonClick}>Voir des conseils pour s'adapter</button>
      </div>
    </div>
  );
}

export default AdvicePage;