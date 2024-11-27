'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const EducationalGuides = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: {
      backgroundImage: 'linear-gradient(180deg, #1f1f1f 0%, #1f1f1f 100%)',
    },
    active: {
      backgroundImage: 'linear-gradient(180deg, #1f1f1f 0%, #1f1f1f 100%)',
    },
    inactive: {
      backgroundImage: 'linear-gradient(180deg, #1f1f1f 0%, #1f1f1f 100%)',
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
    <>
      <motion.div
        style={{
          borderRadius: '24px',
          position: 'relative',
          transition: 'all 0.325s linear',
          boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
          boxSizing: 'border-box',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '52px',
            // minHeight: '146px',
            height: '146px',
            boxSizing: 'border-box',
            alignItems: 'center',
            padding: '27px 43px 0 27px',

            '@media (max-width:768px)': {
              flexDirection: 'column-reverse',
              padding: '24px 24px 0 24px',
              height: '282px',
              gap: '24px',
            },
          }}
        >
          <motion.img
            src={'/images/membership/educationalIcons.svg'}
            alt="educational icons"
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
            style={{
              objectFit: 'cover',
            }}
          />

          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
            style={{
              maxWidth: '505px',
              height: '100%',
            }}
          >
            <Typography
              sx={{
                fontSize: '20px',
                color: 'rgba(255, 255, 255, 1)',
                mb: '4px',
                lineHeight: '26px',
                fontWeight: 700,
                fontFamily: 'Sf Pro Display',
                '@media (max-width:660px)': {
                  fontSize: '20px',
                },
              }}
            >
              Educational Guides
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(255, 255, 255, 0.8)',
                fontWeight: '400',
                lineHeight: '21px',
                fontFamily: 'Sf Pro Text',
                '@media (max-width:660px)': {
                  fontSize: '14px',
                },
              }}
            >
              Access comprehensive guides designed to educate and empower
              traders at all levels. Master the markets with our in-depth
              resources.
            </Typography>
          </motion.div>

          {active && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={loremVariants}
              layout
              style={{ overflow: 'hidden', marginBottom: 'auto' }}
            >
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                  lineHeight: '21px',
                  textAlign: 'start',
                  maxWidth: '226px',
                  mb: '4px',
                }}
              >
                Educational Guides
              </Typography>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 0.8)',
                  // mt: '82px',
                  lineHeight: '24px',
                  textAlign: 'start',
                }}
              >
                Unleash your full trading potential with our ultimate guides,
                expertly designed to empower and elevate traders at every stage.
                Whether you’re just starting out or refining advanced skills,
                these guides give you the tools and knowledge to dominate the
                markets with confidence and precision!
              </Typography>
            </motion.div>
          )}
        </Box>
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
    </>
  );
};

export default EducationalGuides;
