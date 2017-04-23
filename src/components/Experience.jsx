import React from 'react';
import ExperienceItem from './ExperienceItem';

class Experience extends React.Component {
  render() {
    let lang = this.props.lang
    let items = [];
    this.props.experience.forEach(function(item, i) {
      items.push(<ExperienceItem item={item} lang={lang} key={i}/>)
    });
    return (
      <div className="experience">
        <h2>Experience</h2>
        {items}
      </div>
    );
  }
}

export default Experience;
