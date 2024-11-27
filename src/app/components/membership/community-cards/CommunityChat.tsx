import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';

import Person from '../../../../../public/icons/membership/person.svg';
import Share from '../../../../../public/icons/membership/share.svg';
import Chat from '../../../../../public/icons/membership/chat.svg';
import Group from '../../../../../public/icons/membership/group.svg';
import Analytics from '../../../../../public/icons/membership/analytics.svg';
import Image from 'next/image';

const CommunityChat = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
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
    <Box
      sx={{
        width: '50%',
        height: '432px',
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        background: 'rgba(31, 31, 31, 1)',
        borderRadius: '24px',
        '@media (max-width:768px)': {
          width: '100%',
        },
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          transition: 'all 0.325s linear',
          boxSizing: 'border-box',
        }}
        initial="initial"
        animate={active ? 'active' : 'inactive'}
      >
        <motion.div
          variants={imgAndTextVariants}
          initial="initial"
          animate={active ? 'active' : 'inactive'}
          style={{
            height: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              padding: '32px 24px 70px',
              boxSizing: 'border-box',
              '@media (max-width:855px)': {
                padding: '32px 16px 48px',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Typography
                sx={{
                  fontSize: '24px',
                  color: 'rgba(255, 255, 255, 1)',
                  lineHeight: '28px',
                  fontWeight: '600',
                  '@media (max-width:660px)': {
                    fontSize: '24px',
                  },
                }}
              >
                Open Community Chats
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  '@media (max-width:855px)': {
                    display: 'none',
                  },
                }}
              >
                <Image src={Person} alt="person icon" />
              </Box>
              <Box>
                <Image src={Share} alt="share icon" />
              </Box>
              <Box
                sx={{
                  background: 'rgba(31,215,115,1)',
                  padding: '21px',
                  borderRadius: '50%',
                  boxShadow:
                    '0px 3.318px 92.907px 0px rgba(31, 215, 115, 0.40), 0px 3.318px 285.358px 0px rgba(31, 215, 115, 0.40)',
                }}
              >
                <Image src={Chat} alt="chat icon" />
              </Box>
              <Box>
                <Image src={Group} alt="group icon" />
              </Box>
              <Box
                sx={{
                  '@media (max-width:855px)': {
                    display: 'none',
                  },
                }}
              >
                <Image src={Analytics} alt="analytics icon" />
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: '400',
                  lineHeight: '18px',
                  textAlign: 'center',
                  maxWidth: '391px',
                  mx: 'auto',
                  fontFamily: 'Sf Pro Text',
                  '@media (max-width:660px)': {
                    fontSize: '12px',
                  },
                }}
              >
                Dive into our vibrant open community chat, and unlock a world of
                real-time updates, 24/7 expert support, and exclusive insider
                knowledge.
              </Typography>
            </Box>
          </Box>
        </motion.div>

        {active && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={loremVariants}
            style={{ width: '100%', padding: '24px', boxSizing: 'border-box' }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 1)',
                mb: '48px',
                lineHeight: '21px',
                textAlign: 'start',
                maxWidth: '226px',
              }}
            >
              Open Community Chats
            </Typography>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.8)',
                lineHeight: '24px',
                textAlign: 'start',
              }}
            >
              Stay ahead with breaking market news, in-depth analysis, trades,
              and lessons that deliver pure alpha. Connect with a thriving
              network of like-minded individuals and gain unparalleled access to
              the tools, insights, and strategies you need to dominate the
              crypto market. This is more than a chat - it’s your gateway to
              thriving in the crypto world.
            </Typography>
          </motion.div>
        )}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '13px',
            bottom: '13px',
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
    </Box>
  );
};

export default CommunityChat;
