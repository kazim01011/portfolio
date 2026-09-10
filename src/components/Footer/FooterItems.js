import React from 'react';
import { IconButton } from '@mui/material';
import footerConfig from '../../assets/configs/footerConfig';

const FooterItems = () => (
  <div className="footer-links">
    {footerConfig.icons.map((item) => (
      <IconButton href={item.url} key={item.id} aria-label={item.label} target={item.target} rel="noopener noreferrer" sx={{ color: '#b6c8d8', border: '1px solid rgba(148,183,214,.16)', '&:hover': { color: '#07111f', background: '#57d8ff' } }}>
        {item.icon}
      </IconButton>
    ))}
  </div>
);

export default FooterItems;
