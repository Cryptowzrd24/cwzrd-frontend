import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Check from '../../../../../public/icons/membership/check.svg';

interface FeaturesColumnProps {
  features: string[];
}

const FeaturesColumn: React.FC<FeaturesColumnProps> = ({ features }) => {
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '50%',
        '@media (max-width:665px)': {
          gap: '8px',
        },
      }}
    >
      {features.map((feature, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <Image src={Check} alt="tick" />
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '18px',
              '@media (max-width:885px)': {
                fontSize: '12px',
                lineHeight: '15px',
              },
              '@media (max-width:665px)': {
                fontSize: '11px',
                lineHeight: '13px',
              },
            }}
          >
            {feature}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default FeaturesColumn;
