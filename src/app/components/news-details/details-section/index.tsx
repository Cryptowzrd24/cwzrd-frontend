'use client';
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ReadingCard from './reading-card';
import MarketNewsPanel from './market-news-panel';

function DetailsSection({
  ChildComponent,
  isTechnicalDetail,
}: {
  ChildComponent: React.ElementType;
  isTechnicalDetail: boolean;
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSectionHeight = () => {
      if (sectionRef.current) {
        setSectionHeight(sectionRef.current.scrollHeight);
      }
    };

    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const scrolled = window.scrollY - sectionTop;
        setScrollPosition(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateSectionHeight);

    updateSectionHeight();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSectionHeight);
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}
    >
      <Box
        sx={{
          flex: 0.5,
          position: 'sticky',
          top: '20px',
          height: '241px',
        }}
      >
        <ReadingCard
          scrollPosition={scrollPosition}
          sectionHeight={sectionHeight}
          isTechnicalDetail={isTechnicalDetail}
        />
      </Box>
      <Box sx={{ flex: 2 }}>
        <ChildComponent />
      </Box>
      <Box
        sx={{ flex: 0.5, position: 'sticky', top: '20px', height: '1380px' }}
      >
        <MarketNewsPanel isTechnicalDetail={isTechnicalDetail} />
      </Box>
    </Box>
  );
}

export default DetailsSection;
