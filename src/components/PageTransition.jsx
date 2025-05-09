
import React, { useState, useEffect } from 'react';

const PageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  
  useEffect(() => {
    // Show transition on load
    setIsTransitioning(true);
    
    // Start exit animation after a delay
    const exitTimeout = setTimeout(() => {
      setIsExiting(true);
    }, 300);
    
    // Remove the transition element after exit animation
    const completeTimeout = setTimeout(() => {
      setIsTransitioning(false);
      setIsExiting(false);
    }, 900);
    
    return () => {
      clearTimeout(exitTimeout);
      clearTimeout(completeTimeout);
    };
  }, []);
  
  if (!isTransitioning) return null;
  
  return (
    <div className={`page-transition ${isExiting ? 'exit' : 'active'}`}></div>
  );
};

export default PageTransition;
