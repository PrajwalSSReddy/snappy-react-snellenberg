
import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
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
  },
  {
    id: 4,
    title: 'Project Four',
    category: 'Web Development',
    slug: 'project-four',
    coverImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1740&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Project Five',
    category: 'Motion Design',
    slug: 'project-five',
    coverImage: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1740&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Project Six',
    category: 'Visual Identity',
    slug: 'project-six',
    coverImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1740&auto=format&fit=crop'
  }
];

const Work = () => {
  // Initialize scroll reveal effect
  useScrollReveal();
  
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 reveal">Work</h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-12 reveal stagger-delay-1">
          A curated selection of my design and development projects. Each project represents my approach to solving real-world problems through design and technology.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className={`reveal stagger-delay-${index % 3 + 1}`}>
              <a href={`/work/${project.slug}`} className="hover-project group hover-trigger">
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
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
