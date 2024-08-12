'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import VerifiedGreen from '../../../../../public/icons/coin-details/verifiedGreen';
import macbook from '../../../../../public/images/platform/MacBook-pro.png';
import Image from 'next/image';
import PlusIconBlack from '../../../../../public/icons/collections/plusIconWhite';
import { motion } from 'framer-motion';

const EducationCard = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive((show) => !show);
  };
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/images/platform/community.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '48px 32px 56px 14px',
          borderRadius: '32px',
          maxWidth: '67.4%',
          width: '100%',
          position: 'relative',
        }}
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
        <motion.div
          key={active ? 'active' : 'inactive'}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.5 }}
          style={{ paddingLeft: '32px' }}
        >
          {active ? (
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
              Graduate Standing Knowledge with In-Depth Lessons
            </Typography>
          ) : (
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
              {' '}
              Upgrade Trading Knowledge with In-Depth Lessons
            </Typography>
          )}
        </motion.div>

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
          {/* ----------------------------- */}
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
            {/* -------------------------------- */}
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
          {/* --------------------------------------------------------------------------- */}
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
            {/* -------------------- */}{' '}
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
            {/* -------------------- */}{' '}
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
          {/* -------------------- */}
        </Stack>
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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            position: 'absolute',
            right: '24px',
            bottom: '28px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px',
              background: 'rgba(17, 17, 17, 1)',
              borderRadius: '100px',
              cursor: 'pointer',
            }}
            onClick={handleClick}
          >
            <PlusIconBlack />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EducationCard;
