import { Box, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';

const TechnicalsHeader = ({
  handleCurrencyChange,
  tabSelected,
}: {
  handleCurrencyChange: (title: string) => void;
  tabSelected: string;
}) => {
  return (
    <Box className="technical-header-container">
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '15.6px',
          fontFamily: 'Sf Pro Display',
          letterSpacing: '1.2px',
        }}
        className="technical-header"
      >
        TECHNICALS
      </Typography>
      <Typography
        sx={{
          fontSize: '32px',
          fontWeight: 700,
          lineHeight: '26.4px',
          fontFamily: 'Sf Pro Display',
          letterSpacing: '1px',
          color: 'rgba(255, 255, 255, 1)',
          marginTop: '2px',
        }}
      >
        Your Guide to Smarter Trading Decisions
      </Typography>
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '21px',
          fontFamily: 'Sf Pro Display',
          color: 'rgba(255, 255, 255, 0.8)',
          width: '850px',
          marginTop: '8px',
          opacity: '0.8',
        }}
      >
        Delve into detailed technical analysis and insights to enhance your
        trading skills.
      </Typography>
      <Box
        sx={{
          position: 'relative',
          width: '148px',
          height: '38px',
          borderRadius: '48px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          left: '1217px',
          top: '-40px',
          display: 'flex',
          alignItems: 'center',
          background: '#4041423d',
        }}
      >
        <Box
          onClick={() => handleCurrencyChange('crypto')}
          sx={{
            width: '38px',
            height: '16px',
            borderRadius: '40px',
            backgroundColor:
              tabSelected === 'crypto' ? 'rgba(255, 255, 255, 1)' : '',
            padding: '7px 16px 7px 16px',
            marginLeft: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 700,
              color:
                tabSelected === 'crypto'
                  ? 'rgba(114, 72, 247, 1)'
                  : 'rgba(255, 255, 255, 1)',
              fontFamily: 'Sf Pro Display',
            }}
          >
            Crypto
          </Typography>
        </Box>
        <Box
          onClick={() => handleCurrencyChange('fx')}
          sx={{
            width: '38px',
            height: '16px',
            borderRadius: '40px',
            backgroundColor:
              tabSelected === 'fx' ? 'rgba(255, 255, 255, 1)' : '',
            padding: '7px 16px 7px 16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 700,
              color:
                tabSelected === 'fx'
                  ? 'rgba(114, 72, 247, 1)'
                  : 'rgba(255, 255, 255, 1)',
              fontFamily: 'Sf Pro Display',
            }}
          >
            FX
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TechnicalsHeader;
