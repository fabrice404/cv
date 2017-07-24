import React from 'react';
import HobbiesItem from './HobbiesItem';

const Hobbies = ({hobbies, lang}) => (
  <section className="section--hobbies">
    <h3>Interests</h3>
    {hobbies.map(hobbie => <HobbiesItem {...hobbie} lang={lang} key={Math.random(0, 1)}/>)}
  </section>
);

export default Hobbies;
