import React from 'react';
import moment from 'moment';

class ExperienceItem extends React.Component {
  render() {
    return (
      <div className="item">
        <span className="title">{this.props.item.title[this.props.lang]}</span>
        <span className="company">{this.props.item.company}</span>
        <span className="date">
          <span className="start">{moment(this.props.item.start.month, 'MM').locale(this.props.lang).format('MMM')} {this.props.item.start.year}</span>
          {this.props.item.end && <span className="end">{moment(this.props.item.end.month, 'MM').locale(this.props.lang).format('MMM')} {this.props.item.end.year}</span>}
        </span>
      </div>
    );
  }
}

export default ExperienceItem;
