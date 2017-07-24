import React from 'react';
import moment from 'moment';

function translate(text) {
  return text.replace('{age}', moment().diff(moment("18/09/1985", "DD/MM/YYYY"), 'years'));
}

const About = ({about, lang}) => (
  <section className="section--about">
    {translate(about[lang])}
  </section>
);

export default About;
