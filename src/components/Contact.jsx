import React from 'react';
import ContactItem from './ContactItem';

const Contact = ({ contact, lang }) => (
  <section className="section--contact">
    {contact.map(contact => (
      <ContactItem {...contact} lang={lang} key={Math.random(0, 1)} />
    ))}
  </section>
);

export default Contact;
