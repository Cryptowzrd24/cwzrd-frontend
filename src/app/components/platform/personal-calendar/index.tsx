import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import iphone from '../../../../../public/images/platform/iPhone.png';
import ExportCard from './exportCard';
const PersonalCalendar = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            padding: '77px 68px 0px 94px',
            background: 'rgba(255, 255, 255, 1)',
            borderRadius: '32px',
            maxWidth: '690px',
            width: '100%',
            height: '514px',
            boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Image src={iphone} alt="iphone" width={292} height={514} />
            <Stack>
              <Typography
                variant="h1"
                sx={{
                  fontSize: '48px',
                  fontWeight: '700',
                  lineHeight: '57.6px',
                  color: 'rgba(17, 17, 17, 1)',
                  maxWidth: '324px',
                  mb: '64px',
                }}
              >
                Personal Calendar: Keep Track of Everything
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '20.8px',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                Your Life, Your Schedule
              </Typography>
            </Stack>
          </Box>
        </Box>
        <ExportCard />
      </Box>
    </>
  );
};

export default PersonalCalendar;
