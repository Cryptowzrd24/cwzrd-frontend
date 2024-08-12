import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import RightArrowLinearGraident from '../../../../public/icons/nft/rightArrowLinearGraident';

const CoinInfo = ({ coinDetails }: any) => {
  const [showAll, setShowAll] = useState(false);

  const processParagraph = (text: any) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    const parenthesesPattern = /[\(\)]/g;
    let processedText = text.replace(urlPattern, '');
    processedText = processedText.replace(parenthesesPattern, '');
    return processedText;
  };

  const renderItems = () => {
    const itemsToRender = showAll
      ? coinDetails?.about_coin?.data
      : coinDetails?.about_coin?.data.slice(0, 3);

    return itemsToRender?.map((item: any, index: any) => (
      <Box key={index} sx={{ mb: '16px' }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '18px',
            fontWeight: '500',
            color: 'rgba(17, 17, 17, 1)',
            mb: '8px',
            lineHeight: '23.4px',
          }}
        >
          {item.title}
        </Typography>
        {item.paragraph.map((paragraph: any, idx: any) => (
          <Typography
            key={idx}
            variant="body1"
            sx={{
              fontSize: '13px',
              fontWeight: '400',
              color: 'rgba(17, 17, 17, 0.8)',
              mb: '8px',
              lineHeight: '18.85px',
            }}
          >
            {processParagraph(paragraph)}
          </Typography>
        ))}
      </Box>
    ));
  };

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <Box
        sx={{
          boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
          padding: '32px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 1)',
          marginBottom: '24px',
        }}
      >
        <Stack sx={{ width: '100%' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              color: 'rgba(17, 17, 17, 1)',
              letterSpacing: '2px',
              ml: '4px',
              mb: '4px',
            }}
          >
            INFO
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: '40px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
              mb: '24px',
            }}
          >
            About{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {coinDetails?.name}
            </span>{' '}
          </Typography>

          {renderItems()}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
            }}
            onClick={handleToggle}
          >
            <Typography
              variant="body1"
              sx={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '14px',
                fontWeight: '600',
              }}
            >
              {showAll ? 'Read Less' : 'Read More'}
            </Typography>
            <Box sx={{ mt: '4px' }}>
              <RightArrowLinearGraident />
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default CoinInfo;
