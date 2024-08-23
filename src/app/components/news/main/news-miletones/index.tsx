'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../../public/icons/collections/plusIcon';

const NewsMileStones = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: {
      background: "url('images/news-letter/map.png') no-repeat center/cover",
    },
    active: {
      background: "url('/images/news-letter/map.png') no-repeat center/cover",
    },
    inactive: {
      background: "url('images/news-letter/map.png') no-repeat center/cover",
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
          padding: '32px 48px 48px 32px',
          height: '390px',
          maxWidth: '314px',
          borderRadius: '32px',
          position: 'relative',
          flex: 1,
          transition: 'all 0.325s linear',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            color: 'black',
            textTransform: 'uppercase',
            mb: '32px',
            letterSpacing: '1px',
          }}
        >
          Milestones
        </Typography>
        <Box
          sx={{
            paddingLeft: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            variants={imgAndTextVariants}
            initial="initial"
            animate={active ? 'active' : 'inactive'}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: '24px',
                color: 'black',
                letterSpacing: 0.1,
                maxWidth: '298px',
                lineHeight: '28px',
                fontWeight: '700',
              }}
            >
              The largest trading community
            </Typography>
            <Typography
              //   variant="body1"
              sx={{
                fontSize: '11px',
                color: 'black',
                maxWidth: '298px',
                marginTop: '10px',
                lineHeight: '15.95px',
                fontWeight: '400',
              }}
            >
              Every trade recommendation is managed on your behalf. Our experts
              are handling all the details to maximize your profits.
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
                  fontSize: '14px',
                  color: 'black',
                  mt: '105px',
                  letterSpacing: 0.1,
                  lineHeight: '22px',
                  textAlign: 'start',
                  marginLeft: '-16px',
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
            right: '24px',
            bottom: '28px',
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
              padding: '8px',
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

export default NewsMileStones;
