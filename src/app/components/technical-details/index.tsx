'use client';
import { Box } from '@mui/material';
import React from 'react';

import MemberShipBanner from '../banners/memberShipBanner';
import BreadCrumb from '../news-details/breadcrumb';
import DetailsSection from '../news-details/details-section';
import RelatedNews from '../news-details/related-news';
import TechnicalArticle from './technical-article';

const TechnicalDetails = () => {
  return (
    <>
      <Box sx={{ mt: '32px' }}>
        <BreadCrumb
          origin={'Technicals'}
          description={
            'Bitcoin whale accumulation reaches pre-2020 bull run levels — Is BTC set to break $70K?'
          }
        />
      </Box>
      <Box sx={{ mt: '24px' }}>
        <DetailsSection
          ChildComponent={TechnicalArticle}
          isTechnicalDetail={true}
        />
      </Box>
      <Box sx={{ mt: '48px' }}>
        <RelatedNews />
      </Box>
      <Box sx={{ mt: '88px', mb: '48px' }}>
        <MemberShipBanner />
      </Box>
    </>
  );
};

export default TechnicalDetails;
