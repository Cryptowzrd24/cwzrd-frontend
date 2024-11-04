import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Books from '../../../../../public/images/membership/books.png';

const WzrdBooks = () => {
  return (
    <Box
      sx={{
        width: '638px',
        paddingLeft: '42px',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: '24px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: '269px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '36px',
            fontWeight: '700',
            color: 'rgba(17, 17, 17, 1)',
            textTransform: 'uppercase',
            mb: '6px',
            letterSpacing: '1px',
            lineHeight: '43px',
          }}
        >
          26 WZRD Books
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            color: 'rgba(17, 17, 17, 0.8)',
          }}
        >
          Access our library of 26 comprehensive books packed with trading
          strategies, market insights, and everything you need to excel.
        </Typography>
      </Box>
      <Box>
        <Image src={Books} alt="wzrd books" width={316} />
      </Box>
    </Box>
  );
};

export default WzrdBooks;
