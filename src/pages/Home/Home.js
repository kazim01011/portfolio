import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight, AiOutlineDownload } from 'react-icons/ai';
import Timeline from '../../components/Timeline/Timeline';
import homeConfig from '../../assets/configs/homeConfig';
import KazimImg from '../../assets/images/Kazim.jpeg';
import KazimCV from '../../assets/docs/Muhammad_Kazim_CV.pdf';

const focusAreas = [
  ['AI for Energy Systems', 'Graph learning, predictive maintenance, and resilience modeling for smart grids.'],
  ['Network Science', 'Multilayer systems, link prediction, interdependencies, and cascading failure analysis.'],
  ['Biomedical AI', 'Network-integrated reverse vaccinology and protein interaction modeling.'],
  ['Cybersecurity', 'Deepfake detection, digital forensics, privacy, and intelligent threat analysis.'],
];

const Home = () => (
  <>
    <section className="hero glass-panel" aria-labelledby="hero-title">
      <div className="hero-copy">
        <span className="eyebrow">AI researcher & educator</span>
        <h1 id="hero-title">Muhammad<br /><span>Kazim, Ph.D.</span></h1>
        <p className="hero-lead">I develop graph-based AI for resilient energy infrastructure and translate network science into practical tools for predictive maintenance, cybersecurity, and biomedical discovery.</p>
        <div className="hero-actions">
          <Button component={Link} to="/projects" variant="contained" endIcon={<AiOutlineArrowRight />} sx={{ px: 2.6, py: 1.25, color: '#04111f' }}>Explore research</Button>
          <Button component="a" href={KazimCV} download="Muhammad_Kazim_CV.pdf" variant="outlined" startIcon={<AiOutlineDownload />} sx={{ px: 2.6, py: 1.25 }}>Download CV</Button>
        </div>
      </div>
      <div className="hero-photo-wrap">
        <img className="hero-photo" src={KazimImg} alt="Muhammad Kazim" />
        <div className="status-card">
          <strong><span className="status-dot" />Visiting Faculty</strong>
          <span>Department of Artificial Intelligence<br />University of Malakand</span>
        </div>
      </div>
    </section>

    <section className="metrics glass-panel" aria-label="Career highlights">
      <div className="metric"><strong>Ph.D.</strong><span>Conferred August 2025</span></div>
      <div className="metric"><strong>10</strong><span>Publications & preprints</span></div>
      <div className="metric"><strong>2</strong><span>Funded research programs</span></div>
      <div className="metric"><strong>4</strong><span>Applied research domains</span></div>
    </section>

    <section aria-labelledby="focus-heading">
      <header className="section-head">
        <span className="eyebrow">Research focus</span>
        <h2 className="section-title" id="focus-heading">AI for complex, consequential systems</h2>
        <p className="section-kicker">Interdisciplinary research grounded in real infrastructure and scientific data.</p>
      </header>
      <div className="focus-grid">
        {focusAreas.map(([title, description], index) => (
          <article className="focus-card glass-panel" key={title}>
            <span className="focus-number">0{index + 1}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>

    <section style={{ marginTop: 80 }} aria-labelledby="experience-heading">
      <header className="section-head">
        <span className="eyebrow">Experience</span>
        <h2 className="section-title" id="experience-heading">From public systems to research leadership</h2>
      </header>
      <div className="section-card glass-panel"><Timeline items={homeConfig.workTimeline} /></div>
    </section>
  </>
);

export default Home;
