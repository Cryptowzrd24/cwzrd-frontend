import { Box, Typography } from '@mui/material';
import React from 'react';
// import ImproveSkillsAndStrategiesImg from '../../../../../public/images/home/trading_potential/improve_skills_strategies.svg';

const ImproveSkillsAndStrategies = () => {
  return (
    <Box
      sx={{
        background: 'white',
        height: '100%',
        width: '100%',
        backgroundImage:
          "url('/images/home/trading_potential/improve_skills_strategies.svg')",
        backgroundPosition: 'bottom',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        borderRadius: '24px',
        aspectRatio: { xs: '1', md: 'auto' },
      }}
    >
      <Box
        sx={{
          width: '215px',
          height: '84px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '20px',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '1.3',
            fontWeight: '400',
            width: '100%',
          }}
        >
          Professional Mentorship
        </Typography>
        <Typography
          sx={{
            width: '100%',
            fontWeight: '700',
            fontSize: '24px',
            lineHeight: '1.2',
          }}
        >
          Improve your skills and strategies
        </Typography>
      </Box>
    </Box>
  );
};

export default ImproveSkillsAndStrategies;
