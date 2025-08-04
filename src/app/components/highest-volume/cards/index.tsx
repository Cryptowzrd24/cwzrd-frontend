'use client';
import { Box, Stack, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import Shift from '../../../../../public/icons/collections/shift';
import first from '../../../../../public/icons/first-rank.png';
import second from '../../../../../public/icons/second-rank.png';
import numeral from 'numeral';
import third from '../../../../../public/icons/third-rank.png';
import Link from 'next/link';
import infinityIcon from '../../../../../public/icons/infinity.svg';

const Card = ({
  title,
  price,
  change,
  marketCap,
  circulationSupply,
  volume,
  totalMaxSupply,
  symbol,
  coinId,
  index,
}: any) => {
  const isPositiveChange = change >= 0;
  const changeColor = isPositiveChange
    ? 'rgba(69, 202, 148, 1)'
    : 'rgba(245, 65, 65, 1)';
  const backgroundImage = isPositiveChange
    ? '/images/spotlight-cards/background1.png'
    : '/images/spotlight-cards/background2.png';

  const imgUrl = `https://backend.cwzrd.co.uk/api/coin-image/?id=${coinId}`;
  const graphImg = `https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${coinId}.svg`;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };
  const getRankContent = (index: number) => {
    switch (index) {
      case 1:
        return <Image src={first} alt="first" width={21} height={21} />;
      case 2:
        return <Image src={second} alt="second" width={21} height={21} />;
      case 3:
        return <Image src={third} alt="third" width={21} height={21} />;
      default:
        return (
          <Typography
            variant="body1"
            sx={{ fontSize: '16px', fontWeight: '500' }}
          >
            #{index}
          </Typography>
        );
    }
  };
  const formattedMarketCap = numeral(marketCap).format('0.0a').toUpperCase();
  const formattedVolume = numeral(volume).format('0.0a').toUpperCase();
  const formattedCirculationSupply = numeral(circulationSupply)
    .format('0.0a')
    .toUpperCase();
  const formattedTotalMaxSupply = numeral(totalMaxSupply)
    .format('0.0a')
    .toUpperCase();

  const numericChange = Number(change);

  // Format the change value
  const formattedChange = isPositiveChange
    ? `+${numericChange.toFixed(2)}`
    : numericChange.toFixed(2);

  const priceNumberFormatter = (price: any) => {
    const priceNumber = Number(price);

    if (priceNumber === 0) {
      return '0';
    }

    if (priceNumber < 0.1) {
      // Format with 10 decimal places
      return priceNumber.toFixed(10);
    }

    // Format with 2 decimal places
    const formattedPrice = priceNumber.toFixed(2);
    const parts = formattedPrice.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Apply comma to the integer part only
    return parts.join('.');
  };
  return (
    <Box
      sx={{
        padding: {
          xs: '8px',
          sm: '12px',
          md: '16px',
        },
        borderRadius: '8px',
        maxWidth: {
          xs: '100%',
          sm: '340px',
          md: '362px',
        },
        width: '100%',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        ':hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Link
        style={{ textDecoration: 'none' }}
        href={`/market/coin-details/${coinId}`}
      >
        <Box
          sx={{
            padding: {
              xs: '8px',
              sm: '12px',
              md: '16px',
            },
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '8px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: {
                xs: '8px',
                sm: '12px',
                md: '16px',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Image
                src={imgUrl}
                loader={() => imgUrl}
                width={40}
                height={40}
                style={{
                  borderRadius: '50%',
                }}
                alt="title"
              />
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: '14px',
                      sm: '16px',
                      md: '18px',
                    },
                    fontWeight: '500',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: '10px',
                      sm: '12px',
                    },
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 0.6)',
                  }}
                >
                  {symbol}
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                padding: {
                  xs: '4px 10px',
                  sm: '5px 11px',
                  md: '5px 12px',
                },
                borderRadius: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 1)',
              }}
            >
              {getRankContent(index)}
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: {
                  xs: '24px',
                  sm: '28px',
                  md: '32px',
                },
                fontWeight: '500',
                color: 'rgba(255, 255, 255, 1)',
              }}
            >
              ${priceNumberFormatter(price)}
            </Typography>
            <Box
              sx={{
                borderRadius: '24px',
                padding: {
                  xs: '3px 6px',
                  sm: '4px 7px',
                  md: '4px 8px',
                },
                background: changeColor,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: '14px',
                  },
                  fontWeight: '700',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                {formattedChange} %
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mt: {
              xs: '16px',
              sm: '20px',
              md: '24px',
            },
            gap: {
              xs: '24px',
              sm: '36px',
              md: '48px',
            },
            mb: '-4px',
            marginLeft: '6px',
          }}
        >
          <Box>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '11px',
                    sm: '12px',
                  },
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.4)',
                }}
              >
                Market Cap
                <Tooltip
                  title="The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market."
                  componentsProps={{
                    tooltip: {
                      sx: {
                        width: '270px',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        color: 'rgba(17, 17, 17, 0.8)',
                        fontSize: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
                        fontWeight: 'normal',
                        lineHeight: '17.6px',
                      },
                    },
                  }}
                >
                  <span
                    id="1"
                    style={{
                      cursor: 'pointer',
                      width: '8px',
                      height: '8px',
                      marginLeft: '5px',
                    }}
                    onMouseEnter={() => handleMouseEnter('marketCap')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Shift hovered={hoveredId === 'marketCap'} />
                  </span>
                </Tooltip>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '16px',
                    sm: '17px',
                    md: '18px',
                  },
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                ${formattedMarketCap}
              </Typography>
            </Stack>
            <Stack sx={{ mt: '8px' }}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '11px',
                    sm: '12px',
                  },
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.4)',
                }}
              >
                Circulation Supply
                <Tooltip
                  title="The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market."
                  componentsProps={{
                    tooltip: {
                      sx: {
                        width: '270px',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        color: 'rgba(17, 17, 17, 0.8)',
                        fontSize: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
                        fontWeight: 'normal',
                        lineHeight: '17.6px',
                      },
                    },
                  }}
                >
                  <span
                    style={{
                      cursor: 'pointer',
                      width: '8px',
                      height: '8px',
                      marginLeft: '5px',
                    }}
                    onMouseEnter={() => handleMouseEnter('circulationSupply')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Shift hovered={hoveredId === 'circulationSupply'} />
                  </span>
                </Tooltip>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '16px',
                    sm: '17px',
                    md: '18px',
                  },
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {formattedCirculationSupply}
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '11px',
                    sm: '12px',
                  },
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.4)',
                }}
              >
                Volume (24hours)
                <Tooltip
                  title="A measure of how much of a cryptocurrency was traded in the last 24 hours."
                  componentsProps={{
                    tooltip: {
                      sx: {
                        width: '270px',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        color: 'rgba(17, 17, 17, 0.8)',
                        fontSize: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
                        fontWeight: 'normal',
                        lineHeight: '17.6px',
                      },
                    },
                  }}
                >
                  <span
                    style={{
                      cursor: 'pointer',
                      width: '8px',
                      height: '8px',
                      marginLeft: '5px',
                    }}
                    onMouseEnter={() => handleMouseEnter('volume')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Shift hovered={hoveredId === 'volume'} />
                  </span>
                </Tooltip>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '16px',
                    sm: '17px',
                    md: '18px',
                  },
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                ${formattedVolume}
              </Typography>
            </Stack>
            <Stack sx={{ mt: '8px' }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xs: '11px',
                    sm: '12px',
                  },
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.4)',
                }}
              >
                Total Max. Supply
                <Tooltip
                  title="The Total Max Supply refers to the maximum amount of a cryptocurrency that can ever be created or mined, limiting its total availability"
                  componentsProps={{
                    tooltip: {
                      sx: {
                        width: '270px',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        color: 'rgba(17, 17, 17, 0.8)',
                        fontSize: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
                        fontWeight: 'normal',
                        lineHeight: '17.6px',
                      },
                    },
                  }}
                >
                  <span
                    style={{
                      cursor: 'pointer',
                      width: '8px',
                      height: '8px',
                      marginLeft: '5px',
                    }}
                    onMouseEnter={() => handleMouseEnter('totalMaxSupply')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Shift hovered={hoveredId === 'totalMaxSupply'} />
                  </span>
                </Tooltip>
              </Typography>
              {totalMaxSupply ? (
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: '16px',
                      sm: '17px',
                      md: '18px',
                    },
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  {formattedTotalMaxSupply}
                </Typography>
              ) : (
                <Image src={infinityIcon} alt="infinty-icon" />
              )}
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            mt: {
              xs: '16px',
              sm: '20px',
              md: '24px',
            },
          }}
        >
          <Box
            sx={{
              borderTop: '1px solid rgba(17, 17, 17, 0.05)',
              overflow: 'hidden',
            }}
          >
            {/* <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px',
              }}
            >
              {['1D', '7D', '1M', '3M'].map((button) => (
                <Box
                  key={button}
                  sx={{
                    padding: '4px 8px',
                    borderRadius: '24px',
                    border: '1px solid rgba(17, 17, 17, 0.05)',
                    cursor: 'pointer',
                    background: getButtonStyles(button).background,
                  }}
                  onClick={() => handleButtonClick(button)}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: getButtonStyles(button).color,
                    }}
                  >
                    {button}
                  </Typography>
                </Box>
              ))}
            </Box> */}
            <Box
              style={{
                marginBottom: '-10px',
                padding: '10px',
                background:
                  'repeating-linear-gradient(to bottom, #ffffff, #ffffff 25px, rgba(17, 17, 17, 0.05) 26px, rgba(17, 17, 17, 0.05) 26px, #ffffff 27px  )',
              }}
            >
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  filter:
                    change && String(change)?.includes('-')
                      ? 'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(379%) hue-rotate(311deg) brightness(100%) contrast(93%)'
                      : 'brightness(0) saturate(100%) invert(68%) sepia(13%) saturate(1609%) hue-rotate(104deg) brightness(97%) contrast(94%)',
                }}
                src={graphImg}
                alt="graph"
              />
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Card;
