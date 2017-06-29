import React from 'react';

const LanguagesItem = props => (
  <div className="language">
    <span className="title-2">{props.title[props.lang]}</span>
    <div className="level-bar">
      <div
        className="level-bar-inner"
        style={{
          width: props.grade * 100 + '%'
        }}
      />
    </div>
  </div>
);

export default LanguagesItem;
