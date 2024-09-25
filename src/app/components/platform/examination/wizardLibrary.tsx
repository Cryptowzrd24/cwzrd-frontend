import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import mask from '../../.././../../public/images/platform/Mask-wizard.png';
import Image from 'next/image';
const WizardLibrary = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          width: '637.5px',
          height: '352.5px',
        }}
      >
        <Stack
          gap={1}
          sx={{
            paddingLeft: '48px',
            paddingTop: '68.75px',
            paddingBottom: '68.75px',
          }}
        >
          <Typography
            sx={{
              fontSize: '36px',
              lineHeight: '43.2px',
              color: 'rgba(17, 17, 17, 1)',
              fontWeight: 700,
              fontFamily: 'Sf Pro Display',
              textWrap: 'balance',
            }}
          >
            WZRD Library, packed with 26 books
          </Typography>
          <Typography
            sx={{
              fontWeight: '400px',
              fontSize: '13.5px',
              lineHeight: '20.25px',
              color: 'rgba(17, 17, 17, 0.8)',
            }}
          >
            Dive into a collection of 26 books covering diverse aspects of the
            cryptocurrency market, ranging from trading principles to key
            concepts in crypto.{' '}
          </Typography>
        </Stack>
        <Image
          src={mask}
          alt="mask"
          width={421}
          height={278.48}
          style={{ borderRadius: 'none' }}
        />
      </Box>
    </>
  );
};

export default WizardLibrary;
