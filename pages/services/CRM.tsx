
import React from 'react';
import '../../css/ServicePage.css';

const CRM: React.FC = () => {
  return (
    <div className="service-page-container">
      <h1 className="service-page-title">Building Lasting Relationships</h1>
      <p className="service-page-description">
        Our CRM solutions empower you to manage customer interactions, nurture leads, and build loyalty with a centralized, data-driven platform.
      </p>
      <div className="service-page-images">
        <img src="https://picsum.photos/seed/crm1/800/600" alt="CRM Concept 1" />
        <img src="https://picsum.photos/seed/crm2/800/600" alt="CRM Concept 2" />
      </div>
    </div>
  );
};

export default CRM;
