import React from 'react';
import HeadLinksItem from './HeadLinksItem';

const HeadLinks = ({links, lang}) => (
  <ul className="social">
    {links.map(link => <HeadLinksItem {...link} lang={lang} key={Math.random(0, 1)}/>)}
  </ul>
);

export default HeadLinks;
