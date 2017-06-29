import React from 'react';
import LinksItem from './LinksItem';

const Links = ({ links, lang }) => (
  <ul className="social">
    {links.map(link => (
      <LinksItem {...link} lang={lang} key={Math.random()} />
    ))}
  </ul>
);

export default Links;
