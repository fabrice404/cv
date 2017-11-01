import React from 'react';
import FontAwesome from 'react-fontawesome'

const EducationItem = props => (
  <div className="item">
    <span className="title-1">
      {props.title[props.lang]}
    </span>
    <span className="date">
      (
      <span className="start">
        {props.year}
      </span>
      )
    </span>
    <ul className="task-list">
      <li className="list-item">
        <FontAwesome name="caret-right"/> {props.subtitle[props.lang]}
      </li>
    </ul>
  </div>
);

export default EducationItem;
