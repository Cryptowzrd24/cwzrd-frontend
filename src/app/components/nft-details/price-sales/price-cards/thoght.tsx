import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const Thought = () => {
  return (
    <>
      <Box
        sx={{
          padding: '24px',
          backgroundImage: "url('/images/nft/trending-2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          maxWidth: '286px',
          width: '100%',
          boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
          borderRadius: '24px',
        }}
      >
        <Stack>
          <Typography
            variant="body1"
            sx={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
              mb: '16px',
              letterSpacing: '1.5px',
            }}
          >
            ⭐️ Your Thoughts
          </Typography>
          <Typography
            variant="h1"
            sx={{
              maxWidth: '224px',
              width: '100%',
              lineHeight: '828.8px',
              mb: '40px',
            }}
          >
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginLeft: '10px',
              }}
            >
              How do you feel
            </span>{' '}
            about Persona today?
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Thought;
