import React from 'react';
import LanguagesItem from './LanguagesItem';

class Languages extends React.Component {
  render() {
    let lang = this.props.lang
    let items = [];
    this.props.languages.forEach(function(item, i) {
      items.push(<LanguagesItem item={item} lang={lang} key={i}/>)
    });
    return (
      <div className="languages">
        <h2>Languages</h2>
        {items}
      </div>
    );
  }
}

export default Languages;
