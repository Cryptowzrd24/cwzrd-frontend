import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface FeatureHeaderCardProps {
  imagePath: string;
  title: string;
}

const FeatureHeaderCard: React.FC<FeatureHeaderCardProps> = ({
  imagePath,
  title,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
      }}
    >
      <Image src={imagePath} width={24} height={24} alt="Signals" />

      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '18px',
          color: 'rgba(255, 255, 255, 1)',
          fontFamily: 'Sf Pro Text',
          '@media (max-width:660px)': {
            fontSize: '12px',
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default FeatureHeaderCard;
