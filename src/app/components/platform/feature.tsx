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
          maxWidth: { xs: '100%', md: '1070px' },
          width: { xs: 'auto', sm: '100%' },
          margin: 'auto',
          padding: { xs: '16px', md: '0' },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '12px', md: '14px' },
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
          sx={{
            fontSize: { xs: '24px', md: '32px' },
            lineHeight: { xs: '28.8px', md: '38.4px' },
            mb: '12px',
            textAlign: 'center',
          }}
        >
          Our Platform
          <span
            style={{
              backgroundImage:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginLeft: '7px',
            }}
          >
            Features
          </span>{' '}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '12px', md: '14px' },
            fontWeight: '400',
            mb: '24px',
            textAlign: 'center',
            maxWidth: '850px',
            lineHeight: { xs: '18px', md: '21px' },
            color: 'rgba(17, 17, 17, 0.8)',
          }}
        >
          Keep a detailed record of your trades and transactions with our trade
          tracker tool, providing valuable insights into your trading activity
          and performance over time.
        </Typography>
        <Image
          src={feature}
          alt="feature"
          width={1079}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </Stack>
    </>
  );
};

export default Feature;
