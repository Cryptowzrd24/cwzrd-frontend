import React from 'react';
import MarketAnaylsisBanner from '../../banners/marketAnaylsisBanner';
import CryptoInfo from '../cryptoInfo';
import { Box, Typography } from '@mui/material';
import { ReadMoreIcon } from '../../../../../public/icons/readMoreIcon';

const CryptoGainer = () => {
  return (
    <Box
      sx={{
        pt: '30px',
        mb: '45px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      <Box sx={{ display: 'flex', gap: '24px' }}>
        <Box
          sx={{
            padding: '16px 12px 12px',
            borderRadius: '16px',
            border: '0.5px solid #FFF',
            background: 'rgba(255, 255, 255, 0.40)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
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
              Top{' '}
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                5 Crypto
              </span>
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
                <ReadMoreIcon isMainPage={true} />
              </Box>
            </Box>
          </Box>
          {/* Cards here */}
          <CryptoInfo type="crypto" />
        </Box>
        <Box
          sx={{
            padding: '16px 12px 12px',
            borderRadius: '16px',
            border: '0.5px solid #FFF',
            background: 'rgba(255, 255, 255, 0.40)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            flex: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
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
              Top{' '}
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Gainers
              </span>
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
          <CryptoInfo type="gain" />
        </Box>
      </Box>
      <MarketAnaylsisBanner />
    </Box>
  );
};

export default CryptoGainer;
