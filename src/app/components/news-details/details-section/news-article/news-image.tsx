import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Twitter from '../../../../../../public/icons/twitter';
import Facebook from '../../../../../../public/icons/facebook';
import LinkedIn from '../../../../../../public/icons/linkedIn';
import Mail from '../../../../../../public/icons/mail';

function NewsImage({
  image,
  subheadingText,
  isArticleDetails,
  isSocialIcon = false,
}: {
  image: any;
  subheadingText: any;
  isArticleDetails?: boolean;
  isSocialIcon?: boolean;
}) {
  const isTabView = useMediaQuery('(max-width: 978px)');
  return (
    <Box>
      <Box
        sx={{
          height: { xs: '200px', md: '400px' },
          width: '100%',
          maxWidth: '795px',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={image}
          alt="img"
          layout="responsive"
          width={795}
          height={430}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'scale(1.1)',
          }}
        />
      </Box>
      {isSocialIcon && isTabView && (
        <Box
          sx={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            alignItems: 'center',
            mt: '12px',
          }}
        >
          <Twitter />
          <Facebook />
          <LinkedIn />
          <Mail />
        </Box>
      )}
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: isArticleDetails ? '16px' : '18.5px',
          fontFamily: 'Sf Pro Display',
          lineHeight: isArticleDetails ? '24px' : '27px',
          color: 'rgba(17, 17, 17, 0.8)',
          marginTop: '12px',
        }}
      >
        {subheadingText}
      </Typography>
    </Box>
  );
}

export default NewsImage;
