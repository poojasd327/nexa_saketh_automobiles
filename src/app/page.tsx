'use client';

import React, { useState } from 'react';
import { Box, Dialog, DialogTitle, DialogContent, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NexaHeader from '@/components/NexaHeader';
import NexaHero from '@/components/NexaHero';
import NexaCollection from '@/components/NexaCollection';
import NexaService from '@/components/NexaService';
import ServiceBookingForm from '@/components/ServiceBookingForm';
import NexaAccessories from '@/components/NexaAccessories';
import NexaReviews from '@/components/NexaReviews';
import NexaFooter from '@/components/NexaFooter';
import TestDriveModal from '@/components/TestDriveModal';

export default function Home() {
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [testDriveModalOpen, setTestDriveModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState('Grand Vitara');

  const handleOpenServiceModal = () => {
    setServiceModalOpen(true);
  };

  const handleCloseServiceModal = () => {
    setServiceModalOpen(false);
  };

  const handleOpenTestDriveModal = (vehicleName?: string) => {
    if (vehicleName) {
      setSelectedVehicle(vehicleName);
    }
    setTestDriveModalOpen(true);
  };

  const handleCloseTestDriveModal = () => {
    setTestDriveModalOpen(false);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#090b10', color: '#f0f4f8' }}>
      {/* Navigation Header */}
      <NexaHeader
        onBookServiceClick={handleOpenServiceModal}
        onTestDriveClick={() => handleOpenTestDriveModal()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <NexaHero
          onBookServiceClick={handleOpenServiceModal}
          onExploreCollectionClick={() => scrollToSection('collection')}
        />

        {/* Vehicle Collection Showcase */}
        <NexaCollection
          onSelectVehicleForTestDrive={(carName) => handleOpenTestDriveModal(carName)}
        />

        {/* NEXA Service Section */}
        <NexaService onBookServiceClick={handleOpenServiceModal} />

        {/* Book A Service Form (Dedicated Section) */}
        <ServiceBookingForm />

        {/* Accessories Showcase */}
        <NexaAccessories />

        {/* The NEXA Experience (Customer Reviews) */}
        <NexaReviews />
      </main>

      {/* Footer Section */}
      <NexaFooter />

      {/* Quick Service Booking Modal */}
      <Dialog
        open={serviceModalOpen}
        onClose={handleCloseServiceModal}
        fullWidth
        maxWidth="md"
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#0d111a',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              borderRadius: '16px',
              p: 2,
            },
          },
        }}
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 800 }}>
              Book A Service Appointment
            </Typography>
            <Typography variant="caption" sx={{ color: '#c5a059', fontWeight: 600 }}>
              SAKETH AUTOMOBILES NEXA SERVICE CENTRE
            </Typography>
          </Box>
          <IconButton onClick={handleCloseServiceModal} sx={{ color: '#ffffff' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <ServiceBookingForm isModal onCloseModal={handleCloseServiceModal} />
        </DialogContent>
      </Dialog>

      {/* Test Drive Scheduling Modal */}
      <TestDriveModal
        open={testDriveModalOpen}
        onClose={handleCloseTestDriveModal}
        selectedVehicle={selectedVehicle}
      />
    </Box>
  );
}
