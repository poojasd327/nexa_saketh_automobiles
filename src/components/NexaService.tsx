'use client';

import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocalCarWashIcon from '@mui/icons-material/LocalCarWash';
import TireRepairIcon from '@mui/icons-material/TireRepair';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface NexaServiceProps {
  onBookServiceClick: () => void;
}

export default function NexaService({ onBookServiceClick }: NexaServiceProps) {
  const serviceHighlights = [
    {
      icon: <SupportAgentIcon sx={{ fontSize: '2.5rem', color: '#00e5ff' }} />,
      title: '24*7 Assistance',
      description: 'Round-the-clock support ensuring you\'re never alone on the road.',
    },
    {
      icon: <CalendarMonthIcon sx={{ fontSize: '2.5rem', color: '#c5a059' }} />,
      title: 'Service Booking',
      description: 'Seamless online scheduling for your vehicle\'s regular maintenance.',
    },
    {
      icon: <LocalCarWashIcon sx={{ fontSize: '2.5rem', color: '#00e5ff' }} />,
      title: 'Express Car Wash & Detail',
      description: 'Premium exterior cleaning and deep interior sanitization.',
    },
    {
      icon: <TireRepairIcon sx={{ fontSize: '2.5rem', color: '#c5a059' }} />,
      title: 'Wheel Alignment & Balancing',
      description: '3D precision alignment technology for smooth, safe driving.',
    },
    {
      icon: <BuildIcon sx={{ fontSize: '2.5rem', color: '#00e5ff' }} />,
      title: 'Expert Car Repair & Inspection',
      description: 'Comprehensive multi-point computer diagnostics and repair.',
    },
    {
      icon: <HighQualityIcon sx={{ fontSize: '2.5rem', color: '#c5a059' }} />,
      title: '100% Genuine Nexa Parts',
      description: 'Original equipment manufacturer spare parts with warranty.',
    },
  ];

  return (
    <Box id="service" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#0d111a', position: 'relative' }}>
      {/* Background Glow Accent */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 350,
          height: 350,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(197, 160, 89, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Chip
              label="NEXA SERVICE CENTRE"
              sx={{
                backgroundColor: 'rgba(0, 229, 255, 0.1)',
                color: '#00e5ff',
                border: '1px solid rgba(0, 229, 255, 0.3)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                mb: 2,
              }}
            />

            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2.25rem', md: '3.25rem' },
                fontWeight: 800,
                color: '#ffffff',
                mb: 2,
                lineHeight: 1.1,
              }}
            >
              Excellence in Every Detail
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: '#c5a059',
                fontWeight: 600,
                mb: 3,
                fontSize: '1.1rem',
              }}
            >
              Uncompromising care for your premium vehicle.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#94a3b8',
                mb: 4,
                lineHeight: 1.8,
                fontSize: '1rem',
                backgroundColor: 'rgba(18, 22, 32, 0.6)',
                p: 3,
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              If you’ve been looking for a <strong>“car service centre near me”</strong> for your NEXA car, you’ve come to the right place! Saketh Automobiles, is a top-notch NEXA Service Centre near you where you can book a service appointment with ease to avail the best services for your car. Whether you’re looking for car repair or inspection, want to book a car wash or get the wheel alignment done, Saketh, is the best service centre in that you can easily visit.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<BuildIcon />}
              endIcon={<ArrowForwardIcon />}
              onClick={onBookServiceClick}
              sx={{ py: 1.8, px: 4, fontSize: '1rem', borderRadius: '4px' }}
            >
              Book Service Appointment
            </Button>
          </Grid>

          {/* Right Highlights Cards Grid */}
          <Grid size={{ xs: 12, lg: 7 }}>
            <Grid container spacing={3}>
              {serviceHighlights.map((service, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      backgroundColor: 'rgba(18, 22, 32, 0.8)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      p: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(0, 229, 255, 0.4)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent>
                      <Box sx={{ mb: 2 }}>{service.icon}</Box>
                      <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 1 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.6 }}>
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
