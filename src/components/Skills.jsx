import React from 'react';
import SkillsItem from './SkillsItem';

const Skills = ({skills, lang}) => (
  <div className="section skills">
    <div className="section-inner">
      <h2>Compétences</h2>
      <div className="skills">
        {skills.map(skill => <SkillsItem {...skill} lang={lang} key={Math.random(0, 1)}/>)}
      </div>
    </div>
  </div>
);

export default Skills;
