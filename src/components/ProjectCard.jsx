
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
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
  );
};

export default ProjectCard;
