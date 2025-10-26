import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import '../css/Navbar.css';

const services = [
  { name: 'Web Development', path: '/services/web-development' },
  { name: 'App Development', path: '/services/app-development' },
  { name: 'Video Production & Ads', path: '/services/video-production' },
  { name: 'ERP Solutions', path: '/services/erp-solutions' },
  { name: 'CRM', path: '/services/crm' },
  { name: 'AI Integration', path: '/services/ai-integration' },
];

interface NavbarProps {
  isLoading: boolean;
  isAnimationComplete: boolean;
  onAnimationComplete: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoading, isAnimationComplete, onAnimationComplete }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, display: 'none' },
    visible: { opacity: 1, y: 0, display: 'block' },
  };
  
  const navItemsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handleLinkClick = () => {
      setIsMobileMenuOpen(false);
  }

  return (
    <>
      <header className={`navbar ${isAnimationComplete ? 'loaded' : ''}`}>
        <nav className="navbar-content">
          <motion.div className="nav-left" variants={navItemsVariants} initial="hidden" animate={isAnimationComplete ? 'visible' : 'hidden'}>
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <div 
              className="nav-link services-link"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              Services
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="services-dropdown"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={dropdownVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <ul>
                      {services.map((service) => (
                        <li key={service.name}>
                          <NavLink to={service.path} className="dropdown-link">
                            {service.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
          
          <div className="logo-position-container">
            <Logo isLoading={isLoading} onAnimationComplete={onAnimationComplete} />
          </div>

          <motion.div className="nav-right" variants={navItemsVariants} initial="hidden" animate={isAnimationComplete ? 'visible' : 'hidden'}>
            <NavLink to="/testimonials" className="nav-link">Testimonials</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            <NavLink to="/discuss-project" className="nav-link discuss-btn">Discuss Project</NavLink>
          </motion.div>

          <motion.button className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} variants={navItemsVariants} initial="hidden" animate={isAnimationComplete ? 'visible' : 'hidden'}>
            <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
            <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
            <div className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`} />
          </motion.button>
        </nav>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleLinkClick} services={services} />
    </>
  );
};

export default Navbar;