import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import RightArrowLinearGraident from '../../../../public/icons/nft/rightArrowLinearGraident';

const Info = () => {
  return (
    <>
      <Box
        sx={{
          boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
          padding: '24px',
          borderRadius: '16px',
          background: 'rgba(255, 255, 255, 1)',
          marginBottom: '24px',
        }}
      >
        <Stack sx={{ maxWidth: '1226px', width: '100%' }}>
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
            INFO
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: '56px',
              fontWeight: '600',
              color: 'rgba(17, 17, 17, 1)',
              letterSpacing: '-2px',
              mb: '32px',
            }}
          >
            About{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-2px',
              }}
            >
              Persona
            </span>{' '}
          </Typography>
          <Box sx={{ mb: '24px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              What is Persona?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              Persona is a groundbreaking avatar collection at the heart of the
              next-level gaming ecosystem. We're a gaming studio with a live
              web3 game and an engaged community. Persona is the pulse of our
              universe, bridging digital identity with tangible in-game
              utilities and advantages across all our games. Behind the scenes,
              we are creating a new kind of experience for interacting with your
              Personas, redefining the relationship between holders and their
              digital assets.{' '}
            </Typography>
          </Box>

          {/* --------------------- */}
          <Box sx={{ mb: '24px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              What is Timefall Valley?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              Timefall Valley is a small city that has always remained isolated
              from the outside world. It is a time capsule, reminding us of a
              cherished past.Its citizens, the Personas, are driven by their
              passions, whether it be sport, art, or fashion. They have been
              isolated for as long as they can remember, but the 'Persona
              Program' finally allows them to make contact with 'outsiders.'
              Timefall Valley is calling. Will you answer?
            </Typography>
          </Box>
          {/* ---------------------------------- */}
          <Box sx={{ mb: '24px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              Where to buy Persona NFT?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              You can buy and sell Persona (PRSN) on LooksRare, X2Y2, OpenSea,
              and Blur.
            </Typography>
          </Box>
          {/* ------------------------------ */}
          <Box sx={{ mb: '24px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              How many Persona NFTs are there?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              There is a total of 8,875 unique NFTs in the Persona collection.{' '}
            </Typography>
          </Box>
          {/* ------------------------------- */}
          <Box sx={{ mb: '32px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '20px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                mb: '4px',
              }}
            >
              How many holders are collecting the Persona NFT?{' '}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
              }}
            >
              There is a total 3,335 unique addresses that are holding the PRSN
              NFT.
            </Typography>
          </Box>
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
            <Box sx={{ mt: '5px' }}>
              <RightArrowLinearGraident />
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Info;
