
import React, { useEffect, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    
    const handleMouseEnter = (e) => {
      if (e.target.classList.contains('hover-trigger')) {
        setIsActive(true);
      }
    };
    
    const handleMouseLeave = (e) => {
      if (e.target.classList.contains('hover-trigger')) {
        setIsActive(false);
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    const hoverElements = document.querySelectorAll('.hover-trigger');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isActive ? 'custom-cursor-active' : ''}`}
      style={{ left: `${x}px`, top: `${y}px` }}
    />
  );
};

export default CustomCursor;
