import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experience = ({experience, lang}) => (
  <section className="section--experience">
    <h3>Experience</h3>
    {experience.map(exp => <ExperienceItem {...exp} lang={lang} key={Math.random(0, 1)}/>)}
  </section>
);

export default Experience;
