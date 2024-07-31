import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import RightArrowLinearGraident from '../../../../public/icons/nft/rightArrowLinearGraident';

const CoinInfo = () => {
  return (
    <>
      <Box
        sx={{
          boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
          padding: '32px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 1)',
          marginBottom: '24px',
        }}
      >
        <Stack sx={{ maxWidth: '1226px', width: '100%' }}>
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
            INFO
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: '40px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
              mb: '24px',
            }}
          >
            About{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Bitcoin
            </span>{' '}
          </Typography>
          <Box sx={{ mb: '24px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              Bitcoin (BTC) price has declined today{' '}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              The price of Bitcoin (BTC) is $33,947.22 today with a 24-hour
              trading volume of $16,824,224,604.76. This represents
              a -0.79% price decline in the last 24 hours and a 14.34% price
              increase in the past 7 days. With a circulating supply of 20
              Million BTC, Bitcoin is valued at a market cap
              of $662,835,338,273.
            </Typography>
          </Box>

          {/* --------------------- */}
          <Box sx={{ mb: '16px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              What is Bitcoin?{' '}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              Bitcoin is a cryptocurrency launched in January 2009, where the
              first genesis block was mined on 9th January 2009. It is a
              decentralized digital currency that is based on cryptography. As
              such, it can operate without the need of a central authority like
              a central bank or a company. It is unlike government-issued or
              fiat currencies such as US Dollars or Euro in which they are
              controlled by the country’s central bank. The decentralized nature
              allows it to operate on a peer-to-peer network whereby users are
              able to send funds to each other without going through
              intermediaries.
            </Typography>
          </Box>
          {/* ---------------------------------- */}
          <Box sx={{ mb: '16px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              Who created Bitcoin?{' '}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              The creator is an unknown individual or group that goes by the
              name Satoshi Nakamoto with the idea of an electronic peer-to-peer
              cash system as it is written in a whitepaper. Until today, the
              true identity of Satoshi Nakamoto has not been verified though
              there has been speculation and rumor as to who Satoshi might be.
            </Typography>
          </Box>
          {/* ------------------------------ */}
          <Box sx={{ mb: '16px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              How does Bitcoin work?{' '}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '13px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              While the general public perceives Bitcoin as a physical looking
              coin, it is actually far from that. Under the hood, it is a
              distributed accounting ledger that is stored as a chain of blocks
              - hence the name blockchain.{' '}
            </Typography>
          </Box>
          {/* ------------------------------- */}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              Read More
            </Typography>
            <Box sx={{ mt: '4px' }}>
              <RightArrowLinearGraident />
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default CoinInfo;
