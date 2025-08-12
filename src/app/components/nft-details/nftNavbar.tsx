'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const NftNavbar = () => {
  const [activeHeading, setActiveHeading] = useState('Overview');

  const handleHeadingClick = (heading: any) => {
    setActiveHeading(heading);
    const sectionIdMap: { [key: string]: string } = {
      Overview: 'overview',
      News: 'news',
      Market: 'market',
      Activity: 'activity',
      Sales: 'sales',
    };
    const sectionId = sectionIdMap[heading];
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = -80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const headings = ['Overview', 'News', 'Sales', 'Market', 'Activity'];

  return (
    <Box
      sx={{
        padding: {xs:'12px', md:'16px', xl:'24px'},
        borderRadius: '24px',
        boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
        background: 'rgba(255, 255, 255, 1)',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
      }}
    >
      {headings.map((heading) => (
        <Typography
          key={heading}
          variant="body1"
          sx={{
            fontSize: { xs: '10px', md: '16px' },
            fontWeight: activeHeading === heading ? '700' : '600',
            color:
              activeHeading === heading
                ? 'rgba(114, 72, 247, 1)'
                : 'rgba(17, 17, 17, 1)',
            backgroundColor:
              activeHeading === heading
                ? 'rgba(114, 72, 247, 0.1)'
                : 'transparent',
            borderRadius: activeHeading === heading ? '40px' : '0px',
            padding: activeHeading === heading ? {xs:'4px 8px', md:'11px 16px'} : '0px',
            cursor: 'pointer',
          }}
          onClick={() => handleHeadingClick(heading)}
        >
          {heading}
        </Typography>
      ))}
    </Box>
  );
};

export default NftNavbar;
