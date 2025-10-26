
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/MobileMenu.css';

interface Service {
  name: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, services }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0 },
  };

  const serviceSubMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="mobile-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li><NavLink to="/" onClick={onClose}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={onClose}>About</NavLink></li>
              <li className="services-mobile-item" onClick={() => setIsServicesOpen(!isServicesOpen)}>
                Services
                <span className={`arrow ${isServicesOpen ? 'open' : ''}`}>›</span>
              </li>
              <AnimatePresence>
              {isServicesOpen && (
                <motion.ul 
                  className="services-submenu"
                  variants={serviceSubMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  >
                  {services.map((service) => (
                    <li key={service.name}>
                      <NavLink to={service.path} onClick={onClose}>{service.name}</NavLink>
                    </li>
                  ))}
                </motion.ul>
              )}
              </AnimatePresence>
              <li><NavLink to="/testimonials" onClick={onClose}>Testimonials</NavLink></li>
              <li><NavLink to="/contact" onClick={onClose}>Contact</NavLink></li>
              <li><NavLink to="/discuss-project" onClick={onClose} className="mobile-discuss-btn">Discuss Project</NavLink></li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
