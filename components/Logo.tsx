import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../css/Logo.css';

interface LogoProps {
  isLoading: boolean;
  onAnimationComplete?: () => void;
}

const Logo: React.FC<LogoProps> = ({ isLoading, onAnimationComplete }) => {
  return (
    <motion.div
      className={`logo-wrapper ${isLoading ? 'loading' : 'loaded'}`}
      layout
      transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] }}
      onLayoutAnimationComplete={() => {
        if (!isLoading && onAnimationComplete) {
          onAnimationComplete();
        }
      }}
    >
      <Link to="/" className="logo-link">
        <motion.div
          className="logo-container"
          initial={{ scale: 1.5 }}
          animate={{ scale: isLoading ? 1.5 : 1 }}
          transition={{ duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] }}
        >
          O.
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Logo;