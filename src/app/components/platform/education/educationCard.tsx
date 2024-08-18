'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import VerifiedGreen from '../../../../../public/icons/coin-details/verifiedGreen';
import macbook from '../../../../../public/images/platform/MacBook-pro.png';
import Image from 'next/image';
import PlusIconBlack from '../../../../../public/icons/collections/plusIconWhite';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const EducationCard = () => {
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
      transition: { delay: 0.65, duration: 0.325 },
      transitionEnd: { display: 'none' },
    },
    inactive: {
      opacity: 1,
      display: 'block',
      transition: { delay: 0.65, duration: 0.325 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 1, rotate: 0 },
    visible: { opacity: 1, rotate: 45 },
  };

  const loremVariants = {
    hidden: { opacity: 0, visibility: 'hidden', y: 20, display: 'none' },
    visible: {
      opacity: 1,
      visibility: 'visible',
      display: 'block',
      y: 0,
      transition: { delay: 0.975, duration: 0.325 },
    },
  };

  return (
    <>
      <motion.div
        style={{
          backgroundImage: !active
            ? `url('/images/platform/community.png')`
            : '',

          padding: '48px 32px 56px 14px',
          borderRadius: '32px',
          maxWidth: '67.4%',
          width: '100%',
          position: 'relative',
          transition: 'all 0.325s linear',
          height: '628px',
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
            color: 'rgba(255, 255, 255, 1)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            textAlign: 'center',
            mb: '8px',
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
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 1)',
                letterSpacing: 0.1,
                lineHeight: '24px',
                textAlign: 'start',
                maxWidth: '690px',
                mt: '260px',
                marginLeft: '36px',
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
              fontSize: '48px',
              fontWeight: '700',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '57.6px',
              textAlign: 'center',
              mb: '32px',
              maxWidth: '690px',
              width: '100%',
              margin: 'auto',
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
              mb: '78px',
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
                  padding: '8px 12px 8px 8px',
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
                    fontSize: '14px',
                    fontWeight: '700',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  26 WZRD Guide book
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: '8px 12px 8px 8px',
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
                    fontSize: '14px',
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
                gap: '8px',
              }}
            >
              <Box
                sx={{
                  padding: '8px 12px 8px 8px',
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
                    fontSize: '14px',
                    fontWeight: '700',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  Daily Technical Write-ups{' '}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: '8px 12px 8px 8px',
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
                    fontSize: '14px',
                    fontWeight: '700',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  315+ Examinations{' '}
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: '8px 12px 8px 8px',
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
                    fontSize: '14px',
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
            }}
          >
            <Image
              src={macbook}
              alt="macbook"
              width={496}
              style={{ height: '310px' }}
            />
          </Box>
        </motion.div>

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

export default EducationCard;
