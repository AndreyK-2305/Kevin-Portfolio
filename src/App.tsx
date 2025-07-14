import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import AboutMe from './components/AboutMe';

import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import EducationPage from './pages/EducationPage';
import ExperiencePage from './pages/ExperiencePage';

import './App.css';

const sectionTitles: Record<string, string> = {
  'sobre-mi': 'Sobre mí',
  'proyectos': 'Proyectos',
  'educacion': 'Educación',
  'experiencia': 'Experiencia',
};

function App() {
  const [selectedSection, setSelectedSection] = useState('sobre-mi');

  let sectionContent = null;
  if (selectedSection === 'sobre-mi') {
    sectionContent = <AboutPage />;
  } else if (selectedSection === 'proyectos') {
    sectionContent = <ProjectsPage />;
  } else if (selectedSection === 'educacion') {
    sectionContent = <EducationPage />;
  } else if (selectedSection === 'experiencia') {
    sectionContent = <ExperiencePage />;
  }

  return (
    <div className="app-container">
      <Sidebar selectedSection={selectedSection} onSelectSection={setSelectedSection} />
      
      <main className="main-content">
        <div className="aboutme-container">
          <section className="aboutme-left">
            <AboutMe />
          </section>

          <section className="aboutme-right">
            <div className="section-header">
              <h1>{sectionTitles[selectedSection]}</h1>
              <hr />
            </div>

            <div className="section-content">
              {sectionContent}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
