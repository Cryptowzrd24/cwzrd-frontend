'use client';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import iphone from '../../../../../public/images/platform/iPhone.png';
import ExportCard from './exportCard';
import PlusIconBlack from '../../../../../public/icons/collections/plusIconWhite';
import { motion } from 'framer-motion';

const PersonalCalendar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const iconVariants = {
    hidden: { opacity: 1, rotate: 0 },
    visible: { opacity: 1, rotate: 45 },
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '30px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            padding: '77px 68px 0px 94px',
            borderRadius: '32px',
            maxWidth: '67.4%',
            width: '100%',
            height: '514px',
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
            position: 'relative',
            backgroundImage: active
              ? 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)'
              : 'linear-gradient(180deg, #ffffff 0%, #ffffff 100%)',
            transition: 'background 0.5s ease-in-out',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {!active && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <Image src={iphone} alt="iphone" width={292} height={514} />
              </motion.div>
            )}
            <Stack>
              <motion.div
                key={active ? 'active' : 'inactive'}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {active && (
                  <Typography
                    sx={{
                      fontSize: '14px',
                      lineHeight: '22px',
                      color: 'rgba(17, 17, 17, 1)',
                      mt: '174px',
                      width: '80%',
                    }}
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book
                  </Typography>
                )}
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: '48px',
                    fontWeight: '700',
                    lineHeight: '57.6px',
                    color: 'rgba(17, 17, 17, 1)',
                    maxWidth: '324px',
                    mb: '64px',
                  }}
                >
                  {active ? '' : 'Personal Calendar: Keep Track of Everything'}
                </Typography>
              </motion.div>

              {!active && (
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '20.8px',
                    color: 'rgba(17, 17, 17, 1)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Your Life, Your Schedule
                </Typography>
              )}
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
                    background: 'rgba(17, 17, 17, 1)',
                    borderRadius: '100px',
                    cursor: 'pointer',
                  }}
                >
                  <PlusIconBlack />
                </motion.div>
              </Box>
            </Stack>
          </Box>
        </Box>
        <ExportCard />
      </Box>
    </>
  );
};

export default PersonalCalendar;
