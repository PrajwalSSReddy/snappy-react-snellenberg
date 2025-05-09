
import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  // Initialize scroll reveal effect
  useScrollReveal();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal">Get In Touch</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-12 reveal stagger-delay-1">
          Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="reveal stagger-delay-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark focus:border-transparent"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dark focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md bg-dark text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="reveal stagger-delay-2">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4 mb-8">
              <p>
                <span className="block text-sm text-gray-500">Email</span>
                <a href="mailto:your@email.com" className="text-dark hover:underline">
                  your@email.com
                </a>
              </p>
              <p>
                <span className="block text-sm text-gray-500">Phone</span>
                <a href="tel:+1234567890" className="text-dark hover:underline">
                  +1 (234) 567-890
                </a>
              </p>
              <p>
                <span className="block text-sm text-gray-500">Location</span>
                <span className="text-dark">Your City, Country</span>
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 mt-12">Follow Me</h2>
            <div className="flex space-x-4">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="text-dark hover:opacity-70">
                Twitter
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="text-dark hover:opacity-70">
                Instagram
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-dark hover:opacity-70">
                LinkedIn
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-dark hover:opacity-70">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
