import React from 'react';
import { ImBook } from "react-icons/im";
import publicationConfig from '../assets/configs/publicationConfig';

const Publications = () => {
  return (
    <section id="publications">
      <h2>Research Publications</h2>
      <div className="grid">
        {publicationConfig.map(pub => (
          <div key={pub.id} className="card">
            <img src={pub.image} alt={pub.title} />
            <h3>{pub.title}</h3>
            <p>{pub.authors}</p>
            <p><i>{pub.venue}</i></p>
            <p>{pub.description}</p>
            <div className="icons">
              <a href={pub.url} target="_blank" rel="noopener noreferrer">
                <ImBook size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
