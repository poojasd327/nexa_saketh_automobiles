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
  'Saketh Automobiles - Tumkur Main Showroom',
  'Saketh Nexa Service Centre - Sirra Road',
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

  const formContent = (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={3}>
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
                    <PersonIcon sx={{ color: '#c5a059' }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(9, 11, 16, 0.6)',
              },
            }}
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
                    <PhoneIcon sx={{ color: '#00e5ff' }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(9, 11, 16, 0.6)',
              },
            }}
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
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <DirectionsCarIcon sx={{ color: '#c5a059' }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(9, 11, 16, 0.6)',
              },
            }}
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
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <BuildIcon sx={{ color: '#00e5ff' }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(9, 11, 16, 0.6)',
              },
            }}
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
                    <CalendarMonthIcon sx={{ color: '#c5a059' }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(9, 11, 16, 0.6)',
              },
            }}
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
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccessTimeIcon sx={{ color: '#00e5ff' }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(9, 11, 16, 0.6)',
              },
            }}
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
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: '#c5a059' }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(9, 11, 16, 0.6)',
              },
            }}
          >
            {LOCATIONS.map((loc) => (
              <MenuItem key={loc} value={loc}>
                {loc}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Additional Notes */}
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            multiline
            rows={3}
            label="Specific Concerns / Notes"
            placeholder="Mention any specific issue (e.g. noise during braking, wheel alignment, oil change request)..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'rgba(9, 11, 16, 0.6)',
              },
            }}
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
            sx={{
              py: 2,
              fontSize: '1.05rem',
              fontWeight: 800,
              boxShadow: '0 0 25px rgba(197, 160, 89, 0.4)',
            }}
          >
            Confirm Booking Request
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box id="booking" sx={{ py: isModal ? 0 : { xs: 8, md: 12 }, backgroundColor: isModal ? 'transparent' : '#090b10' }}>
      {!isModal ? (
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: 'rgba(18, 22, 32, 0.9)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              borderRadius: '16px',
              p: { xs: 2, md: 4 },
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(197, 160, 89, 0.1)',
            }}
          >
            <CardContent>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Chip
                  label="SAKETH AUTOMOBILES ONLINE SERVICE"
                  sx={{
                    backgroundColor: 'rgba(197, 160, 89, 0.15)',
                    color: '#c5a059',
                    border: '1px solid rgba(197, 160, 89, 0.3)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    mb: 1.5,
                  }}
                />
                <Typography variant="h3" sx={{ color: '#ffffff', fontWeight: 800, mb: 1 }}>
                  Book A Service
                </Typography>
                <Typography variant="body2" sx={{ color: '#94a3b8' }}>
                  Schedule your maintenance or repair with Saketh Nexa Service Centre in less than a minute.
                </Typography>
              </Box>

              {formContent}
            </CardContent>
          </Card>
        </Container>
      ) : (
        formContent
      )}

      {/* Confirmation Dialog Modal */}
      <Dialog
        open={bookingSuccess}
        onClose={handleReset}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: '#0d111a',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              borderRadius: '16px',
              maxWidth: 500,
              p: 2,
            },
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', pt: 3 }}>
          <CheckCircleOutlinedIcon sx={{ fontSize: '4rem', color: '#00e5ff', mb: 1 }} />
          <Typography variant="h4" sx={{ color: '#ffffff', fontWeight: 800 }}>
            Booking Confirmed!
          </Typography>
          <Typography variant="caption" sx={{ color: '#c5a059', fontWeight: 700, letterSpacing: '0.1em' }}>
            SAKETH NEXA SERVICE CENTRE
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ textAlign: 'center' }}>
          <Alert severity="success" sx={{ backgroundColor: 'rgba(0, 229, 255, 0.1)', color: '#ffffff', mb: 3 }}>
            Booking Ref: <strong>{bookingId}</strong>
          </Alert>

          <Typography variant="body1" sx={{ color: '#f0f4f8', mb: 2 }}>
            Thank you, <strong>{fullName}</strong>! Your service request for your <strong>{vehicleModel}</strong> has been logged.
          </Typography>

          <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.6 }}>
            Our service advisor from <strong>Saketh Automobiles</strong> will contact you at <strong>{phone}</strong> shortly to confirm your pickup/slot.
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
