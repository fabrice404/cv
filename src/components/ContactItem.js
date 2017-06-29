import React from 'react';
import FontAwesome from 'react-fontawesome';

const ContactItem = ({ icon, value }) => (
  <div className="contact">
    <FontAwesome name={icon} /> {value}
  </div>
);

export default ContactItem;
