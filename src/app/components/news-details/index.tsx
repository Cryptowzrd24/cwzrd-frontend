'use client';
import { Box, Container } from '@mui/material';
import React from 'react';
import BreadCrumb from './breadcrumb';
import DetailsSection from './details-section';
import RelatedNews from './related-news';
import MemberShipBanner from '../banners/memberShipBanner';

const NewsDetails = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ mt: '32px' }}>
          <BreadCrumb />
        </Box>
        <Box sx={{ mt: '24px' }}>
          <DetailsSection />
        </Box>
        <Box sx={{ mt: '88px' }}>
          <RelatedNews />
        </Box>
        <Box sx={{ mt: '88px', mb: '48px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default NewsDetails;
