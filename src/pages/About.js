import React from 'react';
import { Button } from '@mui/material';
import { AiOutlineDownload, AiOutlineMail } from 'react-icons/ai';
import KazimImg from '../assets/images/Kazim.jpeg';
import KazimCV from '../assets/docs/Muhammad_Kazim_CV.pdf';
import aboutConfig from '../assets/configs/aboutConfig';

const About = () => (
  <section aria-labelledby="about-title">
    <header className="content-header">
      <span className="eyebrow">Profile</span>
      <h1 className="page-heading" id="about-title">Research with real-world reach</h1>
      <p className="page-intro">I connect artificial intelligence, network science, and domain expertise to study resilient infrastructure and high-impact scientific problems.</p>
    </header>

    <div className="about-grid">
      <article className="section-card glass-panel wide-card">
        <div className="profile-row">
          <img src={KazimImg} alt="Muhammad Kazim" />
          <div>
            <h2>Muhammad Kazim, Ph.D.</h2>
            <p>I earned my Ph.D. in Industrial & Manufacturing Engineering from North Dakota State University in August 2025. My doctoral research developed multilayer network and graph neural network methods for resilient, sustainable energy systems. I am now Visiting Faculty in the Department of Artificial Intelligence at the University of Malakand, where I teach and supervise research in intelligent systems and machine learning.</p>
            <div className="hero-actions">
              <Button component="a" href={KazimCV} download="Muhammad_Kazim_CV.pdf" variant="contained" startIcon={<AiOutlineDownload />} sx={{ color: '#04111f' }}>Download CV</Button>
              <Button component="a" href="mailto:kazim01011@yahoo.com" variant="outlined" startIcon={<AiOutlineMail />}>Email me</Button>
            </div>
          </div>
        </div>
      </article>

      <article className="section-card glass-panel">
        <h2>Education</h2>
        <ul className="education-list">
          {aboutConfig.education.map((item) => (
            <li key={item.degree}>
              <strong>{item.degree}</strong>
              <span>{item.institution} · {item.year}</span>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="section-card glass-panel">
        <h2>Funded research</h2>
        <ul className="detail-list">
          <li><strong>AISustein: AI for Resilient Energy Infrastructure</strong><span>National Science Foundation · Graduate Research Assistant / Ph.D. Researcher · 2023-2025</span></li>
          <li><strong>Network-Integrated Reverse Vaccinology for Flavobacterium</strong><span>U.S. Department of Agriculture · Graduate Research Assistant · Summer 2025</span></li>
        </ul>
      </article>

      <article className="section-card glass-panel">
        <h2>Industry partnership</h2>
        <p>Collaborated with Oklahoma Gas & Electric Company on seven years of operational incident data, developing and validating predictive maintenance models for real grid-resilience challenges.</p>
        <p>The work reflects a continuing focus on translating academic methods into practical tools for utilities and critical-infrastructure operators.</p>
      </article>

      <article className="section-card glass-panel">
        <h2>Recognition & service</h2>
        <ul className="detail-list">
          <li><strong>Gold Medal, University of Malakand</strong><span>Awarded for academic distinction in the M.Sc. Computer Science program.</span></li>
          <li><strong>Research supervision</strong><span>Mentoring student projects in intelligent systems and machine learning.</span></li>
          <li><strong>Interdisciplinary collaboration</strong><span>Work across energy systems, cybersecurity, digital forensics, and biomedical AI.</span></li>
        </ul>
      </article>
    </div>
  </section>
);

export default About;
