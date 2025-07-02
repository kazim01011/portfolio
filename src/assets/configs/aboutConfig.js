// === File: src/assets/configs/aboutConfig.js ===
import React from "react";
import { FaMedal, FaUniversity, FaFlask } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

const aboutConfig = {
  intro: {
    name: "Muhammad Kazim",
    description:
      "Ph.D. in Computer Science with a strong interdisciplinary background in data science, working across biomedical informatics, cybersecurity, and energy network modeling. Currently affiliated with AI Sustain Lab and the Cell & Molecular Data Lab at NDSU.",
  },

  affiliations: [
    {
      id: "affil-1",
      title: "AI Sustain Lab",
      role: "Postdoctoral Researcher",
      url: "https://www.aisustein.com/students",
      icon: <FaFlask size={25} />,
    },
    {
      id: "affil-2",
      title: "Cell & Molecular Data Lab – NDSU",
      role: "Researcher",
      url: "https://www.ndsu.edu/labs/cell/we_are",
      icon: <FaFlask size={25} />,
    }
  ],

  education: [
    {
      id: "edu-1",
      degree: "Ph.D. in Computer Science",
      institution: "North Dakota State University",
      year: "2025",
      icon: <FaUniversity size={25} />,
    },
    {
      id: "edu-2",
      degree: "MS in Computer Science (Gold Medalist)",
      institution: "International Islamic University",
      year: "2018",
      icon: <FaUniversity size={25} />,
    }
  ],

  honors: [
    {
      id: "honor-1",
      title: "Gold Medal – MS in Computer Science",
      year: "2018",
      description: "Awarded for outstanding academic excellence.",
      icon: <FaMedal size={25} />,
    }
  ]
};

export default aboutConfig;


// === File: src/pages/About.js ===
import React from 'react';
import aboutConfig from '../assets/configs/aboutConfig';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>{aboutConfig.intro.description}</p>

      <h3>Affiliations</h3>
      <ul>
        {aboutConfig.affiliations.map(item => (
          <li key={item.id}>
            {item.icon} <strong>{item.title}</strong> – {item.role} [<a href={item.url} target="_blank" rel="noreferrer">Link</a>]
          </li>
        ))}
      </ul>

      <h3>Education</h3>
      <ul>
        {aboutConfig.education.map(edu => (
          <li key={edu.id}>
            {edu.icon} <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>

      <h3>Honors & Awards</h3>
      <ul>
        {aboutConfig.honors.map(h => (
          <li key={h.id}>
            {h.icon} <strong>{h.title}</strong> – {h.description} ({h.year})
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;


// === App.js: Add this route ===
<Route path="/about" exact element={<About />} />

// === menuConfig.js: Add this menu item ===
{
  id: "menu-4",
  title: "About",
  path: "/about",
  icon: <AiOutlineLink size={35} />,
  className: "nav-text",
}
