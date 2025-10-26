
import React from 'react';
import '../../css/ServicePage.css';

const VideoProduction: React.FC = () => {
  return (
    <div className="service-page-container">
      <h1 className="service-page-title">Stories That Move</h1>
      <p className="service-page-description">
        We produce compelling video content and strategic ad campaigns that capture attention, evoke emotion, and drive action across all digital platforms.
      </p>
      <div className="service-page-images">
        <img src="https://picsum.photos/seed/video1/800/600" alt="Video Production Concept 1" />
        <img src="https://picsum.photos/seed/video2/800/600" alt="Video Production Concept 2" />
      </div>
    </div>
  );
};

export default VideoProduction;
