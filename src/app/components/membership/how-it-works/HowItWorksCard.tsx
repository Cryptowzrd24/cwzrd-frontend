import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface HowItWorksCardProps {
  step: string;
  title: string;
  description: string;
  imagePath: string;
  bg?: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  step,
  title,
  description,
  imagePath,
  bg,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: `${bg ? bg : 'rgba(31,31,31,1)'}`,
        borderRadius: '24px',
        maxWidth: '305px',
        width: '100%',
        padding: '32px 24px 0 24px',
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
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            maxWidth: '260px',
            color: 'rgba(255,255,255,1)',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            fontFamily: 'SF Pro Text',
            textAlign: 'center',
          }}
        >
          {description}
        </Typography>
      </Box>

      <Box
        sx={{
          height: '100%',
          position: 'relative',
          aspectRatio: '1',
          width: '100%',
        }}
      >
        <Image
          src={imagePath}
          alt="iphone"
          fill
          style={{
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom',
          }}
        />
      </Box>
    </Box>
  );
};

export default HowItWorksCard;
