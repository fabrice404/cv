import React from 'react';
import ExperienceItem from './ExperienceItem';

const Experience = ({experience, lang}) => (
    <div className="experience">
        <h2>Experience</h2>
        {experience.map(exp => <ExperienceItem {...exp} lang={lang} key={Math.random(0, 1)}/>)}
    </div>
);

export default Experience;
