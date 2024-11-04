import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Avatar from '../../../../../public/images/membership/avatar.png';

function MembershipCta() {
  return (
    <Box
      sx={{
        width: '1290px',
        position: 'relative',
        backgroundImage: 'url("/images/membership/ctaBanner.png")',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        padding: '42px 75px',
        borderRadius: '32px',
      }}
    >
      <Box>
        <Stack
          sx={{
            width: '100%',
            margin: 'auto',
            display: 'flex',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 1)',
              letterSpacing: '1px',
              lineHeight: '15.6px',
              marginBottom: '8px',
            }}
          >
            MEMBERSHIP
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: '700',
              maxWidth: '606px',
              mb: '13px',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '44px',
              letterSpacing: '2px',
              marginBottom: '0px',
              fontSize: '40px',
            }}
          >
            Join the Cryptowzrd Community Today!{' '}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#FFFFFFCC',
              fontSize: '12px',
              lineHeight: '18px',
              fontWeight: '400',
              mb: '24px',
            }}
          >
            Unlock the door to trading success and become a part of us now!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              padding: '8px 16px 8px 8px',
              borderRadius: '32px',
              maxWidth: '400px',
              width: '100%',
              background: 'rgba(255, 255, 255, 1)',
            }}
          >
            <Image
              src={Avatar}
              width={72}
              height={24}
              alt="Join the Cryptowzrd Community Today!"
            />

            <Typography
              variant="h5"
              sx={{ fontSize: '16px', fontWeight: '700', lineHeight: '19.2px' }}
            >
              Join 10,700+{' '}
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '19.2px',
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

export default MembershipCta;
