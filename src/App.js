import React, { useEffect, useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import aboutConfig from './assets/configs/aboutConfig';
import homeConfig from './assets/configs/homeConfig';
import projectConfig from './assets/configs/projectConfig';
import publications from './assets/configs/publicationConfig';
import footerConfig from './assets/configs/footerConfig';
import skillsConfig, { researchPlatforms } from './assets/configs/skillsConfig';
import portrait from './assets/images/Kazim.jpeg';
import cv from './assets/docs/Kazim_Muhammad_CV.pdf';
import publicationsPdf from './assets/docs/Publications_List.pdf';
import publicationFigures from './assets/configs/publicationFigures';
import './styles/reference.css';
import './App.css';

const navigation = [['about', 'About'], ['background', 'Background'], ['impact', 'Impact'], ['publications', 'Publications'], ['contact', 'Contact']];
const expertise = [
  ['AI for Energy Systems', 'Graph learning, predictive maintenance, and resilience modeling for power grids.'],
  ['Network Science', 'Multilayer networks, link prediction, interdependencies, and cascading failures.'],
  ['IoT & Sustainable Wireless Systems', 'Low-power network security, resilient routing, and energy-aware communications.'],
  ['Cybersecurity & Biomedical AI', 'Digital forensics, deepfake detection, protein networks, and reverse vaccinology.'],
];
const years = [...new Set(publications.map((publication) => publication.year))].sort((a, b) => Number(b) - Number(a));
const legacySections = { '/about': 'about', '/projects': 'projects', '/publications': 'publications', '/skills': 'skills' };

function ExternalLink({ href, children, ...props }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
}

function SocialLinks({ labels = false }) {
  return footerConfig.icons.map(({ id, label, url, icon, target }) => (
    <a key={id} href={url} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} aria-label={label} title={label}>
      {icon}{labels && <span>{label}</span>}
    </a>
  ));
}

function Authors({ text }) {
  return text.split(/(Muhammad Kazim)/g).map((part, index) => part === 'Muhammad Kazim' ? <strong key={index}>{part}</strong> : part);
}

