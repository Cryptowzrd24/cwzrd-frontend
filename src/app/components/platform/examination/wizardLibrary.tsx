import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import mask from '../../.././../../public/images/platform/Mask-wizard.png';
import maskComplete from '../../../../../public/images/platform/Mask-wizard-Complete.png';
import Image from 'next/image';
const WizardLibrary = () => {
  const isTabView = useMediaQuery('(min-width: 978px)');
  const isSmallScreen = useMediaQuery('(min-width: 768px)');
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
          width: isTabView ? '637.5px' : '100%',
          height: isSmallScreen ? '352.5px' : '100%',
          flexDirection: isSmallScreen ? 'row' : 'column',
        }}
      >
        <Stack
          gap={1}
          sx={{
            paddingLeft: '48px',
            paddingTop: '68.75px',
            paddingBottom: '68.75px',
            padding: isSmallScreen ? '' : '36px 16px 0px',
            textAlign: isSmallScreen ? 'left' : 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '36px !important',
              lineHeight: '43.2px',
              color: 'rgba(17, 17, 17, 1)',
              fontWeight: 700,
              fontFamily: 'Sf Pro Display',
              textWrap: 'balance',

              '@media (max-width: 576px)': {
                fontSize: '24px !important',
                lineHeight: '120%',
                letterSpacing: '0.24px',
                textAlign: 'center',
              },
            }}
          >
            WZRD Library, packed with 26 books
          </Typography>
          <Typography
            sx={{
              fontWeight: '400px',
              fontSize: '13.5px !important',
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
          src={isSmallScreen ? mask : maskComplete}
          alt="mask"
          style={{
            borderRadius: 'none',
            width: isSmallScreen ? '421px' : '80%',
            height: isSmallScreen ? '278.48px' : '80%',
            padding: isSmallScreen ? '0' : '18px',
          }}
        />
      </Box>
    </>
  );
};

export default WizardLibrary;
