import '../styles/education.css';
import EducationItem from '../components/educationItem';

const EducationPage = () => {
  return (
    <div className="education-section">
      <EducationItem
        school="Universidad Francisco de Paula Santander"
        title="Ingenieria de Sistemas"
        date="01/2022 -"
        ongoing={true}
      />
      <EducationItem
        school="Servicio Nacional de Aprendizaje(SENA)"
        title="Tecnico en Sistemas"
        date="01/2020 - 11/2021"
      />
      <EducationItem
        school="CISCO"
        title="JavaScript Essentials 1-2"
        date="10/2024 - 11/2024"
      />
      <EducationItem
        school="CISCO"
        title="Fundamentos de Python 1-2"
        date="04/2024 - 09/2024"
      />
    </div>
  );
};

export default EducationPage;
