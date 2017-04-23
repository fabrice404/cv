import React from 'react';
import ContactItem from './ContactItem';

class Contact extends React.Component {
  render() {
    let lang = this.props.lang
    let items = [];
    this.props.contact.forEach(function(item, i) {
      items.push(<ContactItem item={item} lang={lang} key={i}/>)
    });
    return (
      <div className="contact">
        <h2>Contact</h2>
        {items}
      </div>
    );
  }
}

export default Contact;
