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
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: 2,
            lineHeight: '18.2px',
            mb: '8px',
          }}
        >
          features
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: '32px', lineHeight: '38.4px', mb: '12px' }}
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
            fontSize: '14px',
            fontWeight: '400',
            mb: '36px',
            textAlign: 'center',
            maxWidth: '850px',
            lineHeight: '21px',
            color: 'rgba(17, 17, 17, 0.8)',
          }}
        >
          Keep a detailed record of your trades and transactions with our trade
          tracker tool, providing valuable insights into your trading activity
          and performance over time.
        </Typography>
        <Image src={feature} alt="feature" width={1079} />
      </Stack>
    </>
  );
};

export default Feature;
