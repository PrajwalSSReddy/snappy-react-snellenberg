
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 bg-light border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Prajwal S S Reddy</h3>
            <p className="text-gray-600">iOS Developer<br />Based in Bangalore, India</p>
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
              <li>
                <a 
                  href="https://in.linkedin.com/in/prajwalssreddy" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-600 hover:text-dark hover:opacity-50 flex items-center"
                >
                  <Linkedin size={16} className="mr-1" /> LinkedIn
                </a>
              </li>
              <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-dark hover:opacity-50">Github</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="mailto:your@email.com" className="text-gray-600 hover:text-dark hover:opacity-50">your@email.com</a></li>
              <li><a href="tel:+1234567890" className="text-gray-600 hover:text-dark hover:opacity-50">+91 123 456 7890</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Prajwal S S Reddy. All rights reserved.</p>
          <p className="text-gray-600 mt-2 md:mt-0">iOS Developer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
