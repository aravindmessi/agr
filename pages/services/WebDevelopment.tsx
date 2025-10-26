
import React from 'react';
import '../../css/ServicePage.css';

const WebDevelopment: React.FC = () => {
  return (
    <div className="service-page-container">
      <h1 className="service-page-title">Architecting Digital Frontiers</h1>
      <p className="service-page-description">
        We build bespoke, high-performance websites that are not just visually stunning but also functionally robust, scalable, and optimized for conversions.
      </p>
      <div className="service-page-images">
        <img src="https://picsum.photos/seed/webdev1/800/600" alt="Web Development Concept 1" />
        <img src="https://picsum.photos/seed/webdev2/800/600" alt="Web Development Concept 2" />
      </div>
    </div>
  );
};

export default WebDevelopment;
