import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import React from 'react';

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            label: "GitHub",
            url: "https://github.com/kazim01011",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={21}/>
        },
        {
            id: "footer-1",
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/muhammad-kazim-7bb4954a/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={19}/>
        },
        {
            id: "footer-2",
            label: "Google Scholar",
            url: "https://scholar.google.com/citations?user=8EHboA4AAAAJ&hl=en&oi=ao",
            className: "social-icon",
            target: "_blank",
            icon: <SiGooglescholar size={20}/>
        },
        {
            id: "footer-3",
            label: "Email",
            url: "mailto:kazim01011@yahoo.com",
            className: "social-icon",
            target: "_self",
            icon: <AiOutlineMail size={21}/>
        }
    ]
}

export default footerConfig
