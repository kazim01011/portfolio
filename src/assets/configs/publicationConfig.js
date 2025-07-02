import React from 'react';
import { ImBook } from "react-icons/im";

import paper1 from "../images/Paper_1.png";
import paper2 from "../images/Paper_2.png";
import paper3 from "../images/Paper_3.png";
import paper4 from "../images/Paper_4.png";
import paper5 from "../images/Paper_5.png";

const publicationsConfig = [
  {
    id: "pub-1",
    title: "Multilayer Analysis of Energy Networks",
    authors: "Muhammad Kazim, et al.",
    venue: "Energy Reports, 2024",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S235246772400136X",
    image: paper1,
    tags: ["Energy Systems", "Multilayer Networks"],
    description: "Analyzes multilayered gas-electric energy networks under cascade failures, with insights into resilience and planning."
  },
  {
    id: "pub-2",
    title: "Link Prediction and Navigability of Multiplex Power Networks",
    authors: "Muhammad Kazim, et al.",
    venue: "arXiv, 2024",
    url: "https://arxiv.org/abs/2503.14641",
    image: paper2,
    tags: ["Graph Neural Networks", "Power Systems"],
    description: "Investigates link prediction performance in multiplex networks using GCN, GAT, GraphSAGE."
  },
  {
    id: "pub-3",
    title: "A Review on Multilayer Network Applications in Energy Systems",
    authors: "Muhammad Kazim, et al.",
    venue: "Applied Energy (Accepted)",
    url: "https://www.sciencedirect.com/journal/applied-energy",
    image: paper3,
    tags: ["Survey", "Multilayer Networks", "Energy Modeling"],
    description: "A comprehensive review paper covering techniques, tools, and use cases of multilayer modeling for sustainable smart grids."
  },
  {
    id: "pub-4",
    title: "Multilayer GNN for Predictive Maintenance and Clustering in Power Grids",
    authors: "Muhammad Kazim, et al.",
    venue: "iScience (Submitted)",
    url: "https://www.cell.com/iscience/home",
    image: paper4,
    tags: ["GNN", "Predictive Maintenance", "Smart Grids"],
    description: "Combines GAT, GCN, GIN layers to predict maintenance needs and identify vulnerable substations in real-world power networks."
  },
  {
    id: "pub-5",
    title: "Link Prediction for Cyber-Physical Grid Vulnerabilities",
    authors: "Muhammad Kazim, et al.",
    venue: "SEGAN (Submitted)",
    url: "https://www.sciencedirect.com/journal/sustainable-energy-grids-and-networks",
    image: paper5,
    tags: ["Cybersecurity", "Link Prediction", "Infrastructure"],
    description: "Uses GNN-based link prediction to uncover hidden interdependencies and security risks in cyber-physical grids."
  }
];

export default publicationsConfig;
