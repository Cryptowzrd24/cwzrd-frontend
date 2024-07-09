import React from 'react';

import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

interface TechnicalProps {
  id: string;
  date: string;
  title: string;
  desc: string;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  value1: string;
  value2: string;
  image: string;
}

const TechnicalCard: React.FC<TechnicalProps> = ({
  date,
  title,
  desc,
  icon1,
  icon2,
  value1,
  value2,
  image,
}) => {
  return (
    <Stack
      sx={{
        backgroundImage: `url('/images/technicals/cardBackground.png')`,
        backgroundSize: '115%',
        backgroundPosition: 'center',
        display: 'flex',
        borderRadius: '16px',
        padding: '16px',
        maxWidth: '394px',
        width: '100%',
        boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{ mt: '16px', mb: '12px', color: 'rgba(55, 97, 251, 1)' }}
      >
        {date}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: '8px',
          fontSize: '20px',
          fontWeight: '500',
          lineHeight: '22px',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          mb: '24px',
          color: 'rgba(17, 17, 17, 0.8)',
          fontWeight: '400',
          fontSize: '14px',
        }}
      >
        {desc}{' '}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          mb: '38px',
        }}
      >
        <Box
          sx={{
            padding: '8px 12px',
            border: '1px solid rgba(17, 17, 17, 0.1)',
            borderRadius: '100px',
            display: 'flex',
            cursor: 'pointer',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          {icon1}
          <span>{value1}</span>
        </Box>
        <Box
          sx={{
            padding: '8px 12px',
            border: '1px solid rgba(17, 17, 17, 0.1)',
            borderRadius: '100px',
            display: 'flex',
            cursor: 'pointer',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          {icon2}
          <span>{value2}</span>
        </Box>
      </Box>
      <Image
        src={image}
        alt="grah"
        width={380}
        height={200}
        style={{
          marginInline: 'auto',
        }}
      />
    </Stack>
  );
};

export default TechnicalCard;
