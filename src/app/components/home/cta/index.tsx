import { Box } from '@mui/material';
import React from 'react';
import Check from './Check';
import CourseBox from './CourseBox';
import InformationCards from './InformationCards';
import NoOfUser from './NoOfUser';
import JoinNow from './JoinNow';

const CTA = () => {
  return (
    <Box
      sx={{
        background:
          'linear-gradient(117deg, #634DFD -4.07%, #7E44F1 100.68%), #EDF0FF',
        pt: '80px',
        pb: '30px',
        '@media (max-width: 1024px)': {
          pt: '60px',
          pb: '24px',
        },
        '@media (max-width: 768px)': {
          pt: '40px',
          pb: '20px',
        },
        '@media (max-width: 576px)': {
          pt: '32px',
          pb: '16px',
        },
      }}
    >
      <Box
        sx={{
          height: '670px',
          width: '1290px',
          borderRadius: '24px',
          background: '#FFF',
          mx: 'auto',
          position: 'relative',
          overflow: 'hidden',
          '@media (max-width: 1024px)': {
            width: '90%',
            height: '600px',
            borderRadius: '20px',
          },
          '@media (max-width: 768px)': {
            width: '95%',
            height: '500px',
            borderRadius: '16px',
          },
          '@media (max-width: 576px)': {
            width: '98%',
            height: '400px',
            borderRadius: '12px',
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: 'url("/images/mainScreenLaptop.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '450px',
            width: '650px',
            position: 'absolute',
            top: '70px',
            right: '0',
            '@media (max-width: 1024px)': {
              height: '350px',
              width: '500px',
              top: '50px',
            },
            '@media (max-width: 768px)': {
              height: '250px',
              width: '350px',
              top: '30px',
            },
            '@media (max-width: 576px)': {
              height: '200px',
              width: '280px',
              top: '20px',
            },
          }}
        />
        <Check />
        <CourseBox />
        <InformationCards />
        <NoOfUser />
        <JoinNow />
      </Box>
    </Box>
  );
};

export default CTA;
