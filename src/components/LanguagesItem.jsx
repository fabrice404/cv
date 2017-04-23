import React from 'react';

class LanguagesItem extends React.Component {
  render() {
    return (
      <div className="item">
        <span className="title">{this.props.item.title[this.props.lang]}</span>
      </div>
    );
  }
}

export default LanguagesItem;
