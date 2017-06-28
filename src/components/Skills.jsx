import React from 'react';
import SkillsItem from './SkillsItem';

const Skills = ({skills, lang}) => (
  <section className="section--skills">
    <h3>Compétences</h3>
    {skills.map(skill => <SkillsItem {...skill} lang={lang} key={Math.random(0, 1)}/>)}
  </section>
);

export default Skills;
