import React from 'react';
import '../styles/ProjectCard.css';

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techs: Array<{ icon: string; name: string }>;
  githubUrl: string;
  webUrl: string;
}


const GithubIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" fill="#222"/>
  </svg>
);

const ProjectCard = ({ image, title, description, techs, githubUrl, webUrl }: ProjectCardProps) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-techs">
          {techs.map((tech, idx) => (
            <span key={idx} className="project-tech">
              <img src={tech.icon} alt={tech.name} title={tech.name} className="tech-icon" />
            </span>
          ))}
        </div>
      </div>
      <div className="project-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub">
          <GithubIcon />
        </a>
        <a href={webUrl} target="_blank" rel="noopener noreferrer" title="Web">
          <span className="material-icons">language</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard; 

