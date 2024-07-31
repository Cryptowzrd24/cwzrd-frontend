'use client';
import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Refresh from '../../../../public/icons/coin-details/refresh';
import ArrowRightBlack from '../../../../public/icons/News-Letter/arrowRightBlack';
import converter from '../../../../public/images/coin-details/converter.png';
import TimeAgo from 'react-timeago';

const Converter = ({ coinDetails }: any) => {
  const [currency, setCurrency] = useState('');
  const [bitcoinAmount, setBitcoinAmount] = useState(1);
  const [convertedVal, setConvertedVal] = useState(coinDetails?.quote?.price);

  const imgId = `https://s2.coinmarketcap.com/static/img/coins/64x64/${coinDetails?.coin_id || 1}.png`;

  const handleCurrencyChange = (event: any) => {
    setCurrency(event.target.value);
  };

  const handleBitcoinAmountChange = (event: any) => {
    const amount = Number(event.target.value);
    setBitcoinAmount(amount);
    setConvertedVal(amount * (coinDetails?.quote?.price || 0));
  };

  console.log(coinDetails?.data?.quote?.last_updated);

  return (
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
          alignItems: 'flex-start',
          gap: '32px',
        }}
      >
        <Stack sx={{ maxWidth: '882px', width: '100%' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: 'rgba(17, 17, 17, 1)',
              letterSpacing: '2px',
              ml: '4px',
              mb: '4px',
            }}
          >
            Converter
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: '40px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
              mb: '16px',
            }}
          >
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {coinDetails?.about_coin?.symbol}/USD:
            </span>{' '}
            Convert Bitcoin ({coinDetails?.about_coin?.symbol}) to United States
            Dollar (USD)
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              color: 'rgba(17, 17, 17, 0.8)',
              mb: '16px',
            }}
          >
            1 {coinDetails?.name} equals {coinDetails?.quote?.price} United
            States Dollar
          </Typography>
          <Box
            sx={{
              mt: '16px',
              display: 'flex',
              alignItems: 'center',
              mb: '32px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                background: 'rgba(17, 17, 17, 0.05)',
                padding: '11px 16px 11px  16px',
                fontWeight: '600',
                display: 'flex',
                justifyContent: 'center',
                fontSize: '14px',
                alignItems: 'center',
                gap: '4px',
                borderRadius: '56px',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
                lineHeight: 1,
                ':hover': {
                  background: 'rgba(17, 17, 17, 0.2)',
                },
              }}
            >
              Buy {coinDetails?.name}
              <ArrowRightBlack />
            </Typography>
          </Box>
        </Stack>
        <Box>
          <img src={imgId} alt="bitcoin" width={80} height={80} />
        </Box>
      </Box>
      <Box
        sx={{
          boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
          padding: '16px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 1)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          type="number"
          value={bitcoinAmount}
          onChange={handleBitcoinAmountChange}
          style={{
            borderRadius: '100px',
            padding: '13px 24px',
            border: '1px solid rgba(17, 17, 17, 0.05)',
            outline: 'none',
            fontSize: '16px',
            fontWeight: '500',
            color: 'rgba(17, 17, 17, 1)',
            maxWidth: '396px',
            width: '100%',
            marginRight: '10px',
          }}
          placeholder="1"
        />
        <Box
          sx={{
            borderRadius: '100px',
            padding: '9px 20px 9px 16px',
            background: 'rgba(17, 17, 17, 0.05)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            marginRight: '16px',
          }}
        >
          <img src={imgId} alt="bitcoin" width={30} height={30} />
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 0.8)',
            }}
          >
            {coinDetails?.about_coin?.symbol}{' '}
          </Typography>
        </Box>
        <Box sx={{ mr: '16px' }}>
          <Image
            src={converter}
            alt="converter"
            width={48}
            height={48}
            style={{ cursor: 'pointer' }}
          />
        </Box>
        <Box sx={{ width: '100%' }}>
          <input
            type="text"
            defaultValue={coinDetails?.quote?.price}
            value={convertedVal?.toFixed(2)}
            readOnly
            style={{
              borderRadius: '100px',
              padding: '13px 24px',
              border: '1px solid rgba(17, 17, 17, 0.05)',
              outline: 'none',
              fontSize: '16px',
              fontWeight: '500',
              color: 'rgba(17, 17, 17, 1)',
              width: '84%',
              marginRight: '10px',
            }}
            placeholder={coinDetails?.quote?.price}
          />
        </Box>
        <Box
          sx={{
            borderRadius: '100px',
            padding: '13px 14px 13px 20px',
            background: 'rgba(17, 17, 17, 0.05)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          <Select
            value={currency}
            onChange={handleCurrencyChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            IconComponent={KeyboardArrowDownIcon}
            sx={{
              border: 'none',
              background: 'none',
              fontSize: '16px',
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
            {/* Add more currencies as needed */}
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
            fontSize: '12px',
            fontWeight: '600',
            color: 'rgba(17, 17, 17, 0.8)',
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          Last Update:
          <TimeAgo date={coinDetails?.quote?.last_updated} />
          <Box
            component="span"
            sx={{
              color: 'rgba(114, 72, 72, 1)',
              display: 'flex',
              alignItems: 'center',
              ml: '24px',
              fontSize: '12px',
              fontWeight: '600',
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
  );
};

export default Converter;
