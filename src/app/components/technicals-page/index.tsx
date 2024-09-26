import { Box, Typography } from '@mui/material';
import React from 'react';
import AnalysisCard from './analysis-card';
import FinancialNewsCardList from './financial-news-card';
import FinancialNewsCarousel from './financial-news-carousel';
import TechnicalsBanner from './technicals-banner';

function TechnicalsPage() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '21.5px',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 700,
            fontFamily: 'Sf Pro Display',
          }}
          left={0}
        >
          New{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technicals
          </span>{' '}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginRight: '12px',
          }}
        >
          <Typography
            sx={{
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginRight: '5px',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '18.2px',
              fontFamily: 'Sf Pro Display',
            }}
            variant="body2"
            right={1}
          >
            Read More
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <AnalysisCard />
        <FinancialNewsCardList />
        <Box
          sx={{
            width: '400px',
            height: '507px',
            background: 'white',
            boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          }}
        >
          Render Card here
        </Box>
      </Box>
      <Box sx={{ mb: '120px' }}>
        <FinancialNewsCarousel />
      </Box>
      <Box>
        <TechnicalsBanner />
      </Box>
    </>
  );
}

export default TechnicalsPage;
