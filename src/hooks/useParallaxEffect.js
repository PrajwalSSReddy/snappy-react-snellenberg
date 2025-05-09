
import { useEffect, useRef } from 'react';

export const useParallaxEffect = (selector = '.parallax', intensity = 0.1) => {
  const elementsRef = useRef([]);
  
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(selector);
      elementsRef.current = Array.from(elements);
      
      elementsRef.current.forEach((element) => {
        const scrollPosition = window.pageYOffset;
        const elementTop = element.getBoundingClientRect().top + scrollPosition;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Check if element is in view
        if (elementTop - windowHeight <= scrollPosition && 
            elementTop + elementHeight >= scrollPosition) {
          
          const distance = scrollPosition - elementTop + windowHeight;
          const percentage = Math.min(distance / (windowHeight + elementHeight), 1);
          
          // Apply the transform based on scroll percentage
          const translateValue = percentage * intensity * 100;
          
          if (element.dataset.direction === 'up') {
            element.style.transform = `translateY(-${translateValue}px)`;
          } else if (element.dataset.direction === 'down') {
            element.style.transform = `translateY(${translateValue}px)`;
          } else if (element.dataset.direction === 'left') {
            element.style.transform = `translateX(-${translateValue}px)`;
          } else if (element.dataset.direction === 'right') {
            element.style.transform = `translateX(${translateValue}px)`;
          }
        }
      });
    };

    // Initialize parallax on elements
    handleScroll();
    
    // Add smooth scrolling class to HTML
    document.documentElement.classList.add('smooth-scroll');
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.classList.remove('smooth-scroll');
    };
  }, [selector, intensity]);
};
