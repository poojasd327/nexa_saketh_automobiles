'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  TextField,
  MenuItem,
  Button,
  IconButton,
  Alert,
  InputAdornment,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface TestDriveModalProps {
  open: boolean;
  onClose: () => void;
  selectedVehicle?: string;
}

const NEXA_MODELS = [
  'Grand Vitara',
  'Invicto',
  'Fronx',
  'Jimny',
  'Baleno',
  'XL6',
  'Ignis',
  'Ciaz',
];

export default function TestDriveModal({ open, onClose, selectedVehicle }: TestDriveModalProps) {
  const [vehicle, setVehicle] = useState(selectedVehicle || 'Grand Vitara');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [testDriveDate, setTestDriveDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedVehicle) {
      setVehicle(selectedVehicle);
    }
  }, [selectedVehicle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          sx: {
            backgroundColor: '#0d111a',
            backgroundImage: 'none',
            border: '1px solid rgba(197, 160, 89, 0.4)',
            borderRadius: '16px',
            p: 1,
          },
        },
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 800 }}>
            Schedule A Test Drive
          </Typography>
          <Typography variant="caption" sx={{ color: '#c5a059', fontWeight: 600 }}>
            SAKETH AUTOMOBILES NEXA
          </Typography>
        </Box>
        <IconButton onClick={handleClose} sx={{ color: '#ffffff' }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <CheckCircleIcon sx={{ fontSize: '4rem', color: '#00e5ff', mb: 2 }} />
            <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 700, mb: 1 }}>
              Test Drive Request Received!
            </Typography>
            <Alert severity="success" sx={{ backgroundColor: 'rgba(0, 229, 255, 0.1)', color: '#ffffff', mb: 2 }}>
              Our Saketh Nexa relationship officer will contact you shortly to confirm your <strong>{vehicle}</strong> test drive schedule.
            </Alert>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              select
              fullWidth
              label="Select Nexa Car Model"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <DirectionsCarIcon sx={{ color: '#c5a059' }} />
                    </InputAdornment>
                  ),
                },
              }}
            >
              {NEXA_MODELS.map((m) => (
                <MenuItem key={m} value={m}>
                  {m}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              fullWidth
              required
              label="Full Name"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: '#00e5ff' }} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              required
              label="Phone Number"
              placeholder="Contact number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon sx={{ color: '#c5a059' }} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              type="date"
              label="Preferred Date"
              value={testDriveDate}
              onChange={(e) => setTestDriveDate(e.target.value)}
              slotProps={{
                inputLabel: { shrink: true },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ py: 1.5, fontWeight: 700 }}
            >
              Confirm Test Drive Booking
            </Button>
          </Box>
        )}
      </DialogContent>

      {submitted && (
        <DialogActions sx={{ pb: 2, px: 3 }}>
          <Button variant="outlined" color="primary" onClick={handleClose} fullWidth>
            Close Window
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
