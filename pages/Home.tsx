
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/Home.css';

const words = ["STRATEGY", "DESIGN", "DEVELOPMENT", "IMPACT"];

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="hero-text">
        <h1>
          WE CREATE DIGITAL
          <div className="animated-word-container">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="animated-word"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Home;
