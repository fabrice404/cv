import React from 'react';
import EducationItem from './EducationItem';

class Education extends React.Component {
  render() {
    let lang = this.props.lang
    let items = [];
    this.props.education.forEach(function(item, i) {
      items.push(<EducationItem item={item} lang={lang} key={i}/>)
    });
    return (
      <div className="education">
        <h2>Education</h2>
        {items}
      </div>
    );
  }
}

export default Education;
