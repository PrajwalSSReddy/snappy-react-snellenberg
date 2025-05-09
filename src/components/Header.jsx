
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'py-4 bg-white/90 backdrop-blur-sm' : 'py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="text-xl font-medium hover-trigger">
            Your Name
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="header-link hover-trigger">Home</Link>
            <Link to="/work" className="header-link hover-trigger">Work</Link>
            <Link to="/about" className="header-link hover-trigger">About</Link>
            <Link to="/contact" className="header-link hover-trigger">Contact</Link>
          </nav>
          
          <button 
            className="md:hidden hover-trigger"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto px-4 py-6 h-full flex flex-col">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-medium" onClick={() => setIsMenuOpen(false)}>
              Your Name
            </Link>
            <button 
              className="hover-trigger"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-8 mt-20 text-4xl">
            <Link 
              to="/" 
              className="header-link reveal stagger-delay-1 hover-trigger"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/work" 
              className="header-link reveal stagger-delay-2 hover-trigger"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link 
              to="/about" 
              className="header-link reveal stagger-delay-3 hover-trigger"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="header-link reveal stagger-delay-4 hover-trigger"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
