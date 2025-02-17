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
          '@media (max-width: 1440px)': { paddingInline: '20px !important' },
          '@media (max-width: 599px)': { paddingInline: '5px !important' },
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
          isTechnicalDetail={true}
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          '@media (max-width: 1440px)': { paddingInline: '20px !important' },
          '@media (max-width: 599px)': { paddingInline: '5px !important' },
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
            mt: '56px',
            mb: '42px',
            '@media (max-width: 978px)': { mt: '32px', mb: '28px' },
          }}
        >
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default TechnicalDetails;
