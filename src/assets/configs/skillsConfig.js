import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiPytorch,
    SiTensorflow,
    SiScikitlearn,
    SiNumpy,
    SiPandas,
    SiReact,
    SiLatex,
    SiJupyter,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPowerbi,
    SiGit,
    SiApacheairflow,
    SiApachekafka,
    SiLinux,
    SiUbuntu,
    SiBash
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiPytorch size={50}/>,
            text: "PyTorch"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiTensorflow size={50}/>,
            text: "TensorFlow"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiScikitlearn size={50}/>,
            text: "Scikit-Learn"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiDocker size={50}/>,
            text: "Docker"
        },
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiMicrosoftazure size={50}/>,
            text: "Azure"
        }
    ],
    complementarySkills: [
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "PostgreSQL"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiMicrosoftsqlserver size={50}/>,
            text: "MSSQL"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <GrMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <SiNumpy size={50}/>,
            text: "NumPy"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <SiPandas size={50}/>,
            text: "Pandas"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <SiGit size={50}/>,
            text: "Git"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiApacheairflow size={50}/>,
            text: "Airflow"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiApachekafka size={50}/>,
            text: "Kafka"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiJupyter size={50}/>,
            text: "Jupyter Notebook"
        },
        {
            id: "skills-15",
            className: "skill-icon",
            icon: <SiLatex size={50}/>,
            text: "LaTeX"
        },
        {
            id: "skills-16",
            className: "skill-icon",
            icon: <SiReact size={50}/>,
            text: "React"
        },
        {
            id: "skills-17",
            className: "skill-icon",
            icon: <SiHtml5 size={50}/>,
            text: "HTML5"
        },
        {
            id: "skills-18",
            className: "skill-icon",
            icon: <SiCss3 size={50}/>,
            text: "CSS3"
        },
        {
            id: "skills-19",
            className: "skill-icon",
            icon: <SiJavascript size={50}/>,
            text: "JavaScript"
        },
        {
            id: "skills-20",
            className: "skill-icon",
            icon: <SiPowerbi size={50}/>,
            text: "Power BI"
        }
    ]
};

export default skillsConfig;
