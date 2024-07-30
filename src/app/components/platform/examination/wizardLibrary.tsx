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
          borderRadius: '32px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          // maxWidth: '850px',
          maxWidth: '67.4%',
          width: '100%',
          padding: '62px 0 38px 64px',
        }}
      >
        <Stack gap={1} sx={{ maxWidth: '422px' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '48px',
              lineHeight: '57.6px',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            WZRD Library, packed with <br /> 26 books
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '400px',
              fontSize: '18px',
              lineHeight: '27px',
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
          style={{ borderRadius: 'none' }}
        />
      </Box>
    </>
  );
};

export default WizardLibrary;
