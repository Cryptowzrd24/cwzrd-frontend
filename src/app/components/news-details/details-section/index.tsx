'use client';
import { Box, Container, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import ReadingCard from './reading-card';
import MarketNewsPanel from './market-news-panel';
// import TableOfContents from '../../articles-details/table-of-contents';
import BorderLinearProgress from './BorderLinearProgress';

function DetailsSection({
  ChildComponent,
  // isArticleDetails,
  isTechnicalDetail,
  // sections,
  // activeSection,
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
  const isTabView = useMediaQuery('(max-width: 978px)');

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
    <>
      {isTabView && (
        <Box
          sx={{
            my: '20px',
            position: 'sticky',
            zIndex: '100',
            top: '60px',
          }}
        >
          <BorderLinearProgress
            variant="determinate"
            scrollPosition={scrollPosition}
            sectionHeight={sectionHeight}
            isLarge={false}
          />
        </Box>
      )}
      <Container
        sx={{
          '@media (max-width: 599px)': { paddingInline: '16px !important' },
        }}
      >
        <Box
          ref={sectionRef}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 1,
            '@media (max-width: 1320px)': {
              gap: '10px',
            },
          }}
        >
          <Box
            sx={{
              flex: 0.5,
              position: 'sticky',
              top: '60px',
              height: '241px',

              '@media (max-width: 1320px)': {
                flex: 0.45,
              },

              '@media (max-width: 978px)': {
                display: 'none',
              },
            }}
          >
            <ReadingCard
              scrollPosition={scrollPosition}
              sectionHeight={sectionHeight}
              isTechnicalDetail={isTechnicalDetail}
            />
          </Box>
          <Box
            sx={{
              flex: 2,
              marginRight: "40px",
              '@media (max-width: 1320px)': {
                display: 'flex',
                justifyContent: 'center',
              },
            }}
          >
            <ChildComponent />
          </Box>
          <Box
            sx={{
              flex: 0.5,
              position: 'sticky',
              top: '20px',
              height: '1256px',
              // height: isArticleDetails ? '241px' : '1256px',
              '@media (max-width: 1320px)': {
                display: 'none',
              },
            }}
          >
            <MarketNewsPanel isTechnicalDetail={isTechnicalDetail} />
            {/* {isArticleDetails ? (
              <TableOfContents
                sections={isArticleDetails ? sections : null}
                activeSection={isArticleDetails ? activeSection : null}
              />
            ) : (
              <MarketNewsPanel isTechnicalDetail={isTechnicalDetail} />
            )} */}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default DetailsSection;
