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
  IconButton,
  Tooltip,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import TuneIcon from '@mui/icons-material/Tune';

export interface VehicleItem {
  id: string;
  name: string;
  categoryTag: string;
  type: 'Hybrid' | 'Luxury' | 'SUV' | 'Off-Roader' | 'Hatchback' | 'Sedan';
  description: string;
  url: string;
  specs: {
    engine: string;
    transmission: string;
    mileage: string;
    seating: string;
  };
  gradient: string;
  badge: string;
}

const VEHICLES: VehicleItem[] = [
  {
    id: 'grand-vitara',
    name: 'Grand Vitara',
    categoryTag: 'Intelligent Strong Hybrid',
    type: 'Hybrid',
    description: 'A refined blend of design, technology and performance for the modern urbanite.',
    url: 'https://www.marutisurakshaa.com/nexa/grand%20vitara',
    specs: {
      engine: '1.5L Intelligent Strong Hybrid / K15C',
      transmission: 'e-CVT / 5MT / 6AT ALLGRIP',
      mileage: '27.97 km/l*',
      seating: '5 Seater',
    },
    gradient: 'linear-gradient(135deg, #0d2038 0%, #173254 100%)',
    badge: 'FLAGSHIP SUV',
  },
  {
    id: 'invicto',
    name: 'Invicto',
    categoryTag: 'Executive Luxury',
    type: 'Luxury',
    description: 'Unmatched executive luxury, spacious lounge seating and dynamic intelligent hybrid performance.',
    url: 'https://www.marutisurakshaa.com/nexa/invicto',
    specs: {
      engine: '2.0L Intelligent Strong Hybrid',
      transmission: 'e-CVT Automatic',
      mileage: '23.24 km/l*',
      seating: '7 - 8 Seater',
    },
    gradient: 'linear-gradient(135deg, #1f1a28 0%, #352a45 100%)',
    badge: 'EXECUTIVE LOUNGE',
  },
  {
    id: 'fronx',
    name: 'Fronx',
    categoryTag: 'Sporty SUV',
    type: 'SUV',
    description: 'Shape new trends with dynamic coupe crossover styling and powerful 1.0L Turbo Boosterjet engine.',
    url: 'https://www.marutisurakshaa.com/nexa/fronx',
    specs: {
      engine: '1.0L Turbo Boosterjet / 1.2L K-Series',
      transmission: '5MT / 6AT / 5AMT',
      mileage: '22.89 km/l*',
      seating: '5 Seater',
    },
    gradient: 'linear-gradient(135deg, #331518 0%, #4a2126 100%)',
    badge: 'COUPE CROSSOVER',
  },
  {
    id: 'jimny',
    name: 'Jimny',
    categoryTag: 'Iconic Off-Roader',
    type: 'Off-Roader',
    description: 'Built for tough terrain with ALLGRIP PRO 4WD system, ladder frame chassis and legendary off-road legacy.',
    url: 'https://www.marutisurakshaa.com/nexa/jimny',
    specs: {
      engine: '1.5L K15B Petrol with ALLGRIP PRO',
      transmission: '5-Speed MT / 4-Speed AT',
      mileage: '16.94 km/l*',
      seating: '4 Seater 4WD',
    },
    gradient: 'linear-gradient(135deg, #262412 0%, #3e3a1d 100%)',
    badge: 'ALLGRIP 4x4',
  },
  {
    id: 'baleno',
    name: 'Baleno',
    categoryTag: 'Premium Hatchback',
    type: 'Hatchback',
    description: 'Tech-loaded luxury hatchback featuring Head-Up Display, 360 View Camera and Liquid Flow design aesthetic.',
    url: 'https://www.marutisurakshaa.com/nexa/baleno',
    specs: {
      engine: '1.2L Dual Jet, Dual VVT Engine',
      transmission: '5-Speed MT / AGS',
      mileage: '22.35 km/l*',
      seating: '5 Seater',
    },
    gradient: 'linear-gradient(135deg, #0e2733 0%, #163d4f 100%)',
    badge: 'BEST SELLER',
  },
  {
    id: 'xl6',
    name: 'XL6',
    categoryTag: 'Smart Hybrid',
    type: 'Luxury',
    description: 'Indulgent 6-seater premium MPV with ventilated captain seats and Smart Hybrid technology.',
    url: 'https://www.marutisurakshaa.com/nexa/xl6',
    specs: {
      engine: '1.5L K15C Smart Hybrid',
      transmission: '5MT / 6AT with Paddle Shifters',
      mileage: '20.97 km/l*',
      seating: '6 Seater Captain Seats',
    },
    gradient: 'linear-gradient(135deg, #1b2628 0%, #29393c 100%)',
    badge: 'LUXURY 6-SEATER',
  },
  {
    id: 'ignis',
    name: 'Ignis',
    categoryTag: 'The Tough Urban Compact',
    type: 'Hatchback',
    description: 'High seating posture, bold SUV-like stance, aggressive front grille, and agile city driveability.',
    url: 'https://www.marutisurakshaa.com/nexa/ignis',
    specs: {
      engine: '1.2L VVT Petrol Engine',
      transmission: '5-Speed Manual / Auto Gear Shift',
      mileage: '20.89 km/l*',
      seating: '5 Seater',
    },
    gradient: 'linear-gradient(135deg, #2b1f14 0%, #423020 100%)',
    badge: 'URBAN COMPACT',
  },
  {
    id: 'ciaz',
    name: 'Ciaz',
    categoryTag: 'Smart Hybrid',
    type: 'Sedan',
    description: 'Elegantly styled executive sedan with spacious luxury interiors and refined hybrid engine performance.',
    url: 'https://www.marutisurakshaa.com/nexa/ciaz',
    specs: {
      engine: '1.5L K15 Smart Hybrid Petrol',
      transmission: '5-Speed MT / 4-Speed AT',
      mileage: '20.65 km/l*',
      seating: '5 Seater Luxury Sedan',
    },
    gradient: 'linear-gradient(135deg, #181d28 0%, #252e3f 100%)',
    badge: 'EXECUTIVE SEDAN',
  },
];

