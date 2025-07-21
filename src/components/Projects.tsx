import React from 'react';
import ProjectCard from './ProjectCard';
import javaIcon from '../assets/java.svg';
import tsIcon from '../assets/ts.svg';
import reactIcon from '../assets/react.svg';
import scibuImg from '../assets/projetcs/scibu.png';
import sisgelabImg from '../assets/projetcs/sisgelab.png';

const projects = [
  {
    image: scibuImg,
    title: 'SCIBU',
    description: 'Web de gestión de citas de servicios de salud para la vicerrectoría de Bienestar Universitario (UFPS - Cúcuta).',
    techs: [
      { icon: javaIcon, name: 'Java' },
      { icon: tsIcon, name: 'TypeScript' },
      { icon: reactIcon, name: 'React' },
    ],
    githubUrl: 'https://github.com/AndreyK-2305/SCIBU',
    webUrl: 'https://andreyk-2305.github.io/SCIBU/#/auth/login',
  },
  {
    image: sisgelabImg,
    title: 'SISGELAB',
    description: 'Web administrativo para el Laboratorio de Fabricacion Digital(FABLAB) de la UFPS-Cúcuta.',
    techs: [
      { icon: javaIcon, name: 'Java' },
      { icon: tsIcon, name: 'TypeScript' },
      { icon: reactIcon, name: 'React' },
    ],
    githubUrl: 'https://github.com/juandavidafve/SISGELAB-frontend',
    webUrl: 'https://juandavidafve.github.io/SISGELAB-frontend/#/auth/login',
  },
];

const Projects = () => {
  return (
    <section style={{ width: '100%' }}> 
      <div>
       {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );    
};  

export default Projects; 