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
        backgroundColor: '#06080b',
        color: '#94a3b8',
        pt: { xs: 8, md: 10 },
        pb: 4,
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={5} sx={{ mb: 6 }}>
          {/* Col 1: Brand & Slogan */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <Image
                src="/saketh_logo.png"
                alt="Saketh Automobiles Logo"
                width={140}
                height={42}
                style={{ objectFit: 'contain' }}
              />
              <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 800, letterSpacing: '0.08em' }}>
                SAKETH AUTOMOBILES
              </Typography>
            </Box>

            <Typography variant="subtitle2" sx={{ color: '#c5a059', fontWeight: 700, mb: 2, letterSpacing: '0.1em' }}>
              CREATE. INSPIRE.
            </Typography>

            <Typography variant="body2" sx={{ lineHeight: 1.7, mb: 3 }}>
              Saketh Automobiles is your premier authorized NEXA Dealership and Service Centre. Dedicated to providing world-class luxury car buying and automotive care experiences.
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: '#c5a059', backgroundColor: 'rgba(255,255,255,0.04)', '&:hover': { backgroundColor: 'rgba(197, 160, 89, 0.2)' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: '#c5a059', backgroundColor: 'rgba(255,255,255,0.04)', '&:hover': { backgroundColor: 'rgba(197, 160, 89, 0.2)' } }}>
                <InstagramIcon />
              </IconButton>
              <IconButton sx={{ color: '#c5a059', backgroundColor: 'rgba(255,255,255,0.04)', '&:hover': { backgroundColor: 'rgba(197, 160, 89, 0.2)' } }}>
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Col 2: The NEXA Range */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 700, mb: 2.5 }}>
              NEXA COLLECTION
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <MuiLink href="https://www.marutisurakshaa.com/nexa/grand%20vitara" underline="hover" color="inherit" target="_blank">
                Grand Vitara
              </MuiLink>
              <MuiLink href="https://www.marutisurakshaa.com/nexa/invicto" underline="hover" color="inherit" target="_blank">
                Invicto
              </MuiLink>
              <MuiLink href="https://www.marutisurakshaa.com/nexa/fronx" underline="hover" color="inherit" target="_blank">
                Fronx
              </MuiLink>
              <MuiLink href="https://www.marutisurakshaa.com/nexa/jimny" underline="hover" color="inherit" target="_blank">
                Jimny
              </MuiLink>
              <MuiLink href="https://www.marutisurakshaa.com/nexa/baleno" underline="hover" color="inherit" target="_blank">
                Baleno
              </MuiLink>
              <MuiLink href="https://www.marutisurakshaa.com/nexa/xl6" underline="hover" color="inherit" target="_blank">
                XL6
              </MuiLink>
              <MuiLink href="https://www.marutisurakshaa.com/nexa/ignis" underline="hover" color="inherit" target="_blank">
                Ignis
              </MuiLink>
              <MuiLink href="https://www.marutisurakshaa.com/nexa/ciaz" underline="hover" color="inherit" target="_blank">
                Ciaz
              </MuiLink>
            </Box>
          </Grid>

          {/* Col 3: Saketh Services & Accessories */}
          <Grid size={{ xs: 6, sm: 4, md: 2 }}>
            <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 700, mb: 2.5 }}>
              SERVICES & PARTS
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              <MuiLink href="#booking" underline="hover" color="inherit">
                Book A Service
              </MuiLink>
              <MuiLink href="#service" underline="hover" color="inherit">
                24*7 Roadside Support
              </MuiLink>
              <MuiLink href="#service" underline="hover" color="inherit">
                3D Wheel Alignment
              </MuiLink>
              <MuiLink href="#service" underline="hover" color="inherit">
                Express Car Wash
              </MuiLink>
              <MuiLink href="https://www.nexaofsiraroad.com/accessories" underline="hover" color="inherit" target="_blank">
                Exterior Accessories
              </MuiLink>
              <MuiLink href="https://www.nexaofsiraroad.com/accessories" underline="hover" color="inherit" target="_blank">
                Interior Accessories
              </MuiLink>
            </Box>
          </Grid>

          {/* Col 4: Dealership & Service Centre Info */}
          <Grid size={{ xs: 12, sm: 4, md: 4 }}>
            <Typography variant="subtitle1" sx={{ color: '#ffffff', fontWeight: 700, mb: 2.5 }}>
              SAKETH DEALERSHIP & SERVICE
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <LocationOnIcon sx={{ color: '#c5a059', mt: 0.3 }} />
                <Typography variant="body2">
                  <strong>Saketh Automobiles NEXA</strong><br />
                  Tumkur Showroom & Sirra Road NEXA Service Centre,<br />
                  Karnataka, India
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <PhoneIcon sx={{ color: '#00e5ff' }} />
                <Typography variant="body2">
                  <strong>Service Booking & 24*7 Assistance:</strong><br />
                  Customer Support Available Round-The-Clock
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <AccessTimeIcon sx={{ color: '#c5a059' }} />
                <Typography variant="body2">
                  <strong>Working Hours:</strong><br />
                  Mon - Sun: 09:00 AM - 08:00 PM
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <LanguageIcon sx={{ color: '#00e5ff' }} />
                <MuiLink href="https://www.nexaofsiraroad.com/accessories" color="#00e5ff" underline="hover" target="_blank">
                  www.nexaofsiraroad.com
                </MuiLink>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.08)', my: 4 }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
            © {new Date().getFullYear()} Saketh Automobiles • NEXA Authorized Dealer. All rights reserved.
          </Typography>

          <Typography variant="caption" sx={{ color: '#94a3b8' }}>
            Designed for Automotive Luxury & Peak Performance
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
