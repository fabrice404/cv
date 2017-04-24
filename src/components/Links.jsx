import React from 'react';
import LinksItem from './LinksItem';

const Links = ({links, lang}) => (
    <ul className="social list-inline">
        {links.map(link => <LinksItem {...link} lang={lang} key={Math.random(0, 1)}/>)}
    </ul>
);

export default Links;
