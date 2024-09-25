'use client';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import iphone from '../../../../../public/images/platform/iPhone.png';
import ExportCard from './exportCard';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const PersonalCalendar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: {
      backgroundImage: 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)',
    },
    active: {
      backgroundImage: 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
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
            width: '637.5px',
            height: '443.25px',
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
            position: 'relative',
            transition: 'all 0.325s linear',
          }}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
          variants={backgroundVariants}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '53.82px',
            }}
          >
            <motion.div
              variants={imgAndTextVariants}
              initial="initial"
              animate={active ? 'active' : 'inactive'}
              style={{
                overflow: 'hidden',
                width: '292.18px',
                height: '442.98px',
                position: 'relative',
              }}
            >
              <Image
                src={iphone}
                alt="iphone"
                width={219.18}
                height={447.98}
                style={{
                  paddingLeft: '70.5px',
                  marginTop: '57.75px',
                  position: 'absolute',
                  left: '0',
                  top: '0',
                }}
              />
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
                    color: 'rgba(255, 255, 255, 1)',
                    mt: '185px',
                    letterSpacing: 0.1,
                    lineHeight: '26px',
                    textAlign: 'start',
                    marginLeft: '28px',
                    maxWidth: '690px',
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </Typography>
              </motion.div>
            )}

            <Stack sx={{ paddingTop: '126.75px', paddingBottom: '79.75px' }}>
              <motion.div
                variants={imgAndTextVariants}
                initial="initial"
                animate={active ? 'active' : 'inactive'}
              >
                <Typography
                  sx={{
                    fontSize: '36px',
                    fontWeight: '700',
                    lineHeight: '43.2px',
                    color: 'rgba(17, 17, 17, 1)',
                    maxWidth: '243px',
                    mb: '48.75px',
                    textWrap: 'balance',
                  }}
                >
                  Personal Calendar: Keep Track of Everything
                </Typography>

                <Typography
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    lineHeight: '15.6px',
                    color: 'rgba(17, 17, 17, 1)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Your Life, Your Schedule
                </Typography>
              </motion.div>
            </Stack>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                position: 'absolute',
                right: '23.5px',
                bottom: '16.28px',
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
          </Box>
        </motion.div>
        <ExportCard />
      </Box>
    </>
  );
};

export default PersonalCalendar;
