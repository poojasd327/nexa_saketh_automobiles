'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Chip,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export interface VehicleItem {
  id: string;
  name: string;
  categoryTag: string;
  type: 'Hybrid' | 'Luxury' | 'SUV' | 'Off-Roader' | 'Hatchback' | 'Sedan';
  description: string;
  image: string;
}

const VEHICLES: VehicleItem[] = [
  {
    id: 'grand-vitara',
    name: 'Grand Vitara',
    categoryTag: 'Intelligent Strong Hybrid',
    type: 'Hybrid',
    description:
      'A refined blend of design, technology and performance for the modern urbanite.',
    image: '/grand_vitara.webp',
  },
  {
    id: 'invicto',
    name: 'Invicto',
    categoryTag: 'Executive Luxury',
    type: 'Luxury',
    description:
      'Unmatched executive luxury, spacious lounge seating and dynamic intelligent hybrid performance.',
    image: '/invicto.webp',
  },
  {
    id: 'fronx',
    name: 'Fronx',
    categoryTag: 'Sporty SUV',
    type: 'SUV',
    description:
      'Shape new trends with dynamic coupe crossover styling and powerful 1.0L Turbo Boosterjet engine.',
    image: '/fronx.webp',
  },
  {
    id: 'jimny',
    name: 'Jimny',
    categoryTag: 'Iconic Off-Roader',
    type: 'Off-Roader',
    description:
      'Built for tough terrain with ALLGRIP PRO 4WD system, ladder frame chassis and legendary off-road legacy.',
    image: '/jimny.webp',
  },
  {
    id: 'baleno',
    name: 'Baleno',
    categoryTag: 'Premium Hatchback',
    type: 'Hatchback',
    description:
      'Tech-loaded luxury hatchback featuring Head-Up Display, 360 View Camera and Liquid Flow design aesthetic.',
    image: '/baleno.webp',
  },
  {
    id: 'xl6',
    name: 'XL6',
    categoryTag: 'Smart Hybrid',
    type: 'Luxury',
    description:
      'Indulgent 6-seater premium MPV with ventilated captain seats and Smart Hybrid technology.',
    image: '/XL6.webp',
  },
  {
    id: 'ignis',
    name: 'Ignis',
    categoryTag: 'The Tough Urban Compact',
    type: 'Hatchback',
    description:
      'High seating posture, bold SUV-like stance, aggressive front grille, and agile city driveability.',
    image: '/ignis.webp',
  },
  {
    id: 'ciaz',
    name: 'Ciaz',
    categoryTag: 'Smart Hybrid',
    type: 'Sedan',
    description:
      'Elegantly styled executive sedan with spacious luxury interiors and refined hybrid engine performance.',
    image: '/ciaz.webp',
  },
];

interface NexaCollectionProps {
  onSelectVehicleForTestDrive?: (vehicleName: string) => void;
}

