
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import MarqueeText from '../components/MarqueeText';

const About = () => {
  // Initialize scroll reveal effect
  useScrollReveal();
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal">About Me</h1>
            <p className="text-xl text-gray-600 max-w-lg reveal stagger-delay-1">
              Creative Developer & Designer specializing in crafting engaging digital experiences.
            </p>
          </div>
          <div className="reveal stagger-delay-2">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1740&auto=format&fit=crop" 
              alt="Your Name" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        {/* Bio Section */}
        <section className="mb-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 reveal">My Story</h2>
            <div className="space-y-4 text-lg reveal stagger-delay-1">
              <p>
                I'm a creative developer with over 5 years experience in designing and building digital products. My passion lies in creating beautiful, functional, and accessible digital experiences.
              </p>
              <p>
                My journey began in graphic design before transitioning into web development, giving me a unique perspective that bridges the gap between visual aesthetics and technical implementation.
              </p>
              <p>
                I'm deeply invested in the intersection of design and technology, constantly exploring new ways to push the boundaries of what's possible on the web.
              </p>
            </div>
          </div>
        </section>
        
        <MarqueeText text="DESIGN & DEVELOPMENT" />
        
        {/* Skills Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12 reveal">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="reveal stagger-delay-1">
              <h3 className="text-xl font-bold mb-4">Design</h3>
              <ul className="space-y-2 text-gray-600">
                <li>User Experience Design</li>
                <li>User Interface Design</li>
                <li>Interaction Design</li>
                <li>Wireframing & Prototyping</li>
                <li>Brand Identity</li>
              </ul>
            </div>
            
            <div className="reveal stagger-delay-2">
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
            
            <div className="reveal stagger-delay-3">
              <h3 className="text-xl font-bold mb-4">Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Figma</li>
                <li>Adobe Creative Suite</li>
                <li>VS Code</li>
                <li>Git & GitHub</li>
                <li>Notion</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="py-20">
          <h2 className="text-3xl font-bold mb-12 reveal">Experience</h2>
          
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal stagger-delay-1">
              <div className="md:col-span-1">
                <span className="text-gray-500">2021 - Present</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">Freelance Designer & Developer</h3>
                <p className="text-gray-600 mt-2">
                  Working with clients globally to design and develop websites, applications, and digital products.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal stagger-delay-2">
              <div className="md:col-span-1">
                <span className="text-gray-500">2019 - 2021</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">UX Designer at Design Agency</h3>
                <p className="text-gray-600 mt-2">
                  Led the design process for various client projects, creating wireframes, prototypes, and final designs for websites and applications.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal stagger-delay-3">
              <div className="md:col-span-1">
                <span className="text-gray-500">2017 - 2019</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">Web Developer at Tech Company</h3>
                <p className="text-gray-600 mt-2">
                  Developed and maintained websites and web applications using modern front-end technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
