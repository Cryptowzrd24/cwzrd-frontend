import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const LinksCard = () => {
  return (
    <Box
      sx={{
        padding: '48px',
        backgroundImage: "url('/images/nft/trending.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: '330px',
        width: '100%',
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
      }}
    >
      <Stack>
        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            fontWeight: '700',
            color: 'rgba(17, 17, 17, 1)',
            mb: '16px',
            letterSpacing: '1px',
          }}
        >
          👀 Links
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '10px',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '12px',
              fontWeight: '400',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            Website
          </Typography>
          <Box
            sx={{
              padding: '6px 10px',
              borderRadius: '8px',
              background: 'rgba(17, 17, 17, 0.05)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '11px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              Persona
            </Typography>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default LinksCard;
