import React from 'react';
import TechnicalCardContent from './technicalCardContent';
import { Box, Typography } from '@mui/material';
import ArrowRightBlack from '../../../../public/icons/News-Letter/arrowRightBlack';

function Technicals() {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '16px', md: '0px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <div>
            <Typography
              variant="h4"
              sx={{
                mb: '4px',
                letterSpacing: 3,
                fontSize: '16px',
                fontWeight: '400',

                '@media (max-width: 576px)': {
                  fontSize: '12px !important',
                  fontWeight: '400 !important',
                  lineHeight: '130%',
                  letterSpacing: '1.2px',
                },
              }}
            >
              TECHNICALS{' '}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                maxWidth: '630px',
                '@media (max-width: 576px)': {
                  fontSize: '24px !important',
                  fontWeight: '700 !important',
                  lineHeight: '120%',
                  letterSpacing: '0.24px',
                },
              }}
            >
              Crypto
              <span
                style={{
                  background:
                    'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  paddingLeft: '6px',
                }}
              >
                Technicals
              </span>{' '}
            </Typography>
          </div>
          <Typography
            variant="h3"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              maxWidth: { xs: '80%', md: '630px' },
              textAlign: { xs: 'center', md: 'left' },
              fontSize: { xs: '12px', md: '16px' },
              fontWeight: { xs: '400', md: '700' },
              letterSpacing: { xs: '0.24px', md: '0.24px' },
              lineHeight: { xs: '150%', md: '30px' },
              margin: { xs: '0px auto', md: '0 45px 0 0' },
            }}
          >
            Receive expert commentary, market trends, and technical analysis
            straight to your inbox
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: '16px', width: '100%' }}>
        <TechnicalCardContent />
      </Box>
      <Box
        sx={{
          mt: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          overflow: 'hidden',

          '@media (max-width: 576px)': {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            background: 'rgba(17, 17, 17, 0.05)',
            padding: '11px 16px 11px  16px',
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '14px',
            alignItems: 'center',
            gap: '4px',
            borderRadius: '56px',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            lineHeight: 1,
            ':hover': {
              background: 'rgba(17, 17, 17, 0.2)',
            },
          }}
        >
          See All Technicals
          <ArrowRightBlack />
        </Typography>
      </Box>
    </Box>
  );
}

export default Technicals;
