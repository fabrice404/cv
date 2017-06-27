import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experience = ({experience, lang}) => (
  <div className="section experience">
    <div className="section-inner">
      <h2>Expériences professionnelles</h2>
      {experience.map(exp => <ExperienceItem {...exp} lang={lang} key={Math.random(0, 1)}/>)}
    </div>
  </div>
);

export default Experience;
