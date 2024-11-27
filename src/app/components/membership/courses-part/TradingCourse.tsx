'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const TradingCourse = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: {
      backgroundImage: `linear-gradient(180deg, rgba(55, 97, 251, 1), rgba(55, 169, 251, 1))`,
    },
    active: {
      backgroundImage: `linear-gradient(180deg, rgba(55, 97, 251, 1), rgba(55, 169, 251, 1))`,
    },
    inactive: {
      backgroundImage: `linear-gradient(180deg, rgba(55, 97, 251, 1), rgba(55, 169, 251, 1))`,
    },
  };

  const imgAndTextVariants = {
    initial: { opacity: 1, display: 'block' },
    active: {
      opacity: 0,
      transition: { duration: 0.325 },
      transitionEnd: { display: 'none' },
    },
    inactive: {
      opacity: 1,
      display: 'block',
      transition: { duration: 0.325 },
    },
  };

  const loremVariants: any = {
    hidden: { opacity: 0, visibility: 'hidden', y: 20, display: 'none' },
    visible: {
      opacity: 1,
      visibility: 'visible',
      display: 'block',
      y: 0,
      transition: { delay: 0.625, duration: 0.325 },
    },
  };

  return (
    <Box
      sx={{
        width: '33%',
        height: '353px',
        '@media (max-width:768px)': {
          width: '100%',
        },
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '24px',
          position: 'relative',
          transition: 'all 0.325s linear',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          component={motion.div}
          sx={{
            maxWidth: '144px',
            width: '100%',
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            textTransform: 'uppercase',
            mb: '18px',
            lineHeight: '15.6px',
            padding: '24px 0 0 24px',
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
          variants={imgAndTextVariants}
        >
          76-Video (24 Hours) Trading Course
        </Typography>
        <Box
          sx={{
            pl: '42px',
            pr: '24px',
            '@media (max-width:855px)': {
              pb: '28px',
            },
          }}
        >
          <motion.img
            src={'/images/membership/playIcon.png'}
            alt="dollar sign"
            width={75}
            height={68}
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          />
          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
            style={{
              marginTop: '28px',
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                color: 'rgba(255, 255, 255, 1)',
                lineHeight: '26px',
                fontWeight: 700,
                fontFamily: 'Sf Pro Display',
                maxWidth: '224px',
                '@media (max-width:660px)': {
                  fontSize: '24px',
                },
              }}
            >
              Master the art of trading with our 76-video course covering 24
              hours of in-depth lessons.
            </Typography>
          </motion.div>
        </Box>
        {active && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={loremVariants}
            style={{
              width: '100%',
              paddingInline: '24px',
              boxSizing: 'border-box',
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
                pt: '24px',
                '@media (max-width:855px)': {
                  pt: '0',
                },
              }}
            >
              Lorem ipsum dolor sit
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.8)',
                mt: '35px',
                lineHeight: '24px',
                textAlign: 'start',
                '@media (max-width:855px)': {
                  fontSize: '12px',
                },
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </Typography>
          </motion.div>
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '14px',
            bottom: '15px',
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
      </motion.div>
    </Box>
  );
};

export default TradingCourse;
