import React from 'react';
import ReactPlayer from 'react-player';
import './YouTubeVideo.css';


function YouTubeVideo() {
  return (
    <div className="video-wrapper">
      <div className="video-container">
        <ReactPlayer
          url='https://youtu.be/vSaDBNp5QMk?si=GHdvN32LgYYeRSfo'
          
        />
      </div>
    </div>
  );
}

export default YouTubeVideo;
