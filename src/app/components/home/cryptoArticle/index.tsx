import { Box, Typography } from '@mui/material';
import React from 'react';
import { ReadMoreIcon } from '../../../../../public/icons/readMoreIcon';
import InfoCard from './InfoCard';
import DailyAnalysisCard from './DailyAnalysisCard';

const CryptoArticle = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
        boxSizing: 'border-box',
        padding: { xs: '0px', lg: '12px' },
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px', lg: '24px' },
              fontWeight: '700',
              lineHeight: '120%',
              letterSpacing: {
                xs: '0.16px',
                sm: '0.18px',
                md: '0.20px',
                lg: '0.24px',
              },
            }}
          >
            <span
              style={{
                background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Crypto
            </span>{' '}
            Articles
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <Typography
              sx={{
                background:
                  'linear-gradient(117deg, #F7841A -4.07%, #F74848 100.68%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '600',
                fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' },
                lineHeight: { xs: '16px', sm: '18px', md: '20px', lg: '22px' },
              }}
              variant="body2"
              right={1}
            >
              See All
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ml: { xs: '6px', sm: '8px', md: '10px', lg: '12px' },
              }}
            >
              <ReadMoreIcon isMainPage />
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            color: 'rgba(17, 17, 17, 0.80)',
            fontWeight: '400',
            lineHeight: '150%',
            fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
            letterSpacing: {
              xs: '-0.14px',
              sm: '-0.16px',
              md: '-0.18px',
              lg: '-0.20px',
            },
          }}
        >
          the overall market capitalization of the crypto market is{' '}
          <span style={{ color: '#7248F7', fontWeight: '700' }}>€2.26T</span>.
          an increase of{' '}
          <span style={{ color: '#1FD773', fontWeight: '700' }}>+3.75%</span> in
          the last 24 hours.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          border: { xs: 'none', lg: '0.5px solid #FFF' },
          background: { xs: 'transparent', lg: 'rgba(255,255,255,0.40)' },
          backdropFilter: { xs: 'none', lg: 'blur(8px)' },
          flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row' },
          gap: { xs: '8px', sm: '10px', md: '12px', lg: '14px', xl: '16px' },
          borderRadius: {
            xs: '12px',
            sm: '14px',
            md: '16px',
            lg: '20px',
            xl: '24px',
          },
          padding: { xs: '0px', md: '12px', lg: '14px', xl: '16px' },
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <InfoCard />
        <InfoCard />
        <DailyAnalysisCard />
      </Box>
    </Box>
  );
};

export default CryptoArticle;
