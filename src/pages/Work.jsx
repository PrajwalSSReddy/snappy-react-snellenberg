
import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'CRM App',
    category: 'iOS Development',
    description: 'Customer Relationship Management application built with Swift, CoreData and Firebase. Features include customer data management, sales tracking, and reporting.',
    slug: 'crm-app',
    linkedinUrl: 'https://in.linkedin.com/in/prajwalssreddy',
    coverImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1740&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Property Management',
    category: 'iOS & API Development',
    description: 'End-to-end property management system with iOS client and RESTful API backend. Includes features for property listings, tenant management, and maintenance requests.',
    slug: 'property-management',
    linkedinUrl: 'https://in.linkedin.com/in/prajwalssreddy',
    coverImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1674&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Dating App',
    category: 'iOS Development',
    description: 'A dating application built with Swift and Firebase, featuring user matching, real-time chat, and profile management.',
    slug: 'dating-app',
    linkedinUrl: 'https://in.linkedin.com/in/prajwalssreddy',
    coverImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1740&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Food Delivery App',
    category: 'iOS Development',
    description: 'Food delivery application with real-time order tracking, payment integration, and restaurant management features.',
    slug: 'food-delivery',
    linkedinUrl: 'https://in.linkedin.com/in/prajwalssreddy',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1740&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    category: 'iOS & API Integration',
    description: 'Comprehensive e-commerce solution with product catalog, shopping cart, payment processing, and user account management.',
    slug: 'e-commerce',
    linkedinUrl: 'https://in.linkedin.com/in/prajwalssreddy',
    coverImage: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1740&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Travel Companion App',
    category: 'iOS Development',
    description: 'Travel assistant application featuring itinerary planning, location-based recommendations, and offline maps functionality.',
    slug: 'travel-app',
    linkedinUrl: 'https://in.linkedin.com/in/prajwalssreddy',
    coverImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1740&auto=format&fit=crop'
  }
];

const Work = () => {
  // Initialize scroll reveal effect
  useScrollReveal();
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-5 reveal">Work</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-10 reveal stagger-delay-1">
          A selection of my iOS development projects. Each demonstrates my approach to solving real-world problems through mobile application design and development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`reveal stagger-delay-${index % 3 + 1}`}>
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
                  <p className="text-gray-600">{project.category}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
