
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const NotFound = () => {
  useScrollReveal();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-9xl font-bold mb-6 reveal">404</h1>
      <p className="text-xl md:text-2xl text-gray-600 mb-8 reveal stagger-delay-1">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="text-lg underline underline-offset-4 hover:opacity-70 transition-opacity reveal stagger-delay-2"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
