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
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}
    >
      {/* Heading */}
      <Box sx={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        <Typography
          sx={{
            color: '#111',
            fontSize: { lg: '36px', md: '32px', sm: '28px', xs: '24px' },
            fontWeight: '700',
            lineHeight: '120%',
            letterSpacing: { lg: '0.36px', md: '0.32px', sm: '0.28px', xs: '0.24px' },
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
            fontSize: { lg: '16px', md: '14px', sm: '12px', xs: '10px' },
            fontWeight: '400',
            lineHeight: '150%',
            letterSpacing: { lg: '-0.16px', md: '-0.14px', sm: '-0.12px', xs: '-0.10px' },
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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px',width:'100%' }}>
        <StatsContainer isMainPage />
        <Box sx={{
          width: {xs:'100%',sm:'100%',md:'100%',lg:'100%',xl:'100%'},
          boxSizing:'border-box',
          overflow:'hidden'
        }}>
        <TechnicalsBanner
          bgColor="blue"
          coinName="Etherium"
          coinImg={bitcoinImg}
          width="100%"
          borderRadius="16px"
          isMainPage
          />
          </Box>
        <Box sx={{
          overflow: 'hidden',
          width: '100%'
        }}>
          <TechnicalsGraph isMainPage={true} />
        </Box>
      </Box>
      {/* Slider */}
      <Box sx={{ marginTop: '-32px', width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CryptoSlider />
      </Box>
    </Box>
  );
};

export default MarketSummary;
