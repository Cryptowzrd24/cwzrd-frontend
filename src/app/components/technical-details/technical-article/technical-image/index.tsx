import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import TechnicalDetailImage from '../../../../../../public/icons/technicalBg.png';

function TechnicalImage() {
  return (
    <Box
      sx={{
        width: '800px',
        height: '400px',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      <Image src={TechnicalDetailImage} alt="image" width={800} height={400} />
    </Box>
  );
}

export default TechnicalImage;
