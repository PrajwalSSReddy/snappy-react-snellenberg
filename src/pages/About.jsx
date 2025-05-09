
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import MarqueeText from '../components/MarqueeText';
import { ArrowRight } from 'lucide-react';

const About = () => {
  // Initialize scroll reveal effect
  useScrollReveal();
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-5 reveal">About Me</h1>
            <p className="text-xl text-gray-600 max-w-lg reveal stagger-delay-1">
              iOS Developer specialized in crafting engaging mobile experiences with Swift and UIKit.
            </p>
          </div>
          <div className="reveal stagger-delay-2">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1740&auto=format&fit=crop" 
              alt="Prajwal S S Reddy" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        {/* Bio Section */}
        <section className="mb-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-5 reveal">My Story</h2>
            <div className="space-y-4 text-lg reveal stagger-delay-1">
              <p>
                I'm Prajwal S S Reddy, an iOS Developer with a passion for creating elegant, user-friendly mobile applications. My journey in mobile development began during my education, and I've since refined my skills in Swift, UIKit, and the broader Apple ecosystem.
              </p>
              <p>
                With expertise in the entire iOS development lifecycle, I specialize in building applications with clean architecture, intuitive interfaces, and robust performance. I've worked on various projects ranging from CRM systems to dating applications, always focusing on delivering exceptional user experiences.
              </p>
              <p>
                I'm deeply interested in the evolution of mobile technology and continuously seek to expand my knowledge and skills in the field. My approach combines technical excellence with creative problem-solving to build applications that not only look great but function seamlessly.
              </p>
            </div>
            <div className="mt-6">
              <a 
                href="https://in.linkedin.com/in/prajwalssreddy" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center hover-trigger reveal"
              >
                <span className="mr-2">Connect on LinkedIn</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>
        
        <MarqueeText text="iOS DEVELOPMENT & MOBILE DESIGN" speed={0.15} />
        
        {/* Education Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-10 reveal">Education</h2>
          
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal stagger-delay-1">
              <div className="md:col-span-1">
                <span className="text-gray-500">2017 - 2021</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">Bachelor of Technology</h3>
                <p className="text-gray-600 mt-1">Computer Science & Engineering</p>
                <p className="text-gray-500 mt-1">Visvesvaraya Technological University</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal stagger-delay-2">
              <div className="md:col-span-1">
                <span className="text-gray-500">2015 - 2017</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">Pre-University Education</h3>
                <p className="text-gray-600 mt-1">Science Stream with Computer Science</p>
                <p className="text-gray-500 mt-1">Karnataka Pre-University Board</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-10 reveal">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="reveal stagger-delay-1">
              <h3 className="text-xl font-bold mb-4">Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Swift</li>
                <li>Objective-C</li>
                <li>UIKit</li>
                <li>SwiftUI</li>
                <li>Core Data</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            
            <div className="reveal stagger-delay-2">
              <h3 className="text-xl font-bold mb-4">Tools & Frameworks</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Xcode</li>
                <li>CocoaPods</li>
                <li>Firebase</li>
                <li>Realm</li>
                <li>Git & GitHub</li>
                <li>Fastlane</li>
              </ul>
            </div>
            
            <div className="reveal stagger-delay-3">
              <h3 className="text-xl font-bold mb-4">Design & Other</h3>
              <ul className="space-y-2 text-gray-600">
                <li>UI/UX Design for Mobile</li>
                <li>App Store Optimization</li>
                <li>Agile Development</li>
                <li>REST API Design</li>
                <li>Sketch & Figma</li>
                <li>Jira & Confluence</li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-10 reveal">Experience</h2>
          
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal stagger-delay-1">
              <div className="md:col-span-1">
                <span className="text-gray-500">2021 - Present</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">iOS Developer</h3>
                <p className="text-gray-600 mt-1">Tech Solutions Inc.</p>
                <p className="text-gray-500 mt-2">
                  Developing and maintaining iOS applications for various clients. Leading mobile projects from concept to App Store release. Implementing clean architecture and modern Swift practices.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 reveal stagger-delay-2">
              <div className="md:col-span-1">
                <span className="text-gray-500">2020 - 2021</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">iOS Development Intern</h3>
                <p className="text-gray-600 mt-1">Mobile App Studio</p>
                <p className="text-gray-500 mt-2">
                  Assisted in the development of iOS applications. Gained hands-on experience with Swift, UIKit, and CoreData. Participated in code reviews and agile development processes.
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
