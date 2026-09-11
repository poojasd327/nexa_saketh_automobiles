'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';

interface AccessoryItem {
  id: string;
  name: string;
  category: 'Exteriors' | 'Interiors';
  description: string;
  icon: string;
  badge?: string;
}

const ACCESSORIES: AccessoryItem[] = [
  // Exterior Items
  { id: 'ext-1', name: 'Spoilers', category: 'Exteriors', description: 'Aerodynamic roof and rear spoiler enhancements for a sporty stance.', icon: '🚗', badge: 'Popular' },
  { id: 'ext-2', name: 'Wheel Arc Kit', category: 'Exteriors', description: 'Protective rugged wheel arch cladding kit for all-road driving.', icon: '🛞' },
  { id: 'ext-3', name: 'Styling Kit', category: 'Exteriors', description: 'Comprehensive body accent kit including chrome & dark elements.', icon: '✨', badge: 'Nexa Choice' },
  { id: 'ext-4', name: 'Wheel Covers', category: 'Exteriors', description: 'Dual-tone precision-fit wheel covers with Nexa emblem.', icon: '⚙️' },
  { id: 'ext-5', name: 'Trunk Sill Guard', category: 'Exteriors', description: 'Stainless steel rear bumper and trunk sill protection plate.', icon: '🛡️' },
  { id: 'ext-6', name: 'Mud Flaps', category: 'Exteriors', description: 'Durable contoured mudguards tailored for all weather conditions.', icon: '🌧️' },
  { id: 'ext-7', name: 'Styling Body Parts', category: 'Exteriors', description: 'Front & rear skid plates, side skirts and accent trim.', icon: '🏎️' },
  { id: 'ext-8', name: 'CNG Covers', category: 'Exteriors', description: 'Custom protective enclosure covers for CNG cylinder integration.', icon: '🔋' },
  { id: 'ext-9', name: 'Alloy Wheels', category: 'Exteriors', description: 'Precision diamond-cut alloy wheels for enhanced vehicle presence.', icon: '🔘', badge: 'Premium' },
  { id: 'ext-10', name: 'Spare Tyre Cover', category: 'Exteriors', description: 'Heavy-duty molded spare tire cover with Nexa insignia.', icon: '🛞' },
  { id: 'ext-11', name: 'Door Sill Guard', category: 'Exteriors', description: 'Illuminated stainless steel scuff plates for door entryways.', icon: '💡' },
  { id: 'ext-12', name: 'Bumper Protector', category: 'Exteriors', description: 'Corner bumper guards preventing scratches during tight parking.', icon: '🛡️' },
  { id: 'ext-13', name: 'Side Step', category: 'Exteriors', description: 'Heavy-duty aluminum side step board for easy cabin entry.', icon: '🪜' },
  { id: 'ext-14', name: 'Door Visor set', category: 'Exteriors', description: 'Smoke-tinted door rain visors for fresh air ventilation.', icon: '🌬️' },
  { id: 'ext-15', name: 'Door Edge Guard', category: 'Exteriors', description: 'Clear protective strips safeguarding door edges from dings.', icon: '🔒' },
  { id: 'ext-16', name: 'Roof Luggage Carrier', category: 'Exteriors', description: 'Heavy-capacity roof rack carrier for adventure long trips.', icon: '🧳', badge: 'Adventure' },
  { id: 'ext-17', name: 'Sun Films', category: 'Exteriors', description: 'Heat-rejection solar control sun films for enhanced cabin cooling.', icon: '☀️' },
  { id: 'ext-18', name: 'Mouldings', category: 'Exteriors', description: 'Chrome side body mouldings emphasizing body character lines.', icon: '🪄' },
  { id: 'ext-19', name: 'Styling Body Kit', category: 'Exteriors', description: 'Full aerodynamic exterior body skirt kit for aggressive road look.', icon: '⚡' },

  // Interior Items
  { id: 'int-1', name: 'Seat Covers', category: 'Interiors', description: 'Custom handcrafted ultra-leatherette seat covers in rich dark shades.', icon: '🦺', badge: 'Luxury' },
  { id: 'int-2', name: 'Steering Wheel Covers', category: 'Interiors', description: 'Perforated leather stitch-on steering cover with comfort grip.', icon: '☸️' },
  { id: 'int-3', name: 'Arm Rest', category: 'Interiors', description: 'Sliding central armrest with storage console and USB charging port.', icon: '🛋️' },
  { id: 'int-4', name: 'Dicky Mat', category: 'Interiors', description: 'All-weather 3D boot liner mat protecting trunk carpet from spills.', icon: '📦' },
  { id: 'int-5', name: 'Rear Parcel Tray', category: 'Interiors', description: 'Sturdy molded parcel shelf for luggage concealment and acoustic seal.', icon: '📐' },
  { id: 'int-6', name: 'Body Graphics', category: 'Interiors', description: 'Curated vinyl graphics and accent stripes for unique personalization.', icon: '🎨' },
  { id: 'int-7', name: 'Seat Cover SAB', category: 'Interiors', description: 'Side-airbag compatible premium leatherette seat covers for maximum safety.', icon: '🛡️', badge: 'Airbag Safe' },
  { id: 'int-8', name: 'Mats', category: 'Interiors', description: '7D deep-dish all-weather floor mats with anti-skid rubber backing.', icon: '🦶', badge: 'Must Have' },
];

