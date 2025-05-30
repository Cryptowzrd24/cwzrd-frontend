'use client';
import { Box } from '@mui/material';
import React, { useRef, useState } from 'react';
import Graph from './technicals-graph';

import { areachartData } from './data';
import { getGraphColor } from '@/app/helpers/functions';
import GraphFilter from '../../coin-details/graph-filter';

function TechnicalsGraph({ isMainPage = false }: { isMainPage?: boolean }) {
  const chartRef = useRef<HTMLDivElement>(null);

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
    <>
      <Box
        sx={{
          width: '100%',
          height: '400px',
        }}
      >
        <Box>
          <Graph
            data={areachartData}
            color={getGraphColor(20)}
            percent={true}
            fill="transparent"
            isMainPage={isMainPage}
          />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'relative',
          top: '-400px',
          left: isMainPage ? '79%' : '50px',
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
    </>
  );
}

export default TechnicalsGraph;
