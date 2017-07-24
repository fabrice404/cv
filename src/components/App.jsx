import React from 'react';
import About from './About';
import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import HeadLinks from './HeadLinks';
import Hobbies from './Hobbies';
import Languages from './Languages';
import Links from './Links';
import Skills from './Skills';

const App = props => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <section className="section--title">
            <h1 className="name">{props.cv.name}</h1>
            <div className="job-title">
              <h2>{props.cv.title[props.lang]}</h2>
              <HeadLinks links={props.cv.links} lang={props.lang}/>
            </div>
          </section>
          <About about={props.cv.about} lang={props.lang}/>
        </div>
        <div className="col-md-4">
          <Contact contact={props.cv.contact} lang={props.lang}/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <Experience experience={props.cv.experience} lang={props.lang}/>
          <Education education={props.cv.education} lang={props.lang}/>
        </div>
        <div className="col-md-4">
          <Skills skills={props.cv.skills} lang={props.lang}/>
          <Languages languages={props.cv.languages} lang={props.lang}/>
          <Hobbies hobbies={props.cv.hobbies} lang={props.lang}/>
          <Links links={props.cv.links} lang={props.lang}/>
        </div>
      </div>
    </div>
  </div>
);

export default App;
