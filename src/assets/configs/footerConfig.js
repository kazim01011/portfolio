import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import { SiGooglescholar } from 'react-icons/si';
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/kazim01011",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/muhammad-kazim-7bb4954a/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-2",
            url: "https://scholar.google.com/citations?user=8EHboA4AAAAJ&hl=en&oi=ao",
            className: "social-icon",
            target: "_blank",
            icon: <SiGooglescholar size={50}/>
        }
    ]
}

export default footerConfig
