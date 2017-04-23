import React from 'react';

class LinksItem extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.item.link} target="_blank">
          <i className={"fa fa-" + this.props.item.icon}>{this.props.item.title}</i>
        </a>
      </li>
    );
  }
}

export default LinksItem;
