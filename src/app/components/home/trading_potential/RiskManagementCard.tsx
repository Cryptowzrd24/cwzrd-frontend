import React from 'react';
import { Box, Typography } from '@mui/material';
import RiskManagementIcon from '../../../../../public/images/home/trading_potential/RiskManagement.svg';
import Image from 'next/image';

const RiskManagementCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '100%', lg: '311px' },
        minHeight: { xs: '280px', sm: '300px', lg: '311px' },
        background: 'white',
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid rgba(0,0,0,0.05)',
        aspectRatio: { xs: '1', sm: 3 / 1, md: '1' },
      }}
    >
      {/* centered icon */}
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Image
          src={RiskManagementIcon}
          alt="risk-management"
          width={160}
          height={149}
        />
      </Box>

      {/* bottom centered text */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 40px)',
          maxWidth: 320,
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '16px' },
            fontWeight: 700,
            color: '#111111',
            lineHeight: '19.2px',
          }}
        >
          Risk Management Guidance
        </Typography>
        <Typography
          sx={{
            mt: '8px',
            fontSize: { xs: '14px' },
            color: '#111111',
            opacity: 0.56,
            lineHeight: '18.2px',
          }}
        >
          Learn to protect your investments and trade confidently with proven
          risk management techniques.
        </Typography>
      </Box>
    </Box>
  );
};

export default RiskManagementCard;
