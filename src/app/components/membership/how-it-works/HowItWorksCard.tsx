import { Box, Typography } from '@mui/material';
import React from 'react';

interface HowItWorksCardProps {
  step: string;
  title: string;
  description: string;
  imagePath: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  step,
  title,
  description,
  imagePath,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        borderRadius: '24px',
        maxWidth: '305px',
        minHeight: '440px',
        width: '100%',
        padding: '32px 24px 0 24px',
        marginRight: '16px',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          background: 'rgba(255,255,255,0.1)',
          color: 'rgba(255,255,255,1)',
          padding: '12px',
          borderRadius: '56px',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '16px',
          mb: '10px',
          fontFamily: 'SF Pro Text',
        }}
      >
        {step}
      </Box>

      <Box
        sx={{
          minHeight: '80px',
          mb: '32px',
        }}
      >
        <Typography
          sx={{
            color: 'rgba(255,255,255,1)',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '24px',
            mb: '4px',
            fontFamily: 'SF Pro Display',
            textAlign: 'center',
            '@media (max-width:660px)': {
              fontSize: '18px',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            maxWidth: '260px',
            color: 'rgba(255,255,255,0.8)',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            fontFamily: 'SF Pro Text',
            textAlign: 'center',
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default HowItWorksCard;
