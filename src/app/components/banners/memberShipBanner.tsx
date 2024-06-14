import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import styles from './style.module.scss';
import banner2 from '../../../../public/images/banner/banner2.png';
// import memo from '../../../../public/images/banner/memo.png';
import pic1 from '../../../../public/images/banner/2.png';
import pic2 from '../../../../public/images/banner/3.png';
import pic3 from '../../../../public/images/banner/4.png';
import pic4 from '../../../../public/images/banner/5..png';
import pic5 from '../../../../public/images/banner/1.png';

function MemberShipBanner() {
  return (
    <Box className={styles.bannerBox2}>
      {/* <Image src={banner2} alt="banner" style={{ borderRadius: '24px' }} /> */}
      <Box>
        <Stack
          sx={{
            width: '100%',
            margin: 'auto',
            gap: '8px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 1)',
              letterSpacing: 3,
            }}
          >
            MEMBERSHIP
          </Typography>
          <Typography
            variant="h2"
            sx={{
              //   width: 'max-content',
              fontWeight: '500',
              mb: '8px',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            Join the Cryptowzrd Community Today!{' '}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 1)',
              maxWidth: '1132px',
              width: '100%',
              margin: 'auto',
              letterSpacing: '-0.1',
            }}
          >
            Unlock the door to trading success and become a part of the
            Cryptowzrd community! Gain access to our comprehensive educational
            resources, trading tools, and supportive community.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 24px 12px 12px',
              borderRadius: '100px',
              maxWidth: '520px',
              width: '100%',
              background: 'rgba(255, 255, 255, 1)',
              margin: '48px auto 0 auto',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                borderRadius: '50px',
                overflow: 'hidden', // Keeps everything neat
              }}
            >
              <Image
                src={pic5}
                alt="memo1"
                style={{ transform: 'translateX(-15%)', zIndex: 5 }}
              />
              <Image
                src={pic1}
                alt="memo1"
                style={{ transform: 'translateX(-30%)', zIndex: 4 }}
              />
              <Image
                src={pic2}
                alt="memo1"
                style={{ transform: 'translateX(-54%)', zIndex: 3 }}
              />
              <Image
                src={pic3}
                alt="memo1"
                style={{ transform: 'translateX(-76%)', zIndex: 2 }}
              />
              <Image
                src={pic4}
                alt="memo1"
                style={{
                  transform: 'translateX(-185%)',
                  zIndex: 3,
                  background: '#fff', // Corrected the syntax here
                  padding: '2px',
                  borderRadius: '50px',
                }}
              />
            </Box>

            <Typography variant="h5" sx={{ fontSize: '16px' }}>
              Join 10,700+{' '}
              <span style={{ fontSize: '16px', fontWeight: '400' }}>
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
