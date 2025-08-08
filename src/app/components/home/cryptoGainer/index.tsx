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
        '@media (max-width: 1024px)': {
          pt: '24px',
          mb: '36px',
          gap: '20px',
        },
        '@media (max-width: 768px)': {
          pt: '20px',
          mb: '28px',
          gap: '16px',
        },
        '@media (max-width: 576px)': {
          pt: '16px',
          mb: '24px',
          gap: '12px',
        },
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        gap: '24px',
        '@media (max-width: 1024px)': {
          flexDirection: 'column',
          gap: '16px',
        },
        '@media (max-width: 768px)': {
          gap: '12px',
        },
        '@media (max-width: 576px)': {
          gap: '8px',
        },
      }}>
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
            '@media (max-width: 1024px)': {
              padding: '12px 8px 8px',
              borderRadius: '12px',
              gap: '12px',
            },
            '@media (max-width: 768px)': {
              padding: '10px 6px 6px',
              borderRadius: '10px',
              gap: '10px',
            },
            '@media (max-width: 576px)': {
              padding: '8px 4px 4px',
              borderRadius: '8px',
              gap: '8px',
            },
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
                '@media (max-width: 1024px)': {
                  fontSize: '20px',
                  letterSpacing: '0.20px',
                },
                '@media (max-width: 768px)': {
                  fontSize: '18px',
                  letterSpacing: '0.18px',
                },
                '@media (max-width: 576px)': {
                  fontSize: '16px',
                  letterSpacing: '0.16px',
                },
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
                  '@media (max-width: 768px)': {
                    fontSize: '12px',
                    lineHeight: '16px',
                  },
                  '@media (max-width: 576px)': {
                    fontSize: '10px',
                    lineHeight: '14px',
                  },
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
                  '@media (max-width: 768px)': {
                    ml: '8px',
                  },
                  '@media (max-width: 576px)': {
                    ml: '6px',
                  },
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
            '@media (max-width: 1024px)': {
              padding: '12px 8px 8px',
              borderRadius: '12px',
              gap: '12px',
            },
            '@media (max-width: 768px)': {
              padding: '10px 6px 6px',
              borderRadius: '10px',
              gap: '10px',
            },
            '@media (max-width: 576px)': {
              padding: '8px 4px 4px',
              borderRadius: '8px',
              gap: '8px',
            },
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
                '@media (max-width: 1024px)': {
                  fontSize: '20px',
                  letterSpacing: '0.20px',
                },
                '@media (max-width: 768px)': {
                  fontSize: '18px',
                  letterSpacing: '0.18px',
                },
                '@media (max-width: 576px)': {
                  fontSize: '16px',
                  letterSpacing: '0.16px',
                },
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
                  '@media (max-width: 768px)': {
                    fontSize: '12px',
                    lineHeight: '16px',
                  },
                  '@media (max-width: 576px)': {
                    fontSize: '10px',
                    lineHeight: '14px',
                  },
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
                  '@media (max-width: 768px)': {
                    ml: '8px',
                  },
                  '@media (max-width: 576px)': {
                    ml: '6px',
                  },
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
