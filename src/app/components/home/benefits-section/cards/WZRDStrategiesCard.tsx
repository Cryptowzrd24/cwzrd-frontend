import React from 'react';
import { Box, Typography } from '@mui/material';
import WZRDStrategiesIcon from '../../../../../../public/images/home/benefits-section/WZRD_strategy.svg';
import Image from 'next/image';

const WZRDStrategiesCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: '38%' },
        height: { xs: 'auto', lg: '311px' },
        minHeight: { xs: '280px', sm: '300px', lg: '311px' },
        background: 'white',
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0,0,0,0.05)',
      }}
    >
      {/* centered target icon */}
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '36%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Image
          src={WZRDStrategiesIcon}
          alt="WZRD Strategies"
          width={180}
          height={180}
        />
      </Box>

      {/* bottom-centered text */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '24px',
          left: 0,
          right: 0,
          textAlign: 'center',
          px: '20px',
        }}
      >
        <Typography
          sx={{
            color: '#7248F7',
            fontWeight: 700,
            fontSize: { xs: '20px', sm: '20px' },
            lineHeight: '24px',
          }}
        >
          WZRD Strategies
        </Typography>
        <Typography
          sx={{
            mt: '8px',
            color: '#111111',
            fontSize: { xs: '14px', sm: '16px' },
            lineHeight: '17.6px',
          }}
        >
          Designed to maximize profits and minimize risk.
        </Typography>
      </Box>
    </Box>
  );
};

export default WZRDStrategiesCard;
