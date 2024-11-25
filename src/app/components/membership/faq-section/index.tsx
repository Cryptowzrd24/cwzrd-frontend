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
        '@media (max-width:768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <Box
        sx={{
          width: '38%',
          '@media (max-width:786px)': {
            width: '100%',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18px',
            marginBottom: '4px',
            textTransform: 'uppercase',
            fontFamily: 'Sf Pro Display',
            color: 'rgba(255,255,255,1)',
            letterSpacing: '1.4px',
            '@media (max-width:660px)': {
              fontSize: '14px',
            },
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
            color: 'rgba(255,255,255,1)',
            '@media (max-width:660px)': {
              fontSize: '24px',
              marginBottom: '24px',
            },
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box
          sx={{
            maxWidth: '374px',
            '@media (max-width:768px)': {
              display: 'none',
            },
          }}
        >
          <Image src={Star} alt="star" style={{ width: '100%' }} />
        </Box>
      </Box>

      <Box
        sx={{
          maxWidth: '522px',
          '@media (max-width:768px)': {
            maxWidth: 'none',
          },
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
            borderColor: 'rgba(255, 255, 255, 0.1)',
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
            borderColor: 'rgba(255, 255, 255, 0.1)',
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
            borderColor: 'rgba(255, 255, 255, 0.1)',
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
            borderColor: 'rgba(255, 255, 255, 0.1)',
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
