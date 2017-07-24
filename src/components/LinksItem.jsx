import React from 'react';
import FontAwesome from 'react-fontawesome'

const LinksItem = props => (
  <div className="link">
    <FontAwesome name={props.icon}/>
    <a href={props.link} target="_blank">
      {props.title}
    </a>
    <span className="href">
      <a href={props.link} target="_blank">{props.link}</a>
    </span>
  </div>
);

export default LinksItem;
