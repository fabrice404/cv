import React from 'react';
import LanguagesItem from './LanguagesItem';

const Languages = ({ languages, lang }) => (
  <section className="section--languages">
    <h3>Langues</h3>
    {languages.map(language => (
      <LanguagesItem {...language} lang={lang} key={Math.random(0, 1)} />
    ))}
  </section>
);

export default Languages;
