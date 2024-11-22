import { Box, Divider, Typography } from '@mui/material';
import React from 'react';

import Star from '../../../../../public/images/membership/star.svg';
import Image from 'next/image';
import FAQQuestion from './FAQQuestion';

const FAQSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{ width: '38%' }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18px',
            marginBottom: '4px',
            textTransform: 'uppercase',
            fontFamily: 'Sf Pro Display',
            color: 'rgba(17,17,17,1)',
            letterSpacing: '1.4px',
          }}
        >
          Effortless trading
        </Typography>

        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '38px',
            marginBottom: '36px',
            fontFamily: 'Sf Pro Display',
            color: 'rgba(17,17,17,1)',
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box
          sx={{
            maxWidth: '374px',
          }}
        >
          <Image src={Star} alt="star" style={{ width: '100%' }} />
        </Box>
        {/* <Box
          sx={{
            width: '38%',
            aspectRatio: '1/2',
          }}
        >
        </Box> */}
      </Box>

      <Box
        sx={{
          maxWidth: '522px',
        }}
      >
        <FAQQuestion
          title="Lorem ipsum dolor sit amet"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            pb: '16px',
            mb: '16px',
          }}
        />
        <FAQQuestion
          title="Lorem ipsum dolor sit amet"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            pb: '16px',
            mb: '16px',
          }}
        />
        <FAQQuestion
          title="Lorem ipsum dolor sit amet"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            pb: '16px',
            mb: '16px',
          }}
        />
        <FAQQuestion
          title="Lorem ipsum dolor sit amet"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          flexItem
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            pb: '16px',
            mb: '16px',
          }}
        />
        <FAQQuestion
          title="Lorem ipsum dolor sit amet"
          summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </Box>
    </Box>
  );
};

export default FAQSection;
