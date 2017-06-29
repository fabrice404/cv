import React from 'react';
import FontAwesome from 'react-fontawesome';

const Task = ({ title }) => (
  <li className="task">
    <FontAwesome name="caret-right" /> {title}
  </li>
);

export default Task;
