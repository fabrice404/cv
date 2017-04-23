import React from 'react';
import LinksItem from './LinksItem';

class Links extends React.Component {
  render() {
    let lang = this.props.lang
    let items = [];
    this.props.links.forEach(function(item, i) {
      items.push(<LinksItem item={item} lang={lang} key={i}/>)
    });
    return (
      <ul className="social list-inline">
        {items}
      </ul>
    );
  }
}

export default Links;
