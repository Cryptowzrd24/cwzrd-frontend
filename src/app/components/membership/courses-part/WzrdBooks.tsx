import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Books from '../../../../../public/images/membership/books.png';

const WzrdBooks = () => {
  return (
    <Box
      sx={{
        width: '67%',
        // paddingLeft: '42px',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        backgroundColor: 'rgba(31,31,31,1)',
        borderRadius: '24px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '353px',
        '@media (max-width:768px)': {
          width: '100%',
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          maxWidth: '269px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: '42px',
        }}
      >
        <Typography
          sx={{
            fontSize: '36px',
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 1)',
            textTransform: 'uppercase',
            mb: '6px',
            letterSpacing: '1px',
            lineHeight: '43px',
            '@media (max-width:768px)': {
              fontSize: '26px',
              lineHeight: '34px',
              pt: '24px',
            },
          }}
        >
          26 WZRD <br /> Books
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '14px',
              mb: '4px',
            },
          }}
        >
          Access our library of 26 comprehensive books packed with trading
          strategies, market insights, and everything you need to excel.
        </Typography>
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          '@media (max-width: 768px)': {
            width: '316px',
            height: '353px',
            ml: 'auto',
            overflow: 'hidden',
          },
        }}
      >
        <Image
          src={Books}
          alt="wzrd books"
          fill
          objectFit="cover"
          objectPosition="left"
          style={{
            height: '100%',
          }}
        />
      </Box>
    </Box>
  );
};

export default WzrdBooks;
