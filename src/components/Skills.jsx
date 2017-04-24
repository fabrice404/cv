import React from 'react';
import SkillsItem from './SkillsItem';

const Skills = ({skills, lang}) => (
    <div className="skills">
        <h2>Skills</h2>
        {skills.map(skill => <SkillsItem {...skill} lang={lang} key={Math.random(0, 1)}/>)}
    </div>
);

export default Skills;
