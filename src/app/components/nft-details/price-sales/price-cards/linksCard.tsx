import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const LinksCard = ({ serverNftData }: any) => {
  return (
    <Box
      sx={{
        padding: '24px',
        backgroundImage: "url('/images/nft/trending.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: { xs: '100%', md: '330px', lg: '330px', xl: '330px' },
        width: '100%',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '24px',
        boxSizing: 'border-box',
      }}
    >
      <Stack>
        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            fontWeight: '700',
            color: 'rgba(17, 17, 17, 1)',
            mb: '20px',
            letterSpacing: '1.5px',
          }}
        >
          👀 LINKS
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
          <Box
            component="a"
            href={serverNftData?.website}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              padding: '6px 10px',
              borderRadius: '8px',
              background: 'rgba(17, 17, 17, 0.05)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            {serverNftData?.website && serverNftData?.website !== '' ? (
              <Typography
                variant="body1"
                sx={{
                  fontSize: '11px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                Website
              </Typography>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  fontSize: '11px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                --
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            Market Links
          </Typography>
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {serverNftData?.marketPlaces?.map((item: any, index: number) => (
              <Box
                key={index}
                component="a"
                href={item?.jump_url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  borderRadius: '8px',
                  background: '#EFEEF2',
                  transition: 'all 0.3s ',
                  ':hover': {
                    background: '#dddce1',
                  },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                  flexWrap: { xs: 'wrap', md: 'nowrap' },
                }}
              >
                <Typography
                  // variant="body1"
                  sx={{
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    padding: {
                      xs: '4px 8px !important',
                      sm: '7px 12px !important',
                    },
                    fontSize: { xs: '10px !important', sm: '12px !important' },
                  }}
                >
                  {item?.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
        {/* -------------------------------------------------------------- */}
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '4px',
          }}
        >
          <Box></Box>
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
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
                X2Y2
              </Typography>
            </Box>
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
                Blur
              </Typography>
            </Box>
          </Box>
        </Box> */}
        {/* --------------------------------------------------------------------- */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
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
            Socials
          </Typography>
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            {serverNftData?.twitter && (
              <Box
                component="a"
                href={serverNftData?.twitter}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  padding: '6px 10px',
                  borderRadius: '8px',
                  background: 'rgba(17, 17, 17, 0.05)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textDecoration: 'none',
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
                  Twitter
                </Typography>
              </Box>
            )}
            {serverNftData?.discord && (
              <Box
                component="a"
                href={serverNftData?.discord}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  padding: '6px 10px',
                  borderRadius: '8px',
                  background: 'rgba(17, 17, 17, 0.05)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textDecoration: 'none',
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
                  Discord
                </Typography>
              </Box>
            )}
            {!serverNftData?.discord && !serverNftData?.twitter && (
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
                  --
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default LinksCard;
