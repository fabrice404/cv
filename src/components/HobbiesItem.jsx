import React from 'react';
import FontAwesome from 'react-fontawesome'

const HobbiesItem = props => (
    <div className="item">
        <span className="title">
            <FontAwesome name={props.icon}/> {props.title[props.lang]}
        </span>
    </div>
);

export default HobbiesItem;
