import React from 'react';
import CardIcons from './CardIcons';

const CardItem = ({ item }) => (
  <article className="project-card glass-panel">
    <div className="project-image" style={{ backgroundImage: `linear-gradient(rgba(3,12,22,.08), rgba(3,12,22,.3)), url(${item.image})` }} role="img" aria-label={`${item.title} visualization`} />
    <div className="project-card-body">
      <span className="eyebrow">{item.eyebrow}</span>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <CardIcons item={item} />
    </div>
  </article>
);

export default CardItem;
