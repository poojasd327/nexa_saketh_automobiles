'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Card,
  CardContent,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  InputAdornment,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import BuildIcon from '@mui/icons-material/Build';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const VEHICLE_MODELS = [
  'Grand Vitara',
  'Invicto',
  'Fronx',
  'Jimny',
  'Baleno',
  'XL6',
  'Ignis',
  'Ciaz',
  'Other Nexa / Maruti Vehicle',
];

const SERVICE_TYPES = [
  'Regular Periodic Service',
  'Car Repair & Inspection',
  'Express Car Wash & Detailing',
  'Wheel Alignment & Balancing',
  'AC Maintenance & Sanitization',
  'Bodywork & Painting',
  'General Diagnosis',
];

const LOCATIONS = [
  'Saketh Nexa Service Centre - Sirra Road',
  'Saketh Automobiles - Tumkur Main Showroom',
];

interface ServiceBookingFormProps {
  preselectedVehicle?: string;
  isModal?: boolean;
  onCloseModal?: () => void;
}

export default function ServiceBookingForm({
  preselectedVehicle = '',
  isModal = false,
  onCloseModal,
}: ServiceBookingFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicleModel, setVehicleModel] = useState(preselectedVehicle || 'Grand Vitara');
  const [serviceType, setServiceType] = useState('Regular Periodic Service');
  const [location, setLocation] = useState('Saketh Nexa Service Centre - Sirra Road');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [bookingId, setBookingId] = useState<string>('');

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!fullName.trim()) tempErrors.fullName = 'Full Name is required';
    if (!phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s]{10,14}$/.test(phone.trim())) {
      tempErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!vehicleModel) tempErrors.vehicleModel = 'Please select your vehicle model';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const generatedId = 'SNEXA-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(generatedId);
    setBookingSuccess(true);
  };

  const handleReset = () => {
    setBookingSuccess(false);
    setFullName('');
    setPhone('');
    setNotes('');
    if (isModal && onCloseModal) {
      onCloseModal();
    }
  };

  const isDark = isModal;
  const iconColor = isDark ? 'rgba(255, 255, 255, 0.7)' : '#52525b';

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#f8f9fa',
      borderRadius: '8px',
      color: isDark ? '#ffffff' : '#000000',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : '#e4e4e7',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: isDark ? 'rgba(255, 255, 255, 0.4)' : '#000000',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: isDark ? '#ffffff' : '#000000',
        borderWidth: '1.5px',
      },
      '& input': {
        color: isDark ? '#ffffff' : '#000000',
      },
      '& textarea': {
        color: isDark ? '#ffffff' : '#000000',
      },
      '& .MuiSelect-select': {
        color: isDark ? '#ffffff' : '#000000',
      },
      '& .MuiSelect-icon': {
        color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#000000',
      },
    },
    '& .MuiInputLabel-root': {
      color: isDark ? '#a1a1aa' : '#52525b',
      '&.Mui-focused': {
        color: isDark ? '#ffffff' : '#000000',
        fontWeight: 600,
      },
    },
  };

  const selectSlotProps = (icon: React.ReactNode) => ({
    input: {
      startAdornment: (
        <InputAdornment position="start">
          {icon}
        </InputAdornment>
      ),
    },
    select: {
      MenuProps: {
        slotProps: {
          paper: {
            sx: {
              backgroundColor: isDark ? '#18181b' : '#ffffff',
              color: isDark ? '#ffffff' : '#000000',
              border: isDark ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid #e4e4e7',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
              '& .MuiMenuItem-root': {
                fontSize: '0.9rem',
                color: isDark ? '#ffffff' : '#18181b',
                '&:hover': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#f4f4f5',
                },
                '&.Mui-selected': {
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.15)' : '#e4e4e7',
                  fontWeight: 700,
                  '&:hover': {
                    backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : '#d4d4d8',
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  const formFields = (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={2.5}>
        {/* Full Name */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Full Name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            error={!!errors.fullName}
            helperText={errors.fullName}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: iconColor }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={inputSx}
          />
        </Grid>

        {/* Phone number */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            required
            label="Phone number"
            placeholder="e.g. 9876543210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIcon sx={{ color: iconColor }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={inputSx}
          />
        </Grid>

        {/* Vehicle Model */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            select
            fullWidth
            required
            label="Vehicle Model"
            value={vehicleModel}
            onChange={(e) => setVehicleModel(e.target.value)}
            error={!!errors.vehicleModel}
            helperText={errors.vehicleModel}
            slotProps={selectSlotProps(<DirectionsCarIcon sx={{ color: iconColor }} />)}
            sx={inputSx}
          >
            {VEHICLE_MODELS.map((model) => (
              <MenuItem key={model} value={model}>
                {model}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Service Type */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            select
            fullWidth
            label="Service Requirement"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            slotProps={selectSlotProps(<BuildIcon sx={{ color: iconColor }} />)}
            sx={inputSx}
          >
            {SERVICE_TYPES.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Preferred Date */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            type="date"
            label="Preferred Service Date"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
            slotProps={{
              inputLabel: { shrink: true },
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon sx={{ color: iconColor }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={inputSx}
          />
        </Grid>

        {/* Preferred Time Slot */}
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            select
            fullWidth
            label="Preferred Time Slot"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            slotProps={selectSlotProps(<AccessTimeIcon sx={{ color: iconColor }} />)}
            sx={inputSx}
          >
            <MenuItem value="09:00 AM">09:00 AM - Morning Slot</MenuItem>
            <MenuItem value="11:00 AM">11:00 AM - Late Morning Slot</MenuItem>
            <MenuItem value="02:00 PM">02:00 PM - Afternoon Slot</MenuItem>
            <MenuItem value="04:00 PM">04:00 PM - Evening Slot</MenuItem>
          </TextField>
        </Grid>

        {/* Service Centre Branch */}
        <Grid size={{ xs: 12 }}>
          <TextField
            select
            fullWidth
            label="Service Centre Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            slotProps={selectSlotProps(<LocationOnIcon sx={{ color: iconColor }} />)}
            sx={inputSx}
          >
            {LOCATIONS.map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Additional Concerns / Notes */}
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Specific Concerns / Notes"
            placeholder="Mention any specific issue (e.g. noise during braking, wheel alignment, oil change request)..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            sx={inputSx}
          />
        </Grid>

        {/* Form Button */}
        <Grid size={{ xs: 12 }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            startIcon={<CheckCircleOutlinedIcon />}
            endIcon={<ArrowForwardIcon />}
            sx={{
              py: 1.8,
              fontSize: '1rem',
              fontWeight: 800,
              borderRadius: '8px',
              backgroundColor: isDark ? '#ffffff' : '#000000',
              color: isDark ? '#000000' : '#ffffff',
              border: isDark ? '1px solid #ffffff' : '1px solid #000000',
              boxShadow: isDark
                ? '0 4px 20px rgba(255, 255, 255, 0.25)'
                : '0 4px 20px rgba(0, 0, 0, 0.2)',
              transition: 'all 0.25s ease',
              '&:hover': {
                backgroundColor: isDark ? '#e4e4e7' : '#27272a',
                boxShadow: isDark
                  ? '0 0 30px rgba(255, 255, 255, 0.5)'
                  : '0 6px 25px rgba(0, 0, 0, 0.35)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Confirm Booking Request
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box
      id="booking"
      sx={{
        py: isModal ? 0 : { xs: 8, md: 12 },
        backgroundColor: isModal ? 'transparent' : '#ffffff',
        color: isModal ? '#ffffff' : '#000000',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {!isModal ? (
        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={{ xs: 6, lg: 8 }} sx={{ alignItems: 'flex-start' }}>
            {/* Left Column: VIP Service Privileges & Workshop Assurances */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Box sx={{ mb: 3 }}>
                <Chip
                  label="PRIORITY NEXA CONCIERGE"
                  sx={{
                    backgroundColor: isModal ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
                    color: isModal ? '#ffffff' : '#000000',
                    border: isModal ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.12)',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    mb: 2,
                    py: 0.5,
                  }}
                />
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '2.2rem', sm: '2.75rem', md: '3.25rem' },
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    color: isModal ? '#ffffff' : '#000000',
                    mb: 2,
                    lineHeight: 1.15,
                  }}
                >
                  Book Your Service Experience
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: isModal ? '#a1a1aa' : '#52525b',
                    lineHeight: 1.75,
                    fontSize: { xs: '0.98rem', md: '1.05rem' },
                    mb: 4,
                  }}
                >
                  Schedule your maintenance or repair with Saketh Nexa Service Centre in less than a
                  minute. Enjoy certified technicians, genuine OEM parts, and priority turnaround.
                </Typography>
              </Box>
            </Grid>

            {/* Right Column: Sleek Elevated Booking Card */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <Card
                sx={{
                  backgroundColor: isModal ? 'rgba(16, 16, 18, 0.95)' : '#ffffff',
                  backdropFilter: isModal ? 'blur(16px)' : 'none',
                  border: isModal ? '1px solid rgba(255, 255, 255, 0.12)' : '1px solid #e4e4e7',
                  borderRadius: '20px',
                  p: { xs: 2.5, sm: 4 },
                  boxShadow: isModal
                    ? '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.04)'
                    : '0 20px 50px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'none',
                  transform: 'none !important',
                  '&:hover': {
                    borderColor: isModal ? 'rgba(255, 255, 255, 0.12)' : '#e4e4e7',
                    boxShadow: isModal
                      ? '0 24px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(255, 255, 255, 0.04)'
                      : '0 20px 50px rgba(0, 0, 0, 0.06), 0 2px 6px rgba(0, 0, 0, 0.04)',
                    transform: 'none !important',
                  },
                }}
              >
                {/* Top Subtle Edge Highlight */}
                {isModal && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '1px',
                      background:
                        'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                    }}
                  />
                )}

                <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
                  <Box sx={{ mb: 3.5 }}>
                    <Typography variant="h4" sx={{ color: isModal ? '#ffffff' : '#000000', fontWeight: 800, mb: 1, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
                      Schedule Appointment
                    </Typography>
                    <Typography variant="body2" sx={{ color: isModal ? '#a1a1aa' : '#71717a' }}>
                      Complete your booking details below. Our service manager will confirm your slot promptly.
                    </Typography>
                  </Box>

                  {formFields}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      ) : (
        formFields
      )}

      {/* Confirmation Dialog Modal */}
      <Dialog
        open={bookingSuccess}
        onClose={handleReset}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#0d0d0d',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              maxWidth: 500,
              p: 2,
            },
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', pt: 3 }}>
          <CheckCircleOutlinedIcon sx={{ fontSize: '4rem', color: '#ffffff', mb: 1 }} />
          <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800 }}>
            Booking Confirmed!
          </Typography>
          <Typography variant="caption" sx={{ color: '#a1a1aa', fontWeight: 700, letterSpacing: '0.1em' }}>
            SAKETH NEXA SERVICE CENTRE
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ textAlign: 'center' }}>
          <Alert
            severity="success"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              mb: 3,
            }}
          >
            Booking Ref: <strong>{bookingId}</strong>
          </Alert>

          <Typography variant="body1" sx={{ color: '#ffffff', mb: 2 }}>
            Thank you, <strong>{fullName}</strong>! Your service request for your{' '}
            <strong>{vehicleModel}</strong> has been logged.
          </Typography>

          <Typography variant="body2" sx={{ color: '#a1a1aa', lineHeight: 1.6 }}>
            Our service advisor from <strong>Saketh Automobiles</strong> will contact you at{' '}
            <strong>{phone}</strong> shortly to confirm your pickup/slot.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
          <Button variant="contained" color="primary" onClick={handleReset} sx={{ px: 4 }}>
            Done & Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
