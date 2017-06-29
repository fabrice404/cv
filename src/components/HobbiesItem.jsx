import React from 'react';
import FontAwesome from 'react-fontawesome';

const HobbiesItem = props => (
  <div className="hobbie">
    <FontAwesome name={props.icon} /> {props.title[props.lang]}
  </div>
);

export default HobbiesItem;
