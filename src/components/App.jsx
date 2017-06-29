import React from 'react';

import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Hobbies from './Hobbies';
import Languages from './Languages';
import Links from './Links';
import Skills from './Skills';

const App = props => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <section className="section--title">
          <h1 className="name">{props.cv.name}</h1>
          <h2 className="job-title">{props.cv.title[props.lang]}</h2>
          <Links links={props.cv.links} lang={props.lang} />
        </section>
        <section className="section--about" />
        <Experience experience={props.cv.experience} lang={props.lang} />
        <section className="section--education">
          <Education education={props.cv.education} lang={props.lang} />
        </section>
      </div>
      <div className="col-md-4">
        <Contact contact={props.cv.contact} lang={props.lang} />
        <Skills skills={props.cv.skills} lang={props.lang} />
        <Languages languages={props.cv.languages} lang={props.lang} />
        <Hobbies hobbies={props.cv.hobbies} lang={props.lang} />
      </div>
    </div>
  </div>
);

export default App;
