import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import NavBarItems from './NavBarItems';

const NavBar = () => (
  <AppBar position="sticky" elevation={0} sx={{ background: 'rgba(5, 13, 23, .84)', borderBottom: '1px solid rgba(148,183,214,.14)', backdropFilter: 'blur(18px)' }}>
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{ minHeight: { xs: 66, md: 76 }, justifyContent: 'space-between', gap: 2 }}>
        <a href="/" aria-label="Muhammad Kazim home" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 38, height: 38, display: 'grid', placeItems: 'center', borderRadius: 12, background: '#57d8ff', color: '#07111f', fontFamily: 'Space Grotesk', fontWeight: 700 }}>MK</span>
          <span className="nav-brand-text" style={{ fontFamily: 'Space Grotesk', fontWeight: 700 }}>Muhammad Kazim</span>
        </a>
        <NavBarItems />
      </Toolbar>
    </Container>
  </AppBar>
);

export default NavBar;
