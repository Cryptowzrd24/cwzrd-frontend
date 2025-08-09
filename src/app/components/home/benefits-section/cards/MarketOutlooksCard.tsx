import React from 'react';
import { Box, Typography } from '@mui/material';
import MarketOutlooksIcon from '../../../../../../public/images/home/benefits-section/market_outlook_half.png';
import MarketOutlooksbg from '../../../../../../public/images/home/benefits-section/market_outlooks_bg.png';
import Image from 'next/image';

const MarketOutlooksCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 'calc(33% - 12px)' },
        height: { xs: 'auto', lg: '311px' },
        minHeight: { xs: '280px', sm: '300px', lg: '311px' },
        borderRadius: '16px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
        backgroundImage: 'url(/images/home/benefits-section/market_outlooks_bg.png)',
      }}
    >
      {/* device artwork bottom-right */}
     

      {/* content top-left */}
      <Box sx={{ position: 'absolute', top: '20px', left: '20px', right: '20px', zIndex: 2 }}>
        <Typography sx={{ fontSize: { xs: '18px', sm: '20px' }, fontWeight: 700, color: '#007BFF', lineHeight: '24px' }}>
          Market <span style={{ color: 'white' }}>Outlooks</span>
        </Typography>
        <Typography sx={{ mt: '8px', color: 'rgba(255,255,255,0.72)', fontSize: { xs: '13px', sm: '14px' }, lineHeight: '20px' }}>
          Get a clear perspective on market trends with our expert market outlooks. Know where the market is heading and adjust your strategies accordingly.
        </Typography>
      </Box>
      <Box sx={{ position: 'absolute', transform: 'translate(-20%, 10%)', left: '50%', bottom: '10px', zIndex: 1 }}>
        <Image src={MarketOutlooksIcon} alt="Market Outlooks"  />
      </Box>
    </Box>
  );
};

export default MarketOutlooksCard;

