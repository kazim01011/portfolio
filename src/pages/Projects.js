import React from 'react';
import CardItem from '../components/Cards/CardItem';
import projectConfig from '../assets/configs/projectConfig';

const Projects = () => (
  <section aria-labelledby="projects-title">
    <header className="content-header">
      <span className="eyebrow">Selected work</span>
      <h1 className="page-heading" id="projects-title">Research projects</h1>
      <p className="page-intro">Computational frameworks built for real-world questions across energy resilience, predictive maintenance, and vaccine discovery.</p>
    </header>
    <div className="project-grid">
      {projectConfig.map((item) => <CardItem item={item} key={item.id} />)}
    </div>
  </section>
);

export default Projects;
