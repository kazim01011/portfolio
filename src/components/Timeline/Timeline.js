import React from 'react';

const Timeline = ({ items = [] }) => (
  <div className="timeline">
    {items.map((item) => (
      <article className="timeline-entry" key={item.id}>
        <div className="timeline-marker" aria-hidden="true">{item.icon}</div>
        <div className="timeline-date">{item.date}</div>
        <div className="timeline-body">
          <h3>{item.title}</h3>
          <p className="timeline-company">{item.company}</p>
          <p className="timeline-description">{item.description}</p>
          <div className="tag-list">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        </div>
      </article>
    ))}
  </div>
);

export default Timeline;
