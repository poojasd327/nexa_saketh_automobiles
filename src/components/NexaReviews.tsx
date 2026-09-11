'use client';

import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Rating, Avatar, Chip } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

interface Testimonial {
  id: string;
  name: string;
  location?: string;
  vehicle?: string;
  salesExecutive?: string;
  review: string;
  rating: number;
}

const REVIEWS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'Chethu',
    location: 'Karnataka',
    vehicle: 'NEXA Vehicle Owner',
    review: 'The sales team was knowledgeable and patient, answering all my questions without any pressure to make a quick decision. They explained the features, financing options, and even arranged a smooth test drive. What I really appreciated was their honesty and transparency throughout the process.',
    rating: 5,
  },
  {
    id: 'rev-2',
    name: 'Shivshankar S',
    location: 'Tumkur',
    salesExecutive: 'Executive Jayaram',
    vehicle: 'NEXA Luxury Range',
    review: 'Had a wonderful experience at NEXA. From the moment I walked in, the team was welcoming and supportive Especially executive Jayaram. Product knowledge, transparency, and timely follow-ups were impressive. Truly lives up to the NEXA premium promise. Thank you for the excellent service!',
    rating: 5,
  },
  {
    id: 'rev-3',
    name: 'M R Nagaraja Rao',
    location: 'Bangalore Resident',
    vehicle: 'Maruti Fronx Owner',
    salesExecutive: 'Mr. Sriram & Mr. Jagadish',
    review: 'I opted for Maruti Fronx. Saketh, Tumkur offered most competitive deal compared to other dealers. The executives of Saketh have extended a very homely treatment and they were very helpful. Among them, Mr Sriram and Mr Jagadish standout particularly. I am a resident of Bangalore and Saketh delivered the car at my home. Amazing moments. Dear Saketh, keep up the extraordinary customer service. All the very best. Let you grow leaps and bounds.',
    rating: 5,
  },
  {
    id: 'rev-4',
    name: 'Chethan Kumar',
    location: 'Tumkur Region',
    salesExecutive: 'Suhas K N (Sales Team)',
    vehicle: 'NEXA Car Buyer',
    review: "I'm very delighted to write this review because the hard work and support provided by Suhas K N from Nexa Saketh Motors Tumkur Sales Team. Suhas has made the car buying very special and simple for us this is what most of the Indian customers expect from Sales team. Suhas has explained every tiny thing in details on cars and their usages, pros and cons. He has been very helpful in clearing the doubts which we may come across on a new car purchase. Very nyc experience I would be very loyal to nexa only because of this kind of sales man. I would like Nexa Team to appreciate the hard of him",
    rating: 5,
  },
  {
    id: 'rev-5',
    name: 'Darshan',
    location: 'Karnataka',
    salesExecutive: 'Ms. Pallavi & Mr. Ranganath',
    vehicle: 'Baleno Owner',
    review: 'I recently purchased Baleno vehicle for this dealer. Service and customer response is top notch, every body in this showroom will be attentive to customers. Special thanks to Ms Pallavi for delivering my vehicle in promised time and was open to answer my calls and queries all time. And Mr Ranganath, he is so genuine and responsive.',
    rating: 5,
  },
];

export default function NexaReviews() {
  return (
    <Box id="reviews" sx={{ py: { xs: 8, md: 12 }, backgroundColor: '#0d111a', position: 'relative' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="REAL CUSTOMER STORIES"
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
            The Nexa Experience
          </Typography>
          <Typography variant="body1" sx={{ color: '#94a3b8', maxWidth: '650px', mx: 'auto' }}>
            Hear from our esteemed patrons about their journey with Saketh Automobiles — from transparent sales guidance to white-glove home delivery.
          </Typography>
        </Box>

        {/* Reviews Cards Grid */}
        <Grid container spacing={4}>
          {REVIEWS.map((rev) => (
            <Grid size={{ xs: 12, md: 4 }} key={rev.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'rgba(18, 22, 32, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  p: 1,
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'rgba(197, 160, 89, 0.4)',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Rating value={rev.rating} readOnly precision={0.5} sx={{ color: '#c5a059' }} />
                    <FormatQuoteIcon sx={{ color: 'rgba(197, 160, 89, 0.3)', fontSize: '2.5rem' }} />
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#f0f4f8',
                      fontStyle: 'italic',
                      lineHeight: 1.7,
                      mb: 3,
                      flexGrow: 1,
                    }}
                  >
                    &ldquo;{rev.review}&rdquo;
                  </Typography>

                  <Box sx={{ pt: 2, borderTop: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar
                      sx={{
                        backgroundColor: '#c5a059',
                        color: '#090b10',
                        fontWeight: 800,
                        width: 44,
                        height: 44,
                      }}
                    >
                      {rev.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ color: '#ffffff', fontWeight: 700 }}>
                        {rev.name}
                      </Typography>
                      {rev.vehicle && (
                        <Typography variant="caption" sx={{ color: '#00e5ff', display: 'block', fontWeight: 600 }}>
                          {rev.vehicle}
                        </Typography>
                      )}
                      {rev.salesExecutive && (
                        <Typography variant="caption" sx={{ color: '#94a3b8', display: 'block' }}>
                          Mentioned: {rev.salesExecutive}
                        </Typography>
                      )}
                    </Box>
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
