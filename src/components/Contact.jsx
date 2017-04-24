import React from 'react';
import ContactItem from './ContactItem';

const Contact = ({contact, lang}) => (
    <div className="contact">
        <h2>Contact</h2>
        {contact.map(contact => <ContactItem {...contact} lang={lang} key={Math.random(0, 1)}/>)}
    </div>
);

export default Contact;
