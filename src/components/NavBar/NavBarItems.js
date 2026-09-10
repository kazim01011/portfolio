import React from 'react';
import { Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import menuConfig from '../../assets/configs/menuConfig';

const NavBarItems = () => {
  const location = useLocation();
  return (
    <Box component="nav" aria-label="Main navigation" sx={{ display: 'flex', alignItems: 'center', gap: { xs: .3, md: .7 } }}>
      {menuConfig.sidebarData.map((item) => {
        const active = location.pathname === item.path || (item.path === '/' && location.pathname === '/portfolio');
        return (
          <Box component={Link} to={item.path} key={item.id} aria-current={active ? 'page' : undefined} sx={{ display: 'flex', alignItems: 'center', gap: .7, px: { xs: 1, md: 1.5 }, py: 1, borderRadius: '10px', color: active ? '#07111f' : '#a9bbcc', backgroundColor: active ? '#57d8ff' : 'transparent', fontSize: '.84rem', fontWeight: 700, transition: 'all 160ms ease', '&:hover': { color: active ? '#07111f' : '#f4f8fc', backgroundColor: active ? '#57d8ff' : 'rgba(255,255,255,.06)' }, '& svg': { fontSize: '1rem' } }}>
            {item.icon}<span className="nav-item-label">{item.title}</span>
          </Box>
        );
      })}
    </Box>
  );
};

export default NavBarItems;
