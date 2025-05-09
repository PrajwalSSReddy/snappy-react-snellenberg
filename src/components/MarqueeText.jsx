
import React from 'react';

const MarqueeText = ({ text }) => {
  return (
    <div className="marquee-container overflow-hidden whitespace-nowrap w-full my-12 py-4 border-y border-gray-200">
      <div className="animate-marquee inline-block">
        {Array(10).fill(text).map((item, index) => (
          <span key={index} className="text-5xl md:text-7xl font-bold mx-8">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeText;
