
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import DiscussProject from './pages/DiscussProject';
import WebDevelopment from './pages/services/WebDevelopment';
import AppDevelopment from './pages/services/AppDevelopment';
import VideoProduction from './pages/services/VideoProduction';
import ERPSolutions from './pages/services/ERPSolutions';
import CRM from './pages/services/CRM';
import AIIntegration from './pages/services/AIIntegration';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="contact" element={<Contact />} />
          <Route path="discuss-project" element={<DiscussProject />} />
          <Route path="services/web-development" element={<WebDevelopment />} />
          <Route path="services/app-development" element={<AppDevelopment />} />
          <Route path="services/video-production" element={<VideoProduction />} />
          <Route path="services/erp-solutions" element={<ERPSolutions />} />
          <Route path="services/crm" element={<CRM />} />
          <Route path="services/ai-integration" element={<AIIntegration />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
