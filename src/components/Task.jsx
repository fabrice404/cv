import React from 'react';
import FontAwesome from 'react-fontawesome';

const Task = props => (
  <li className="list-item">
    <FontAwesome name="caret-right"/> {props.title}
  </li>
);

export default Task;
