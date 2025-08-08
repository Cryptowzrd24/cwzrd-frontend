import React from 'react';
import CryptoSlider from '../cryptoSlider';
import TechnicalsGraph from '../../technicals-page/technicals-graph';
import TechnicalsBanner from '../../technicals-page/technicals-banner';
import StatsContainer from '../../coin/statsContainer';
import { Box, Typography } from '@mui/material';
import bitcoinImg from '../../../../../public/images/coin-details/bitcoin.png';

const MarketSummary = () => {
  return (
    <Box
      sx={{
        width: '100%',
        mt: '90px',
        mb: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        '@media (max-width: 1024px)': {
          mt: '60px',
          mb: '24px',
          gap: '24px',
        },
        '@media (max-width: 768px)': {
          mt: '40px',
          mb: '20px',
          gap: '20px',
        },
        '@media (max-width: 576px)': {
          mt: '32px',
          mb: '16px',
          gap: '16px',
        },
      }}
    >
      {/* Heading */}
      <Box sx={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        <Typography
          sx={{
            color: '#111',
            fontSize: '36px',
            fontWeight: '700',
            lineHeight: '120%',
            letterSpacing: '0.36px',
            '@media (max-width: 1024px)': {
              fontSize: '32px',
              letterSpacing: '0.32px',
            },
            '@media (max-width: 768px)': {
              fontSize: '28px',
              letterSpacing: '0.28px',
            },
            '@media (max-width: 576px)': {
              fontSize: '24px',
              letterSpacing: '0.24px',
            },
          }}
        >
          <span
            style={{
              background:
                'linear-gradient(90deg, #634DFD 20.81%, #BF48F7 40.69%)',
              backgroundAttachment: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Market
          </span>{' '}
          Summary
        </Typography>
        <Typography
          sx={{
            color: 'rgba(17,17,17,0.80)',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '150%',
            letterSpacing: '-0.16px',
            '@media (max-width: 768px)': {
              fontSize: '14px',
              letterSpacing: '-0.14px',
            },
            '@media (max-width: 576px)': {
              fontSize: '12px',
              letterSpacing: '-0.12px',
            },
          }}
        >
          The overall market capitalization of the crypto market is{' '}
          <span style={{ color: '#7248F7', fontWeight: '700' }}>€2.26T</span>.
          an increase of{' '}
          <span style={{ color: '#1FD773', fontWeight: '700' }}>+3.75%</span> in
          the last 24 hours
        </Typography>
      </Box>
      {/* Charts */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <StatsContainer isMainPage />
        <TechnicalsBanner
          bgColor="blue"
          coinName="Etherium"
          coinImg={bitcoinImg}
          width="auto"
          borderRadius="16px"
        />
        <Box sx={{
          '@media (max-width: 1024px)': {
            // display: 'none',
            overflow: 'hidden',
          },
        }}>
          <TechnicalsGraph isMainPage={true} />
        </Box>
      </Box>
      {/* Slider */}
      <Box sx={{ marginTop: '-32px', height: '60px' }}>
        <CryptoSlider />
      </Box>
    </Box>
  );
};

export default MarketSummary;
