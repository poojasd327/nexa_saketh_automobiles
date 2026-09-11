'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Chip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

interface NexaHeaderProps {
  onBookServiceClick: () => void;
  onTestDriveClick: () => void;
}

export default function NexaHeader({ onBookServiceClick, onTestDriveClick }: NexaHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'Nexa Service', href: '#service' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Testimonials', href: '#reviews' },
    { name: 'Book Service', href: '#booking' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(9, 11, 16, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* NEXA Brand Text in Clean White */}
          <Typography
            component="a"
            href="#"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '1.25rem', md: '1.6rem' },
              letterSpacing: '0.25em',
              color: '#ffffff',
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
              '&:hover': {
                opacity: 0.85,
              },
            }}
          >
            NEXA
          </Typography>

          {/* Desktop Nav Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
            {navLinks.map((link) => (
              <Button
                key={link.name}
                href={link.href}
                sx={{
                  color: '#94a3b8',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  '&:hover': {
                    color: '#c5a059',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          {/* Action Buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<DirectionsCarIcon />}
              onClick={onTestDriveClick}
              size="medium"
            >
              Test Drive
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<BuildIcon />}
              onClick={onBookServiceClick}
              size="medium"
            >
              Book Service
            </Button>
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: {
              width: 280,
              backgroundColor: '#090b10',
              backgroundImage: 'none',
              borderLeft: '1px solid rgba(255, 255, 255, 0.08)',
              p: 2,
            },
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="subtitle1" sx={{ color: '#c5a059', fontWeight: 700 }}>
            SAKETH NEXA
          </Typography>
          <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navLinks.map((link) => (
            <ListItem
              key={link.name}
              component="a"
              href={link.href}
              onClick={handleDrawerToggle}
              sx={{
                borderRadius: 1,
                mb: 1,
                color: '#f0f4f8',
                '&:hover': { backgroundColor: 'rgba(197, 160, 89, 0.1)' },
              }}
            >
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            startIcon={<DirectionsCarIcon />}
            onClick={() => {
              handleDrawerToggle();
              onTestDriveClick();
            }}
          >
            Test Drive
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            startIcon={<BuildIcon />}
            onClick={() => {
              handleDrawerToggle();
              onBookServiceClick();
            }}
          >
            Book Service
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2, color: '#94a3b8', fontSize: '0.8rem' }}>
            <PhoneInTalkIcon fontSize="small" sx={{ color: '#c5a059' }} />
            <span>Saketh Assistance: 24*7 Available</span>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}