export default function NexaCollection({ onSelectVehicleForTestDrive }: NexaCollectionProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeCar = VEHICLES[selectedIndex];

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % VEHICLES.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? VEHICLES.length - 1 : prev - 1));
  };

  return (
    <Box
      id="collection"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#ffffff',
        color: '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Chip
            label="THE NEXA COLLECTION"
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              color: '#000000',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              fontWeight: 700,
              letterSpacing: '0.12em',
              mb: 1.5,
              py: 0.5,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '2.2rem', sm: '2.75rem', md: '3.25rem' },
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#000000',
              mb: 2,
            }}
          >
            Crafted For Excellence
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#52525b',
              maxWidth: '680px',
              mx: 'auto',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              lineHeight: 1.6,
            }}
          >
            Discover Saketh NEXA&apos;s full range of premium vehicles — engineered with luxury
            aesthetics, hybrid innovation, and unmatched comfort.
          </Typography>
        </Box>

        {/* Master Studio Showroom Arena */}
        <Box
          sx={{
            position: 'relative',
            mb: 4,
          }}
        >
          {/* Navigation Arrows */}
          <IconButton
            onClick={handlePrev}
            aria-label="Previous vehicle"
            sx={{
              position: 'absolute',
              left: { xs: 12, md: 24 },
              top: { xs: '38%', md: '50%' },
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              color: '#000000',
              width: { xs: 40, md: 52 },
              height: { xs: 40, md: 52 },
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.25s ease',
              '&:hover': {
                backgroundColor: '#000000',
                color: '#ffffff',
                borderColor: '#000000',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)',
                transform: 'translateY(-50%) scale(1.06)',
              },
            }}
          >
            <ChevronLeftIcon fontSize="medium" />
          </IconButton>

          <IconButton
            onClick={handleNext}
            aria-label="Next vehicle"
            sx={{
              position: 'absolute',
              right: { xs: 12, md: 24 },
              top: { xs: '38%', md: '50%' },
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: '#ffffff',
              border: '1px solid rgba(0, 0, 0, 0.12)',
              color: '#000000',
              width: { xs: 40, md: 52 },
              height: { xs: 40, md: 52 },
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
              transition: 'all 0.25s ease',
              '&:hover': {
                backgroundColor: '#000000',
                color: '#ffffff',
                borderColor: '#000000',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.25)',
                transform: 'translateY(-50%) scale(1.06)',
              },
            }}
          >
            <ChevronRightIcon fontSize="medium" />
          </IconButton>

          {/* Main Stage Grid: Details (Left) + Car Showcase (Right) */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1.15fr' },
              minHeight: { xs: 'auto', md: '480px' },
              position: 'relative',
              p: { xs: 2.5, sm: 3.5, md: 4 },
              px: { xs: 2.5, sm: 4, md: 7 },
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 3, md: 2 },
            }}
          >
            {/* Left Column: Vehicle Content */}
            <Box
              key={`info-${activeCar.id}`}
              sx={{
                zIndex: 2,
                justifySelf: { xs: 'center', md: 'end' },
                maxWidth: { xs: '100%', md: '480px' },
                width: '100%',
                animation: 'fadeInText 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                '@keyframes fadeInText': {
                  from: { opacity: 0, transform: 'translateY(16px)' },
                  to: { opacity: 1, transform: 'translateY(0)' },
                },
              }}
            >
              {/* Model Counter & Category */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#000000',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    fontSize: '0.85rem',
                    fontVariantNumeric: 'tabular-nums',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '4px',
                    backgroundColor: '#ffffff',
                    border: '1px solid rgba(0, 0, 0, 0.12)',
                    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                  }}
                >
                  0{selectedIndex + 1} / 0{VEHICLES.length}
                </Typography>

                <Typography
                  variant="caption"
                  sx={{
                    color: '#71717a',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                  }}
                >
                  {activeCar.categoryTag}
                </Typography>
              </Box>

              {/* Vehicle Name */}
              <Typography
                variant="h2"
                sx={{
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: { xs: '2.5rem', sm: '3.2rem', md: '3.8rem', lg: '4.2rem' },
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  mb: 2,
                }}
              >
                {activeCar.name}
              </Typography>

              {/* Vehicle Description */}
              <Typography
                variant="body1"
                sx={{
                  color: '#52525b',
                  lineHeight: 1.75,
                  fontSize: { xs: '0.98rem', md: '1.05rem' },
                  maxWidth: '460px',
                  mb: 3.5,
                }}
              >
                {activeCar.description}
              </Typography>

              {/* Action Button */}
              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                onClick={() => onSelectVehicleForTestDrive?.(activeCar.name)}
                sx={{
                  px: 4,
                  py: 1.4,
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: '6px',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  border: '1px solid #000000',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    backgroundColor: '#27272a',
                    borderColor: '#27272a',
                    boxShadow: '0 6px 22px rgba(0, 0, 0, 0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Book Test Drive
              </Button>
            </Box>

            {/* Right Column: Studio Showcase Stage */}
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                justifySelf: { xs: 'center', md: 'start' },
                height: { xs: '260px', sm: '350px', md: '440px' },
                width: '100%',
                maxWidth: { xs: '100%', md: '640px' },
              }}
            >
              {/* Studio Turntable Radial Floor Shadow */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: { xs: '5%', md: '8%' },
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: { xs: '90%', md: '85%' },
                  height: { xs: '80px', md: '120px' },
                  borderRadius: '50%',
                  background:
                    'radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.02) 60%, transparent 80%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Vehicle Presentation */}
              <Box
                key={`car-${activeCar.id}`}
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: 'carEntrance 0.55s cubic-bezier(0.16, 1, 0.3, 1)',
                  filter: 'drop-shadow(0 16px 20px rgba(0, 0, 0, 0.18))',
                  '@keyframes carEntrance': {
                    from: {
                      opacity: 0,
                      transform: 'scale(0.92) translateX(30px)',
                    },
                    to: {
                      opacity: 1,
                      transform: 'scale(1) translateX(0)',
                    },
                  },
                }}
              >
                <Image
                  src={activeCar.image}
                  alt={`NEXA ${activeCar.name}`}
                  fill
                  sizes="(max-width: 960px) 100vw, 60vw"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Interactive Fleet Selector Dock */}
        <Box
          sx={{
            display: 'flex',
            gap: 1.5,
            overflowX: 'auto',
            py: 1.5,
            px: 1,
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {VEHICLES.map((car, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <Box
                key={car.id}
                onClick={() => setSelectedIndex(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${car.name}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedIndex(idx);
                  }
                }}
                sx={{
                  flex: { xs: '0 0 135px', sm: '0 0 150px', md: '1 1 0' },
                  p: { xs: 1.25, md: 1.5 },
                  borderRadius: '12px',
                  backgroundColor: isSelected ? '#000000' : '#ffffff',
                  border: isSelected
                    ? '1px solid #000000'
                    : '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: isSelected
                    ? '0 8px 24px rgba(0, 0, 0, 0.22)'
                    : '0 2px 8px rgba(0, 0, 0, 0.04)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  transform: isSelected ? 'translateY(-3px)' : 'none',
                  '&:hover': {
                    backgroundColor: isSelected ? '#000000' : '#f4f4f5',
                    borderColor: isSelected ? '#000000' : 'rgba(0, 0, 0, 0.25)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {/* Car Thumbnail Silhouette */}
                <Box
                  sx={{
                    height: { xs: 44, md: 52 },
                    position: 'relative',
                    mb: 1,
                  }}
                >
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="150px"
                    style={{
                      objectFit: 'contain',
                      filter: isSelected
                        ? 'brightness(1.05) drop-shadow(0 4px 10px rgba(255, 255, 255, 0.15))'
                        : 'opacity(0.85)',
                      transition: 'all 0.25s ease',
                    }}
                  />
                </Box>

                {/* Car Name */}
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: isSelected ? '#ffffff' : '#52525b',
                    fontWeight: isSelected ? 800 : 600,
                    fontSize: { xs: '0.8rem', md: '0.85rem' },
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {car.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
