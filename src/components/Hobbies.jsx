import React from 'react';
import HobbiesItem from './HobbiesItem';

const Hobbies = ({hobbies, lang}) => (
    <div className="hobbies">
        <h2>Hobbies</h2>
        {hobbies.map(hobbie => <HobbiesItem {...hobbie} lang={lang} key={Math.random(0, 1)}/>)}
    </div>
);

export default Hobbies;
