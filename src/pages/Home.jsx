
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MarqueeText from '../components/MarqueeText';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projectsPreview = [
  {
    id: 1,
    title: 'Project One',
    category: 'Web Development',
    slug: 'project-one',
    coverImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1740&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Project Two',
    category: 'UI/UX Design',
    slug: 'project-two',
    coverImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1674&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Project Three',
    category: 'Brand Identity',
    slug: 'project-three',
    coverImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1740&auto=format&fit=crop'
  }
];

const Home = () => {
  // Initialize scroll reveal effect
  useScrollReveal();
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-3xl reveal">
            Creative developer focused on crafting exceptional digital experiences
          </h1>
          <div className="mt-8 text-xl md:text-2xl text-gray-600 max-w-xl reveal stagger-delay-1">
            <p>I build innovative digital products that combine aesthetic design with functional development.</p>
          </div>
          <Link 
            to="/work" 
            className="inline-flex items-center mt-12 text-xl hover-trigger reveal stagger-delay-2"
          >
            <span className="mr-2">View my work</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <MarqueeText text="CREATIVE DEVELOPER & DESIGNER" />
      
      {/* Selected Projects Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl font-bold reveal">Selected Works</h2>
            <Link 
              to="/work" 
              className="hidden md:inline-flex items-center hover-trigger reveal"
            >
              <span className="mr-2">View all projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsPreview.map((project, index) => (
              <div key={project.id} className={`reveal stagger-delay-${index + 1}`}>
                <Link to={`/work/${project.slug}`} className="hover-project group hover-trigger">
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
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
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
      
      {/* About Preview */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">About Me</h2>
              <div className="space-y-4 text-lg reveal stagger-delay-1">
                <p>I'm a freelance creative developer with over 5 years experience, focused on building beautiful digital products and experiences.</p>
                <p>My strength lies in bridging the gap between design and technology, creating seamless and intuitive interfaces.</p>
              </div>
              <Link 
                to="/about" 
                className="inline-flex items-center mt-8 hover-trigger reveal stagger-delay-2"
              >
                <span className="mr-2">Learn more about me</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="reveal stagger-delay-2">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1740&auto=format&fit=crop" 
                alt="Your Name" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 reveal">Let's Work Together</h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10 reveal stagger-delay-1">
            Have a project in mind? Let's collaborate to create something exceptional.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center text-xl hover-trigger reveal stagger-delay-2"
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
