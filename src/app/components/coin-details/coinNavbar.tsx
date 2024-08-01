'use client';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react';
import SliderIconBlue from '../../../../public/icons/coin-details/sliderIconBlue';

const CoinNavbar = () => {
  const [activeHeading, setActiveHeading] = useState('Overview');
  const [currencies, setCurrencies] = useState<any>({
    Buy: '',
    Exchange: '',
    Gaming: '',
    Earn: '',
  });

  const handleChange = (event: any, option: any) => {
    setCurrencies({
      ...currencies,
      [option]: event.target.value,
    });
  };

  const handleHeadingClick = (heading: any) => {
    setActiveHeading(heading);
    const sectionIdMap: { [key: string]: string } = {
      Overview: 'overview',
      About: 'about',
      News: 'news',
      Markets: 'market',
      Technicals: 'technicals',
      Analytics: 'analytics',
      'Historical Data': 'historical',
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

  const options = ['Buy', 'Exchange', 'Gaming', 'Earn'];
  const headings = [
    'Overview',
    'About',
    'News',
    'Markets',
    'Technicals',
    'Analytics',
    'Historical Data',
  ];

  const CustomSelectIcon = () => {
    return (
      <div style={{ width: '8px', marginTop: '2px' }}>
        <SliderIconBlue />
      </div>
    );
  };

  return (
    <Box
      sx={{
        padding: '16px 24px',
        borderRadius: '24px',
        boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
        background: 'rgba(255, 255, 255, 1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        {headings.map((heading) => (
          <Typography
            key={heading}
            variant="body1"
            sx={{
              fontSize: '12px',
              fontWeight: activeHeading === heading ? '700' : '600',
              color:
                activeHeading === heading
                  ? 'rgba(114, 72, 247, 1)'
                  : 'rgba(17, 17, 17, 0.6)',
              backgroundColor:
                activeHeading === heading
                  ? 'rgba(114, 72, 247, 0.1)'
                  : 'transparent',
              borderRadius: activeHeading === heading ? '40px' : '0px',
              padding: activeHeading === heading ? '11px 16px' : '0px',
              cursor: 'pointer',
            }}
            onClick={() => handleHeadingClick(heading)}
          >
            {heading}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
        }}
      >
        {options.map((option) => (
          <Select
            key={option}
            value={currencies[option]}
            onChange={(event) => handleChange(event, option)}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            IconComponent={CustomSelectIcon} // Use the custom icon component
            sx={{
              border: 'none',
              background: 'rgba(114, 72, 247, 0.1)',
              fontSize: '11px',
              fontWeight: '500',
              color: 'rgba(114, 72, 247, 1)',
              display: 'flex',
              gap: '3px',
              borderRadius: '8px',
              cursor: 'pointer',
              padding: '10px 10px 10px 12px',
              '& .MuiSelect-select': {
                padding: '0 !important',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '& .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
                paddingRight: '0',
              },
              '& .MuiSvgIcon-root': {
                color: 'rgba(17, 17, 17, 1)',
              },
            }}
          >
            <MenuItem value="" key="">
              <Box>{option}</Box>
            </MenuItem>
            {['option1', 'option2', 'option3'].map((opt) => (
              <MenuItem value={opt} key={opt}>
                <Box>{opt}</Box>
              </MenuItem>
            ))}
          </Select>
        ))}
      </Box>
    </Box>
  );
};

export default CoinNavbar;
