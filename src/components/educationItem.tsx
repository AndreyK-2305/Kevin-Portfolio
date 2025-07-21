import React from 'react';

interface EducationItemProps {
  school: string;
  title: string;
  date: string;
  ongoing?: boolean;
}

const EducationItem: React.FC<EducationItemProps> = ({ school, title, date, ongoing }) => (
  <div className="education-item">
    <div className="education-info">
      <div className="education-school">{school}</div>
      <div className="education-title">{title}</div>
    </div>
    <div className="education-date">
      {date} {ongoing && <span className="education-ongoing">En curso</span>}
    </div>
  </div>
);

export default EducationItem;
