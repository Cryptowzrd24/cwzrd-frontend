import React from 'react';
import { Box, Typography } from '@mui/material';
import ExpertLessonsIcon from '../../../../../../public/images/home/benefits-section/exprt-trading-lesson.png';
import Image from 'next/image';

const ExpertLessonsCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 'calc(32% - 12px)' },
        height: { xs: 'auto', lg: '311px' },
        minHeight: { xs: '280px', sm: '300px', lg: '311px' },
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      {/* blue card background with radial glow */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: '16px',
          backgroundImage: 'url(/images/home/benefits-section/export_lessons_bg.png)',
        }}
      />

      {/* centered glowing screen icon */}
      <Box sx={{ position: 'absolute', left: '50%', top: '30%', transform: 'translate(-50%, -50%)' }}>
        <Image src={ExpertLessonsIcon} alt="Expert Lessons" width={151} height={153} />
      </Box>

      {/* bottom-left text */}
      <Box sx={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px', color: 'white' }}>
        <Typography sx={{ fontSize: { xs: '16px', sm: '16px' }, fontWeight: 700, lineHeight: '19.2px', color:'white' }}>
          Expert Lessons on Trading
        </Typography>
        <Typography sx={{ mt: '8px', fontSize: { xs: '13px', sm: '14px' }, lineHeight: '18.2px',color:'white' }}>
          Learn from the best with expert-led lessons on trading. Gain the knowledge you need to execute smart strategies and achieve long-term success.
        </Typography>
      </Box>
    </Box>
  );
};

export default ExpertLessonsCard;

