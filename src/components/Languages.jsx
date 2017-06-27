import React from 'react';
import LanguagesItem from './LanguagesItem';

const Languages = ({languages, lang}) => (
  <div className="section languages">
    <div className="section-inner">
      <h2>Langues</h2>
      {languages.map(language => <LanguagesItem {...language} lang={lang} key={Math.random(0, 1)}/>)}
    </div>
  </div>
);

export default Languages;
