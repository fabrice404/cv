import React from 'react';

class EducationItem extends React.Component {
  render() {
    return (
      <div className="item">
        <span className="title">{this.props.item.title[this.props.lang]}</span>
        {this.props.item.subtitle && <span className="subtitle">{this.props.item.subtitle[this.props.lang]}</span>}
      </div>
    );
  }
}

export default EducationItem;
