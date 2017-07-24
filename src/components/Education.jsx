import React from 'react';
import EducationItem from './EducationItem';

const Education = ({education, lang}) => (
  <section className="section--education">
    <h3>Education</h3>
    {education.map(education => <EducationItem {...education} lang={lang} key={Math.random(0, 1)}/>)}
  </section>
);

export default Education;
