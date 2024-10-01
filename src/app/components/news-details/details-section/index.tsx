'use client';
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ReadingCard from './reading-card';
import MarketNewsPanel from './market-news-panel';
import TableOfContents from '../../articles-details/table-of-contents';

function DetailsSection({
  ChildComponent,
  isArticleDetails,
  isTechnicalDetail,
  sections,
  activeSection,
}: {
  ChildComponent: React.ElementType;
  isArticleDetails?: boolean;
  isTechnicalDetail: boolean;
  sections?: any;
  activeSection?: any;
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
      sx={{ display: 'flex', justifyContent: 'space-between' }}
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
        sx={{
          flex: 0.5,
          position: 'sticky',
          top: '20px',
          height: isArticleDetails ? '241px' : '1380px',
        }}
      >
        {isArticleDetails ? (
          <TableOfContents
            sections={isArticleDetails ? sections : null}
            activeSection={isArticleDetails ? activeSection : null}
          />
        ) : (
          <MarketNewsPanel isTechnicalDetail={isTechnicalDetail} />
        )}
      </Box>
    </Box>
  );
}

export default DetailsSection;
