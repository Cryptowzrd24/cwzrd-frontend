import { Box, Typography } from '@mui/material';
import React from 'react';
import { ReadMoreIcon } from '../../../../../public/icons/readMoreIcon';
import InfoCard from './InfoCard';
import DailyAnalysisCard from './DailyAnalysisCard';

const CryptoArticle = () => {
  return (
    <Box
      sx={{
        pt: '30px',
        mb: '30px',
        display: 'flex',
        gap: '24px',
        flexDirection: 'column',
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
              fontSize: '24px',
              fontWeight: '700',
              lineHeight: '120%',
              letterSpacing: '0.24px',
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
                fontSize: '14px',
                lineHeight: '18.2px',
              }}
              variant="body2"
              right={1}
            >
              See All
            </Typography>
            <Box
              sx={{
                ml: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ReadMoreIcon isMainPage />
            </Box>
          </Box>
        </Box>
        <Typography
          sx={{
            color: 'rgba(17, 17, 17, 0.80)',
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '150%',
            letterSpacing: '-0.2px',
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
          padding: '12px',
          display: 'flex',
          gap: '9px',
          border: '0.5px solid #FFF',
          borderRadius: '20px',
          background: 'rgba(255,255,255,0.40)',
          backdropFilter: 'blur(8px)',
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
