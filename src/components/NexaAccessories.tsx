'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  Tabs,
  Tab,
  Button,
  Chip,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export interface AccessoryItem {
  id: string;
  name: string;
  image: string;
  category: 'Exterior' | 'Interior';
}

const TABS = ['Exterior', 'Interior'] as const;

type TabType = (typeof TABS)[number];

const EXTERIOR_ACCESSORIES: AccessoryItem[] = [
  { id: 'ext-1', name: 'Alloys Wheels', image: '/exterior/alloys_wheels.avif', category: 'Exterior' },
  { id: 'ext-2', name: 'Styling Body Kit', image: '/exterior/styling body kit.avif', category: 'Exterior' },
  { id: 'ext-3', name: 'Spoilers', image: '/exterior/spoilers.avif', category: 'Exterior' },
  { id: 'ext-4', name: 'Door Visor Set', image: '/exterior/door_visor_set.avif', category: 'Exterior' },
  { id: 'ext-5', name: 'Side Step', image: '/exterior/side step.avif', category: 'Exterior' },
  { id: 'ext-6', name: 'Roof Luggage Carrier', image: '/exterior/roof luggage carrier.avif', category: 'Exterior' },
  { id: 'ext-7', name: 'Body Graphics', image: '/exterior/body_graphics.avif', category: 'Exterior' },
  { id: 'ext-8', name: 'Bumper Protector', image: '/exterior/bumper_protector.avif', category: 'Exterior' },
  { id: 'ext-9', name: 'Door Edge Guard', image: '/exterior/door edge guard.avif', category: 'Exterior' },
  { id: 'ext-10', name: 'Mouldings', image: '/exterior/mouldings.avif', category: 'Exterior' },
  { id: 'ext-11', name: 'Mud Flaps', image: '/exterior/mud_flaps.avif', category: 'Exterior' },
  { id: 'ext-12', name: 'Trunk Sill Guard', image: '/exterior/trunk sill guard.avif', category: 'Exterior' },
  { id: 'ext-13', name: 'Wheel Arc Kit', image: '/exterior/wheel_arc_kit.avif', category: 'Exterior' },
  { id: 'ext-14', name: 'Wheel Covers', image: '/exterior/wheel_covers.avif', category: 'Exterior' },
  { id: 'ext-15', name: 'Spare Tyre Cover', image: '/exterior/spare tier cover.avif', category: 'Exterior' },
  { id: 'ext-16', name: 'Styling Body Parts', image: '/exterior/styling body parts.avif', category: 'Exterior' },
  { id: 'ext-17', name: 'Bicycle Carrier', image: '/exterior/bicycle carrier.avif', category: 'Exterior' },
];

const INTERIOR_ACCESSORIES: AccessoryItem[] = [
  { id: 'int-1', name: 'God Idols & Frames', image: '/interior/god idols and frames.avif', category: 'Interior' },
  { id: 'int-2', name: 'Seat Covers', image: '/interior/seat covers.avif', category: 'Interior' },
  { id: 'int-3', name: 'Mats', image: '/interior/mats.avif', category: 'Interior' },
  { id: 'int-4', name: 'Arm Rest', image: '/interior/arm rest.avif', category: 'Interior' },
  { id: 'int-5', name: 'Door Sill Guard', image: '/interior/door sill guard.avif', category: 'Interior' },
  { id: 'int-6', name: 'Dicky Mat', image: '/interior/dicky mat.avif', category: 'Interior' },
  { id: 'int-7', name: 'Seat Cover SAB', image: '/interior/seat cover SAB.avif', category: 'Interior' },
  { id: 'int-8', name: 'Steering Wheel Covers', image: '/interior/steering wheel covers.avif', category: 'Interior' },
  { id: 'int-9', name: 'Rear Parcel Tray', image: '/interior/rear parcel tray.avif', category: 'Interior' },
  { id: 'int-10', name: 'Styling Kit', image: '/interior/styling kit.avif', category: 'Interior' },
  { id: 'int-11', name: 'Sun Films', image: '/interior/sun films.avif', category: 'Interior' },
  { id: 'int-12', name: 'CNG Covers', image: '/interior/CNG covers.avif', category: 'Interior' },
];

const INITIAL_ROWS = 3;
const ITEMS_PER_ROW = 3;
const INITIAL_ITEMS_COUNT = INITIAL_ROWS * ITEMS_PER_ROW; // 9 items = 3 rows

