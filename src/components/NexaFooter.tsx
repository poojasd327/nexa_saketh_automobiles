'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Box, Typography, Grid, Link as MuiLink, IconButton, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LanguageIcon from '@mui/icons-material/Language';

export default function NexaFooter() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f0f0f0',
        color: '#52525b',
        pt: { xs: 8, md: 10 },
        pb: 5,
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} sx={{ mb: 6 }}>
          {/* Col 1: Brand & Slogan */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Image
                src="/saketh_logo.png"
                alt="Saketh Automobiles Logo"
                width={160}
                height={48}
                style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
              />
            </Box>

            <Typography variant="subtitle2" sx={{ color: '#000000', fontWeight: 800, mb: 2, letterSpacing: '0.15em' }}>
              CREATE. INSPIRE.
            </Typography>

            <Typography variant="body2" sx={{ lineHeight: 1.7, mb: 3, color: '#52525b' }}>
              Saketh Automobiles is your premier authorized NEXA Dealership and Service Centre. Dedicated to providing world-class luxury car buying and automotive care experiences.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.5 }}>
              <IconButton
                sx={{
                  color: '#000000',
                  backgroundColor: '#ffffff',
                  border: '1px solid #d4d4d8',
                  transition: 'all 0.2s ease',
                  '&:hover': { backgroundColor: '#000000', color: '#ffffff', borderColor: '#000000' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#000000',
                  backgroundColor: '#ffffff',
                  border: '1px solid #d4d4d8',
                  transition: 'all 0.2s ease',
                  '&:hover': { backgroundColor: '#000000', color: '#ffffff', borderColor: '#000000' },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{
                  color: '#000000',
                  backgroundColor: '#ffffff',
                  border: '1px solid #d4d4d8',
                  transition: 'all 0.2s ease',
                  '&:hover': { backgroundColor: '#000000', color: '#ffffff', borderColor: '#000000' },
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Col 2: The NEXA Range */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle1" sx={{ color: '#000000', fontWeight: 700, mb: 2.5 }}>
              NEXA COLLECTION
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {[
                { name: 'Grand Vitara', href: 'https://www.marutisurakshaa.com/nexa/grand%20vitara' },
                { name: 'Invicto', href: 'https://www.marutisurakshaa.com/nexa/invicto' },
                { name: 'Fronx', href: 'https://www.marutisurakshaa.com/nexa/fronx' },
                { name: 'Jimny', href: 'https://www.marutisurakshaa.com/nexa/jimny' },
                { name: 'Baleno', href: 'https://www.marutisurakshaa.com/nexa/baleno' },
                { name: 'XL6', href: 'https://www.marutisurakshaa.com/nexa/xl6' },
                { name: 'Ignis', href: 'https://www.marutisurakshaa.com/nexa/ignis' },
                { name: 'Ciaz', href: 'https://www.marutisurakshaa.com/nexa/ciaz' },
              ].map((car) => (
                <MuiLink
                  key={car.name}
                  href={car.href}
                  underline="hover"
                  target="_blank"
                  sx={{
                    color: '#52525b',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#000000' },
                  }}
                >
                  {car.name}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Col 3: Saketh Services & Accessories */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle1" sx={{ color: '#000000', fontWeight: 700, mb: 2.5 }}>
              SERVICES & PARTS
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {[
                { name: 'Book A Service', href: '#booking' },
                { name: '24*7 Roadside Support', href: '#service' },
                { name: '3D Wheel Alignment', href: '#service' },
                { name: 'Express Car Wash', href: '#service' },
                { name: 'Exterior Accessories', href: 'https://www.nexaofsiraroad.com/accessories', external: true },
                { name: 'Interior Accessories', href: 'https://www.nexaofsiraroad.com/accessories', external: true },
              ].map((s) => (
                <MuiLink
                  key={s.name}
                  href={s.href}
                  underline="hover"
                  target={s.external ? '_blank' : undefined}
                  sx={{
                    color: '#52525b',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s ease',
                    '&:hover': { color: '#000000' },
                  }}
                >
                  {s.name}
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Col 4: Dealership & Service Centre Info */}
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Typography variant="subtitle1" sx={{ color: '#000000', fontWeight: 700, mb: 2.5 }}>
              SAKETH DEALERSHIP & SERVICE
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: '#000000', mt: 0.3 }} />
                <Typography variant="body2" sx={{ color: '#52525b' }}>
                  <strong style={{ color: '#000000' }}>Saketh Automobiles NEXA</strong><br />
                  Tumkur Showroom & Sirra Road NEXA Service Centre,<br />
                  Karnataka, India
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <PhoneIcon sx={{ color: '#000000' }} />
                <Typography variant="body2" sx={{ color: '#52525b' }}>
                  <strong style={{ color: '#000000' }}>Service Booking & 24*7 Assistance:</strong><br />
                  Customer Support Available Round-The-Clock
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <AccessTimeIcon sx={{ color: '#000000' }} />
                <Typography variant="body2" sx={{ color: '#52525b' }}>
                  <strong style={{ color: '#000000' }}>Working Hours:</strong><br />
                  Mon - Sun: 09:00 AM - 08:00 PM
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <LanguageIcon sx={{ color: '#000000' }} />
                <MuiLink
                  href="https://www.nexaofsiraroad.com/accessories"
                  underline="hover"
                  target="_blank"
                  sx={{
                    color: '#000000',
                    fontWeight: 600,
                    transition: 'opacity 0.2s',
                    '&:hover': { opacity: 0.8 },
                  }}
                >
                  www.nexaofsiraroad.com
                </MuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: '#d4d4d8', my: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#71717a' }}>
            © {new Date().getFullYear()} Saketh Automobiles • NEXA Authorized Dealer. All rights reserved.
          </Typography>

          <Typography variant="caption" sx={{ color: '#71717a' }}>
            Designed for Automotive Luxury & Peak Performance
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
