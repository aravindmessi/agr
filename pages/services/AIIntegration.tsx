
import React from 'react';
import '../../css/ServicePage.css';

const AIIntegration: React.FC = () => {
  return (
    <div className="service-page-container">
      <h1 className="service-page-title">Intelligence Amplified</h1>
      <p className="service-page-description">
        Unlock the power of artificial intelligence. We integrate smart solutions into your existing workflows to automate tasks, gain insights, and create innovative products.
      </p>
      <div className="service-page-images">
        <img src="https://picsum.photos/seed/ai1/800/600" alt="AI Integration Concept 1" />
        <img src="https://picsum.photos/seed/ai2/800/600" alt="AI Integration Concept 2" />
      </div>
    </div>
  );
};

export default AIIntegration;
