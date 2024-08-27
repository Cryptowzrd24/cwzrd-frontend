'use client';
import { Box, Container } from '@mui/material';
import React from 'react';
import BreadCrumb from './breadcrumb';
import DetailsSection from './details-section';

const NewsDetails = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mt: '64px' }}>
          <BreadCrumb />
        </Box>
        <Box sx={{ mt: '24px' }}>
          <DetailsSection />
        </Box>
      </Container>
    </>
  );
};

export default NewsDetails;
