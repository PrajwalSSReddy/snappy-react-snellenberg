
import React, { useEffect, useRef } from 'react';

const MarqueeText = ({ text, speed = 0.15 }) => { // Reduced default speed
  const marqueeRef = useRef(null);
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!marqueeRef.current || !containerRef.current) return;
    
    const marqueeContainer = marqueeRef.current;
    const marqueeContent = marqueeContainer.children[0];
    const marqueeWidth = marqueeContent.offsetWidth;
    
    // Clone the content enough times to fill the view
    const cloneCount = Math.ceil(window.innerWidth / marqueeWidth) + 1;
    
    for (let i = 0; i < cloneCount; i++) {
      const clone = marqueeContent.cloneNode(true);
      marqueeContainer.appendChild(clone);
    }
    
    let animFrame;
    let position = 0;
    
    const animate = () => {
      position -= speed;
      
      // Reset position when first element is out of view
      if (position <= -marqueeWidth) {
        position = 0;
      }
      
      marqueeContainer.style.transform = `translateX(${position}px)`;
      animFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, [text, speed]);
  
  return (
    <div className="w-full py-8 overflow-hidden marquee-wrapper bg-light" ref={containerRef}>
      <div className="flex marquee-container" ref={marqueeRef}>
        <div className="text-5xl font-bold whitespace-nowrap px-4">{text}</div>
      </div>
    </div>
  );
};

export default MarqueeText;
