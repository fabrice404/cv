import React from 'react';
import LanguagesItem from './LanguagesItem';

const Languages = ({languages, lang}) => (
    <div className="languages">
        <h2>Languages</h2>
        {languages.map(language => <LanguagesItem {...language} lang={lang} key={Math.random(0, 1)}/>)}
    </div>
);

export default Languages;
