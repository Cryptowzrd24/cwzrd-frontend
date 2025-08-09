import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import TakeProfitBg from '../../../../../../public/images/home/benefits-section/profit_guidance_bg.png';
import Image from 'next/image';


const TakeProfitCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 'calc(60% - 12px)' },
        height: { xs: 'auto', lg: '311px' },
        minHeight: { xs: '280px', sm: '300px', lg: '311px' },
        borderRadius: '16px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)'
      }}
    >
      {/* yellow background with radial */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 95.44% 211.15% at 93.63% 67.54%, rgba(0, 0, 0, 0.24) 0%, black 100%), #FFF600',
        }}
      />

      {/* btc background art */}
      <Box sx={{ position: 'absolute', left: 0, top: -54, zIndex: 1 }}>
        <Image src={TakeProfitBg} alt="Take Profit Background" width={628} height={419} />
      </Box>

      {/* left content */}
      <Box sx={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', width: 270, color: 'white', zIndex: 2 }}>
        <Typography sx={{ fontSize: { xs: 18, sm: 20 }, fontWeight: 700, lineHeight: '24px', color: 'white' }}>
          Take Profit Guidance
        </Typography>
        <Typography sx={{ mt: '8px', fontSize: { xs: 13, sm: 14 }, lineHeight: '18.2px', opacity: 0.56, color: 'white' }}>
          Maximize your earnings with expert take profit strategies. We help identify the perfect moments to cash in on your trades.
        </Typography>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIosRoundedIcon sx={{ fontSize: 16 }} />}
          sx={{
            mt: '20px',
            background: 'white',
            color: '#111111',
            borderRadius: '56px',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: { xs: '16px', sm: '18px' },
            px: { xs: 2.5, sm: 3 },
            py: { xs: 1.25, sm: 1.5 },
            '&:hover': { background: 'rgba(255,255,255,0.9)' },
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default TakeProfitCard;

