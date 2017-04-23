import React from 'react';
import HobbiesItem from './HobbiesItem';

class Hobbies extends React.Component {
  render() {
    let lang = this.props.lang
    let items = [];
    this.props.hobbies.forEach(function(item, i) {
      items.push(<HobbiesItem item={item} lang={lang} key={i}/>)
    });
    return (
      <div className="hobbies">
        <h2>Hobbies</h2>
        {items}
      </div>
    );
  }
}

export default Hobbies;
