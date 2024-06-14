import React from 'react';
import TechnicalCardContent from './technicalCardContent';
import { Box, Typography } from '@mui/material';
import ArrowRightBlack from '../../../../public/icons/News-Letter/arrowRightBlack';
function Technicals() {
  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ mb: '4px', letterSpacing: 3 }}>
          TECHNICALS{' '}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" sx={{ maxWidth: '630px' }}>
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
          <Typography
            variant="h3"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              maxWidth: '630px',
            }}
          >
            Receive expert commentary, market trends, and technical analysis
            straight to your inbox
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: '72px', mb: '72px' }}>
        <TechnicalCardContent />
      </Box>
      <Box
        sx={{
          mt: '48px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            background: 'rgba(17, 17, 17, 0.05)',
            padding: '16px 24px 16px 32px',
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            borderRadius: '56px',
            cursor: 'pointer',
          }}
        >
          See All Technicals{' '}
          <span style={{ marginTop: '8px' }}>
            <ArrowRightBlack />
          </span>
        </Typography>
      </Box>
    </>
  );
}

export default Technicals;
