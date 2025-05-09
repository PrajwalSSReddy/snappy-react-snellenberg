
import React, { useEffect, useRef } from 'react';

const ModelBackground = ({ image = "/placeholder.svg" }) => {
  const bgRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!bgRef.current) return;
      
      const { clientX, clientY } = event;
      const xPos = (clientX / window.innerWidth - 0.5) * 8; // Reduced movement range
      const yPos = (clientY / window.innerHeight - 0.5) * 8; // Reduced movement range
      
      // Using more gentle transitions
      bgRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="model-bg">
      <div ref={bgRef} className="model-bg-inner">
        <img src={image} alt="Background" />
      </div>
    </div>
  );
};

export default ModelBackground;
