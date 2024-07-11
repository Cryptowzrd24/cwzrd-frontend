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
          padding: '8px 24px 8px 8px',
          borderRadius: '12px',
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
          backgroundImage: `url('/images/news-letter/corner.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top right',
          backgroundSize: '35%',
        }}
      >
        <Box height={160}>
          <Image
            src={img2}
            alt="main picture"
            width={300}
            height={160}
            className="rounded-lg"
          />
        </Box>
        <Stack sx={{ position: 'relative', zIndex: '1000', width: '61%' }}>
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
            <Typography variant="h5" sx={{ mb: '4px', width: '100%' }}>
              {heading}
            </Typography>
            <Typography variant="body2" sx={{ mb: '10px' }}>
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              background: '#1111110D',
              padding: '12px 16px',
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
