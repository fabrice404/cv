import React from 'react';
import LinksItem from './LinksItem';

const Links = ({links, lang}) => (
  <section className="section--links">
    <h3>Links</h3>
    {links.map(link => <LinksItem {...link} lang={lang} key={Math.random(0, 1)}/>)}
  </section>
);

export default Links;
