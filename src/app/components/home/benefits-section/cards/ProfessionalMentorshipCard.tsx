import React from 'react';
import { Box, Typography } from '@mui/material';
import ProfessionalMentorshipIcon from '../../../../../../public/images/home/benefits-section/ChalkboardTeacher.svg';
import Image from 'next/image';

const ProfessionalMentorshipCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md:'calc(40% - 12px)' },
        height: { xs: 'auto', lg: '311px' },
        minHeight: { xs: '280px', sm: '300px', lg: '311px' },
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      {/* teal background */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/home/benefits-section/professional_mentorship_bg.png)',
        }}
      />

      {/* circular badge + icon */}
      <Box
        sx={{
          position: 'absolute',
          top: '28%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 88,
          height: 88,
          borderRadius: '9999px',
          background: 'rgba(255,255,255,0.20)',
          border: '1px solid rgba(255,255,255,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
        }}
      >
        <Image src={ProfessionalMentorshipIcon} alt="professional-mentorship" width={64} height={64} />
      </Box>  

      {/* centered text */}
      <Box
        sx={{
          position: 'absolute',
          top: '56%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '420px',
          maxWidth: 'calc(100% - 40px)',
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: '18px', sm: '20px' }, fontWeight: 700, lineHeight: '24px',color:'white' }}>
          Professional Mentorship
        </Typography>
        <Typography sx={{ mt: '8px', fontSize: { xs: '13px', sm: '14px' }, lineHeight: '20px', opacity: 0.95, color:'white' }}>
          Receive direct mentorship from experienced traders. Our professional guidance ensures you have the support needed to improve your skills and strategies.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfessionalMentorshipCard;

