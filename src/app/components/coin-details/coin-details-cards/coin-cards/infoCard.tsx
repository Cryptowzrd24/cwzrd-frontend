'use client';
import { Box, MenuItem, Select, Stack, Typography } from '@mui/material';
import React from 'react';
import SliderIcon from '../../../../../../public/icons/coin-details/sliderIcon';

const InfoCard = ({ coinDetails }: any) => {
  const explorerWalletItems = coinDetails?.urls?.wallets?.map(
    (elem: any, index: number) => (
      <MenuItem
        key={index}
        component="a"
        href={elem}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'flex',
          gap: '4px',
          maxWidth: '200px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: '11px', fontWeight: '500' }}
        >
          {elem}
        </Typography>
      </MenuItem>
    ),
  );

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundImage: "url('/images/nft/trending.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        maxWidth: '290px',
        width: '100%',
        boxShadow: 'rgba(0,0,0, 0.05) 0px 4px 28px 0px',
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
        {coinDetails?.urls?.website?.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '6px',
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
              {coinDetails?.urls?.website.map((url: string, index: number) => (
                <Box
                  key={index}
                  component="a"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    padding: '7px 12px',
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
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '11px',
                      fontWeight: '500',
                      color: 'rgba(17, 17, 17, 1)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '200px',
                    }}
                  >
                    Website {index + 1}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
        {/* ---------------------------------------------- */}
        {coinDetails?.urls?.technical_doc?.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '6px',
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
              Whitepaper
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '4px',
                alignItems: 'center',
              }}
            >
              {coinDetails?.urls?.technical_doc.map(
                (url: string, index: number) => (
                  <Box
                    key={index}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      padding: '7px 12px',
                      borderRadius: '8px',
                      background: '#EFEEF2',
                      transition: 'all 0.3s ',
                      ':hover': {
                        background: '#dddce1',
                      },
                      textDecoration: 'none',
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
                      Whitepaper {index + 1}
                    </Typography>
                  </Box>
                ),
              )}
            </Box>
          </Box>
        )}
        {/* ---------------------------------------------- */}
        {coinDetails?.urls?.explorer?.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '6px',
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
                background: '#EFEEF2',
                transition: 'all 0.3s ',
                ':hover': {
                  background: '#dddce1',
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Select
                displayEmpty
                renderValue={() => 'Explorers'} // This ensures no value is selected or displayed
                IconComponent={() => (
                  <Box
                    sx={{
                      marginLeft: '4px',
                      cursor: 'pointer',
                      marginTop: '-5.5px',
                    }}
                  >
                    <SliderIcon />
                  </Box>
                )}
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
                  maxWidth: '100px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  svg: {
                    position: 'absolute',
                    right: '0',
                    pointerEvents: 'none',
                  },
                  '& .MuiSelect-select': {
                    padding: '0 !important',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    maxWidth: '200px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    paddingRight: '12px !important',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                  '& .MuiMenuItem-root': {
                    padding: '1px 4px !important',
                  },
                  '& .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
                    {
                      paddingRight: '12px !important',
                    },
                  '& .MuiSvgIcon-root': {
                    color: 'rgba(17, 17, 17, 1)',
                  },
                }}
              >
                {coinDetails?.urls?.explorer.map(
                  (url: string, index: number) => (
                    <MenuItem
                      key={index}
                      id="explorer"
                      component="a"
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        gap: '4px',
                        maxWidth: '200px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        marginInline: '6px',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        '&:hover': {
                          backgroundColor: '#f5f5f5',
                        },
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: '11px',
                          fontWeight: '400',
                          paddingBlock: '2px',
                        }}
                      >
                        Explorer {index + 1}
                      </Typography>
                    </MenuItem>
                  ),
                )}
              </Select>
            </Box>
          </Box>
        )}
        {/* -------------------------------------------------------------- */}
        {coinDetails?.urls?.wallets?.length > 0 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              mb: '6px',
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
                background: '#EFEEF2',
                transition: 'all 0.3s ',
                ':hover': {
                  background: '#dddce1',
                },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Select
                displayEmpty
                IconComponent={() => (
                  <Box sx={{ marginLeft: '4px' }}>
                    <SliderIcon />
                  </Box>
                )}
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
                  maxWidth: '100px', // Fixed width for the Select component
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  '& .MuiSelect-select': {
                    padding: '0 !important',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    maxWidth: '200px', // Ensure the text within the Select component is also constrained
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
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
                {explorerWalletItems}
              </Select>
            </Box>
          </Box>
        )}
        {/* --------------------------------------------------------------------- */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '6px',
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
            {coinDetails?.urls?.facebook?.length > 0 && (
              <Box
                component="a"
                href={coinDetails?.urls?.facebook?.[0]}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  padding: '7px 12px',
                  borderRadius: '8px',
                  background: '#EFEEF2',
                  transition: 'all 0.3s ',
                  ':hover': {
                    background: '#dddce1',
                  },
                  textDecoration: 'none',
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
            )}
            {coinDetails?.urls?.reddit?.length > 0 && (
              <Box
                component="a"
                href={coinDetails?.urls?.reddit?.[0]}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  padding: '7px 12px',
                  borderRadius: '8px',
                  background: '#EFEEF2',
                  transition: 'all 0.3s ',
                  ':hover': {
                    background: '#dddce1',
                  },
                  display: 'flex',
                  justifyContent: 'center',
                  textDecoration: 'none',
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
                  Reddit
                </Typography>
              </Box>
            )}
            {coinDetails?.urls?.twitter?.length > 0 && (
              <Box
                component="a"
                href={coinDetails?.urls?.twitter?.[0]}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  padding: '7px 12px',
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
          </Box>
        </Box>
        {/* ------------------------------- */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '6px',
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
          <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <Box
              sx={{
                padding: '7px 12px',
                borderRadius: '8px',
                background: '#EFEEF2',
                transition: 'all 0.3s ',
                ':hover': {
                  background: '#dddce1',
                },
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
                {coinDetails?.name}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* ------------------------------------------- */}
        {coinDetails?.tags?.length > 0 && (
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
              Categories
            </Typography>
            <Box sx={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
              {coinDetails?.tags.map((tag: string, index: number) => (
                <Box
                  key={index}
                  sx={{
                    padding: '7px 12px',
                    borderRadius: '8px',
                    background: '#EFEEF2',
                    transition: 'all 0.3s ',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    ':hover': {
                      background: '#dddce1',
                    },
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
                    {tag}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default InfoCard;
