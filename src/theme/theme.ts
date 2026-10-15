'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#111111',
    },
    primary: {
      main: '#ffffff', // Crisp Luxury Pure White
      light: '#f4f4f5',
      dark: '#d4d4d8',
      contrastText: '#000000',
    },
    secondary: {
      main: '#e4e4e7', // Refined Platinum Chrome Silver
      light: '#ffffff',
      dark: '#71717a',
      contrastText: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#a1a1aa',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), "Outfit", "Inter", -apple-system, sans-serif',
    h1: {
      fontWeight: 900,
      letterSpacing: '-0.03em',
      color: '#ffffff',
    },
    h2: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      color: '#ffffff',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
      color: '#ffffff',
    },
    subtitle1: {
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      fontSize: '0.85rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 6,
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
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          ...(ownerState.variant === 'contained' && ownerState.color === 'primary' && {
            backgroundColor: '#ffffff',
            color: '#000000',
            fontWeight: 700,
            border: '1px solid #ffffff',
            boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)',
            '&:hover': {
              backgroundColor: '#e4e4e7',
              borderColor: '#ffffff',
              boxShadow: '0 0 24px rgba(255, 255, 255, 0.4)',
              transform: 'translateY(-1px)',
            },
          }),
          ...(ownerState.variant === 'contained' && ownerState.color === 'secondary' && {
            backgroundColor: '#1c1c1f',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#27272a',
              borderColor: '#ffffff',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)',
              transform: 'translateY(-1px)',
            },
          }),
          ...(ownerState.variant === 'outlined' && ownerState.color === 'primary' && {
            borderColor: 'rgba(255, 255, 255, 0.35)',
            color: '#ffffff',
            backgroundColor: 'transparent',
            '&:hover': {
              borderColor: '#ffffff',
              backgroundColor: '#ffffff',
              color: '#000000',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)',
            },
          }),
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(18, 18, 18, 0.85)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            borderColor: 'rgba(255, 255, 255, 0.35)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.08)',
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
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          color: '#ffffff',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(20, 20, 20, 0.75)',
          color: '#ffffff',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.15)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 255, 255, 0.4)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#ffffff',
            borderWidth: '1px',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#a1a1aa',
          '&.Mui-focused': {
            color: '#ffffff',
          },
        },
      },
    },
  },
});

export default theme;
