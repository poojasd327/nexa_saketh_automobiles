'use client';

import React from 'react';
import { Container, Box, Typography, Button, Grid, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SpeedIcon from '@mui/icons-material/Speed';

interface NexaHeroProps {
  onBookServiceClick: () => void;
  onExploreCollectionClick: () => void;
}

export default function NexaHero({ onBookServiceClick, onExploreCollectionClick }: NexaHeroProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '85vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        background: `
          radial-gradient(ellipse at 70% 30%, rgba(197, 160, 89, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(0, 229, 255, 0.08) 0%, transparent 50%),
          linear-gradient(180deg, #090b10 0%, #0d111a 100%)
        `,
        overflow: 'hidden',
        pt: { xs: 4, md: 8 },
        pb: { xs: 6, md: 10 },
      }}
    >
      {/* Background Decorative Lines */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
              <Chip
                icon={<VerifiedUserIcon sx={{ fontSize: '1rem !important', color: '#c5a059 !important' }} />}
                label="SAKETH AUTOMOBILES • TUMKUR"
                sx={{
                  backgroundColor: 'rgba(197, 160, 89, 0.1)',
                  color: '#c5a059',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  fontSize: '0.75rem',
                  py: 0.5,
                }}
              />
              <Chip
                label="PREMIUM LUXURY RANGE"
                sx={{
                  backgroundColor: 'rgba(0, 229, 255, 0.1)',
                  color: '#00e5ff',
                  border: '1px solid rgba(0, 229, 255, 0.3)',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                }}
              />
            </Box>

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.75rem', sm: '3.75rem', md: '4.75rem' },
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                mb: 2,
              }}
            >
              Create.{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #c5a059 0%, #f0d598 50%, #d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Inspire.
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: '#94a3b8',
                fontSize: { xs: '1.1rem', md: '1.35rem' },
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: '680px',
                mb: 4,
              }}
            >
              Experience automotive luxury, redefined. NEXA is not just about driving; it&apos;s about arriving in a statement of sophisticated design and cutting-edge technology.
            </Typography>

            {/* CTAs */}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 6 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={onExploreCollectionClick}
                sx={{
                  py: 1.8,
                  px: 4,
                  fontSize: '1rem',
                  borderRadius: '4px',
                  boxShadow: '0 0 25px rgba(197, 160, 89, 0.35)',
                }}
              >
                Explore the Collection
              </Button>

              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<BuildCircleIcon />}
                onClick={onBookServiceClick}
                sx={{
                  py: 1.8,
                  px: 4,
                  fontSize: '1rem',
                  borderRadius: '4px',
                  borderColor: 'rgba(197, 160, 89, 0.4)',
                  '&:hover': {
                    borderColor: '#c5a059',
                    backgroundColor: 'rgba(197, 160, 89, 0.08)',
                  },
                }}
              >
                Book A Service
              </Button>
            </Box>

            {/* Quick Stat Badges */}
            <Grid container spacing={3} sx={{ pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <Grid size={{ xs: 6, sm: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <SupportAgentIcon sx={{ color: '#00e5ff', fontSize: '2rem' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 700 }}>
                      24*7 Support
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                      Round-the-clock Roadside
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 6, sm: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <SpeedIcon sx={{ color: '#c5a059', fontSize: '2rem' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 700 }}>
                      Smart Hybrid
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                      Intelligent EV Tech
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, sm: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <VerifiedUserIcon sx={{ color: '#00e5ff', fontSize: '2rem' }} />
                  <Box>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 700 }}>
                      Saketh Excellence
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                      Trusted Service Partner
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Right Showcase Card */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(18,22,32,0.8) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(197, 160, 89, 0.2)',
                p: { xs: 3, md: 4 },
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(197, 160, 89, 0.1)',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 200,
                  height: 200,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <Typography variant="overline" sx={{ color: '#c5a059', letterSpacing: '0.15em', fontWeight: 700 }}>
                FLAGSHIP SHOWCASE
              </Typography>
              
              <Typography variant="h3" sx={{ color: '#ffffff', fontWeight: 800, mt: 1, mb: 2 }}>
                NEXA Grand Vitara
              </Typography>

              <Typography variant="body2" sx={{ color: '#94a3b8', mb: 3, lineHeight: 1.6 }}>
                Intelligent Strong Hybrid technology combining EV silent driving with high performance fuel efficiency.
              </Typography>

              <Box
                sx={{
                  height: 200,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #121824 0%, #1e2638 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1.5,
                  position: 'relative',
                  overflow: 'hidden',
                  my: 2,
                }}
              >
                <Box
                  sx={{
                    fontSize: '4rem',
                    color: '#c5a059',
                    opacity: 0.9,
                    filter: 'drop-shadow(0 0 10px rgba(197, 160, 89, 0.3))',
                  }}
                >
                  🏎️
                </Box>
                <Typography variant="caption" sx={{ color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  SAKETH NEXA LUXURY COLLECTION
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 3 }}>
                <Box>
                  <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                    Engine Tech
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#00e5ff', fontWeight: 700 }}>
                    e-CVT / ALLGRIP SELECT
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  href="https://www.marutisurakshaa.com/nexa/grand%20vitara"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Details
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
