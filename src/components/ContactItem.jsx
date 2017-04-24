import React from 'react';

const ContactItem = props => (
    <div className="item">
        <span className="title">{props.value}</span>
    </div>
);

export default ContactItem;
