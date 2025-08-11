import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import AirdropCallsIcon from '../../../../../../public/images/home/benefits-section/airdrop-call.svg';
import Image from 'next/image';

const AirdropCallsCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: { xs: '100%', md:'calc(60% - 12px)'},
        height: { xs: 'auto', lg: '311px' },
        minHeight: { xs: '280px', sm: '300px', lg: '311px' },
        position: 'relative',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      {/* background gradient */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          // background: 'linear-gradient(0deg, #270FAD 0%, #270FAD 100%)',
          backgroundImage: 'url(/images/home/benefits-section/airdrop_call_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* artwork */}
      <Box sx={{ position: 'absolute', left: '10px', top: '-5px', zIndex: 1 }}>
        <Image src={AirdropCallsIcon} alt="airdrop-calls" width={285} height={267} />
      </Box>

      {/* content */}
      <Box
        sx={{
          position: 'absolute',
          right: '11px',
          top: '54%',
          transform: 'translateY(-60%)',
          zIndex: 2,
          color: 'white',
          width: '50%',
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: 700,
            lineHeight: '24px',
            letterSpacing: '0.2px',
            color:'white'
          }}
        >
          Airdrop Calls
        </Typography>
        <Typography
          sx={{
            mt: '10px',
            fontSize: { xs: '13px', sm: '14px' },
            lineHeight: '20px',
            opacity: 0.95,
            color:'white'
          }}
        >
          Don't miss out on free opportunities. Stay informed on the latest airdrop calls and discover how to earn from them.
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

export default AirdropCallsCard;

