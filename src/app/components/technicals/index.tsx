import React from 'react';
import TechnicalCardContent from './technicalCardContent';
import { Box, Typography } from '@mui/material';
import ArrowRightBlack from '../../../../public/icons/News-Letter/arrowRightBlack';

function Technicals() {
  return (
    <>
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
              }}
            >
              TECHNICALS{' '}
            </Typography>
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
          </div>
          <Typography
            variant="h3"
            sx={{
              color: 'rgba(17, 17, 17, 0.8)',
              maxWidth: '630px',
              lineHeight: '30px',
            }}
          >
            Receive expert commentary, market trends, and technical analysis
            straight to your inbox
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginTop: '16px', width: '140%' }}>
        <TechnicalCardContent />
      </Box>
      <Box
        sx={{
          mt: '24px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
    </>
  );
}

export default Technicals;
