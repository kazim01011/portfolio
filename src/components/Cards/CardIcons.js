import React from 'react';

const CardIcons = ({ item }) => (
  <div className="project-links">
    {item.links.map((link) => (
      <a className="project-link" href={link.url} key={`${item.id}-${link.name}`} target="_blank" rel="noopener noreferrer">
        {link.icon} {link.name}
      </a>
    ))}
  </div>
);

export default CardIcons;
