'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import BrainIcon from '../../../../../public/images/membership/brain.png';
import CapIcon from '../../../../../public/images/membership/cap.png';
import FileIcon from '../../../../../public/images/membership/file.png';
import GlassIcon from '../../../../../public/images/membership/glass.png';
import PersonIcon from '../../../../../public/images/membership/person.png';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

const Mentorship = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };

  const backgroundVariants = {
    initial: {
      backgroundImage: `url('/images/membership/mentorshipBg.png')`,
    },
    active: {
      backgroundImage: 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
    },
    inactive: {
      backgroundImage: `url('/images/membership/mentorshipBg.png')`,
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
    hidden: { opacity: 1, rotate: 0, filter: 'invert(0)' },
    visible: { opacity: 1, rotate: 45, filter: 'invert(1)' },
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
            height: '423px',
            width: '100%',
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
              height: '100%',
            }}
          >
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

            <Box
              sx={{
                py: '64px',
                px: '216px',
                height: '100%',
                boxSizing: 'border-box',
              }}
            >
              <motion.div
                variants={imgAndTextVariants}
                initial="initial"
                animate={active ? 'active' : 'inactive'}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '100%',
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '32px',
                        fontWeight: '600',
                        lineHeight: '38px',
                        color: 'rgba(255, 255, 255, 1)',
                      }}
                    >
                      Professional Mentorship
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: 'rgba(255,255,255,1)',
                        padding: '14px',
                        borderRadius: '14px',
                      }}
                    >
                      <Image src={BrainIcon} alt="brain icon" />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: 'rgba(255,255,255,1)',
                        padding: '20px',
                        borderRadius: '16px',
                      }}
                    >
                      <Image src={PersonIcon} alt="brain icon" />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: 'rgba(245,65,65,1)',
                        py: '30px',
                        px: '20px',
                        borderRadius: '20px',
                        boxShadow:
                          '0px 3.318px 92.907px 0px rgba(245, 65, 65, 0.40), 0px 3.318px 285.358px 0px #F54141',
                      }}
                    >
                      <Image src={CapIcon} alt="brain icon" />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: 'rgba(255,255,255,1)',
                        padding: '18px',
                        borderRadius: '16px',
                      }}
                    >
                      <Image src={GlassIcon} alt="brain icon" />
                    </Box>
                    <Box
                      sx={{
                        backgroundColor: 'rgba(255,255,255,1)',
                        py: '18px',
                        px: '22px',
                        borderRadius: '14px',
                      }}
                    >
                      <Image src={FileIcon} alt="file icon" />
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '21px',
                        color: 'rgba(255, 255, 255, 1)',
                        textAlign: 'center',
                      }}
                    >
                      Receive direct mentorship from experienced traders. Our
                      professional guidance ensures you have the support needed
                      to improve your skills and strategies.
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
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
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default Mentorship;
