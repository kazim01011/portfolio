import React from 'react';
import skillsConfig, { researchPlatforms } from '../../assets/configs/skillsConfig';

const Skills = () => (
  <section aria-labelledby="skills-title">
    <header className="content-header">
      <span className="eyebrow">Technical toolkit</span>
      <h1 className="page-heading" id="skills-title">Skills & expertise</h1>
      <p className="page-intro">An interdisciplinary research toolkit for graph learning, integrated energy systems, IoT networks, scientific simulation, and high-performance computing.</p>
    </header>

    <section className="platform-showcase glass-panel skills-platform-showcase" aria-labelledby="skills-platform-heading">
      <header className="platform-showcase-head">
        <div>
          <span className="eyebrow">Core research platforms</span>
          <h2 className="platform-title" id="skills-platform-heading">Specialized simulation & computing</h2>
        </div>
        <p>Applied experience with domain-specific simulators and research computing infrastructure across energy, IoT, and engineering applications.</p>
      </header>
      <div className="platform-grid">
        {researchPlatforms.map((platform, index) => (
          <a className="platform-card" href={platform.url} target="_blank" rel="noreferrer" key={platform.id}>
            <span className="platform-index">0{index + 1}</span>
            <span className="platform-category">{platform.category}</span>
            <h3>{platform.name}</h3>
            <p>{platform.description}</p>
            <span className="platform-link">Platform details <span aria-hidden="true">↗</span></span>
          </a>
        ))}
      </div>
    </section>

    <div className="skills-grid">
      {skillsConfig.map((group) => (
        <article className="skill-group glass-panel" key={group.id}>
          <h2>{group.title}</h2>
          <p>{group.description}</p>
          <div className="skill-chips">
            {group.skills.map((skill) => <span className="skill-chip" key={skill}>{skill}</span>)}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Skills;
