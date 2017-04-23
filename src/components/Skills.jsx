import React from 'react';
import SkillsItem from './SkillsItem';

class Skills extends React.Component {
  render() {
    let lang = this.props.lang
    let items = [];
    this.props.skills.forEach(function(item, i) {
      items.push(<SkillsItem item={item} lang={lang} key={i}/>)
    });
    return (
      <div className="skills">
        <h2>Skills</h2>
        {items}
      </div>
    );
  }
}

export default Skills;
