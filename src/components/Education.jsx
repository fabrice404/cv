import React from 'react';
import EducationItem from './EducationItem';

const Education = ({education, lang}) => (
    <div className="education">
        <h2>Education</h2>
        {education.map(education => <EducationItem {...education} lang={lang} key={Math.random(0, 1)}/>)}
    </div>
);

export default Education;
