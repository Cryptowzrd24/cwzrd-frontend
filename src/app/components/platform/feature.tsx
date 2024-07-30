import { Stack, Typography } from '@mui/material';
import React from 'react';
import feature from '../../../../public/images/platform/feature.png';
import Image from 'next/image';
const Feature = () => {
  return (
    <>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '1070px',
          width: '100%',
          margin: 'auto',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '18px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: 2,
            mb: '12px',
          }}
        >
          features
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: '72px', lineHeight: '72px', mb: '16px' }}
        >
          Our Platform
          <span
            style={{
              backgroundImage:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginLeft: '12px',
            }}
          >
            Features
          </span>{' '}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '20px',
            fontWeight: '400',
            mb: '72px',
            textAlign: 'center',
            maxWidth: '860px',
            lineHeight: '30px',
          }}
        >
          Keep a detailed record of your trades and transactions with our trade
          tracker tool, providing valuable insights into your trading activity
          and performance over time.
        </Typography>
        <Image src={feature} alt="feature" width={1415} />
      </Stack>
    </>
  );
};

export default Feature;
