import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React from 'react';
import RightPartImage from '../../../../../public/images/home/exclusive_membership/exclusive_membership_benefits_right_part.svg';
import Image from 'next/image';
import ShieldCheckIcon from '../../../../../public/icons/home/ShieldCheck.svg';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';

const ExclusiveMemberShip = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
  return (
    <Box
      sx={{
        backgroundImage:
          'url(/images/home/exclusive_membership/exclusive_membership_benefits_bg.svg)',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          margin: '0 auto',
          width: {
            xs: '100%',
            sm: '95%',
            md: '900px',
            lg: '1150px',
            xl: '1200px',
          },
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { xs: '20px', lg: '40px 0' },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '32px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: '630px',
            width: { xl: '85%', md: '40%' },
          }}
        >
          <Image
            src={ShieldCheckIcon}
            width={24}
            height={24}
            alt="sheild check"
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <Typography
              sx={{
                fontSize: '32px',
                fontWeight: '500',
                color: 'white',
              }}
            >
              Unlock Exclusive Benefits with Membership
            </Typography>
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'white',
              }}
            >
              Receive timely and in-depth market signals every day, ensuring you
              are always ahead of the curve. Our expert analysis helps you make
              well-informed decisions.
            </Typography>
          </Box>
          <Button
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              padding: '10px 20px',
              backgroundColor: 'white',
              borderRadius: '25px',
              width: '158px',
              height: '39px',
            }}
          >
            <span>Get Started</span> <ArrowRightBlack width={20} height={20} />
          </Button>
        </Box>
        <Box>
          <Image
            src={RightPartImage}
            width={isMobile ? 300 : 450}
            height={300}
            alt="exclusive member right part"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ExclusiveMemberShip;
