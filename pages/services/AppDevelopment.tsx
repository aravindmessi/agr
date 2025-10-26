
import React from 'react';
import '../../css/ServicePage.css';

const AppDevelopment: React.FC = () => {
  return (
    <div className="service-page-container">
      <h1 className="service-page-title">Ideas in Your Pocket</h1>
      <p className="service-page-description">
        From concept to launch, we craft intuitive and engaging mobile applications for iOS and Android that connect with users and achieve business goals.
      </p>
      <div className="service-page-images">
        <img src="https://picsum.photos/seed/appdev1/800/600" alt="App Development Concept 1" />
        <img src="https://picsum.photos/seed/appdev2/800/600" alt="App Development Concept 2" />
      </div>
    </div>
  );
};

export default AppDevelopment;
