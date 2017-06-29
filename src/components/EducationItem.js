import React from 'react';

const EducationItem = ({ title, lang, subtitle }) => (
  <div className="item">
    <span className="title">{title[lang]}</span>
    {subtitle && <span className="subtitle">{subtitle[lang]}</span>}
  </div>
);

export default EducationItem;
