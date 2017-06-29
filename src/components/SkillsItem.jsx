import React from 'react';

const SkillsItem = props => (
  <div className="skill">
    <span className="title-2">{props.title}</span>
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

export default SkillsItem;
