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

const Card: React.FC<CardProps> = ({
  img1,
  img2,
  title1,
  title2,
  title3,
  heading,
  description,
  date,
  author,
}) => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          gap: '24px',
          padding: '8px',
          borderRadius: '12px',
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
          mt: '12px',
        }}
      >
        <Box>
          <Image
            src={img2}
            alt="main picture"
            width={300}
            height={160}
            className="rounded-lg"
          />
        </Box>
        <Stack sx={{ mb: '10px', position: 'relative', zIndex: '1000' }}>
          <Box
            sx={{
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
              mb: '10px',
            }}
          >
            <Box
              sx={{
                padding: '5px 12px',
                background: '#1111110D',
                borderRadius: '100px',
                display: 'inline-block',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  background:
                    'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '10px',
                  fontWeight: '500',
                }}
              >
                {title1}
              </Typography>
            </Box>
            <Box
              sx={{
                padding: '5px 12px',
                background: '#1111110D',
                borderRadius: '100px',
                display: 'inline-block',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  background:
                    'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '10px',
                  fontWeight: '500',
                }}
              >
                {title2}
              </Typography>
            </Box>
            <Box
              sx={{
                padding: '5px 12px',
                background: '#1111110D',
                borderRadius: '100px',
                display: 'inline-block',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  background:
                    'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '10px',
                  fontWeight: '500',
                }}
              >
                {title3}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="h5"
              sx={{ mb: '10px', maxWidth: '458px', width: '100%' }}
            >
              {heading}
            </Typography>
            <Typography variant="body2" sx={{ mb: '10px' }}>
              {description}
            </Typography>
          </Box>
          <Box
            sx={{ background: '#1111110D', padding: '12px 16px', mb: '10px' }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: '500' }}>
              {date} | {author}
            </Typography>
          </Box>
        </Stack>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            transform: {
              xs: 'translateX(25%) translateY(-25%)',
              sm: 'translateX(0) translateY(0)',
            },
            zIndex: 0,
          }}
        >
          <Image
            src={img1}
            alt="picture"
            width={405}
            height={200}
            style={{
              borderRadius: '12px',
              background: 'transparent',
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Card;
