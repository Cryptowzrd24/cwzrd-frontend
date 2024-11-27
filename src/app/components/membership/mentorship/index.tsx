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
      backgroundImage: `url('/images/membership/mentorshipBg.png')`,
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
            paddingInline: '20px',
            backgroundPosition: 'center',
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
                style={{
                  height: '100%',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 1)',
                    mt: '24px',
                    letterSpacing: 0.1,
                    lineHeight: '21px',
                    textAlign: 'start',
                    marginLeft: '24px',
                    maxWidth: '226px',
                  }}
                >
                  Lorem ipsum dolor sit
                </Typography>

                <Typography
                  sx={{
                    fontSize: '18px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 0.8)',
                    mt: '112px',
                    letterSpacing: 0.1,
                    lineHeight: '26px',
                    textAlign: 'start',
                    marginLeft: '27px',
                    maxWidth: '924px',
                    width: '100%',
                    '@media (max-width:660px)': {
                      mt: '42px',
                      fontSize: '12px',
                    },
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit.
                </Typography>
              </motion.div>
            )}

            <Box
              sx={{
                py: '64px',
                mx: 'auto',
                height: '100%',
                boxSizing: 'border-box',
                '@media (max-width:660px)': {
                  py: '84px',
                },
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
                    maxWidth: '573px',
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '32px',
                        fontWeight: '600',
                        lineHeight: '38px',
                        color: 'rgba(255, 255, 255, 1)',
                        '@media (max-width:660px)': {
                          fontSize: '24px',
                          lineHeight: '31px',
                        },
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
                        boxSizing: 'border-box',
                        '@media (max-width:660px)': {
                          padding: '7px',
                          borderRadius: '7px',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '52px',
                          height: '46px',
                          '@media (max-width:660px)': {
                            width: '26px',
                            height: '23px',
                          },
                        }}
                      >
                        <Image
                          src={BrainIcon}
                          alt="brain icon"
                          fill
                          objectFit="contain"
                          objectPosition="center"
                        />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: 'rgba(255,255,255,1)',
                        padding: '16px',
                        borderRadius: '16px',
                        boxSizing: 'border-box',
                        '@media (max-width:660px)': {
                          padding: '8px',
                          borderRadius: '8px',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '56px',
                          height: '56px',
                          '@media (max-width:660px)': {
                            width: '28px',
                            height: '28px',
                          },
                        }}
                      >
                        <Image
                          src={PersonIcon}
                          alt="person icon"
                          fill
                          objectFit="contain"
                          objectPosition="center"
                        />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: 'rgba(245,65,65,1)',
                        padding: '20px',
                        borderRadius: '20px',
                        boxShadow:
                          '0px 3.318px 92.907px 0px rgba(245, 65, 65, 0.40), 0px 3.318px 285.358px 0px #F54141',
                        boxSizing: 'border-box',
                        '@media (max-width:660px)': {
                          padding: '10px',
                          borderRadius: '10px',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '72px',
                          height: '72px',
                          '@media (max-width:660px)': {
                            width: '36px',
                            height: '36px',
                          },
                        }}
                      >
                        <Image
                          src={CapIcon}
                          alt="cap icon"
                          fill
                          objectFit="contain"
                          objectPosition="center"
                        />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: 'rgba(255,255,255,1)',
                        padding: '16px',
                        borderRadius: '16px',
                        boxSizing: 'border-box',
                        '@media (max-width:660px)': {
                          padding: '8px',
                          borderRadius: '8px',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '56px',
                          height: '56px',
                          '@media (max-width:660px)': {
                            width: '28px',
                            height: '28px',
                          },
                        }}
                      >
                        <Image
                          src={GlassIcon}
                          alt="glass icon"
                          fill
                          objectFit="contain"
                          objectPosition="center"
                        />
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        backgroundColor: 'rgba(255,255,255,1)',
                        padding: '14px',
                        borderRadius: '14px',
                        boxSizing: 'border-box',
                        '@media (max-width:660px)': {
                          padding: '7px',
                          borderRadius: '7px',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '44px',
                          height: '44px',
                          '@media (max-width:660px)': {
                            width: '22px',
                            height: '22px',
                          },
                        }}
                      >
                        <Image
                          src={FileIcon}
                          alt="file icon"
                          fill
                          objectFit="contain"
                          objectPosition="center"
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        fontWeight: '400',
                        lineHeight: '21px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        textAlign: 'center',
                        fontFamily: 'Sf Pro Text',
                        '@media (max-width:660px)': {
                          fontSize: '12px',
                          lineHeight: '18px',
                        },
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
