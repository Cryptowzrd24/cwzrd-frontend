import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const FeaturesCard = () => {
  return (
    <Box className="feature-card">
      <Box
        sx={{
          // position: 'absolute',
          paddingTop: '24px',
          paddingLeft: '24px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box position={'relative'} display={'flex'} alignItems={'center'}>
          <Typography
            sx={{
              fontSize: '14px',
              lineHeight: '18.2px',
              letterSpacing: '1px',
              fontWeight: '700',
              color: 'white',
            }}
          >
            ❇️ FEATURES
          </Typography>
          <Box sx={{ position: 'absolute', right: 14, top: 0 }}>
            <IconButton sx={{ height: '8px', width: '8px' }}>
              <FiberManualRecordIcon
                sx={{
                  color: 'rgba(255, 255, 255, 0.1)',
                  height: '15px',
                }}
              />
            </IconButton>

            <IconButton sx={{ height: '8px', width: '8px' }}>
              <FiberManualRecordIcon
                sx={{
                  color: 'white',
                  height: '15px',
                }}
              />
            </IconButton>
            <IconButton sx={{ height: '8px', width: '8px' }}>
              <FiberManualRecordIcon
                sx={{
                  color: 'rgba(255, 255, 255, 0.1)',
                  height: '15px',
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Typography
          sx={{
            marginTop: '16px',
            fontSize: '44px',
            fontWeight: '700',
            lineHeight: '45.32px',
            letterSpacing: '1px',
            color: 'white',
          }}
        >
          Enjoy all <br></br> our features!
        </Typography>
      </Box>
    </Box>
  );
};

export default FeaturesCard;
