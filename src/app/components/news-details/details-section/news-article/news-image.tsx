import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

function NewsImage({ image, subheadingText }: any) {
  return (
    <Box>
      <Box
        sx={{
          height: '400px',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={image}
          alt="img"
          width={795}
          height={430}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'scale(1.1)',
          }}
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '20px',
          fontFamily: 'Sf Pro Display',
          lineHeight: '29px',
          color: 'rgba(17, 17, 17, 0.8)',
          marginTop: '16px',
        }}
      >
        {subheadingText}
      </Typography>
    </Box>
  );
}

export default NewsImage;
