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
          '@media (max-width: 1024px)': {
            my: '60px',
            flexDirection: 'column',
            gap: '32px',
            padding: '0 40px',
          },
          '@media (max-width: 768px)': {
            my: '40px',
            gap: '24px',
            padding: '0 24px',
          },
          '@media (max-width: 576px)': {
            my: '32px',
            gap: '20px',
            padding: '0 16px',
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '@media (max-width: 1024px)': {
              flexDirection: 'row',
              alignItems: 'center',
              gap: '24px',
            },
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              gap: '16px',
            },
            '@media (max-width: 576px)': {
              gap: '12px',
            },
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
                '@media (max-width: 768px)': {
                  fontSize: '12px',
                  letterSpacing: '1.2px',
                },
                '@media (max-width: 576px)': {
                  fontSize: '10px',
                  letterSpacing: '1px',
                },
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
                '@media (max-width: 1024px)': {
                  fontSize: '28px',
                  letterSpacing: '0.28px',
                  maxWidth: '100%',
                },
                '@media (max-width: 768px)': {
                  fontSize: '24px',
                  letterSpacing: '0.24px',
                },
                '@media (max-width: 576px)': {
                  fontSize: '20px',
                  letterSpacing: '0.20px',
                },
              }}
            >
              Frequently Asked Questions
            </Typography>
          </Box>
          {/* Image */}
          <Box
            sx={{
              height: '374px',
              width: '374px',
              '@media (max-width: 1024px)': {
                height: '300px',
                width: '300px',
              },
              '@media (max-width: 768px)': {
                height: '250px',
                width: '250px',
              },
              '@media (max-width: 576px)': {
                height: '200px',
                width: '200px',
              },
            }}
          >
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
            '@media (max-width: 1024px)': {
              gap: '12px',
            },
            '@media (max-width: 768px)': {
              gap: '8px',
            },
            '@media (max-width: 576px)': {
              gap: '6px',
            },
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
