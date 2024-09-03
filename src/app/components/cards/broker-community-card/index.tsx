import { Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import './styles.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import BrokerImage from '../../../../../public/images/cards/broker-image.png';
import Image from 'next/image';
import ArrowRightDark from '../../../../../public/icons/collections/arrowRightDark';

const BrokersCard = () => {
  return (
    <Box className="broker-card">
      <Box
        sx={{
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
              color: 'black',
            }}
          >
            👤 BROKERS
          </Typography>
          <Box sx={{ position: 'absolute', right: 14, top: 0 }}>
            <IconButton sx={{ height: '5px', width: '5px' }}>
              <FiberManualRecordIcon
                sx={{
                  color: 'lightgray',
                  height: '15px',
                }}
              />
            </IconButton>

            <IconButton sx={{ height: '5px', width: '5px' }}>
              <FiberManualRecordIcon
                sx={{
                  color: 'black',
                  height: '15px',
                }}
              />
            </IconButton>
            <IconButton sx={{ height: '5px', width: '5px' }}>
              <FiberManualRecordIcon
                sx={{
                  color: 'lightgray',
                  height: '15px',
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: '21.43px',
            minHeight: '100px',
            width: '100px',
            mt: '51px',
          }}
        >
          <Image
            src={BrokerImage.src}
            alt="broker icon"
            height={100}
            width={100}
          />
        </Box>
        <Typography
          sx={{
            marginTop: '20px',
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '31.2px',
            color: 'black',
          }}
        >
          Best Community Ever!
        </Typography>
        <Typography
          variant="h5"
          sx={{
            marginTop: '7px',
            background:
              'linear-gradient(160deg, rgba(114, 72, 247, 1) 0%, rgba(191, 72, 247, 1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            fontSize: '40px',
            lineHeight: '44px',
            letterSpacing: '1px',
          }}
        >
          “
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '18px',
            lineHeight: '23.4px',
            mt: '-13px',
          }}
        >
          In order to accurately follow our calls with our preferred assets,
          correct prices, lot sizes and profits we recommend using our brokers.
        </Typography>
        <Typography
          sx={{
            mt: '26px',
            paddingInline: '9px',
            color: 'rgba(114, 72, 247, 1)',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '23.4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            marginBottom: '32px',
          }}
        >
          Get Started <ArrowRightDark color={'rgba(114, 72, 247, 1)'} />
        </Typography>
      </Box>
    </Box>
  );
};

export default BrokersCard;
