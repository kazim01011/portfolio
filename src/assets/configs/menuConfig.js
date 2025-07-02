import React from "react";
import { AiFillCode, AiFillHome, AiOutlineGithub, AiOutlineLink } from "react-icons/ai"; // ✅ AiOutlineLink added
import { ImBook } from "react-icons/im"; // ✅ icon for Publications

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/portfolio",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "About",
      path: "/about",
      icon: <AiOutlineLink size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-2",
      title: "Projects",
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-3",
      title: "Publications",
      path: "/publications",
      icon: <ImBook size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-4",
      title: "Skills",
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    },
  ],
};

export default menuConfig;
