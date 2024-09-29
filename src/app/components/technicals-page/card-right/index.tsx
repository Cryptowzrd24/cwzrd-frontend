import { Box, Button, Icon, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import pepiImg from '../../../../../public/images/cards/pepi-img.png';
import pepiBigImg from '../../../../../public/images/cards/pepi-big.png';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';
import React from 'react';
import Image from 'next/image';

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
          ✨ REVENTLY ADDED
        </Typography>
        <Box sx={{ display: 'flex', gap: '4px', alignSelf: 'right' }}>
          <FiberManualRecordIcon sx={{ fontSize: '8px', color: 'black' }} />
          <FiberManualRecordIcon sx={{ fontSize: '8px', color: 'lightgray' }} />
          <FiberManualRecordIcon sx={{ fontSize: '8px', color: 'lightgray' }} />
        </Box>
      </Box>
      <Box
        sx={{ overflow: 'hidden', paddingInline: '24px', marginTop: '12px' }}
      >
        <Image src={pepiImg} alt="pepi image" height={45} width={320} />
      </Box>
      <Box sx={{ overflow: 'hidden' }}>
        <Image src={pepiBigImg} alt="pepi image" height={180} width={360} />
      </Box>
      <Box sx={{ margin: '16px 20px 28px 20px' }}>
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: '700',
            lineHeight: '20.8px',
            letterSpacing: '0.9px',
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
            letterSpacing: '0.9px',
            marginInline: '20px',
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
            mt: '24px',
          }}
        >
          <Button
            sx={{
              borderRadius: '56px',
              width: '140px',
              height: '42px',
              background: 'rgba(17,17,17,0.1)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  height: '32px',
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '15.6px',
                  width: '70px',
                  marginTop: '14px',
                }}
              >
                Read More
              </Typography>
              <Icon sx={{ marginBottom: '14px' }}>
                <ArrowRightBlack />
              </Icon>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RightCard;
