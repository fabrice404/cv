import React from 'react';

const EducationItem = props => (
  <div className="item">
    <span className="title">{props.title[props.lang]}</span>
    {props.subtitle &&
      <span className="subtitle">{props.subtitle[props.lang]}</span>}
  </div>
);

export default EducationItem;
