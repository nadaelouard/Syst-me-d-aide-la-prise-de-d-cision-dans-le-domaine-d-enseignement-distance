import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AdaptiveDescriptionPage.css';

function AdaptiveDescriptionPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/advantages');
  };

  return (
    <div className="adaptive-description-page">
      <div className="message-box">
        <h1>Félicitations !! L'élève est adaptatif pour l'enseignement à distance</h1>
        
      </div>
    </div>
  );
}

export default AdaptiveDescriptionPage;