'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#090b10',
      paper: '#121620',
    },
    primary: {
      main: '#c5a059', // Luxury Champagne Gold / Platinum Accent
      light: '#e5c07b',
      dark: '#967432',
      contrastText: '#000000',
    },
    secondary: {
      main: '#00e5ff', // Electric Cyan Nexa Tech Accent
      light: '#6effff',
      dark: '#00b2cc',
      contrastText: '#000000',
    },
    text: {
      primary: '#f0f4f8',
      secondary: '#94a3b8',
    },
    divider: 'rgba(255, 255, 255, 0.08)',
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), "Outfit", "Inter", sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
    },
    subtitle1: {
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      fontSize: '0.85rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.03em',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: '4px',
          padding: '10px 24px',
          fontSize: '0.95rem',
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          ...(ownerState.variant === 'contained' && ownerState.color === 'primary' && {
            background: 'linear-gradient(135deg, #c5a059 0%, #d4af37 50%, #b38b40 100%)',
            color: '#0a0c10',
            fontWeight: 700,
            '&:hover': {
              background: 'linear-gradient(135deg, #d4af37 0%, #e5c07b 100%)',
              boxShadow: '0 0 20px rgba(197, 160, 89, 0.4)',
            },
          }),
          ...(ownerState.variant === 'contained' && ownerState.color === 'secondary' && {
            background: 'linear-gradient(135deg, #00e5ff 0%, #00b2cc 100%)',
            color: '#090b10',
            fontWeight: 700,
            '&:hover': {
              boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)',
            },
          }),
          ...(ownerState.variant === 'outlined' && ownerState.color === 'primary' && {
            borderColor: 'rgba(197, 160, 89, 0.5)',
            color: '#c5a059',
            '&:hover': {
              borderColor: '#c5a059',
              backgroundColor: 'rgba(197, 160, 89, 0.08)',
            },
          }),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(18, 22, 32, 0.75)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.07)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(197, 160, 89, 0.3)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 15px rgba(197, 160, 89, 0.15)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          fontWeight: 600,
          fontSize: '0.75rem',
        },
      },
    },
  },
});

export default theme;
