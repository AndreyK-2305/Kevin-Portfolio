import React from 'react';
import jsIcon from '../assets/js.svg';
import javaIcon from '../assets/java.svg';
import reactIcon from '../assets/react.svg';
import pythonIcon from '../assets/python.svg';
import dbIcon from '../assets/db.svg';


const GithubIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.479C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" fill="#222"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" fill="#222"/>
  </svg>
);


const AboutPage = () => {
  return (
    <div style={{
      fontFamily: 'JetBrains Mono, monospace',
      textAlign: 'center',
      marginTop: '3rem',
      maxWidth: '85%',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '18px'
    }}>
      <p>Soy estudiante en etapa final de Ingeniería de Sistemas, con enfoque en desarrollo web full stack. Me apasiona crear soluciones funcionales que aporten valor, y disfruto enfrentar desafíos técnicos que me reten a aprender más. He trabajado con tecnologías como JavaScript, React y Spring Boot, participando en proyectos donde he desarrollado tanto interfaces modernas como sistemas con bases de datos.</p>

      <p>Actualmente estoy construyendo mi portafolio como carta de presentación para oportunidades laborales o prácticas profesionales. Estoy abierto a nuevos retos y comprometido con seguir creciendo como desarrollador. </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: '32px' }}>
        <img src={jsIcon} alt="JavaScript" title="JavaScript" width={48} height={48} />
        <img src={javaIcon} alt="Java" title="Java" width={48} height={48} />
        <img src={reactIcon} alt="React" title="React" width={48} height={48} />
        <img src={pythonIcon} alt="Python" title="Python" width={48} height={48} />
        <img src={dbIcon} alt="Database" title="Database" width={48} height={48} />
      </div>
      <div style={{ position: 'absolute', right: 40, bottom: 30, display: 'flex', gap: 24 }}>
        <a href="https://github.com/AndreyK-2305" target="_blank" rel="noopener noreferrer" title="GitHub">
          <GithubIcon />
        </a>
        <a href="https://www.linkedin.com/in/andrey-jaimes-b0bb30300/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <LinkedinIcon />
        </a>
      </div>

    </div>
    
    
  );
  
  
};


export default AboutPage;
