import React from 'react';
import TagsItem from './TagsItem';

const Tags = ({tags, lang}) => (
  <section className="section--tags">
    <ul className="tags-list">
      {tags.map(tag => <TagsItem tag={tag} lang={lang} key={Math.random(0, 1)}/>)}
    </ul>
  </section>
);

export default Tags;
