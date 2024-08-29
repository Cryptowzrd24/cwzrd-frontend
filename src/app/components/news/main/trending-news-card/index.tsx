import { Box, Chip, Typography } from '@mui/material';
import PeopleImage from '../../../../../../public/images/news-letter/people.svg';
import Image from 'next/image';
import React from 'react';

interface TrendingNewsCardProps {
  image: any;
  title: string;
  description: string;
  isDetailPage?: boolean;
}

const TrendingNewsCard: React.FC<TrendingNewsCardProps> = ({
  image,
  title,
  description,
  isDetailPage,
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
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20.8px',
              background:
                'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              paddingInline: '7px',
              paddingBlock: '3px',
              marginTop: '12px',
              marginRight: !isDetailPage ? '12px' : '0',
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
          top: 0,
          right: 0,
          fontWeight: 'bold',
          backgroundColor: 'transparent',
        }}
      />
      <Box>
        <Image
          alt="news"
          src={image.src}
          width={isDetailPage ? 245 : 300}
          height={180}
        />
      </Box>
      <Typography
        sx={{
          fontWeight: '700',
          fontSize: '18px',
          lineHeight: '23.4px',
          marginTop: '16px',
          letterSpacing: '2%',
          width: isDetailPage ? '245px' : '100%',
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
          marginTop: '8px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '3 !important',
          WebkitBoxOrient: 'vertical',
          width: isDetailPage ? '245px' : '100%',
        }}
        variant="body2"
      >
        {description ||
          "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."}
      </Typography>
      <Typography
        sx={{
          fontWeight: '500',
          fontSize: !isDetailPage ? '14px' : '12px',
          lineHeight: '18.2px',
          marginTop: '16px',
          alignSelf: 'flex-start',
          paddingLeft: !isDetailPage ? '0px' : '8px',
          width: isDetailPage ? '245px' : '100%',
        }}
      >{`06/06/2023 at 00:06 AM  |  John Smith`}</Typography>
    </Box>
  );
};

export default TrendingNewsCard;
