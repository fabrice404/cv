import React from 'react';
import FontAwesome from 'react-fontawesome'

const LinksItem = props => (
    <li>
        <a href={props.link} target="_blank">
            <FontAwesome name={props.icon}/>
        </a>
    </li>
);

export default LinksItem;
