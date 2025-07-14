import React from 'react';
import '../styles/Sidebar.css';

interface SidebarProps {
  selectedSection: string;
  onSelectSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedSection, onSelectSection }) => {
  return (
    <div className="sidebar-overlay">
      <nav className="sidebar">
        <ul>
          <li
            className={selectedSection === 'sobre-mi' ? 'active' : ''}
            onClick={() => onSelectSection('sobre-mi')}
          >
            <span className="material-icons">person</span>
            <span className="sidebar-label">Sobre mí</span>
          </li>
          <li
            className={selectedSection === 'proyectos' ? 'active' : ''}
            onClick={() => onSelectSection('proyectos')}
          >
            <span className="material-icons">folder</span>
            <span className="sidebar-label">Proyectos</span>
          </li>
          <li
            className={selectedSection === 'educacion' ? 'active' : ''}
            onClick={() => onSelectSection('educacion')}
          >
            <span className="material-icons">school</span>
            <span className="sidebar-label">Educación</span>
          </li>
          <li
            className={selectedSection === 'experiencia' ? 'active' : ''}
            onClick={() => onSelectSection('experiencia')}
          >
            <span className="material-icons">work</span>
            <span className="sidebar-label">Experiencia</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 