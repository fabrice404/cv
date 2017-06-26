import React from 'react';

import Contact from './Contact'
import Education from './Education'
import Experience from './Experience'
import Hobbies from './Hobbies'
import Languages from './Languages'
import Links from './Links'
import Skills from './Skills'

const App = props => (
  <div>
    <header>
      <div className="container">
        <div className="">
          <h1>{props.cv.name}</h1>
          <h2>{props.cv.title[props.lang]}</h2>
          <Links links={props.cv.links} lang={props.lang}/>
        </div>
      </div>
    </header>
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <Experience experience={props.cv.experience} lang={props.lang}/>
          <Education education={props.cv.education} lang={props.lang}/>
        </div>
        <div className="col-lg-3">
          <Contact contact={props.cv.contact} lang={props.lang}/>
          <Skills skills={props.cv.skills} lang={props.lang}/>
          <Languages languages={props.cv.languages} lang={props.lang}/>
          <Hobbies hobbies={props.cv.hobbies} lang={props.lang}/>
        </div>
      </div>
    </div>
  </div>
);

export default App;
