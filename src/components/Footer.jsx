
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 bg-light border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Your Name</h3>
            <p className="text-gray-600">Creative Developer & Designer<br />Based in Your City</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-dark hover:opacity-50">Home</Link></li>
              <li><Link to="/work" className="text-gray-600 hover:text-dark hover:opacity-50">Work</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-dark hover:opacity-50">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-dark hover:opacity-50">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Social</h4>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-dark hover:opacity-50">Twitter</a></li>
              <li><a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-dark hover:opacity-50">Instagram</a></li>
              <li><a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-dark hover:opacity-50">LinkedIn</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-dark hover:opacity-50">Github</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:your@email.com" className="text-gray-600 hover:text-dark hover:opacity-50">your@email.com</a></li>
              <li><a href="tel:+1234567890" className="text-gray-600 hover:text-dark hover:opacity-50">+1 (234) 567-890</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-gray-600 mt-2 md:mt-0">Built with care ♥</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
