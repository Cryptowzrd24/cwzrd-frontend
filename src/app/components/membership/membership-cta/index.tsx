import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Avatar from '../../../../../public/images/membership/avatar.png';

function MembershipCta() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: 'url("/images/membership/ctaBanner.png")',
        backgroundSize: 'cover',
        padding: '56px',
        borderRadius: '32px',
        boxSizing: 'border-box',
        '@media (max-width:786px)': {
          padding: '64px 24px',
        },
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
          <Box
            sx={{
              ml: '8px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                color: 'rgba(247, 132, 26, 1)',
                fontWeight: '400',
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
                marginBottom: '0px',
                fontSize: '40px',
                '@media (max-width:786px)': {
                  fontSize: '20px',
                  fontWeight: '700',
                  lineHeight: '26px',
                },
              }}
            >
              Join the Cryptowzrd <br />
              Community Today!{' '}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#FFFFFFCC',
                fontSize: '12px',
                lineHeight: '18px',
                fontWeight: '400',
                mb: '24px',
                '@media (max-width:660px)': {
                  fontSize: '12px',
                },
              }}
            >
              Unlock the door to trading success and become a part of us now!
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              padding: '8px 8px 8px 8px',
              borderRadius: '32px',
              maxWidth: '372px',
              width: '100%',
              background: 'rgba(255, 255, 255, 1)',
              boxSizing: 'border-box',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                maxWidth: '72px',
                width: '100%',
                height: '24px',
                '@media (max-width:660px)': {
                  maxWidth: '57px',
                  height: '19px',
                },
              }}
            >
              <Image
                src={Avatar}
                fill
                objectFit="cover"
                alt="Join the Cryptowzrd Community Today!"
              />
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '19.2px',
                '@media (max-width:660px)': {
                  fontSize: '13px',
                  fontWeight: '700',
                },
              }}
            >
              Join 10,700+{' '}
              <span
                style={{
                  fontSize: '12px',
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
