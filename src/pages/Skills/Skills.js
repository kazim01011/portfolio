import React from 'react';
import skillsConfig from '../../assets/configs/skillsConfig';

const Skills = () => (
  <section aria-labelledby="skills-title">
    <header className="content-header">
      <span className="eyebrow">Technical toolkit</span>
      <h1 className="page-heading" id="skills-title">Skills & expertise</h1>
      <p className="page-intro">A research-focused stack for graph learning, complex network analysis, scientific computing, and production-minded experimentation.</p>
    </header>
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
