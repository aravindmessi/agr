import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Shorter delay before the animation starts
    const timer = setTimeout(() => setIsLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  }

  return (
    <div className="app-container">
      <Navbar 
        isLoading={isLoading} 
        isAnimationComplete={isAnimationComplete}
        onAnimationComplete={handleAnimationComplete} 
      />
      
      <main>
         <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: isAnimationComplete ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
              <Outlet />
            </motion.div>
         </AnimatePresence>
      </main>
    </div>
  );
};

export default Layout;