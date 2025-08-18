import React from 'react';
import { Box, Typography } from '@mui/material';

const ExpertLessonsCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '100%', lg: '311px' },
        minHeight: { xs: '280px', sm: '300px', lg: '311px' },
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        backgroundImage:
          'url(/images/home/trading_potential/expert_lessons_bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        aspectRatio: { xs: '1', sm: 3 / 1, md: '1' },
      }}
    >
      {/* bottom-left text */}
      <Box
        sx={{
          color: 'white',
          padding: '20px',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '16px' },
            fontWeight: 700,
            lineHeight: '19.2px',
            color: 'white',
          }}
        >
          Expert Lessons on Trading
        </Typography>
        <Typography
          sx={{
            mt: '8px',
            fontSize: { xs: '14px' },
            lineHeight: '18.2px',
            color: 'white',
          }}
        >
          Learn from the best with expert-led lessons on trading. Gain the
          knowledge you need to execute smart strategies and achieve long-term
          success.
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpertLessonsCard;
