import React from 'react';
import { FaChalkboardTeacher, FaCode, FaDatabase } from 'react-icons/fa';
import { BiNetworkChart } from 'react-icons/bi';

const homeConfig = {
  workTimeline: [
    {
      id: 'work-5',
      title: 'Visiting Faculty',
      company: 'Department of Artificial Intelligence, University of Malakand',
      description: 'Teaching AI, Data Structures, and Programming while supervising research projects in intelligent systems and machine learning.',
      date: 'Sep 2025 - Present',
      icon: <FaChalkboardTeacher />,
      tags: ['AI education', 'research supervision', 'machine learning'],
    },
    {
      id: 'work-4',
      title: 'Graduate Research Assistant',
      company: 'NDSU | AISustein',
      description: 'Developed multilayer network and graph neural network models for energy resilience, predictive maintenance, and fault propagation using Belgian infrastructure data, SAInt and MATLAB simulation workflows, and NDSU CCAST high-performance computing.',
      date: 'Jun 2023 - Aug 2025',
      icon: <BiNetworkChart />,
      tags: ['GNNs', 'SAInt', 'MATLAB', 'CCAST HPC'],
    },
    {
      id: 'work-3',
      title: 'Graduate Teaching Assistant',
      company: 'Department of Computer Science, NDSU',
      description: 'Led CSCI 172 laboratory sessions, evaluated student projects, and provided technical mentorship.',
      date: 'Aug 2022 - May 2023',
      icon: <FaChalkboardTeacher />,
      tags: ['teaching', 'mentorship', 'programming'],
    },
    {
      id: 'work-2',
      title: 'Data Processing Supervisor',
      company: 'BISE Malakand, Pakistan',
      description: 'Automated transcript processing and payroll workflows for more than 120 employees using Oracle PL/SQL and OMR systems.',
      date: 'Jun 2017 - Apr 2022',
      icon: <FaDatabase />,
      tags: ['Oracle', 'automation', 'data systems'],
    },
    {
      id: 'work-1',
      title: 'Software Engineering & Systems Development',
      company: 'LGE&RDD, Pakistan',
      description: 'Built government platforms for citizen services and e-bidding, and modernized web applications using PHP, CodeIgniter, Oracle, and AngularJS.',
      date: '2014 - 2017',
      icon: <FaCode />,
      tags: ['GovTech', 'web systems', 'software engineering'],
    },
  ],
};

export default homeConfig;
