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
