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
        background: 'linear-gradient(117deg, #634DFD -4.07%, #7E44F1 100.68%), #EDF0FF',
        pt: { xs: '32px', sm: '40px', md: '60px', lg: '80px' },
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
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: { xs: '40px', lg: 0 },
          overflow: 'hidden',
        }}
      >
        {/* Left side: Text content */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            px: { xs: '20px', md: '72px' },
            order: { xs: 1, md: 0 },
          }}
        >
          <JoinNow />
        </Box>

        {/* Right side: Image with overlays */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
            order: { xs: 0, md: 1 },
          }}
        >
          {/* Image container */}
          <Box
            sx={{
              width: '100%',
              maxWidth: '650px',
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
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                inset: 0,
              }}
            />
            
            {/* Overlays positioned relative to image */}
            <Check />
            <CourseBox />
            <NoOfUser />
          </Box>

          {/* Information cards below image on small screens */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <InformationCards />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CTA;
