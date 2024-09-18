'use client';
import React, { useRef, useState } from 'react';
import StockChartNft from './stock-chart';
import { Box, Typography } from '@mui/material';
import GraphFilter from './graphFilter';

function GraphLayout({ coinSymbol }: any) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [volumeValue, setVolumeValue] = useState('1D');

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
    <>
      <div
        style={{
          width: '1010px',
          height: '718px',
          borderRadius: '24px',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              top: 20,
              left: 20,
              position: 'relative',
              display: 'flex',
              gap: '32px',
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '24px',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              Price & Sales
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
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
                    fontSize: '12px',
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
                    fontSize: '12px',
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
                    fontSize: '12px',
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
      </div>
    </>
  );
}

export default GraphLayout;
