'use client';
import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import React from 'react';
import SliderIcon from '../../../../../../public/icons/coin-details/sliderIcon';

const InfoCard = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundImage: "url('/images/nft/trending.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: '290px',
        width: '100%',
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        borderRadius: '16px',
      }}
    >
      <Stack>
        <Typography
          variant="body1"
          sx={{
            fontSize: '12px',
            fontWeight: '700',
            color: 'rgba(17, 17, 17, 1)',
            mb: '12px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}
        >
          👀 Info
        </Typography>
        {/* ----------------------------------- */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: '4px',
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

          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <Box
              sx={{
                padding: '7px 12px',
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
                Bitcoin.org
              </Typography>
            </Box>
            <Box
              sx={{
                padding: '7px 12px',
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
                Whitepaper
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* ---------------------------------------------- */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: '4px',
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
            Explorers
          </Typography>
          <Box
            sx={{
              padding: '7px 12px',
              borderRadius: '8px',
              background: 'rgba(17, 17, 17, 0.05)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Select
              displayEmpty
              IconComponent={() => null} // Remove the default icon
              sx={{
                fontSize: '11px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                background: 'linear-gradient(180deg, #45CA94 0%, #97D14E 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '0 !important',
                '& .MuiSelect-select': {
                  padding: '0 !important',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
                  {
                    paddingRight: '0',
                  },
                '& .MuiSvgIcon-root': {
                  color: 'rgba(17, 17, 17, 1)',
                },
              }}
            >
              <MenuItem sx={{ display: 'flex', gap: '4px' }}>
                Mempool <SliderIcon />
              </MenuItem>
            </Select>
          </Box>
        </Box>
        {/* -------------------------------------------------------------- */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: '4px',
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
            Wallets
          </Typography>
          <Box
            sx={{
              padding: '7px 12px',
              borderRadius: '8px',
              background: 'rgba(17, 17, 17, 0.05)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Select
              displayEmpty
              IconComponent={() => null} // Remove the default icon
              sx={{
                fontSize: '11px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
                background: 'linear-gradient(180deg, #45CA94 0%, #97D14E 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '0 !important',
                '& .MuiSelect-select': {
                  padding: '0 !important',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
                '& .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
                  {
                    paddingRight: '0',
                  },
                '& .MuiSvgIcon-root': {
                  color: 'rgba(17, 17, 17, 1)',
                },
              }}
            >
              <MenuItem sx={{ display: 'flex', gap: '4px' }}>
                Ledger <SliderIcon />
              </MenuItem>
            </Select>
          </Box>
        </Box>
        {/* --------------------------------------------------------------------- */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: '4px',
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
            Community
          </Typography>
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <Box
              sx={{
                padding: '7px 12px',
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
                Facebook
              </Typography>
            </Box>
            <Box
              sx={{
                padding: '7px 12px',
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
                bitcointalk.org
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* ------------------------------------ */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: '4px',
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
            API ID
          </Typography>
          <Box
            sx={{
              padding: '7px 12px',
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
              Bitcoin
            </Typography>
          </Box>
        </Box>
        {/* ------------------------------------------------------- */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
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
            Categories
          </Typography>
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <Box
              sx={{
                padding: '7px 12px',
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
                Cryptocurrencies
              </Typography>
            </Box>
            <Box
              sx={{
                padding: '7px 12px',
                borderRadius: '8px',
                background: 'rgba(17, 17, 17, 0.05)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Select
                displayEmpty
                IconComponent={() => null}
                sx={{
                  fontSize: '11px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                  background:
                    'linear-gradient(180deg, #45CA94 0%, #97D14E 100%)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: '0 !important',
                  '& .MuiSelect-select': {
                    padding: '0 !important',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  '& .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
                    {
                      paddingRight: '0',
                    },
                  '& .MuiSvgIcon-root': {
                    color: 'rgba(17, 17, 17, 1)',
                  },
                }}
              >
                <MenuItem sx={{ display: 'flex', gap: '4px' }}>
                  Ledger <SliderIcon />
                </MenuItem>
              </Select>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default InfoCard;
