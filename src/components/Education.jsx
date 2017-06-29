import React from 'react';
import EducationItem from './EducationItem';

const Education = ({ education, lang }) => (
  <div className="section education">
    <div className="section-inner">
      <h3>Formations</h3>
      {education.map(education => (
        <EducationItem {...education} lang={lang} key={Math.random(0, 1)} />
      ))}
    </div>
  </div>
);

export default Education;
