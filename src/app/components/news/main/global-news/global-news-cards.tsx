import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

function GlobalNewsCards({ cardData }: any) {
  const isTabView = useMediaQuery('(max-width: 1440px)');
  const renderCards = cardData.map((card: any) => {
    return (
      <Box
        key={card.id}
        sx={{
          marginTop: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',

          '@media (max-width: 1440px)': {
            flex: 1,
            alignItems: 'flex-start',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '88px',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Image
            src={card.img}
            alt="image"
            // width={isTabView ? 142.5 : '100%'}
            // height={88}

            style={{
              objectFit: 'cover',
              width: isTabView ? '100%' : '142.5px',
              height: '88px',
            }}
          />
        </Box>
        <Typography
          sx={{
            marginTop: '8px',
            width: '100%',
            fontFamily: 'Sf Pro Display',
            fontWeight: 700,
            fontSize: '14px !important',
            lineHeight: '18.20px',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          {card.title}
        </Typography>
        <Typography
          sx={{
            marginTop: '4px',
            fontFamily: 'Sf Pro Display',
            fontWeight: 400,
            fontSize: '11px !important',
            lineHeight: '14.3px',
            color: 'rgba(17, 17, 17, 0.8)',
            letterSpacing: '-0.3px',
          }}
        >
          {card.subTitle}
        </Typography>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        borderTop: '1px solid rgba(17, 17, 17, 0.1)',
        borderTopWidth: '',
        marginTop: '15px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
      }}
    >
      {renderCards}
    </Box>
  );
}

export default GlobalNewsCards;
