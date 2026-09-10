import React from 'react';
import { Container } from '@mui/material';
import FooterItems from './FooterItems';

const Footer = () => (
  <footer className="footer">
    <Container maxWidth="xl" className="footer-inner">
      <div>
        <div className="footer-name">Muhammad Kazim, Ph.D.</div>
        <div className="footer-note">AI for resilient infrastructure and sustainable systems</div>
      </div>
      <FooterItems />
    </Container>
  </footer>
);

export default Footer;
