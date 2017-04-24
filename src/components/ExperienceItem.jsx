import React from 'react';
import moment from 'moment';

const ExperienceItem = props => (
    <div className="item">
        <span className="title">{props.title[props.lang]}</span>
        <span className="company">{props.company}</span>
        <span className="date">
            <span className="start">{moment(props.start.month, 'MM').locale(props.lang).format('MMM')} {props.start.year}</span>
            {props.end && <span className="end">{moment(props.end.month, 'MM').locale(props.lang).format('MMM')} {props.end.year}</span>}
        </span>
    </div>
);

export default ExperienceItem;
