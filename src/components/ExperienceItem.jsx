import React from 'react';
import moment from 'moment';
import Task from './Task';
import Tech from './Tech';

const ExperienceItem = props => (
  <div className="item">
    <span className="title-1">
      {props.title[props.lang]}
    </span>
    <span className="separator">
      @
    </span>
    <span className="title-2">
      {props.company}</span>
    <span className="date">
      (
      <span className="start">
        {moment(props.start.month + ' ' + props.start.year, 'MM YYYY').format('MMM YYYY')}
      </span>
      <span className="separator">
        -
      </span>
      <span className="end">
        {props.end && <span>{moment(props.end.month + ' ' + props.end.year, 'MM YYYY').format('MMM YYYY')}</span>}
        {!props.end && <span>{moment().format('MMM YYYY')}</span>}
      </span>
      )
    </span>
    <ul className="tech-list">
      {props.tech.map(tech => <Tech tech={tech} lang={props.lang} key={Math.random(0, 1)}/>)}
    </ul>
    <ul className="task-list">
      {props.tasks[props.lang].map(task => <Task {...task} lang={props.lang} key={Math.random(0, 1)}/>)}
    </ul>
  </div>
);

export default ExperienceItem;
