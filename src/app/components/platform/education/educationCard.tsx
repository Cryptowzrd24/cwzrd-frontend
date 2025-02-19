'use client';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import VerifiedGreen from '../../../../../public/icons/coin-details/verifiedGreen';
import macbook from '../../../../../public/images/platform/MacBook-pro.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const EducationCard = () => {
  const isTabView = useMediaQuery('(min-width: 1024px)');
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };
  const backgroundVariants = {
    initial: {
      backgroundImage: 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
    },
    active: {
      backgroundImage: 'linear-gradient(180deg, #027fff 0%, #027fff 100%)',
    },
    inactive: {
      backgroundImage: 'linear-gradient(180deg, #027fff 0%, #37A9FB 100%)',
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
      <Box
        component={motion.div}
        sx={{
          backgroundImage: !active
            ? `url('/images/platform/community.png')`
            : '',
          borderRadius: '24px',
          width: isTabView ? '637.5px' : '100%',
          position: 'relative',
          transition: 'all 0.325s linear',
          height: '693.75px',
          '@media (max-width: 678px)': {
            height: '630px',
          },

          '@media (max-width: 436px)': {
            height: '560px',
          },
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
        variants={backgroundVariants}
      >
        <Typography
          variant="body1"
          sx={{
            paddingTop: '36px !important',
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textAlign: 'center',
            mb: '8px',
            lineHeight: '15.6px',
          }}
        >
          Education
        </Typography>
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
                letterSpacing: 0.1,
                lineHeight: '24px',
                textAlign: 'start',
                maxWidth: '690px',
                mt: '260px',
                marginLeft: '36px',

                '@media (max-width: 1024px)': {
                  mx: '36px',
                },

                '@media (max-width: 677px)': {
                  mt: '200px',
                },

                '@media (max-width: 599px)': {
                  mt: '180px',
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
        <motion.div
          variants={imgAndTextVariants}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: '36px',
              fontWeight: '700',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '43.2px',
              textAlign: 'center',
              mb: '32px',
              maxWidth: '690px',
              margin: 'auto',

              '@media (max-width: 767px)': {
                fontSize: '24px !important',
                lineHeight: '120%',
                letterSpacing: '0.24px',
              },
            }}
          >
            Upgrade Trading Knowledge with In-Depth Lessons
          </Typography>
        </motion.div>
        <motion.div
          variants={imgAndTextVariants}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
        >
          <Stack
            sx={{
              mt: '32px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              width: '100%',
              mb: '42px',

              '@media (max-width: 767px)': {
                mt: '16px',
                gap: '4px',
                px: '12px',
                width: 'auto',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Box
                sx={{
                  padding: '6px 9px 6px 6px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 1)',
                  border: '0.5px solid rgba(17, 17, 17, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <VerifiedGreen />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '10.5px !important',
                    fontWeight: '700',
                    lineHeight: '13.65px',
                    fontFamily: 'Sf Pro Display',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  26 WZRD Guide book
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: '6px 9px 6px 6px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 1)',
                  border: '0.5px solid rgba(17, 17, 17, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <VerifiedGreen />

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '10.5px !important',
                    lineHeight: '13.65px',
                    fontFamily: 'Sf Pro Display',
                    fontWeight: '700',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  77 Videos (24+ hours){' '}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <Box
                sx={{
                  padding: '6px 9px 6px 6px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 1)',
                  border: '0.5px solid rgba(17, 17, 17, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',

                  '@media (max-width: 576px)': {
                    padding: '4px',
                  },
                }}
              >
                <VerifiedGreen />

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '10.5px !important',
                    lineHeight: '13.65px',
                    fontFamily: 'Sf Pro Display',
                    fontWeight: '700',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  Daily Technical Write-ups{' '}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: '6px 9px 6px 6px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 1)',
                  border: '0.5px solid rgba(17, 17, 17, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <VerifiedGreen />

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '10.5px !important',
                    lineHeight: '13.65px',
                    fontFamily: 'Sf Pro Display',
                    fontWeight: '700',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  315+ Examinations{' '}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: '6px 9px 6px 6px',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 1)',
                  border: '0.5px solid rgba(17, 17, 17, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <VerifiedGreen />

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '10.5px !important',
                    lineHeight: '13.65px',
                    fontFamily: 'Sf Pro Display',
                    fontWeight: '700',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  Market breakdowns{' '}
                </Typography>
              </Box>
            </Box>
          </Stack>
        </motion.div>

        {/* <motion.div
          variants={imgAndTextVariants}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '& img': {
                width: '100%',
                height: 'auto',
                maxWidth: '100vw',
                maxHeight: '100vh',
              },

              '@media (max-width: 767px)': {
                padding: '12px',
              },
            }}
          >
            <Image src={macbook} alt="macbook" layout="responsive" />
          </Box>
        </motion.div> */}

        <motion.div
          variants={imgAndTextVariants}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',

              '@media (max-width: 767px)': {
                padding: '12px',
                width: 'auto',
              },
            }}
          >
            <Image
              src={macbook}
              alt="macbook"
              width={590}
              height={359}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Box>
        </motion.div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '14px',
            bottom: '17px',
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
    </>
  );
};

export default EducationCard;
