import React from 'react';
import '../styles/AboutMe.css';
import perfilImage from '../assets/perfil/perfilserio.png';

const AboutMe = () => {
  return (
    <>
      <div className="aboutme-photo-wrapper">
        <img
          src={perfilImage}
          className="aboutme-photo"
          alt="Foto de perfil de Kevin"  
        />
      </div>
      <div className="aboutme-info" >
        <h2>Kevin Andrey Jaimes Cristancho</h2>
        <div className="aboutme-details"  style={{fontSize: '20px'}}>
          <div>
            <span>Pais:</span>
            <span>Colombia</span>
          </div>
          <div>
            <span>Edad:</span>
            <span>20</span>
          </div>
        </div>
        <a className="aboutme-cv" href="#" download>
          Descargar CV <span className="material-icons">download</span>
        </a>
      </div>
    </>
  );
};

export default AboutMe; 