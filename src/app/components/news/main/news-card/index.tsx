import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface NewsCardProps {
  image: any;
  title: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, title, description }) => {
  return (
    <Box
      sx={{
        gap: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '350px',
        marginBottom: "5px",
        width: '290px',
        borderRadius: '16px',
        padding: '8px',
        boxShadow: '0px 4px 28px 0px #0000000D',
      }}
    >
      <Image alt="news" src={image.src} width={280} height={180} />
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '23.4px',
          paddingInline: '10px',
          flexShrink: 0,
        }}
        variant="body1"
      >
        {title ||
          'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip'}
      </Typography>
      <Typography
        sx={{
          fontWeight: '400',
          fontSize: '13px',
          lineHeight: '19px',
          paddingInline: '10px',
        }}
        variant="body2"
      >
        {description ||
          "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."}
      </Typography>
      <Box
        sx={{
          marginInline: '10px',
          width: '90%',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
          backgroundColor: 'rgb(243,243,243)',
        }}
      >
        <Typography
          sx={{ fontWeight: '500', fontSize: '11px', lineHeight: '14.3px' }}
        >{`06/06/2023 at 00:06 AM  |  John Smith`}</Typography>
      </Box>
    </Box>
  );
};

export default NewsCard;
