import React from 'react';
import FontAwesome from 'react-fontawesome'

const HeadLinksItem = props => (
    <li className="social-item">
        <a href={props.link} target="_blank">
            <FontAwesome name={props.icon}/>
        </a>
    </li>
);

export default HeadLinksItem;
