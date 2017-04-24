import React from 'react';

const LanguagesItem = props => (
    <div className="item">
        <span className="title">{props.title[props.lang]}</span>
    </div>
);

export default LanguagesItem;
