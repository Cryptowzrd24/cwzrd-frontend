'use client';
import React, { useRef, useState } from 'react';
import StockChartNft from './stock-chart';
import { Box, Typography } from '@mui/material';
import GraphFilter from './graphFilter';

function GraphLayout({ coinSymbol }: any) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [volumeValue, setVolumeValue] = useState('1h');

  const handleFullScreen = () => {
    if (chartRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullScreen(false);
      } else {
        chartRef.current.requestFullscreen();
        setIsFullScreen(true);
      }
    }
  };

  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: { xs: 'center', lg: 'center' },
          width: '100%',
          padding: { xs: '12px', lg: '20px' },
          flexDirection: { xs: 'column', md: 'row' },
          boxSizing: 'border-box',
          gap: { xs: '16px', lg: '0px' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: { xs: '16px', lg: '32px' },
            flexDirection: { xs: 'column', lg: 'row' },
            boxSizing: 'border-box',
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: '24px',
              color: 'rgba(17, 17, 17, 1)',
              textAlign: { xs: 'center', md: 'left' },
              boxSizing: 'border-box',
            }}
          >
            Price & Sales
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              boxSizing: 'border-box',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'rgba(114, 72, 247, 1)',
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: { xs: '12px', lg: '16px' },
                  fontFamily: 'Sf Pro Display',
                  fontWeight: 500,
                  color: 'rgba(17, 17, 17, 1)',
                  letterSpacing: '1.5px',
                  lineHeight: '15.6px',
                }}
              >
                SALES
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'rgba(31, 215, 115, 1)',
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: { xs: '12px', lg: '16px' },
                  fontFamily: 'Sf Pro Display',
                  fontWeight: 500,
                  color: 'rgba(17, 17, 17, 1)',
                  letterSpacing: '1.5px',
                  lineHeight: '15.6px',
                }}
              >
                AVERAGE PRICE
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'rgba(247, 132, 26, 1)',
                }}
              ></Box>
              <Typography
                sx={{
                  fontSize: { xs: '12px', lg: '16px' },
                  fontFamily: 'Sf Pro Display',
                  fontWeight: 500,
                  color: 'rgba(17, 17, 17, 1)',
                  letterSpacing: '1.5px',
                  lineHeight: '15.6px',
                }}
              >
                VOLUME
              </Typography>
            </Box>
          </Box>
        </Box>
        <GraphFilter
          volumeValue={volumeValue}
          setVolumeValue={setVolumeValue}
          handleFullScreen={handleFullScreen}
        />
      </Box>
      <StockChartNft
        volumeValue={volumeValue}
        isFullScreen={isFullScreen}
        chartRef={chartRef}
        setIsFullScreen={setIsFullScreen}
        coinSymbol={coinSymbol}
      />
    </Box>
  );
}

export default GraphLayout;
