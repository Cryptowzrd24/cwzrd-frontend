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
        padding: '8px',
        maxWidth: '394px',
        width: '100%',
        boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
      }}
    >
      <div
        style={{
          padding: '8px',
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            mb: '8px',
            color: 'rgba(55, 97, 251, 1)',
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '0.8px',
          }}
        >
          {date}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            mb: '6px',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '15.4px',
            letterSpacing: '0.8px',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            mb: '8px',
            color: 'rgba(17, 17, 17, 0.8)',
            fontWeight: '400',
            fontSize: '11px',
            lineHeight: '16.5px',
          }}
        >
          {desc}{' '}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            mb: '8px',
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
              color: '#11111199',
            }}
          >
            {icon1}
            <span style={{ fontSize: '12px', fontWeight: '700' }}>
              {value1}
            </span>
          </Box>
          <Box
            sx={{
              padding: '8px 12px',
              // border: '1px solid rgba(17, 17, 17, 0.1)',
              borderRadius: '100px',
              display: 'flex',
              cursor: 'pointer',
              gap: '8px',
              alignItems: 'center',
              background:
                'linear-gradient(116.74deg, rgba(34, 200, 51, 0.1) -4.07%, rgba(34, 200, 51, 0.1) 100.68%)',
            }}
          >
            {icon2}
            <span
              style={{ fontSize: '12px', fontWeight: '700', color: '#11D269' }}
            >
              {value2}
            </span>
          </Box>
        </Box>
      </div>
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
