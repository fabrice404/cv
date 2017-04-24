import React from 'react';
import FontAwesome from 'react-fontawesome'

const ContactItem = props => (
    <div className="item">
        <span className="title">
            <FontAwesome name={props.icon}/> {props.value}
        </span>
    </div>
);

export default ContactItem;
