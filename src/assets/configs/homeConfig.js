import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaChalkboardTeacher} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";
import { AiOutlineNodeIndex } from "react-icons/ai";

const homeConfig = {
    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Muhammad Kazim</strong>
        </h1>,

    titles: [
        "Ph.D. Candidate | AI & Energy Systems",
        "Multidisciplinary Data Scientist",
        "Graph Neural Network Researcher",
        "Cybersecurity & Biomedical ML Enthusiast",
        "Open Science Advocate"
    ],

    about: {
        start: "I am a Ph.D. candidate and data science researcher at North Dakota State University, exploring the intersection of AI, complex systems, and critical infrastructure. My core research applies multilayer network analysis and graph neural networks to enhance the resilience of energy systems.",
        exit: "Beyond energy systems, I actively collaborate on machine learning applications in biomedical diagnostics and cybersecurity—integrating real-world data with cutting-edge AI models to solve high-impact societal problems."
    },

    workTimeline: [
        {
            id: "work-4",
            title: "Graduate Research Assistant",
            company: "NDSU | AISustein Project",
            description: "Lead research on graph-based learning for energy resilience, developing predictive maintenance systems using GNNs and analyzing multilayer energy networks from Belgium and Oklahoma datasets.",
            date: "2023–Present",
            icon: <BiRocket />,
            tags: ["GNNs", "multilayer networks", "smart grids", "resilience", "AI"]
        },
        {
            id: "work-3",
            title: "Graduate Teaching Assistant",
            company: "NDSU Department of Computer Science",
            description: "Taught and mentored students in CSCI 172 (Intermediate Visual Basic); guided practical projects and supported academic development.",
            date: "2022–2023",
            icon: <FaChalkboardTeacher />,
            tags: ["teaching", "visual basic", "student support"]
        },
        {
            id: "work-2",
            title: "Data Processing Supervisor",
            company: "BISE Malakand",
            description: "Managed student evaluation and payroll automation using Oracle PL/SQL and OMR technologies; improved efficiency for over 120+ employees.",
            date: "2017–2022",
            icon: <BsClipboardData />,
            tags: ["oracle", "omr", "automation", "data pipelines"]
        },
        {
            id: "work-1",
            title: "Software Developer & E-Government Engineer",
            company: "LGE&RDD, KP-IT Board, Softcrust Solutions",
            description: "Engineered web-based citizen services and administrative tools using CodeIgniter, AngularJS, Oracle, and PHP. Contributed to digital transformation in the public sector.",
            date: "2014–2017",
            icon: <AiOutlineNodeIndex />,
            tags: ["PHP", "CodeIgniter", "Oracle", "GovTech", "data systems"]
        }
    ]
}

export default homeConfig
