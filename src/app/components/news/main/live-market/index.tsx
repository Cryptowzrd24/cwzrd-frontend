'use client';
import React, { useState } from 'react';
import RightRed from '../../../../../../public/icons/News-Letter/rightRed';
import {
  Box,
  Divider,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';

import AreaChart from '@/app/components/elements/areaGraphCard.element';
import { getGraphColor } from '@/app/helpers/functions';
import './graph-style.scss';
import { useFetchLiveMarketCoinDataQuery } from '@/app/redux/coin-details';
import { priceNumberFormatDigits } from '@/utils/price-number-formater';

function LiveMarket({ isPageDetails }: { isPageDetails?: boolean }) {
  const { data: liveMarketData } = useFetchLiveMarketCoinDataQuery({});

  const [expanded, setExpanded] = useState<number | false>(1);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        borderRadius: '16px',
        overflow: 'scroll',
        overflowX: 'hidden',
        paddingInline: '20px',
        marginBottom: '20px',
        background:
          'linear-gradient(to right, rgba(254, 231, 226, 0.8), rgba(254, 231, 226, 0) 50px)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 4px 28px 0px #0000000D',
        paddingBlock: '6px',
        maxHeight: '609px',
      }}
    >
      <Box
        sx={{
          paddingTop: '6px',
          display: 'flex',
          mb: '12px',
          marginTop: '12px',
          justifyContent: 'space-between',
          width: '100%',
          paddingBottom: '12px',
          borderBottom: '1px solid #FFFFFF1A',
        }}
      >
        <Typography variant="subtitle2" sx={{ color: 'black' }}>
          🚀 LIVE MARKET
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              background:
                'linear-gradient(to left, rgba(247, 132, 26, 1), rgba(247, 72, 72, 1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline',
              fontWeight: '600',
              mb: '3px',
              letterSpacing: 'normal',
              fontSize: '14px',
            }}
          >
            See All
          </Typography>
          <span>
            <RightRed />
          </span>
        </Box>
      </Box>
      <Divider
        sx={{ width: '100%', marginTop: '-13px', marginBottom: '10px' }}
      />
      {liveMarketData
        ?.slice(0, isPageDetails ? 6 : 4)
        .map((item: any, index: any) => (
          <>
            <Accordion
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{
                background: 'transparent',
                width: '270px',
                boxShadow: 'none',
                cursor: 'pointer',
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  margin: 0,
                  '&:before': {
                    display: 'none',
                  },
                },
              }}
            >
              <AccordionSummary
                aria-controls={`panel${item.id}-content`}
                id={`panel${item.id}-header`}
                sx={{ height: '61px', padding: '0 16px 0 5px' }}
              >
                <Box
                  sx={{
                    width: '100%',
                    borderRadius: '16px',
                    mb: '8px',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '8px',
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <img
                        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`}
                        alt="picture"
                        width={32}
                        height={32}
                        style={{
                          objectFit: 'cover',
                          borderRadius: '12px',
                        }}
                      ></img>
                    </Box>
                    <Stack
                      maxHeight={'100px'}
                      style={{ flex: 1, width: '100%' }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '18.2px',
                            marginBottom: '2px',
                          }}
                        >
                          {item?.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '18.2px',
                            marginBottom: '2px',
                          }}
                        >
                          {'$' + priceNumberFormatDigits(item?.price)}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography
                          sx={{
                            color: 'rgb(101,101,101)',
                            fontSize: '12px',
                            fontWeight: '400',
                            lineHeight: '15.6px',
                          }}
                        >
                          {item?.symbol}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '18.2px',
                            marginBottom: '2px',
                            color: item?.percent_change_24h
                              .toString()
                              .includes('-')
                              ? 'rgb(243,57,57)'
                              : 'rgb(61,194,136)',
                          }}
                        >
                          {item?.percent_change_24h + ' '}%
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0 10px' }}>
                <AreaChart
                  className={'highcharts-container'}
                  data={item?.chart_data}
                  color={getGraphColor(item?.percent_change_24h)}
                  percent={false}
                  fill="transparent"
                  isLiveMarket={true}
                  id={expanded}
                />
              </AccordionDetails>
            </Accordion>
            {index !==
              liveMarketData?.slice(0, isPageDetails ? 6 : 4).length - 1 && (
              <Divider
                sx={{
                  width: '100%',
                  marginBottom: '20px',
                  borderColor: '#1111110D',
                }}
              />
            )}
          </>
        ))}
    </Box>
  );
}

export default LiveMarket;
