'use client';
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
  isMainPage?: boolean;
  smallHeight?: boolean;
}

const TrendingNewsCard: React.FC<TrendingNewsCardProps> = ({
  image,
  title,
  description,
  isDetailPage,
  descriptionLines,
  smallHeight,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
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
              fontSize: '16px !important',
              fontWeight: '600',
              gap: '4.5px',

              '@media (max-width: 576px)': {
                marginRight: '0px',
              },
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
                fontSize: '12px !important',
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

          '@media (max-width: 576px)': {
            right: '4px',
          },
        }}
      />
      <Box sx={{ width: '100%', height: '150px' }}>
        <Image
          alt="news"
          src={
            image ||
            'https://s3-alpha-sig.figma.com/img/e7a2/1b9d/8dee851bf60c683f94041035849f3dca?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BvgpfnvcAL~zhHG6Oowu1t3HZRwEfXSfH4khOf-3eUB2Uyv8r2u6bU3BVqFllyBCHOsEQjlzxCVobCT8yE8iIhbf1aiqtfUWPypscZYHrLgXrmv32wfptJ7uz5GLSfUhMF9vsPhm3zsby0HqdX2cJHa3H3B7BN-V3dXG8mdmWZoJQwdr8zC7FIAMqPwebOoEbeseY6Q2MK3MeT30CSYde3CmG094wS2f1NI~sSfi~~RCnM~1SyWDv~WX7KL6jhRuxWFBY7IztH-8kgOOyvvP6ESbtWKVmPi07YdpqiFIFtk4MDesUsyThfs6129AmKfVhyVjfY7WY~mBVNAYWuXr5Q__'
          }
          style={{
            objectFit: 'cover',
            borderRadius: '12px',
            width: '100%',
            height: '150px',
          }}
        />
      </Box>
      <Box sx={{ paddingInline: '8px', marginTop: '8px' }}>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '14px !important',
            lineHeight: '18.2px',
            letterSpacing: '0.3px',
            width: '100%',
          }}
          variant="body1"
        >
          {title ||
            'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip'}
        </Typography>
        <Typography
          sx={{
            fontWeight: '400 !important',
            fontSize: '12px !important',
            lineHeight: '17.4px !important',
            marginTop: '4px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            color: 'rgba(17,17,17,0.8)',
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
            fontSize: '10px !important',
            lineHeight: '13px',
            marginTop: '8px',
            alignSelf: 'flex-start',
            color: 'rgba(17,17,17,1)',
            paddingLeft: 0,
            width: isDetailPage ? '264px' : '100%',
          }}
        >
          06/06/2023 at 00:06 AM &nbsp;&nbsp;|&nbsp;&nbsp; John Smith
        </Typography>
      </Box>
    </Box>
  );
};

export default TrendingNewsCard;
