import React from 'react';
import { AiFillCode, AiFillHome, AiOutlineGithub, AiOutlineUser } from 'react-icons/ai';
import { ImBook } from 'react-icons/im';

const menuConfig = {
  sidebarData: [
    { id: 'menu-0', title: 'Home', path: '/', icon: <AiFillHome /> },
    { id: 'menu-1', title: 'About', path: '/about', icon: <AiOutlineUser /> },
    { id: 'menu-2', title: 'Projects', path: '/projects', icon: <AiOutlineGithub /> },
    { id: 'menu-3', title: 'Publications', path: '/publications', icon: <ImBook /> },
    { id: 'menu-4', title: 'Skills', path: '/skills', icon: <AiFillCode /> },
  ],
};

export default menuConfig;
