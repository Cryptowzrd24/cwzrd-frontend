'use client';
import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import bitocin from '../../../../public/images/coin-details/bitcoin.png';
import Image from 'next/image';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import converter from '../../../../public/images/coin-details/converter.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Refresh from '../../../../public/icons/coin-details/refresh';

const Converter = () => {
  const [currency, setCurrency] = React.useState('');

  const handleChange = (event: any) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <Box
        sx={{
          boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
          padding: '64px 80px 56px 80px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 1)',
          marginBottom: '24px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}
        >
          <Stack sx={{ maxWidth: '882px', width: '100%' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                letterSpacing: '2px',
                ml: '8px',
              }}
            >
              Converter
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: '56px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                letterSpacing: '-2px',
                mb: '16px',
              }}
            >
              <span
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-2px',
                }}
              >
                BTC/USD:
              </span>{' '}
              Convert Bitcoin (BTC) to United States Dollar (USD)
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '20px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
                mb: '32px',
              }}
            >
              1 Bitcoin equals $62,489.61 United States Dollar
            </Typography>
            <Button
              variant="contained"
              endIcon={
                <ArrowForwardIos sx={{ width: '12px', height: '12px' }} />
              }
              sx={{
                borderRadius: '56px',
                maxWidth: '164px',
                fontSize: '16px',
                fontWeight: '700',
                mb: '48px',
              }}
            >
              Buy Bitcoin
            </Button>
          </Stack>
          <Box sx={{ mt: '36px' }}>
            <Image src={bitocin} alt="bitcoin" width={120} height={120} />
          </Box>
        </Box>
        <Box
          sx={{
            boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
            padding: '24px',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 1)',
            marginBottom: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <input
            style={{
              borderRadius: '100px',
              padding: '25px 40px',
              border: '1px solid rgba(17, 17, 17, 0.05)',
              outline: 'none',
              fontSize: '20px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 1)',
            }}
            placeholder="1"
          />
          <Box
            sx={{
              borderRadius: '100px',
              padding: '21px 32px',
              background: 'rgba(17, 17, 17, 0.05)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Image src={bitocin} alt="bitcoin" width={30} height={30} />
            <Typography
              variant="body1"
              sx={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              BTC{' '}
            </Typography>
          </Box>
          <Box>
            <Image
              src={converter}
              alt="converter"
              width={72}
              height={72}
              style={{ cursor: 'pointer' }}
            />
          </Box>
          <Box>
            <input
              style={{
                borderRadius: '100px',
                padding: '25px 40px',
                border: '1px solid rgba(17, 17, 17, 0.05)',
                outline: 'none',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
              placeholder="49,627.43"
            />
          </Box>
          <Box
            sx={{
              borderRadius: '100px',
              padding: '22px 34px',
              background: 'rgba(17, 17, 17, 0.05)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Select
              value={currency}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                border: 'none',
                background: 'none',
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                display: 'flex',
                alignItems: 'center',
                '& .MuiSelect-select': {
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
            >
              <MenuItem value="" key="">
                USD
              </MenuItem>
              <MenuItem value="option1" key="option1">
                Opt 1
              </MenuItem>
              <MenuItem value="option2" key="option2">
                Opt 2
              </MenuItem>
              <MenuItem value="option3" key="option3">
                Opt 3
              </MenuItem>
            </Select>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'rgba(17, 17, 17, 0.8)',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            Last Update: 3.04 AM, April 17, 2024
            <Box
              component="span"
              sx={{
                color: 'rgba(114, 72, 247, 1)',
                display: 'flex',
                alignItems: 'center',
                ml: '24px',
              }}
            >
              <span
                style={{
                  marginTop: '4px',
                  marginRight: '4px',
                  cursor: 'pointer',
                }}
              >
                <Refresh />
              </span>
              Refresh
            </Box>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Converter;
