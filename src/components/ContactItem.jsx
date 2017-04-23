import React from 'react';

class ContactItem extends React.Component {
  render() {
    return (
      <div className="item">
        <span className="title">{this.props.item.value}</span>
      </div>
    );
  }
}

export default ContactItem;
