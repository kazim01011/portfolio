import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"
import multi_GNN_network from "../images/multi_GNN_network.png";
import multiplex_energy from "../images/multiplex_energy.png";
import string_normal_image from "../images/string_normal_image.png";
import React from 'react'

const projectConfig = [
    {
        id: "project-gnn-maintenance",
        title: "Multilayer GNN for Predictive Maintenance",
        links: [
            {
                name: "paper",
                url: "https://www.cell.com/iscience/home",
                icon: <ImBook/>
            },
            {
                name: "fork",
                url: "https://github.com/CEL-lab/Multilayer_GNN",
                icon: <BiGitRepoForked/>
            },
            {
                name: "code",
                url: "https://github.com/CEL-lab/Multilayer_GNN",
                icon: <AiFillGithub/>
            }
        ],
        image: multi_GNN_network,
        description: "Developed a novel GNN framework fusing GAT, GCN, and GIN layers for predictive maintenance using 7 years of power grid data. Achieved 30-day F1-score of 0.89, outperforming classical baselines. Clustering revealed high-risk substations for resilience planning.",
        target: "_blank"
    }
    ,{
        id: "project-multiplex-energy",
        title: "Navigability in Multiplex Energy Networks",
        links: [
            {
                name: "paper",
                url: "https://arxiv.org/pdf/2503.14641",
                icon: <ImBook/>
            },
            {
                name: "code",
                url: "https://github.com/CEL-lab/Link_Prediction_Multiplex",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/CEL-lab/Link_Prediction_Multiplex/fork",
                icon: <BiGitRepoForked/>
            }
        ],
        image: multiplex_energy, // Replace with your image
        description: "Analyzed Belgium’s energy network using five-layer multiplex models. Enhanced Jaccard & Adamic-Adar link prediction via exclusive neighbors. Studied network navigability under node failures with spectral analysis and random walk strategies.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "GraphVax Explorer",
        links: [
            {
                name: "repo",
                url: "https://github.com/CEL-lab/USDA_Protein/tree/main",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/CEL-lab/USDA_Protein/tree/main",
                icon: <BiGitRepoForked/>
            }
        ],
        image: string_normal_image,
        description: "This project explores Graph Neural Networks (GNNs) for predicting novel protein-protein interactions (PPIs) using features from vaccine candidate analysis. We analyze whether these predicted links tend to connect proteins of similar or different priority classes (e.g., High–High vs. High–Low), especially among isolated proteins with no known STRING interactions.",
        target: "_blank"
    }
]

export default projectConfig