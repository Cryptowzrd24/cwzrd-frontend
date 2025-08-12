'use client';
import { Box, useMediaQuery } from '@mui/material';
import React, { useRef, useState } from 'react';
import Graph from './technicals-graph';

import { areachartData } from './data';
import { getGraphColor } from '@/app/helpers/functions';
import GraphFilter from '../../coin-details/graph-filter';

function TechnicalsGraph({ isMainPage = false }: { isMainPage?: boolean }) {
  const chartRef = useRef<HTMLDivElement>(null);
  const isSmallScreen = useMediaQuery('(max-width: 576px)');

  //   const [isFullScreen, setIsFullScreen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('filter');
  const [volumeValue, setVolumeValue] = useState('1D');
  const handleFullScreen = () => {
    if (chartRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        // setIsFullScreen(false);
      } else {
        chartRef.current.requestFullscreen();
        // setIsFullScreen(true);
      }
    }
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          width: '100%',
          height: { lg: '400px', xs: 'auto' },
        }}
      >
        <Graph
          data={areachartData}
          color={getGraphColor(20)}
          percent={true}
          fill="transparent"
          isMainPage={isMainPage}
        />
      </Box>
      <Box
        sx={{
          position: 'relative',
          top: isSmallScreen ? '-480px' : '-400px',
          left: isSmallScreen ? '20px' : '50px',
          width: 'fit-content',
        }}
      >
        <GraphFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          volumeValue={volumeValue}
          setVolumeValue={setVolumeValue}
          handleFullScreen={handleFullScreen}
        />
      </Box>
    </Box>
  );
}

export default TechnicalsGraph;
