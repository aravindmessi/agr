
import React from 'react';
import '../../css/ServicePage.css';

const ERPSolutions: React.FC = () => {
  return (
    <div className="service-page-container">
      <h1 className="service-page-title">Unifying Your Enterprise</h1>
      <p className="service-page-description">
        Streamline your operations with our custom ERP solutions. We integrate all your core business processes into a single, efficient system for enhanced productivity.
      </p>
      <div className="service-page-images">
        <img src="https://picsum.photos/seed/erp1/800/600" alt="ERP Solutions Concept 1" />
        <img src="https://picsum.photos/seed/erp2/800/600" alt="ERP Solutions Concept 2" />
      </div>
    </div>
  );
};

export default ERPSolutions;