export default function NexaAccessories() {
  const [activeTab, setActiveTab] = useState<'All' | 'Exteriors' | 'Interiors'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAccessories = ACCESSORIES.filter((item) => {
    const matchesTab = activeTab === 'All' || item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <Box id="accessories" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#090b10' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="GENUINE ENHANCEMENTS"
            sx={{
              backgroundColor: 'rgba(197, 160, 89, 0.15)',
              color: '#c5a059',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              mb: 1.5,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 800,
              color: '#ffffff',
              mb: 2,
            }}
          >
            Nexa Accessories
          </Typography>

          <Typography variant="h6" sx={{ color: '#c5a059', fontWeight: 600, mb: 1, fontSize: '1.1rem' }}>
            Curated enhancements tailored for the Nexa Lifestyle
          </Typography>

          <Typography variant="body2" sx={{ color: '#94a3b8', maxWidth: '600px', mx: 'auto', mb: 4 }}>
            Transform your vehicle with precision-engineered exterior styling and luxurious interior comfort options from Saketh Nexa.
          </Typography>

          {/* Search & Category Filter */}
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', alignItems: 'center', gap: 3, mb: 4 }}>
            <Tabs
              value={activeTab}
              onChange={(_, val) => setActiveTab(val)}
              sx={{
                '& .MuiTabs-indicator': { backgroundColor: '#00e5ff', height: 3 },
                '& .MuiTab-root': {
                  color: '#94a3b8',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: 3,
                  '&.Mui-selected': { color: '#00e5ff' },
                },
              }}
            >
              <Tab label="All Accessories" value="All" icon={<DirectionsCarIcon />} iconPosition="start" />
              <Tab label="Exteriors" value="Exteriors" icon={<DirectionsCarIcon />} iconPosition="start" />
              <Tab label="Interiors" value="Interiors" icon={<AirlineSeatReclineExtraIcon />} iconPosition="start" />
            </Tabs>

            <TextField
              size="small"
              placeholder="Search accessories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: '#c5a059' }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                width: { xs: '100%', sm: 260 },
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(18, 22, 32, 0.8)',
                  borderRadius: '4px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#ffffff',
                },
              }}
            />
          </Box>
        </Box>

        {/* Accessories Grid */}
        <Grid container spacing={3}>
          {filteredAccessories.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(18, 22, 32, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: item.category === 'Exteriors' ? 'rgba(0, 229, 255, 0.4)' : 'rgba(197, 160, 89, 0.4)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
                  },
                }}
              >
                <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '8px',
                        backgroundColor: item.category === 'Exteriors' ? 'rgba(0, 229, 255, 0.1)' : 'rgba(197, 160, 89, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem',
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {item.badge && (
                        <Chip
                          label={item.badge}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(197, 160, 89, 0.2)',
                            color: '#c5a059',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                          }}
                        />
                      )}
                      <Chip
                        label={item.category}
                        size="small"
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          color: '#94a3b8',
                          fontSize: '0.65rem',
                        }}
                      />
                    </Box>
                  </Box>

                  <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
                    {item.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.5, mb: 2, flexGrow: 1 }}>
                    {item.description}
                  </Typography>

                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    component="a"
                    href="https://www.nexaofsiraroad.com/accessories"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNewIcon fontSize="small" />}
                    fullWidth
                    sx={{
                      fontSize: '0.75rem',
                      borderColor: 'rgba(255, 255, 255, 0.15)',
                      color: '#f0f4f8',
                      '&:hover': {
                        borderColor: '#c5a059',
                        color: '#c5a059',
                      },
                    }}
                  >
                    View Accessory Catalog
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Catalog Banner Link */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(197, 160, 89, 0.15) 0%, rgba(18, 22, 32, 0.9) 100%)',
            border: '1px solid rgba(197, 160, 89, 0.3)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 700 }}>
              Looking for full Nexa accessory brochure & pricing?
            </Typography>
            <Typography variant="body2" sx={{ color: '#94a3b8' }}>
              Explore the official Saketh NEXA Sirra Road accessories portal for model-specific fitment items.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            endIcon={<OpenInNewIcon />}
            href="https://www.nexaofsiraroad.com/accessories"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ whitespace: 'nowrap' }}
          >
            Visit Accessories Portal
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
