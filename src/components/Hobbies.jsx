import React from 'react';
import HobbiesItem from './HobbiesItem';

const Hobbies = ({hobbies, lang}) => (
  <div className="section hobbies">
    <div className="section-inner">
      <h2>Centres d'intérêt</h2>
      {hobbies.map(hobbie => <HobbiesItem {...hobbie} lang={lang} key={Math.random(0, 1)}/>)}
    </div>
  </div>
);

export default Hobbies;
