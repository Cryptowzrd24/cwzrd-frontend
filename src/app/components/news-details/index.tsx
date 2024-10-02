'use client';
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import BreadCrumb from './breadcrumb';
import DetailsSection from './details-section';
import RelatedNews from './related-news';
import MemberShipBanner from '../banners/memberShipBanner';
import NewsArticle from './details-section/news-article';

const sections = [
  { id: 'heading1', label: 'Is BTC set to break $70K' },
  { id: 'heading2', label: 'Bitcoin whale accumulation reached 2020 levels' },
];

const NewsDetails = ({ isArticleDetails }: { isArticleDetails?: boolean }) => {
  const [activeSection, setActiveSection] = useState(''); // State to track the active section in the TOC
  const tocRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const childComponent = () =>
    isArticleDetails ? (
      <NewsArticle isArticleDetails={isArticleDetails} tocRefs={tocRefs} />
    ) : (
      <NewsArticle />
    );

  useEffect(() => {
    if (isArticleDetails) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight / 3;
        let currentSectionId = '';

        sections.forEach((section: any) => {
          const refElement = tocRefs.current[section?.id];
          if (refElement) {
            const rect = refElement.getBoundingClientRect();
            const offsetTop = rect.top + window.pageYOffset;
            const offsetBottom = offsetTop + rect.height;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              currentSectionId = section.id;
            }
          }
        });

        // Update activeSection if it has changed
        if (currentSectionId !== activeSection) {
          setActiveSection(currentSectionId);
        }
      };

      // Attach the scroll listener
      window.addEventListener('scroll', handleScroll);

      // Cleanup the listener when component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [sections, tocRefs, activeSection]);
  return (
    <>
      <Box sx={{ mt: '32px' }}>
        <BreadCrumb
          origin={'News'}
          description={
            'Bitcoin whale accumulation reaches pre-2020 bull run levels — Is BTC set to break $70K?'
          }
        />
      </Box>
      <Box sx={{ mt: '24px' }}>
        <DetailsSection
          sections={sections}
          activeSection={activeSection} // Pass activeSection to DetailsSection
          isArticleDetails={isArticleDetails}
          ChildComponent={childComponent}
          isTechnicalDetail={false}
        />
      </Box>
      <Box sx={{ mt: '88px' }}>
        <RelatedNews isArticleDetails={isArticleDetails} />
      </Box>
      <Box sx={{ mt: isArticleDetails ? '60px' : '88px', mb: '48px' }}>
        <MemberShipBanner />
      </Box>
    </>
  );
};

export default NewsDetails;
