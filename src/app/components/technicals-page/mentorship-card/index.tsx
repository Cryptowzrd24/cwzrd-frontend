import { Box, Typography, Button, Icon } from '@mui/material';
import Image from 'next/image';
import cardImg from '../../../../../public/images/cards/card-community.png';
import React from 'react';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';

const MentorshipCard = () => {
  return (
    <Box
      sx={{
        width: '314px',
        boxShadow: '0px 1px 12px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '24px',
      }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          height: '170px',
          width: '100%',
          borderRadius: '24px',
        }}
      >
        <Image src={cardImg} alt="card image" width={314} height={180} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          //   justifyContent: 'center',
          margin: '17.5px 13px 20px 13px',
        }}
      >
        <Typography
          sx={{
            fontSize: '16px',
            lineHeight: '20.8px',
            fontWeight: '700',
            letterSpacing: '0.6px',
            paddingInline: '6px',
          }}
        >
          Dedicated Professional Mentorship
        </Typography>
        <Typography
          sx={{
            fontSize: '10px',
            lineHeight: '14.5px',
            fontWeight: '400',
            // letterSpacing: '0.6px',
            fontFamily: 'Sf Pro Text',
            paddingInline: '6px',
            marginTop: '8px',
            textAlign: 'center',
          }}
        >
          We are fully committed to your success in every aspect of your
          journey. Through our daily life coaching sessions and uplifting
          write-ups, we provide unwavering support, ensuring that you never face
          any challenge alone.
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

export default MentorshipCard;
