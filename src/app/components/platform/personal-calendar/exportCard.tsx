'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const ExportCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: {
      backgroundImage: 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
    },
    active: {
      backgroundImage: 'linear-gradient(180deg, #7248F7 0%, #7248F7 100%)',
    },
    inactive: {
      backgroundImage: 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
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
    hidden: { opacity: 1, rotate: 0 },
    visible: { opacity: 1, rotate: 45 },
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
          // padding: '32px 56px 32px 32px',
          // maxWidth: '23.5%',
          borderRadius: '24px',
          position: 'relative',
          height: '443.5px',
          width: '307.5px',
          transition: 'all 0.325s linear',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            textTransform: 'uppercase',
            mb: '18px',
            letterSpacing: '1px',
            lineHeight: '15.6px',
            paddingLeft: '24px',
            paddingTop: '24px',
          }}
        >
          Easy to export notes
        </Typography>
        <Box sx={{ paddingLeft: '42px' }}>
          <motion.img
            src={'/images/platform/export.png'}
            alt="export notes"
            width={75}
            height={75}
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          />
          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          >
            <Typography
              sx={{
                fontSize: '30px',
                color: 'rgba(255, 255, 255, 1)',
                mt: '55.5px',
                letterSpacing: 0.1,
                maxWidth: '223.5px',
                lineHeight: '33px',
                fontWeight: 700,
              }}
            >
              Easily export your saved notes into a downloadable PDF
            </Typography>
          </motion.div>

          {active && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={loremVariants}
            >
              <Typography
                sx={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 1)',
                  mt: '134px',
                  letterSpacing: 0.1,
                  lineHeight: '22px',
                  textAlign: 'start',
                  marginLeft: '-24px',
                  paddingRight: '10px',
                  textWrap: 'balance',
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
            right: '11px',
            bottom: '11.8px',
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

export default ExportCard;
