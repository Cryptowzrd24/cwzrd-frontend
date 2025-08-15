import { Box } from '@mui/material';
import React from 'react';
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
        pt: { xs: '60px', sm: '60px', md: '60px', lg: '80px' },
        pb: { xs: '16px', sm: '20px', md: '24px', lg: '30px' },
        px: { xs: '12px', lg: 0 },
      }}
    >
      <Box
        sx={{
          background: '#FFF',
          mx: 'auto',
          width: { xs: '100%', lg: '1290px' },
          height: { xs: 'auto', lg: '670px' },
          borderRadius: { xs: '12px', sm: '16px', md: '20px', lg: '24px' },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: '40px', lg: 0 },
          padding: { xs: '20px', md: '20px 0px 20px 20px' },
          boxSizing: 'border-box',
          flexDirection: { xs: 'column', lg: 'row' },
          // overflow: 'hidden',
        }}
      >
        {/* Left side: Text content */}
        <Box
          sx={{
            width: { xs: '100%', lg: '50%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: '20px', md: '72px' },
            // order: { xs: 1, md: 0 },
          }}
        >
          <JoinNow />
        </Box>

        {/* Right side: Image with overlays */}
        <Box
          sx={{
            width: { xs: '100%', lg: '50%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
            // order: { xs: 0, md: 1 },
            height: '100%',
          }}
        >
          {/* Image container */}
          <Box
            sx={{
              width: '100%',
              maxWidth: { lg: '650px', xs: '585px' },
              height: '450px',
              position: 'relative',
              mx: 'auto',
            }}
          >
            {/* Background image */}
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url("/images/mainScreenLaptop.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: { lg: 'contain', xs: 'cover' },
                backgroundPosition: 'center',
              }}
            />

            {/* Overlays positioned relative to image */}
            <CourseBox />
            <NoOfUser />
          </Box>

          {/* Information cards below image on small screens */}
          <Box
            sx={{ display: { xs: 'block', maxWidth: '580px', width: '100%' } }}
          >
            <InformationCards />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CTA;
