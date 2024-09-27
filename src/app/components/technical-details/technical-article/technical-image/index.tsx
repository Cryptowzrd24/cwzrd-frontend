import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import TechnicalDetailImage from '../../../../../../public/icons/technicalBg.png';

function TechnicalImage() {
  return (
    <>
      <Box
        sx={{
          width: '800px',
          height: '400px',
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={TechnicalDetailImage}
          alt="image"
          width={800}
          height={400}
        />
      </Box>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '18.5px',
          fontFamily: 'Sf Pro Display',
          lineHeight: '27px',
          color: 'rgba(17, 17, 17, 0.8)',
          marginTop: '12px',
        }}
      >
        Bitcoin accumulation by large holders has reached levels not seen since
        before the 2020 bull market. Could it propel Bitcoin’s price to a
        breakout above the $70,000 mark?
      </Typography>
    </>
  );
}

export default TechnicalImage;
