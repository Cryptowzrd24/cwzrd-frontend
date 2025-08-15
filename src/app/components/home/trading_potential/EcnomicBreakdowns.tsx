import { Box, Typography } from '@mui/material';
import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import GlobeIcon from '../../../../../public/icons/home/Globe.svg';
import LeftPartImage from '../../../../../public/images/home/exclusive_membership/exclusive_membership_benefits_right_part.svg';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';

const EcnomicBreakdowns = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage:
          'url(/images/home/trading_potential/in_depth_ecnomic_discussion_bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '24px',
        padding: '20px',
        boxSizing: 'border-box',
        flexDirection: { xs: 'column-reverse', lg: 'row' },
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', lg: '50%' },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image
          src={LeftPartImage}
          width={200}
          height={200}
          alt="exclusive member right part"
        />
      </Box>
      <Box
        sx={{
          width: { xs: '100%', lg: '50%' },
          display: 'flex',
          gap: '30px',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: '630px',
            width: { xl: '100%', md: '90%' },
          }}
        >
          <Image src={GlobeIcon} width={40} height={40} alt="sheild check" />
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '700',
              color: 'white',
            }}
          >
            In-depth Economic <br /> Breakdowns
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              color: 'white',
            }}
          >
            comprehensive, detailed analysis of a particular economic subject,
            issue, sector, or market.
          </Typography>
          <Button
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              padding: '10px 20px',
              backgroundColor: 'white',
              borderRadius: '25px',
            }}
          >
            <span>Get Started</span> <ArrowRightBlack width={20} height={20} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default EcnomicBreakdowns;
