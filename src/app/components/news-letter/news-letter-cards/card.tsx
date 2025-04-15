import Image from 'next/image';
import React from 'react';

import { Box, Stack, Typography } from '@mui/material';

interface CardProps {
  img1: string;
  img2: string;
  title1: string;
  title2: string;
  title3: string;
  heading: string;
  description: string;
  date: string;
  author: string;
}

const Card: React.FC<CardProps> = ({ img2, heading, date, author }) => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          gap: '12px',
          padding: '8px 24px 8px 8px',
          borderRadius: '16px',
          backgroundColor: '#fff',
          boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',

          '@media (max-width: 978px)': {
            width: '100%',
          },

          '@media (max-width: 576px)': {
            padding: '8px',
            width: 'auto',
          },
        }}
      >
        <Box height={106}>
          <Image
            src={img2}
            alt="main picture"
            width={150}
            height={106}
            className="rounded-lg"
          />
        </Box>
        <Stack sx={{ position: 'relative', zIndex: '1000', width: '100%' }}>
          <Box
            sx={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
              marginBlock: '8px 6px',
            }}
          >
            {['TRADE', 'BITCOIN', 'CRYPTO'].map((title) => (
              <Box
                sx={{
                  minWidth: 52,
                  height: 17,
                  background:
                    'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%)',
                  borderRadius: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    background:
                      'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontSize: '10px !important',
                    fontWeight: '500',
                    lineHeight: '13px',
                    letterSpacing: '1px',
                    paddingInline: '8px',
                  }}
                >
                  {title}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{
                mb: '6px',
                marginLeft: '6px',
                width: '90%',
                '@media (max-width: 576px)': {
                  width: '100%',
                  fontSize: '14px !important',
                },
              }}
            >
              {heading}
            </Typography>
          </Box>
          <Box
            sx={{
              background: '#1111110D',
              padding: '6px 12px',
              borderRadius: '8px',
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
              {date} | {author}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Card;
