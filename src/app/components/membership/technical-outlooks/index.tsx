'use client';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const TechnicalOutlooks = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => setActive((prev) => !prev);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 660px)');
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const backgroundVariants = {
    initial: {
      backgroundImage: `url(${isMobile ? '/images/membership/technicalOutlookMobile.svg' : '/images/membership/technicalOutlook.svg'})`,
    },
    active: {
      backgroundImage: `url(${isMobile ? '/images/membership/technicalOutlookMobileBg.svg' : '/images/membership/technicalOutlookBg.png'})`,
    },
    inactive: {
      backgroundImage: `url(${isMobile ? '/images/membership/technicalOutlookMobile.svg' : '/images/membership/technicalOutlook.svg'})`,
    },
  };

  const imgAndTextVariants = {
    initial: { opacity: 1, display: 'block' },
    active: {
      opacity: 0,
      transition: { duration: 0.325 },
      transitionEnd: { display: 'none' },
    },
    inactive: { opacity: 1, display: 'block', transition: { duration: 0.325 } },
  };

  const loremVariants = {
    hidden: { opacity: 0, y: 20, display: 'none' },
    visible: {
      opacity: 1,
      y: 0,
      display: 'block',
      transition: { delay: 0.625, duration: 0.325 },
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        width: '100%',
      }}
    >
      <motion.div
        style={{
          borderRadius: '24px',
          width: '100%',
          height: '353px',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          component={motion.div}
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            textTransform: 'uppercase',
            mt: '24px',
            mb: '75px',
            pl: '24px',
            letterSpacing: '1px',
            lineHeight: '15.6px',
            color: 'rgba(255, 255, 255, 1)',
            '@media (max-width:660px)': {
              mb: '8px',
              fontSize: '12px',
            },
          }}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
          variants={imgAndTextVariants}
        >
          Daily technical outlooks
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {active && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={loremVariants}
              style={{
                padding: '24px',
              }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                  lineHeight: '21px',
                  textAlign: 'start',
                  maxWidth: '226px',
                }}
              >
                Lorem ipsum dolor sit
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 0.8)',
                  mt: '77px',
                  lineHeight: '24px',
                  textAlign: 'start',
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </Typography>
            </motion.div>
          )}

          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: '26px',
                  fontWeight: '700',
                  lineHeight: '29px',
                  color: 'rgba(255, 255, 255, 1)',
                  maxWidth: '374px',
                  paddingInline: '75px',
                  '@media (max-width:660px)': {
                    paddingInline: '24px',
                    fontSize: '20px',
                    lineHeight: '22px',
                  },
                }}
              >
                Receive daily technical outlooks to stay ahead of market trends.
                Get a clear view of what's happening and make informed
                decisions.
              </Typography>
            </Box>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              position: 'absolute',
              right: '16px',
              bottom: '16px',
              transform: active ? 'rotate(45deg)' : '',
              transition: 'transform 0.5s ease-in-out',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px',
                background: '#FFFFFF',
                borderRadius: '100px',
                cursor: 'pointer',
              }}
              onClick={handleClick}
            >
              <PlusIcon />
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default TechnicalOutlooks;
