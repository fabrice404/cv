import React from 'react';

const SkillsItem = ({ title, grade }) => (
  <div className="skill">
    <span className="title-2">{title}</span>
    <div className="level-bar">
      <div
        className="level-bar-inner"
        style={{
          width: grade * 100 + '%'
        }}
      />
    </div>
  </div>
);

export default SkillsItem;
