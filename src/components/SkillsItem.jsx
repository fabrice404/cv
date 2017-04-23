import React from 'react';

class SkillsItem extends React.Component {
  render() {
    return (
      <div className="item">
        <span className="title">{this.props.item.title}</span>
      </div>
    );
  }
}

export default SkillsItem;
