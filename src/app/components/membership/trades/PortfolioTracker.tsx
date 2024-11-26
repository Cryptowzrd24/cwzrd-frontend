import { Box, Typography } from '@mui/material';
import React from 'react';

import PortfolioTimer from '../../../../../public/images/membership/portfolioTimer.png';
import TickIcon from '../../../../../public/images/membership/tick.svg';
import Image from 'next/image';

const PortfolioTracker = () => {
  return (
    <Box
      sx={{
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        backgroundColor: 'rgba(31,31,31,1)',
        borderRadius: '24px',
        boxSizing: 'border-box',
        maxWidth: '348px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        padding: '0 18px 24px',
        '@media (max-width:768px)': {
          maxWidth: 'none',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Box>
          <Image src={PortfolioTimer} alt="graph" width={225} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
            borderRadius: '80px',
            backgroundColor: 'rgba(51,51,51,1)',
            py: '3px',
            paddingLeft: '5px',
            paddingRight: '7px',
            position: 'absolute',
            top: '79px',
            right: '1px',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(31, 215, 115, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px',
              borderRadius: '50%',
            }}
          >
            <Image src={TickIcon} width={6} alt="graph" />
          </Box>
          <Typography
            sx={{
              fontSize: '11px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '14px',
            }}
          >
            Performance
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
            borderRadius: '80px',
            backgroundColor: 'rgba(51,51,51,1)',
            py: '3px',
            paddingLeft: '5px',
            paddingRight: '7px',
            position: 'absolute',
            bottom: '65px',
            left: '13px',
          }}
        >
          <Box
            sx={{
              backgroundColor: 'rgba(31, 215, 115, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '5px',
              borderRadius: '50%',
            }}
          >
            <Image src={TickIcon} width={6} alt="graph" />
          </Box>
          <Typography
            sx={{
              fontSize: '11px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '14px',
            }}
          >
            Tracker
          </Typography>
        </Box>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            color: 'rgba(255, 255, 255, 1)',
            mb: '6px',
            textAlign: 'center',
            lineHeight: '26px',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '20px',
            },
          }}
        >
          Portfolio Tracker
        </Typography>

        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '297px',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
        >
          Track and optimize your investments with our Portfolio Tracker. Keep
          tabs on your portfolio's performance and make smarter investment
          decisions.
        </Typography>
      </Box>
    </Box>
  );
};

export default PortfolioTracker;
