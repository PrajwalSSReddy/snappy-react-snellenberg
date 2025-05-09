
import React, { useEffect, useState, useRef } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isActive, setIsActive] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isCursorVisible, setIsCursorVisible] = useState(false);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Show cursor when it moves
    const handleMouseEnter = () => setIsCursorVisible(true);
    const handleMouseLeave = () => setIsCursorVisible(false);
    
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Set initial visibility with a slight delay for animation
    setTimeout(() => {
      setIsCursorVisible(true);
    }, 300);
    
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    
    const handleMouseEnter = (e) => {
      if (e.target.classList.contains('hover-trigger')) {
        setIsActive(true);
        setIsHovering(true);
      }
    };
    
    const handleMouseLeave = (e) => {
      if (e.target.classList.contains('hover-trigger')) {
        setIsActive(false);
        setIsHovering(false);
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
    <>
      <div 
        ref={cursorRef}
        className={`custom-cursor main-cursor ${isActive ? 'custom-cursor-active' : ''} ${isHovering ? 'hovering' : ''} ${isCursorVisible ? 'visible' : ''}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
      <div 
        ref={followerRef}
        className={`cursor-follower ${isActive ? 'cursor-follower-active' : ''} ${isHovering ? 'hovering' : ''} ${isCursorVisible ? 'visible' : ''}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      />
    </>
  );
};

export default CustomCursor;
