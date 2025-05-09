
import React, { useEffect, useRef } from 'react';

const MarqueeText = ({ text, speed = 0.5 }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;
    
    // Clone the content for a seamless loop
    const clone = content.cloneNode(true);
    container.appendChild(clone);
    
    let animationFrame;
    let scrollPosition = 0;
    
    const animate = () => {
      scrollPosition += speed;
      
      // Reset position for seamless loop
      if (scrollPosition >= content.offsetWidth) {
        scrollPosition = 0;
      }
      
      container.style.transform = `translateX(-${scrollPosition}px)`;
      animationFrame = requestAnimationFrame(animate);
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [speed]);
  
  return (
    <div className="marquee-wrapper overflow-hidden whitespace-nowrap w-full my-12 py-6 border-y border-gray-200">
      <div 
        ref={containerRef}
        className="marquee-container inline-block"
      >
        <div ref={contentRef} className="inline-block">
          {Array(5).fill(text).map((item, index) => (
            <span key={index} className="text-5xl md:text-7xl font-bold mx-8">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
