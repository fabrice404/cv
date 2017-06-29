import React from 'react';
import FontAwesome from 'react-fontawesome';

const HobbiesItem = ({ icon, title, lang }) => (
  <div className="hobbie">
    <FontAwesome name={icon} /> {title[lang]}
  </div>
);

export default HobbiesItem;
