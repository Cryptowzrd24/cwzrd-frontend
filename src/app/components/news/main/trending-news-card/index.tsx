import { Box, Chip, Typography } from '@mui/material';
import PeopleImage from '../../../../../../public/images/news-letter/people.svg';
import Image from 'next/image';
import React from 'react';

interface TrendingNewsCardProps {
  image: any;
  title: string;
  description: string;
  isDetailPage?: boolean;
  descriptionLines?: number;
}

const TrendingNewsCard: React.FC<TrendingNewsCardProps> = ({
  image,
  title,
  description,
  isDetailPage,
  descriptionLines,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        borderRadius: '12px',
      }}
    >
      <Chip
        label={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',

              lineHeight: '20.8px',
              background: 'rgba(255, 255, 255, 0.1)',
              // backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              marginTop: '6px',
              marginRight: !isDetailPage ? '12px' : '10px',
              padding: '4px 8px 4px 8px',
              fontSize: '16px',
              fontWeight: '600',
              gap: '4.5px',
            }}
          >
            <Image
              src={PeopleImage.src}
              height={12}
              width={12}
              alt="people watching image"
            />
            <Typography
              sx={{
                fontWeight: '400',
                fontSize: '12px',
                lineHeight: '15.6px',
                color: 'white',
              }}
            >
              374,039
            </Typography>
          </Box>
        }
        sx={{
          position: 'absolute',
          top: 0,
          right: '-12px',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          height: '33px',
        }}
      />
      <Box>
        <Image
          alt="news"
          src={image.src}
          width={isDetailPage ? 264 : 300}
          height={isDetailPage ? 130 : 180}
          style={{
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
      </Box>
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '14px',
          lineHeight: '18.2px',
          marginTop: '16px',
          letterSpacing: '0.6px',
          width: isDetailPage ? '264px' : '100%',
        }}
        variant="body1"
      >
        {title ||
          'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip'}
      </Typography>
      <Typography
        sx={{
          fontWeight: '400 !important',
          fontSize: '13px !important',
          lineHeight: '18.85px !important',
          marginTop: '4px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: `${descriptionLines ? descriptionLines : 3}`,
          WebkitBoxOrient: 'vertical',
          width: isDetailPage ? '264px' : '100%',
        }}
        variant="body2"
      >
        {description ||
          "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."}
      </Typography>
      <Typography
        sx={{
          fontWeight: '500',
          fontSize: !isDetailPage ? '14px' : '10px',
          lineHeight: '13px',
          marginTop: '8px',
          alignSelf: 'flex-start',
          paddingLeft: 0,
          width: isDetailPage ? '264px' : '100%',
        }}
      >{`06/06/2023 at 00:06 AM  |  John Smith`}</Typography>
    </Box>
  );
};

export default TrendingNewsCard;
