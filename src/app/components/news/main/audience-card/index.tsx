import { Box, Chip, Typography } from '@mui/material';
import PeopleImage from '../../../../../../public/images/news-letter/people.svg';
import Image from 'next/image';
import React from 'react';

const AudienceCard = ({
  image,
  title,
  description,
  isDetailPage,
  descriptionLines,
}: any) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '313.5px',
        borderRadius: '12px',
        padding: '8px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        boxSizing: 'border-box',

        '@media (max-width: 724px)': {
          width: 'auto',
        },
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
          top: 10,
          right: '-4px',
          fontWeight: 'bold',
          backgroundColor: 'transparent',
          height: '33px',

          '@media (max-width: 576px)': {
            right: '8px',
          },
        }}
      />
      <Box
        sx={{
          width: isDetailPage ? 264 : '100%',
          '@media (max-width: 724px)': {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Image
          alt="news"
          src={image.src}
          layout="responsive"
          width={isDetailPage ? 264 : 320}
          height={isDetailPage ? 130 : 150}
          style={{
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
      </Box>

      <Box sx={{ paddingInline: '9px', marginTop: '8px' }}>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '14px !important',
            lineHeight: '18.2px',
            letterSpacing: '0.3px',
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
      </Box>
      <Box
        sx={{
          marginTop: '8px',
          marginBottom: '2px',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '10px !important',
            lineHeight: '13px',
            backgroundColor: 'rgb(243,243,243)',
            borderRadius: '8px',
            display: 'flex',
            alignSelf: 'flex-start',
            paddingBlock: '6px',
            paddingLeft: '12px',
            alignItems: 'center',
          }}
        >{`06/06/2023 at 00:06 AM  |  John Smith`}</Typography>
      </Box>
    </Box>
  );
};

export default AudienceCard;
