import { Box, Chip, Typography } from '@mui/material';
import PeopleImage from '../../../../../../public/images/news-letter/people.png';
import Image from 'next/image';
import React from 'react';

interface TrendingNewsCardProps {
  image: any;
  title: string;
  description: string;
}

const TrendingNewsCard: React.FC<TrendingNewsCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '350px',
        width: '290px',
        borderRadius: '16px',
        padding: '8px',
        gap: 1,
        overflow: 'hidden',
      }}
    >
      <Chip
        label={
          <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color:"white",
                fontSize: '14px',
                fontWeight: '400',
                lineHeight:'20.8px',
                background:
                'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              paddingInline:"5px",
              paddingBlock:"2px",
              }}
            >
              <Image
                src={PeopleImage.src}
                height={15}
                width={15}
                alt="people watching image"
              />
              {'374,039'}
            </Box>
        }
        sx={{
          position: 'absolute',
          top: 16,
          right: 18,
          fontWeight: 'bold',
        }}
      />

      <Box>
        <Image alt="news" src={image.src} width={280} height={180} />
      </Box>
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '23.4px',
          paddingInline: '10px',
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
          justifyContent: 'start',
          borderRadius: '12px',
        }}
      >
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '18.2px',
          }}
        >{`06/06/2023 at 00:06 AM  |  John Smith`}</Typography>
      </Box>
    </Box>
  );
};

export default TrendingNewsCard;
