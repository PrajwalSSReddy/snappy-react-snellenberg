
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MarqueeText from '../components/MarqueeText';
import AnimatedText from '../components/AnimatedText';
import ModelBackground from '../components/ModelBackground';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useParallaxEffect } from '../hooks/useParallaxEffect';

const projectsPreview = [
  {
    id: 1,
    title: 'CRM App',
    category: 'iOS Development',
    slug: 'crm-app',
    linkedinUrl: 'https://in.linkedin.com/in/prajwalssreddy',
    coverImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1740&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Property Management',
    category: 'iOS & API Development',
    slug: 'property-management',
    linkedinUrl: 'https://in.linkedin.com/in/prajwalssreddy',
    coverImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1674&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Dating App',
    category: 'iOS Development',
    slug: 'dating-app',
    linkedinUrl: 'https://in.linkedin.com/in/prajwalssreddy',
    coverImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1740&auto=format&fit=crop'
  }
];

const Home = ({ isDarkMode }) => {
  // Initialize scroll reveal effect
  useScrollReveal();
  
  // Initialize parallax effect
  useParallaxEffect('.parallax', 0.1);
  
  return (
    <div className="min-h-screen relative">
      {/* Background Model Image */}
      <ModelBackground image="/placeholder.svg" isDarkMode={isDarkMode} />
      
      {/* Hero Section - Reduced vertical padding */}
      <section className="min-h-screen flex flex-col justify-center pt-10 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-4 reveal-left">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-2">Prajwal S S Reddy</h1>
            <AnimatedText 
              text="iOS Developer focused on crafting exceptional mobile experiences"
              className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl"
              delay={0.3}
              stagger={0.04} // Slowed down animation
            />
          </div>
          <div className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-xl reveal-right stagger-delay-2">
            <p>I build innovative mobile applications that combine aesthetic design with functional development.</p>
          </div>
          <Link 
            to="/work" 
            className="inline-flex items-center mt-6 text-xl hover-trigger reveal-scale stagger-delay-3"
          >
            <span className="mr-2">View my work</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <MarqueeText text="iOS DEVELOPER & MOBILE APP SPECIALIST" speed={0.08} />
      
      {/* Selected Projects Preview - Reduced vertical padding */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Selected Works</h2>
            <Link 
              to="/work" 
              className="hidden md:inline-flex items-center hover-trigger reveal"
            >
              <span className="mr-2">View all projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsPreview.map((project, index) => (
              <div 
                key={project.id} 
                className={`reveal stagger-delay-${index + 1}`}
                data-direction={index % 2 === 0 ? 'up' : 'down'}
              >
                <a href={project.linkedinUrl} target="_blank" rel="noreferrer" className="hover-project group hover-trigger">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full aspect-[4/3] object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-dark bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{project.category}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link 
              to="/work" 
              className="inline-flex items-center hover-trigger reveal"
            >
              <span className="mr-2">View all projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Preview - Reduced vertical padding */}
      <section className="py-10 bg-accent dark:bg-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 reveal-left">About Me</h2>
              <div className="space-y-3 text-lg reveal-left stagger-delay-1">
                <p>I'm Prajwal S S Reddy, an iOS Developer with expertise in Swift and mobile application development, focused on creating intuitive and responsive user experiences.</p>
                <p>My strength lies in building robust mobile applications with clean architecture, creating seamless and intuitive interfaces for iOS platforms.</p>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center mt-4 hover-trigger reveal-left stagger-delay-2"
              >
                <span className="mr-2">Learn more about me</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="reveal-right stagger-delay-2 parallax" data-direction="right">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1740&auto=format&fit=crop" 
                alt="Prajwal S S Reddy" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Preview - Reduced vertical padding */}
      <section className="py-10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <AnimatedText
            text="Let's Work Together"
            className="text-3xl md:text-5xl font-bold mb-5"
            delay={0.1}
            stagger={0.04} // Slowed down animation
          />
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 reveal stagger-delay-1">
            Have a mobile app project in mind? Let's collaborate to create something exceptional.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center text-xl hover-trigger reveal-scale stagger-delay-2"
          >
            <span className="mr-2">Get in touch</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
