import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { ImBook } from 'react-icons/im';
import publicationFigures from './publicationFigures';

const projectConfig = [
  {
    id: 'project-gnn-maintenance',
    eyebrow: 'Energy AI',
    title: 'Multilayer GNN for Predictive Maintenance',
    description: 'A graph-learning framework that combines multiple GNN architectures to predict maintenance needs and identify vulnerable substations from seven years of real utility data.',
    publicationId: 'pub-3',
    image: publicationFigures['pub-3'].src,
    links: [
      { name: 'Repository', url: 'https://github.com/CEL-lab/Multilayer_GNN', icon: <AiFillGithub /> },
      { name: 'Publication', url: 'https://doi.org/10.1016/j.isci.2025.113490', icon: <ImBook /> },
    ],
  },
  {
    id: 'project-explainable-grid',
    eyebrow: 'Explainable AI',
    title: 'Transmission Line Failure Prediction',
    description: 'An edge-level explainable GNN approach using network-centric features to improve power-grid failure prediction and make risk signals easier to interpret.',
    publicationId: 'pub-4',
    image: publicationFigures['pub-4'].src,
    links: [
      { name: 'Repository', url: 'https://github.com/CEL-lab/EdgeGNN', icon: <AiFillGithub /> },
      { name: 'Publication', url: 'https://doi.org/10.1016/j.segan.2025.101969', icon: <ImBook /> },
    ],
  },
  {
    id: 'project-multiplex-energy',
    eyebrow: 'Network Science',
    title: 'Multiplex Energy Network Resilience',
    description: 'Multilayer models of coupled gas and electricity infrastructure used to study cascading failures, link prediction, and navigability under disruption.',
    publicationId: 'pub-1',
    image: publicationFigures['pub-1'].src,
    links: [
      { name: 'Repository', url: 'https://github.com/CEL-lab/Link_Prediction_Multiplex', icon: <AiFillGithub /> },
      { name: 'Publication', url: 'https://doi.org/10.1016/j.segan.2024.101407', icon: <ImBook /> },
    ],
  },
  {
    id: 'project-graphvax',
    eyebrow: 'Biomedical AI',
    title: 'Network-Integrated Reverse Vaccinology',
    description: 'A USDA-supported framework combining Biomni-prioritized features and GNNs to identify vaccine candidates for Flavobacterium in aquaculture.',
    publicationId: 'pub-8',
    image: publicationFigures['pub-8'].src,
    links: [
      { name: 'Repository', url: 'https://github.com/CEL-lab/USDA_Protein/tree/main', icon: <AiFillGithub /> },
      { name: 'Preprint', url: 'https://doi.org/10.21203/rs.3.rs-8107499/v1', icon: <ImBook /> },
    ],
  },
];

export default projectConfig;
