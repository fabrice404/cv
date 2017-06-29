import React from 'react';

import Contact from './Contact';
import Education from './Education';
import Experience from './Experience';
import Hobbies from './Hobbies';
import Languages from './Languages';
import Links from './Links';
import Skills from './Skills';

const App = ({ cv, lang }) => (
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <section className="section--title">
          <h1 className="name">{cv.name}</h1>
          <h2 className="job-title">{cv.title[lang]}</h2>
          <Links links={cv.links} lang={lang} />
        </section>
        <section className="section--about" />
        <Experience experience={cv.experience} lang={lang} />
        <section className="section--education">
          <Education education={cv.education} lang={lang} />
        </section>
      </div>
      <div className="col-md-4">
        <Contact contact={cv.contact} lang={lang} />
        <Skills skills={cv.skills} lang={lang} />
        <Languages languages={cv.languages} lang={lang} />
        <Hobbies hobbies={cv.hobbies} lang={lang} />
      </div>
    </div>
  </div>
);

export default App;
