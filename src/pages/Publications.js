import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import publicationConfig from '../assets/configs/publicationConfig';
import PublicationsPDF from '../assets/docs/Publications_List.pdf';

const Publications = () => (
  <section aria-labelledby="publications-title">
    <header className="content-header">
      <span className="eyebrow">Research record</span>
      <h1 className="page-heading" id="publications-title">Publications</h1>
      <p className="page-intro">Work spanning multilayer energy systems, graph learning, predictive maintenance, digital forensics, and biomedical AI.</p>
      <div className="publication-summary">
        <span className="summary-pill">6 journal articles</span>
        <span className="summary-pill">1 conference paper</span>
        <span className="summary-pill">3 works under review</span>
        <a className="summary-pill" href={PublicationsPDF} download="Muhammad_Kazim_Publications.pdf">Download list</a>
      </div>
    </header>
    <div className="publication-stack">
      {publicationConfig.map((pub) => (
        <article className="publication-card glass-panel" key={pub.id}>
          <div className="publication-year">{pub.year}<span className="publication-type">{pub.type}</span></div>
          <div className="publication-main">
            <h2>{pub.title}</h2>
            <p className="publication-authors">{pub.authors}</p>
            <p className="publication-venue">{pub.venue}</p>
          </div>
          <a className="publication-action" href={pub.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${pub.title}`}><AiOutlineArrowUp size={22} /></a>
        </article>
      ))}
    </div>
  </section>
);

export default Publications;
