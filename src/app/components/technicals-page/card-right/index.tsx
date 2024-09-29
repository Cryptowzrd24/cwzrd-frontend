import { Box, Button, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import pepiImg from '../../../../../public/images/cards/pepi-img.png';
import pepiBigImg from '../../../../../public/images/cards/pepi-big.png';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';
import React from 'react';

const RightCard = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingInline: '21px',
          paddingTop: '21px',
        }}
      >
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '14.13px',
            letterSpacing: '0.7px',
          }}
        >
          ✨ RECENTLY ADDED
        </Typography>
        <Box sx={{ display: 'flex', gap: '1px', alignSelf: 'right' }}>
          <FiberManualRecordIcon sx={{ fontSize: '8px', color: 'black' }} />
          <FiberManualRecordIcon sx={{ fontSize: '8px', color: 'lightgray' }} />
          <FiberManualRecordIcon sx={{ fontSize: '8px', color: 'lightgray' }} />
        </Box>
      </Box>
      <Box
        sx={{ overflow: 'hidden', paddingInline: '24px', marginTop: '12px' }}
      >
        <img
          src={pepiImg.src}
          alt="pepi image"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
      <Box sx={{ overflow: 'hidden' }}>
        <img
          src={pepiBigImg.src}
          alt="pepi image"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </Box>
      <Box sx={{ margin: '16px 20px 28px 20px' }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '20.8px',
            letterSpacing: '0.5px',
          }}
        >
          Real-Time Market Additions
        </Typography>
        <Typography
          sx={{
            marginTop: '9px',
            fontFamily: 'SF Pro Text',
            textAlign: 'center',
            fontSize: '10px',
            fontWeight: '400',
            lineHeight: '14.5px',
            letterSpacing: '0.1px',
            // marginInline: '20px',
          }}
        >
          Keep up with the fast-paced market by exploring assets recently added
          in real-time. Our platform ensures you never miss out on new
          opportunities, helping you stay informed and ready to act on the
          latest market trends.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: '8px',
          }}
        >
          <Button
            sx={{
              borderRadius: '56px',
              width: '107px',
              height: '32px',
              background: 'rgba(17,17,17,0.1)',
            }}
            id="read-more-btn-card"
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '2px',
              }}
            >
              <Typography
                sx={{
                  // height: '32px',
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '15.6px',
                  whiteSpace: 'nowrap',
                  // width: '70px',
                  // marginTop: '14px',
                }}
              >
                Read More
              </Typography>
              <ArrowRightBlack />
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RightCard;
