import React from 'react';

import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Hobbies from './Hobbies'
import Languages from './Languages'
import Links from './Links'
import Skills from './Skills'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.cv.name}</h1>
        <h2>{this.props.cv.title[this.props.lang]}</h2>
        <Links links={this.props.cv.links} lang={this.props.lang}/>
        <Experience experience={this.props.cv.experience} lang={this.props.lang}/>
        <Education education={this.props.cv.education} lang={this.props.lang}/>
        <Contact contact={this.props.cv.contact} lang={this.props.lang}/>
        <Skills skills={this.props.cv.skills} lang={this.props.lang}/>
        <Languages languages={this.props.cv.languages} lang={this.props.lang}/>
        <Hobbies hobbies={this.props.cv.hobbies} lang={this.props.lang}/>
      </div>
    );
  }
}

export default App;
