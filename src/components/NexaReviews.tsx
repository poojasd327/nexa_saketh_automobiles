'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Rating,
  Avatar,
  Chip,
  IconButton,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
    review:
      'The sales team was knowledgeable and patient, answering all my questions without any pressure to make a quick decision. They explained the features, financing options, and even arranged a smooth test drive. What I really appreciated was their honesty and transparency throughout the process.',
    rating: 5,
  },
  {
    id: 'rev-2',
    name: 'Shivshankar S',
    location: 'Tumkur',
    salesExecutive: 'Executive Jayaram',
    vehicle: 'NEXA Luxury Range',
    review:
      'Had a wonderful experience at NEXA. From the moment I walked in, the team was welcoming and supportive Especially executive Jayaram. Product knowledge, transparency, and timely follow-ups were impressive. Truly lives up to the NEXA premium promise. Thank you for the excellent service!',
    rating: 5,
  },
  {
    id: 'rev-3',
    name: 'M R Nagaraja Rao',
    location: 'Bangalore Resident',
    vehicle: 'Maruti Fronx Owner',
    salesExecutive: 'Mr. Sriram & Mr. Jagadish',
    review:
      'I opted for Maruti Fronx. Saketh, Tumkur offered most competitive deal compared to other dealers. The executives of Saketh have extended a very homely treatment and they were very helpful. Among them, Mr Sriram and Mr Jagadish standout particularly. I am a resident of Bangalore and Saketh delivered the car at my home. Amazing moments. Dear Saketh, keep up the extraordinary customer service. All the very best. Let you grow leaps and bounds.',
    rating: 5,
  },
  {
    id: 'rev-4',
    name: 'Chethan Kumar',
    location: 'Tumkur Region',
    salesExecutive: 'Suhas K N (Sales Team)',
    vehicle: 'NEXA Car Buyer',
    review:
      "I'm very delighted to write this review because the hard work and support provided by Suhas K N from Nexa Saketh Motors Tumkur Sales Team. Suhas has made the car buying very special and simple for us this is what most of the Indian customers expect from Sales team. Suhas has explained every tiny thing in details on cars and their usages, pros and cons. He has been very helpful in clearing the doubts which we may come across on a new car purchase. Very nyc experience I would be very loyal to nexa only because of this kind of sales man. I would like Nexa Team to appreciate the hard of him",
    rating: 5,
  },
  {
    id: 'rev-5',
    name: 'Darshan',
    location: 'Karnataka',
    salesExecutive: 'Ms. Pallavi & Mr. Ranganath',
    vehicle: 'Baleno Owner',
    review:
      'I recently purchased Baleno vehicle for this dealer. Service and customer response is top notch, every body in this showroom will be attentive to customers. Special thanks to Ms Pallavi for delivering my vehicle in promised time and was open to answer my calls and queries all time. And Mr Ranganath, he is so genuine and responsive.',
    rating: 5,
  },
  {
    id: 'rev-6',
    name: 'Ananya Sharma',
    location: 'Tumkur',
    salesExecutive: 'Mr. Praveen Kumar',
    vehicle: 'Grand Vitara Strong Hybrid',
    review:
      'Taking delivery of my Grand Vitara Strong Hybrid from Saketh Nexa was a truly five-star experience. The team was extremely courteous, transparent with pricing and subsidies, and arranged an extensive test drive. Highly impressed by their commitment to customer satisfaction and after-sales support!',
    rating: 5,
  },
];

// Duplicate first 3 items at the end to create seamless continuous loop with 3 items in viewport
const EXTENDED_REVIEWS = [...REVIEWS, ...REVIEWS.slice(0, 3)];