function PaperFigure({ figure, title, paperUrl }) {
  return <figure className="paper-figure">
    <a className="publication-figure-link research-figure" href={paperUrl} target="_blank" rel="noopener noreferrer" aria-label={`Read paper: ${title}`} title="Read paper (opens in a new tab)">
      <img src={figure.src} alt={figure.alt} loading="lazy" width="280" height="166" />
    </a>
    <figcaption>{figure.caption}</figcaption>
  </figure>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const section = window.location.hash.slice(1) || legacySections[window.location.pathname];
    if (section) document.getElementById(section)?.scrollIntoView();
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="shell nav-shell">
          <a className="site-name" href="#about" onClick={() => setMenuOpen(false)}>Muhammad Kazim</a>
          <button className="menu-button" type="button" aria-label="Toggle navigation" aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} onKeyDown={(event) => { if (event.key === 'Escape') setMenuOpen(false); }}>
            <span /><span /><span />
          </button>
          <nav id="main-navigation" className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation" onKeyDown={(event) => { if (event.key === 'Escape') setMenuOpen(false); }}>
            {navigation.map(([id, label]) => <a href={`#${id}`} key={id} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="intro-section" id="about" aria-labelledby="about-title">
          <div className="shell intro-grid">
            <aside className="profile">
              <img className="profile-photo" src={portrait} alt="Portrait of Muhammad Kazim" width="190" height="190" />
              <h1>Muhammad Kazim</h1>
              <p>Ph.D. · AI Researcher</p>
              <div className="social-links" aria-label="Professional profiles"><SocialLinks /></div>
              <a className="cv-link" href={cv} download="Kazim_Muhammad_CV.pdf">Download CV</a>
            </aside>
            <div className="about-copy">
              <h2 id="about-title">About Me</h2>
              <p>I am an AI researcher working at the intersection of network science and resilient energy infrastructure. I earned my <strong>Ph.D. in Industrial &amp; Manufacturing Engineering</strong> from <ExternalLink href="https://www.ndsu.edu/">North Dakota State University</ExternalLink> in August 2025. My research combines <strong>artificial intelligence, multilayer networks, and graph neural networks</strong> to study resilient and sustainable energy systems.</p>
              <p>I build research workflows that connect real-world data, scientific simulation, machine learning, and engineering applications. My work spans predictive maintenance and critical infrastructure, low-power IoT and sustainable wireless systems, cybersecurity, digital forensics, and biomedical discovery.</p>
              <p className="focus-label">Core expertise</p>
              <ul className="focus-list">{expertise.map(([title, description]) => <li key={title}><strong>{title}</strong><span>{description}</span></li>)}</ul>
            </div>
          </div>
        </section>
        <section className="background-section" id="background" aria-label="Education and experience">
          <div className="shell background-grid">
            <div id="education">
              <h2 className="section-title">Education</h2>
              <div className="compact-list">{aboutConfig.education.map((item) => <article key={item.degree}><span className="list-icon" aria-hidden="true"><FaGraduationCap /></span><div><h3>{item.degree}</h3><p className="date">{item.year}</p><p>{item.institution}</p><small>{item.detail}</small></div></article>)}</div>
              <section className="funding-block" aria-labelledby="funding-title">
                <h2 className="section-title" id="funding-title">Funded Research</h2>
                <ul className="impact-list">
                  <li><strong><ExternalLink href="https://www.aisustein.com/students">AISustein</ExternalLink></strong><br />National Science Foundation · 2023–2025<br /><small>AI for resilient energy infrastructure.</small></li>
                  <li><strong>Reverse Vaccinology</strong><br />U.S. Department of Agriculture · Summer 2025<br /><small>Network-integrated vaccine candidate discovery for Flavobacterium.</small></li>
                </ul>
              </section>
            </div>
            <div className="career-column">
              <section id="experience" aria-labelledby="experience-title">
                <h2 className="section-title" id="experience-title">Research &amp; Professional Experience</h2>
                <ul className="experience-list">{homeConfig.workTimeline.map((item) => <li key={item.id}><strong>{item.title}</strong><span>{item.date}</span><p className="experience-institution">{item.company}</p><p>{item.description}</p></li>)}</ul>
              </section>
              <section className="impact-block" id="impact" aria-labelledby="impact-title">
                <h2 className="section-title" id="impact-title">Research Impact</h2>
                <ul className="impact-list">
                  <li>Research published in <em>Applied Energy</em>, <em>Sustainable Energy, Grids and Networks</em>, <em>iScience</em>, and <em>Information</em>.</li>
                  <li>Worked with seven years of Oklahoma Gas &amp; Electric operational incident data to develop and validate predictive maintenance models.</li>
                  <li>Research across energy resilience, graph learning, critical infrastructure, cybersecurity, and biomedical AI.</li>
                  <li>Gold Medal for academic distinction in M.Sc. Computer Science at the University of Malakand.</li>
                </ul>
              </section>
            </div>
          </div>
        </section>
        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="shell">
            <div className="section-header"><h2 id="projects-title">Selected Research Projects</h2><ExternalLink className="text-link" href="https://github.com/kazim01011">View GitHub</ExternalLink></div>
            {projectConfig.map((project) => <article className="publication-item" id={project.id} key={project.id}>
              <PaperFigure figure={publicationFigures[project.publicationId]} title={project.title} paperUrl={publications.find((publication) => publication.id === project.publicationId).url} />
              <div><p className="publication-meta">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p><div className="project-links">{project.links.map((link) => <ExternalLink href={link.url} key={link.url}>[{link.name === 'Publication' ? 'Paper' : link.name === 'Repository' ? 'Code' : link.name}]</ExternalLink>)}</div></div>
            </article>)}
          </div>
        </section>
        <section className="publication-section" id="publications" aria-labelledby="publications-title">
          <div className="shell">
            <div className="section-header"><h2 id="publications-title">Publications &amp; Preprints</h2><div className="publication-header-links"><ExternalLink className="text-link" href={footerConfig.icons.find((item) => item.label === 'Google Scholar').url}>View Google Scholar</ExternalLink><a className="text-link" href={publicationsPdf} download="Muhammad_Kazim_Publications.pdf">Download list</a></div></div>
            <div className="publication-list">{years.map((year) => <React.Fragment key={year}><h3 className="year-heading">{year}</h3>
              {publications.filter((publication) => publication.year === year).map((publication) => {
                const figure = publicationFigures[publication.id];
                return <article className={`publication-item${figure ? '' : ' publication-text-only'}`} id={publication.id} key={publication.id}>
                  {figure && <PaperFigure figure={figure} title={publication.title} paperUrl={publication.url} />}
                  <div><p className="publication-meta">{publication.venue} <ExternalLink href={publication.url}>[{publication.type === 'Under review' ? 'Preprint' : 'Paper'}]</ExternalLink></p><h4>{publication.title}</h4><p className="authors"><Authors text={publication.authors} /></p><p className="publication-status">{publication.type === 'Under review' ? 'Preprint · Under review' : publication.type}</p></div>
                </article>;
              })}
            </React.Fragment>)}</div>
          </div>
        </section>
        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="shell background-grid">
            <div><h2 className="section-title" id="skills-title">Tools &amp; Research Computing</h2><ul className="platform-list">{researchPlatforms.map((platform) => <li key={platform.id}><ExternalLink href={platform.url}><strong>{platform.name}</strong></ExternalLink><span>{platform.category}</span><p>{platform.description}</p></li>)}</ul></div>
            <div><h2 className="section-title">Technical Expertise</h2><ul className="experience-list">{skillsConfig.map((group) => <li key={group.id}><strong>{group.title}</strong><p>{group.skills.join(' · ')}</p></li>)}</ul></div>
          </div>
        </section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-grid">
            <div>
              <h2 id="contact-title">Contact</h2>
              <p>For research collaboration, academic inquiries, and opportunities in applied AI and network science.</p>
              <a className="contact-email" href="mailto:kazim01011@yahoo.com">kazim01011@yahoo.com</a>
              <div className="contact-numbers">
                <ExternalLink href="https://wa.me/17017293574"><span>WhatsApp only (US):</span> +1 701 729 3574</ExternalLink>
                <a href="tel:+923469366562"><span>Phone (Pakistan):</span> +92 346 936 6562</a>
              </div>
            </div>
            <div className="contact-links"><SocialLinks labels /></div>
          </div>
        </section>
      </main>
      <footer><div className="shell"><span>Muhammad Kazim, Ph.D.</span><span>AI for Resilient &amp; Sustainable Systems</span><span>© {new Date().getFullYear()}</span></div></footer>
    </>
  );
}
export default App;
