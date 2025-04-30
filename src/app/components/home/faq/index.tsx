import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import AccordionQuestion from '../../platform/frequently-question/accordionQuestion';
import EmojiStart from '../../../../../public/images/emojistar.png';

const FAQ = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '28px',
          background:
            'linear-gradient(90deg, #AACDF7 0%, #AC9FEF 27%, #A367F7 45%, #F57FC4 65.5%, #FBCCA4 100%)',
          filter: 'blur(5px)',
          zIndex: 1,
        },
        paddingTop: '28px',
        zIndex: 2,
        background: '#fff',
      }}
    >
      <Box
        sx={{
          my: '80px',
          mx: 'auto',
          maxWidth: '972px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Text */}
          <Box>
            <Typography
              sx={{
                color: '#111',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '130%',
                letterSpacing: '1.4px',
              }}
            >
              EFFORTLESS TRADING
            </Typography>
            <Typography
              sx={{
                color: '#111',
                fontSize: '32px',
                fontWeight: '700',
                lineHeight: '120%',
                letterSpacing: '0.32px',
                maxWidth: '374px',
              }}
            >
              Frequently Asked Questions
            </Typography>
          </Box>
          {/* Image */}
          <Box sx={{ height: '374px', width: '374px' }}>
            <Image
              src={EmojiStart}
              alt=""
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <AccordionQuestion
            title="Lorem ipsum dolor sit amet"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            isExpanded={true}
          />
          <Divider />
          <AccordionQuestion
            title="Lorem ipsum dolor sit amet"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Divider />
          <AccordionQuestion
            title="Lorem ipsum dolor sit amet"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Divider />
          <AccordionQuestion
            title="Lorem ipsum dolor sit amet"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Divider />
          <AccordionQuestion
            title="Lorem ipsum dolor sit amet"
            summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FAQ;
