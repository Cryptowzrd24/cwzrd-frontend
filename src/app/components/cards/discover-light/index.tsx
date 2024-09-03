import { Box, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';

const DiscoverCardLight = () => {
  return (
    <Box className="card-light">
      <Box
        sx={{
          position: 'absolute',
          paddingLeft: '24px',
          paddingRight: '16px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          sx={{
            marginTop: '279px',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '26px',
            letterSpacing: '1px',
            color: '#7248F7',
            // width: '100%',
          }}
        >
          Discover Our Platform
        </Typography>
        <Typography
          sx={{
            marginTop: '8px',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '1px',
            color: 'black',
            // width: '310px',
          }}
        >
          On a daily basis we analyze Crypto,<br></br> Forex, and Stock markets,
          to <br></br>provide you with invaluable insights <br></br> and precise
          signals, positioning you<br></br> for trading success and profits.
        </Typography>
      </Box>
    </Box>
  );
};

export default DiscoverCardLight;
