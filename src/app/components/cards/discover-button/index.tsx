import { Box, Button, IconButton, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';
import { ArrowRight } from '../../../../../public/icons/arrowRight';

const DiscoverCardButton = () => {
  return (
    <Box className="card-button">
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
            marginTop: '235px',
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '26px',
            letterSpacing: '1px',
            color: 'black',
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
        <Button
          sx={{
            borderRadius: '25px',
            height: '40px',
            width: '155px',
            background: 'rgb(243,243,243)',
            marginTop: '12px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: '600',
                lineHeight: '15.6px',
                marginRight: '5px',
              }}
            >
              Read More{' '}
            </Typography>
            <span
              style={{
                color: 'black',
                fill: 'black',
                marginTop: '3px',
                // paddingRight: '15px',
                // marginLeft: '-5px',
              }}
            >
              <ArrowRight fill="black" />
            </span>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

export default DiscoverCardButton;
