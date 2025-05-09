
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <a 
      href={project.linkedinUrl || `https://in.linkedin.com/in/prajwalssreddy`} 
      target="_blank" 
      rel="noreferrer" 
      className="hover-project group hover-trigger"
    >
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
        {project.description && (
          <p className="text-sm text-gray-500 line-clamp-2">{project.description}</p>
        )}
      </div>
    </a>
  );
};

export default ProjectCard;
