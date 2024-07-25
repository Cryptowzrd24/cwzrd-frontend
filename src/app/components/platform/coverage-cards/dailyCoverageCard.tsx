'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import exam from '../../../../../public/images/platform/daily-coverage.png';
import Image from 'next/image';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';
const DailyCoverageCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/images/platform/examination.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '32px 56px 80px 32px',
          width: '322px',
          height: '358px',
          borderRadius: '32px',
          position: 'relative',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            textTransform: 'uppercase',
            mb: '32px',
            letterSpacing: '1px',
          }}
        >
          Daily Coverage
        </Typography>
        <Box
          sx={{
            paddingLeft: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image src={exam} alt="trade" width={150} height={150} />
          {active ? (
            <Typography
              variant="h1"
              sx={{
                fontSize: '40px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '35px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '44px',
                textAlign: 'center',
              }}
            >
              Daily Coverage on over 25 Cryptocurrencies{' '}
            </Typography>
          ) : (
            <Typography
              variant="h1"
              sx={{
                fontSize: '40px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '35px',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '44px',
                textAlign: 'center',
              }}
            >
              Daily Coverage on over 25 Cryptocurrencies{' '}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '24px',
            bottom: '28px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              background: '#FFFFFF',
              borderRadius: '100px',
              cursor: 'pointer',
            }}
            onClick={handleClick}
          >
            <PlusIcon />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DailyCoverageCard;
