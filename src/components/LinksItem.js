import React from 'react';
import FontAwesome from 'react-fontawesome';

const LinksItem = ({ link, icon }) => (
  <li className="social-item">
    <a href={link} target="_blank">
      <FontAwesome name={icon} />
    </a>
  </li>
);

export default LinksItem;