interface NexaCollectionProps {
  onSelectVehicleForTestDrive: (vehicleName: string) => void;
}

export default function NexaCollection({ onSelectVehicleForTestDrive }: NexaCollectionProps) {
  const [filterTab, setFilterTab] = useState<string>('All');

  const categories = ['All', 'Hybrid', 'Luxury', 'SUV', 'Off-Roader', 'Hatchback', 'Sedan'];

  const filteredVehicles = filterTab === 'All'
    ? VEHICLES
    : VEHICLES.filter((v) => v.type === filterTab || v.categoryTag.toLowerCase().includes(filterTab.toLowerCase()));

  return (
    <Box id="collection" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#090b10' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="THE NEXA COLLECTION"
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
            Crafted For Excellence
          </Typography>
          <Typography variant="body1" sx={{ color: '#94a3b8', maxWidth: '650px', mx: 'auto' }}>
            Discover Saketh NEXA&apos;s full range of premium vehicles — engineered with luxury aesthetics, hybrid innovation, and unmatched comfort.
          </Typography>

          {/* Filter Tabs */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Tabs
              value={filterTab}
              onChange={(_, newValue) => setFilterTab(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTabs-indicator': {
                  backgroundColor: '#c5a059',
                  height: 3,
                  borderRadius: '3px',
                },
                '& .MuiTab-root': {
                  color: '#94a3b8',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  px: 3,
                  '&.Mui-selected': {
                    color: '#c5a059',
                  },
                },
              }}
            >
              {categories.map((cat) => (
                <Tab key={cat} label={cat} value={cat} />
              ))}
            </Tabs>
          </Box>
        </Box>

        {/* Vehicles Grid */}
        <Grid container spacing={4}>
          {filteredVehicles.map((car) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={car.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(18, 22, 32, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: 'rgba(197, 160, 89, 0.4)',
                    boxShadow: '0 16px 35px rgba(0, 0, 0, 0.6), 0 0 20px rgba(197, 160, 89, 0.15)',
                  },
                }}
              >
                {/* Visual Card Banner Header */}
                <Box
                  sx={{
                    height: 180,
                    background: car.gradient,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: 2,
                  }}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Chip
                      label={car.badge}
                      size="small"
                      sx={{
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(4px)',
                        color: '#c5a059',
                        border: '1px solid rgba(197, 160, 89, 0.3)',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                      }}
                    />
                    <Tooltip title="View Official Maruti Nexa Details">
                      <IconButton
                        size="small"
                        component="a"
                        href={car.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          color: '#ffffff',
                          backgroundColor: 'rgba(0,0,0,0.4)',
                          '&:hover': { backgroundColor: 'rgba(197, 160, 89, 0.4)' },
                        }}
                      >
                        <OpenInNewIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </Box>

                  {/* Stylized Vehicle Icon Placeholder */}
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexGrow: 1,
                      my: 1,
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: '3.5rem',
                        filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.1)' },
                      }}
                    >
                      🏎️
                    </Box>
                  </Box>

                  <Typography
                    variant="caption"
                    sx={{
                      color: '#00e5ff',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      px: 1,
                      py: 0.25,
                      borderRadius: '4px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {car.categoryTag}
                  </Typography>
                </Box>

                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 800, mb: 1 }}>
                    {car.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#94a3b8', mb: 2.5, minHeight: 40, lineHeight: 1.5 }}>
                    {car.description}
                  </Typography>

                  <Box
                    sx={{
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      borderRadius: '6px',
                      p: 1.5,
                      mb: 3,
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75 }}>
                      <ElectricCarIcon sx={{ fontSize: '1rem', color: '#c5a059' }} />
                      <Typography variant="caption" sx={{ color: '#f0f4f8', fontWeight: 600 }}>
                        {car.specs.engine}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75 }}>
                      <TuneIcon sx={{ fontSize: '1rem', color: '#00e5ff' }} />
                      <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                        {car.specs.transmission}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <LocalGasStationIcon sx={{ fontSize: '1rem', color: '#4caf50' }} />
                      <Typography variant="caption" sx={{ color: '#94a3b8' }}>
                        Efficiency: {car.specs.mileage}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ mt: 'auto', display: 'flex', gap: 1 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<DirectionsCarIcon />}
                      onClick={() => onSelectVehicleForTestDrive(car.name)}
                      sx={{ py: 1, fontSize: '0.85rem' }}
                    >
                      Book Test Drive
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
