import React from 'react';
import FontAwesome from 'react-fontawesome';

const ContactItem = props => (
  <div className="contact">
    <FontAwesome name={props.icon} /> {props.value}
  </div>
);

export default ContactItem;
