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
    <>
      <Stack
        sx={{
          background: `
        linear-gradient(to right, rgba(55, 169, 251, 0.1), rgba(55, 169, 251, 0) 50%),
        linear-gradient(to left, rgba(55, 169, 251, 0.1), rgba(55, 169, 251, 0) 50%)
      `,
          backgroundSize: '100% 50%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top, bottom',
          display: 'flex',
          borderRadius: '16px',
          padding: '8px 16px',
          gap: '8px',
          maxWidth: '394px',
          width: '100%',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 7px 29px 0px',
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ mt: '32px', mb: '8px', color: 'rgba(55, 97, 251, 1)' }}
        >
          {date}
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: '8px', fontSize: '20px', fontWeight: '500' }}
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
            gap: '12px',
            mb: '34px',
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
        <Image src={image} alt="grah" width={362} height={200} />
      </Stack>
    </>
  );
};

export default TechnicalCard;