export default function NexaReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  // Advance to next slide
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  // Go to previous slide
  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        setIsTransitioning(false);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
            setCurrentIndex(REVIEWS.length - 1);
          });
        });
        return REVIEWS.length;
      }
      setIsTransitioning(true);
      return prev - 1;
    });
  }, []);

  // Jump to specific slide index
  const handleDotClick = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrentIndex(index);
  }, []);

  // Handle seamless loop reset when reaching cloned items
  useEffect(() => {
    if (currentIndex >= REVIEWS.length) {
      // Allow slide animation to complete (550ms), then silently reset to index 0 without transition
      const snapTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 550);

      return () => clearTimeout(snapTimer);
    } else if (!isTransitioning) {
      // Re-enable smooth transition for subsequent slides
      const enableTimer = setTimeout(() => {
        setIsTransitioning(true);
      }, 60);

      return () => clearTimeout(enableTimer);
    }
  }, [currentIndex, isTransitioning]);

  // Continuous Auto-sliding timer (slides every 3.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [handleNext]);

  // Touch swipe support for mobile/tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45;

    if (diff > minSwipeDistance) {
      handleNext();
    } else if (diff < -minSwipeDistance) {
      handlePrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const activeDotIndex = currentIndex % REVIEWS.length;

  return (
    <Box
      id="reviews"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Chip
            label="REAL CUSTOMER STORIES"
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
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
          <Typography
            variant="body1"
            sx={{
              color: '#a1a1aa',
              maxWidth: '650px',
              mx: 'auto',
              mb: 2.5,
              fontSize: { xs: '0.95rem', md: '1.05rem' },
            }}
          >
            Hear from our esteemed patrons about their journey with Saketh Automobiles — from transparent sales
            guidance to white-glove home delivery.
          </Typography>

          {/* Social Proof Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2.5,
              py: 0.8,
              borderRadius: '30px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
          >
            <Rating value={5} readOnly size="small" sx={{ color: '#ffffff' }} />
            <Typography variant="body2" sx={{ color: '#ffffff', fontWeight: 700 }}>
              4.9 / 5.0
            </Typography>
            <Typography variant="caption" sx={{ color: '#71717a', fontWeight: 500 }}>
              • Over 1,400+ Verified Owner Reviews
            </Typography>
          </Box>
        </Box>

        {/* Carousel Viewport Container */}
        <Box
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          sx={{
            position: 'relative',
            px: { xs: 0, md: 3 },
            // Responsive CSS variables for visible slide count:
            // 3 items visible on desktop (md and up), 2 on tablet (sm), 1 on mobile (xs)
            '--slide-width': '100%',
            '@media (min-width: 600px)': {
              '--slide-width': '50%',
            },
            '@media (min-width: 960px)': {
              '--slide-width': '33.333333%',
            },
          }}
        >
          {/* Floating Left Arrow (Desktop) */}
          <IconButton
            onClick={handlePrev}
            aria-label="Previous testimonials"
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              left: -12,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(18, 18, 18, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              width: 48,
              height: 48,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: '#ffffff',
                color: '#000000',
                borderColor: '#ffffff',
                boxShadow: '0 0 24px rgba(255, 255, 255, 0.5)',
                transform: 'translateY(-50%) scale(1.08)',
              },
            }}
          >
            <ChevronLeftIcon fontSize="medium" />
          </IconButton>

          {/* Floating Right Arrow (Desktop) */}
          <IconButton
            onClick={handleNext}
            aria-label="Next testimonials"
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              right: -12,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              backgroundColor: 'rgba(18, 18, 18, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#ffffff',
              width: 48,
              height: 48,
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: '#ffffff',
                color: '#000000',
                borderColor: '#ffffff',
                boxShadow: '0 0 24px rgba(255, 255, 255, 0.5)',
                transform: 'translateY(-50%) scale(1.08)',
              },
            }}
          >
            <ChevronRightIcon fontSize="medium" />
          </IconButton>

          {/* Masked Scroller Viewport */}
          <Box
            sx={{
              overflow: 'hidden',
              py: 2,
              mx: { xs: -1, sm: -1.5, md: -2 },
            }}
          >
            {/* Sliding Track */}
            <Box
              sx={{
                display: 'flex',
                transition: isTransitioning
                  ? 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)'
                  : 'none',
                transform: `translateX(calc(-1 * ${currentIndex} * var(--slide-width)))`,
                willChange: 'transform',
              }}
            >
              {EXTENDED_REVIEWS.map((rev, idx) => (
                <Box
                  key={`${rev.id}-${idx}`}
                  sx={{
                    flex: '0 0 var(--slide-width)',
                    maxWidth: 'var(--slide-width)',
                    px: { xs: 1, sm: 1.5, md: 2 },
                    boxSizing: 'border-box',
                    display: 'flex',
                  }}
                >
                  <Card
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor: 'rgba(18, 18, 18, 0.85)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '14px',
                      p: 1,
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'rgba(255, 255, 255, 0.35)',
                        boxShadow:
                          '0 16px 36px rgba(0, 0, 0, 0.85), 0 0 20px rgba(255, 255, 255, 0.06)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: { xs: 2.5, sm: 3 },
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        height: '100%',
                        boxSizing: 'border-box',
                      }}
                    >
                      {/* Rating & Quote Header */}
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mb: 2,
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Rating
                            value={rev.rating}
                            readOnly
                            precision={0.5}
                            sx={{ color: '#ffffff' }}
                          />
                        </Box>
                        <FormatQuoteIcon
                          sx={{
                            color: 'rgba(255, 255, 255, 0.22)',
                            fontSize: '2.5rem',
                          }}
                        />
                      </Box>

                      {/* Review Quote Body */}
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#e4e4e7',
                          fontStyle: 'italic',
                          lineHeight: 1.75,
                          fontSize: '0.93rem',
                          mb: 3,
                          flexGrow: 1,
                        }}
                      >
                        &ldquo;{rev.review}&rdquo;
                      </Typography>

                      {/* Reviewer Bio Footer */}
                      <Box
                        sx={{
                          pt: 2.5,
                          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          mt: 'auto',
                        }}
                      >
                        <Avatar
                          sx={{
                            backgroundColor: '#ffffff',
                            color: '#000000',
                            fontWeight: 800,
                            width: 44,
                            height: 44,
                            fontSize: '1.1rem',
                          }}
                        >
                          {rev.name.charAt(0)}
                        </Avatar>
                        <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              color: '#ffffff',
                              fontWeight: 700,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                            }}
                          >
                            {rev.name}
                          </Typography>
                          {rev.vehicle && (
                            <Typography
                              variant="caption"
                              sx={{
                                color: '#a1a1aa',
                                display: 'block',
                                fontWeight: 600,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              {rev.vehicle}
                            </Typography>
                          )}
                          {rev.salesExecutive && (
                            <Typography
                              variant="caption"
                              sx={{
                                color: '#71717a',
                                display: 'block',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                              }}
                            >
                              Mentioned: {rev.salesExecutive}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Bottom Slider Navigation & Indicators */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mt: 4,
            }}
          >
            {/* Mobile Previous Button */}
            <IconButton
              onClick={handlePrev}
              aria-label="Previous review"
              size="small"
              sx={{
                display: { xs: 'flex', md: 'none' },
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                '&:hover': {
                  backgroundColor: '#ffffff',
                  color: '#000000',
                },
              }}
            >
              <ChevronLeftIcon fontSize="small" />
            </IconButton>

            {/* Pagination Dots / Pills */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.25,
              }}
            >
              {REVIEWS.map((_, idx) => {
                const isActive = activeDotIndex === idx;
                return (
                  <Box
                    key={`dot-${idx}`}
                    onClick={() => handleDotClick(idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Go to slide ${idx + 1}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleDotClick(idx);
                      }
                    }}
                    sx={{
                      width: isActive ? 28 : 8,
                      height: 8,
                      borderRadius: '4px',
                      backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.25)',
                      boxShadow: isActive ? '0 0 12px rgba(255, 255, 255, 0.7)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        backgroundColor: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                        transform: 'scale(1.15)',
                      },
                    }}
                  />
                );
              })}
            </Box>

            {/* Mobile Next Button */}
            <IconButton
              onClick={handleNext}
              aria-label="Next review"
              size="small"
              sx={{
                display: { xs: 'flex', md: 'none' },
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                '&:hover': {
                  backgroundColor: '#ffffff',
                  color: '#000000',
                },
              }}
            >
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
