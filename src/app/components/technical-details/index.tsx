'use client';
import { Box, Container } from '@mui/material';
import React from 'react';

import MemberShipBanner from '../banners/memberShipBanner';
import BreadCrumb from '../news-details/breadcrumb';
import DetailsSection from '../news-details/details-section';
import RelatedNews from '../news-details/related-news';
import TechnicalArticle from './technical-article';

const TechnicalDetails = () => {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: '1440px !important',
          '@media (max-width: 599px)': { padding: '16px !important' },
        }}
      >
        <Box sx={{ mt: '32px' }}>
          <BreadCrumb
            origin={'Technicals'}
            description={
              'Bitcoin whale accumulation reaches pre-2020 bull run levels — Is BTC set to break $70K?'
            }
          />
        </Box>
      </Container>
      <Box sx={{ mt: '24px' }}>
        <DetailsSection
          ChildComponent={TechnicalArticle}
          isTechnicalDetail={false}
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          maxWidth: '1440px !important',
          '@media (max-width: 599px)': { paddingInline: '16px !important' },
        }}
      >
        <Box
          sx={{
            mt: '108px',
            '@media (max-width: 978px)': {
              mt: '44px',
            },
          }}
        >
          <RelatedNews />
        </Box>
        <Box
          sx={{
            mt: '72px',
            mb: '40px',
            '@media (max-width: 978px)': { mb: '28px' },
          }}
        >
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default TechnicalDetails;
