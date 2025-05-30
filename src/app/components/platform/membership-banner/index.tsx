import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './index.module.css';
import Avatar from '../../../../../public/images/banner/avatar.png';

interface MemberShipBannerProps {
  isNftDetail?: boolean;
}

function MemberShipBanner({ isNftDetail }: MemberShipBannerProps) {
  return (
    <Box
      className={styles.bannerBox2}
      style={isNftDetail ? { width: '1290px' } : {}}
    >
      <Box>
        <Stack
          sx={{
            width: '100%',
            margin: 'auto',
            // gap: '8px',
            display: 'flex',
          }}
        >
          <Typography
            sx={{
              fontSize: '10px !important',
              background:
                'linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '1px',
              lineHeight: '15.6px',
              marginBottom: '8px',
            }}
          >
            MEMBERSHIP
          </Typography>
          <Typography
            sx={{
              fontWeight: '700',
              maxWidth: '438.7px',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '33px',
              letterSpacing: '2px',
              marginBottom: '0px',
              fontSize: '30px',

              '@media (max-width: 576px)': {
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '110%',
                letterSpacing: '0.24px',
              },
            }}
          >
            Join the Cryptowzrd Community Today!{' '}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFFFFFCC',
              fontSize: '10px !important',
              lineHeight: '15px',
              fontWeight: '400',
              mb: '24px',
              mt: '10px',
            }}
          >
            Unlock the door to trading success and become a part of us now!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              padding: '6px 12px 6px 6px',
              borderRadius: '32px',
              width: '289px',
              background: 'rgba(255, 255, 255, 1)',

              '@media (max-width: 576px)': {
                gap: '6px',
                padding: '8px',
              },
            }}
          >
            <Image
              src={Avatar}
              width={54}
              height={18}
              alt="Join the Cryptowzrd Community Today!"
            />

            <Typography
              sx={{
                fontSize: '10px !important',
                fontWeight: '700',
                lineHeight: '14.4px',
                width: '201px',
              }}
            >
              Join 10,700+{' '}
              <span
                style={{
                  fontSize: '10px',
                  fontWeight: '400',
                  lineHeight: '14.4px',
                }}
              >
                people who already joined us
              </span>
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default MemberShipBanner;
