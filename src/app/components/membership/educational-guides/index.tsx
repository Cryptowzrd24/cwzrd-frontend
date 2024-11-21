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
      backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)',
    },
    active: {
      backgroundImage:
        'linear-gradient(116.74deg, #F77F21 -4.07%, #F77F21 100.68%)',
    },
    inactive: {
      backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)',
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

  const iconVariants = {
    hidden: { opacity: 1, rotate: 0, filter: 'invert(1)' },
    visible: { opacity: 1, rotate: 45, filter: 'invert(0)' },
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
          padding: '0 27px',
          height: '146px',
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
            height: '100%',
            alignItems: 'center',
          }}
        >
          <motion.img
            src={'/images/membership/educationalIcons.png'}
            alt="educational icons"
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
            style={{
              objectFit: 'cover',
              marginTop: 'auto',
            }}
          />

          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
            style={{
              paddingLeft: '52px',
              width: '505px',
            }}
          >
            <Typography
              sx={{
                fontSize: '26px',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
                width: '389px',
                lineHeight: '28px',
                fontWeight: 700,
                fontFamily: 'Sf Pro Display',
              }}
            >
              Educational Guides
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                color: 'rgba(17, 17, 17, 1)',
                fontWeight: '400',
                lineHeight: '21px',
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
              style={{ width: '100%' }}
            >
              <Typography
                sx={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 1)',
                  mt: '82px',
                  letterSpacing: 0.1,
                  lineHeight: '20px',
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
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '16px',
            bottom: '16px',
          }}
        >
          <motion.div
            initial="hidden"
            animate={active ? 'visible' : 'hidden'}
            variants={iconVariants}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={handleClick}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px',
              background: '#FFFFFF',
              borderRadius: '100px',
              cursor: 'pointer',
            }}
          >
            <PlusIcon />
          </motion.div>
        </Box>
      </motion.div>
    </>
  );
};

export default EducationalGuides;
