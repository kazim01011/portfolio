import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { ImBook } from 'react-icons/im';
import multiGnn from '../images/multi_GNN_network.png';
import multiplexEnergy from '../images/multiplex_energy.png';
import graphVax from '../images/string_normal_image.png';
import graphEmbeddings from '../images/graph_embeddings.png';

const projectConfig = [
  {
    id: 'project-gnn-maintenance',
    eyebrow: 'Energy AI',
    title: 'Multilayer GNN for Predictive Maintenance',
    description: 'A graph-learning framework that combines multiple GNN architectures to predict maintenance needs and identify vulnerable substations from seven years of real utility data.',
    image: multiGnn,
    links: [
      { name: 'Repository', url: 'https://github.com/CEL-lab/Multilayer_GNN', icon: <AiFillGithub /> },
      { name: 'Publication', url: 'https://www.cell.com/iscience/home', icon: <ImBook /> },
    ],
  },
  {
    id: 'project-explainable-grid',
    eyebrow: 'Explainable AI',
    title: 'Transmission Line Failure Prediction',
    description: 'An edge-level explainable GNN approach using network-centric features to improve power-grid failure prediction and make risk signals easier to interpret.',
    image: graphEmbeddings,
    links: [
      { name: 'Publication', url: 'https://doi.org/10.1016/j.segan.2025.101969', icon: <ImBook /> },
    ],
  },
  {
    id: 'project-multiplex-energy',
    eyebrow: 'Network Science',
    title: 'Multiplex Energy Network Resilience',
    description: 'Multilayer models of coupled gas and electricity infrastructure used to study cascading failures, link prediction, and navigability under disruption.',
    image: multiplexEnergy,
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
    image: graphVax,
    links: [
      { name: 'Repository', url: 'https://github.com/CEL-lab/USDA_Protein/tree/main', icon: <AiFillGithub /> },
      { name: 'Preprint', url: 'https://doi.org/10.21203/rs.3.rs-8107499/v1', icon: <ImBook /> },
    ],
  },
];

export default projectConfig;