export default function NexaAccessories() {
  const [activeTab, setActiveTab] = useState<TabType>('Exterior');
  const [showAll, setShowAll] = useState(false);

  const getDisplayedItems = (): AccessoryItem[] => {
    return activeTab === 'Exterior' ? EXTERIOR_ACCESSORIES : INTERIOR_ACCESSORIES;
  };

  const displayedItems = getDisplayedItems();
  const visibleItems = showAll ? displayedItems : displayedItems.slice(0, INITIAL_ITEMS_COUNT);
  const hasMore = displayedItems.length > INITIAL_ITEMS_COUNT;

  const handleTabChange = (_: React.SyntheticEvent, newTab: TabType) => {
    setActiveTab(newTab);
    setShowAll(false);
  };

  return (
    <Box id="accessories" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#000000' }}>
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 5 }}>
          <Chip
            label="GENUINE ENHANCEMENTS"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
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
              color: '#ffffff',
              mb: 1.5,
            }}
          >
            Nexa Accessories
          </Typography>
          <Typography variant="body1" sx={{ color: '#a1a1aa', maxWidth: '650px', mx: 'auto', fontSize: '1rem', lineHeight: 1.6 }}>
            Curated enhancements tailored for the Nexa Lifestyle. Transform your vehicle with precision-engineered styling and comfort accessories.
          </Typography>
        </Box>

        {/* Top Category Tabs Bar - Styled exactly like the official portal */}
        <Box sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.18)', mb: 2.5 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: 48,
              '& .MuiTabs-indicator': {
                backgroundColor: '#ffffff',
                height: 2,
              },
              '& .MuiTab-root': {
                color: '#a0aab2',
                fontWeight: 600,
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                textTransform: 'none',
                minWidth: 'auto',
                px: { xs: 2, md: 3 },
                py: 1.5,
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#ffffff',
                },
                '&.Mui-selected': {
                  color: '#ffffff',
                  fontWeight: 700,
                },
              },
            }}
          >
            {TABS.map((tab) => (
              <Tab key={tab} label={tab} value={tab} />
            ))}
          </Tabs>
        </Box>

        {/* Showing Items Count Line */}
        <Typography
          sx={{
            color: '#9e9e9e',
            fontStyle: 'italic',
            fontSize: '0.95rem',
            mb: 3,
            px: 0.5,
          }}
        >
          Showing {visibleItems.length} of {displayedItems.length} items
        </Typography>

        {/* Accessories Cards Grid (3 Columns on Desktop) */}
        <Grid container spacing={3}>
          {visibleItems.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <Card
                sx={{
                  borderRadius: '4px',
                  overflow: 'hidden',
                  backgroundColor: '#263137',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
                  transition: 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 14px 30px rgba(0, 0, 0, 0.85)',
                    borderColor: 'rgba(255, 255, 255, 0.25)',
                    '& .accessory-image': {
                      transform: 'scale(1.05)',
                    },
                  },
                }}
              >
                {/* Image Container */}
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: 200, sm: 220, md: 240 },
                    backgroundColor: '#1b2327',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    className="accessory-image"
                    style={{
                      objectFit: 'cover',
                      transition: 'transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                    }}
                  />
                </Box>

                {/* Dark Slate Title Bar Below Image */}
                <Box
                  sx={{
                    backgroundColor: '#2a353d',
                    px: 2.5,
                    py: 2,
                    display: 'flex',
                    alignItems: 'center',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: { xs: '1.05rem', md: '1.2rem' },
                      letterSpacing: '-0.01em',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View More / View Less Button */}
        {hasMore && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
            <Button
              variant="outlined"
              onClick={() => setShowAll((prev) => !prev)}
              endIcon={showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              sx={{
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.35)',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                px: 5,
                py: 1.4,
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                borderRadius: '4px',
                textTransform: 'uppercase',
                transition: 'all 0.25s ease',
                '&:hover': {
                  borderColor: '#ffffff',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(255, 255, 255, 0.12)',
                },
              }}
            >
              {showAll ? 'View Less' : 'View More'}
            </Button>
          </Box>
        )}

        {/* Catalog Banner Link */}
        <Box
          sx={{
            mt: 6,
            p: 4,
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(18, 18, 18, 0.95) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 800, mb: 0.5 }}>
              Looking for full Nexa accessory brochure & pricing?
            </Typography>
            <Typography variant="body2" sx={{ color: '#a1a1aa' }}>
              Explore the official Saketh NEXA Sirra Road accessories portal for model-specific fitment items and pricing.
            </Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            endIcon={<OpenInNewIcon />}
            href="https://www.nexaofsiraroad.com/accessories"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              whiteSpace: 'nowrap',
              py: 1.4,
              px: 3,
              fontWeight: 700,
            }}
          >
            Visit Accessories Portal
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
