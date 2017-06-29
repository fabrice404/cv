import React from 'react';

const LanguagesItem = ({ title, lang, grade }) => (
  <div className="language">
    <span className="title-2">{title[lang]}</span>
    <div className="level-bar">
      <div
        className="level-bar-inner"
        style={{
          width: `${grade * 100}%`
        }}
      />
    </div>
  </div>
);

export default LanguagesItem;
