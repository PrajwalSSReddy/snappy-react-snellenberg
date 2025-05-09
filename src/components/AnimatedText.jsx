
import React, { useEffect, useRef } from 'react';

const AnimatedText = ({ text, className = "", delay = 0, stagger = 0.02 }) => {
  const textRef = useRef(null);
  
  useEffect(() => {
    const element = textRef.current;
    if (!element) return;
    
    // Split text into characters
    const chars = text.split('');
    element.innerHTML = '';
    
    // Create span for each character
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.className = 'char-reveal';
      span.style.transitionDelay = `${delay + (index * stagger)}s`;
      span.textContent = char === ' ' ? '\u00A0' : char; // Use non-breaking space for actual spaces
      element.appendChild(span);
    });
    
    // Use IntersectionObserver to reveal when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const chars = element.querySelectorAll('.char-reveal');
            chars.forEach((char, index) => {
              setTimeout(() => {
                char.classList.add('visible');
              }, index * (stagger * 1000)); // Convert stagger to milliseconds
            });
          }, delay * 1000); // Convert delay to milliseconds
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [text, delay, stagger]);
  
  return (
    <div ref={textRef} className={className}></div>
  );
};

export default AnimatedText;
