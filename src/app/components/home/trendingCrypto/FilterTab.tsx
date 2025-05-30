import { Box, Typography } from '@mui/material';
import React from 'react';

const FilterTab = ({
  tabSelected = 'crypto',
  handleCurrencyChange,
}: {
  tabSelected: 'crypto' | 'forex';
  handleCurrencyChange: (string: 'crypto' | 'forex') => void;
}) => {
  return (
    <Box
      sx={{
        width: '148px',
        height: '38px',
        borderRadius: '48px',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FFF',
        mx: 'auto',
      }}
    >
      <Box
        onClick={() => handleCurrencyChange('crypto')}
        sx={{
          width: '38px',
          height: '16px',
          borderRadius: '40px',
          backgroundColor:
            tabSelected === 'crypto' ? 'rgba(114, 72, 247, 0.10)' : '',
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
            fontSize: '12px !important',
            fontWeight: 700,
            color:
              tabSelected === 'crypto'
                ? 'rgba(114, 72, 247, 1)'
                : 'rgba(0, 0, 0, 0.6)',
            fontFamily: 'Sf Pro Display',
          }}
        >
          Crypto
        </Typography>
      </Box>
      <Box
        onClick={() => handleCurrencyChange('forex')}
        sx={{
          width: '38px',
          height: '16px',
          borderRadius: '40px',
          backgroundColor:
            tabSelected === 'forex' ? 'rgba(114, 72, 247, 0.10)' : '',
          padding: '7px 16px 7px 16px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <Typography
          sx={{
            fontSize: '12px !important',
            fontWeight: 700,
            color:
              tabSelected === 'forex'
                ? 'rgba(114, 72, 247, 1)'
                : 'rgba(0, 0, 0, 0.6)',
            fontFamily: 'Sf Pro Display',
          }}
        >
          Forex
        </Typography>
      </Box>
    </Box>
  );
};

export default FilterTab;
