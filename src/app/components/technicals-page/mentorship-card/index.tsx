import { Box } from '@mui/material';
//import {Typography, Button} from "@mui/material";
import cardImg from '../../../../../public/images/cards/card-community.png';
import React from 'react';
// import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';

const MentorshipCard = () => {
  return (
    <Box
      sx={{
        width: 'auto',
        boxShadow: '0px 1px 12px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '24px',
        height: '380px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        '@media (max-width: 1400px)': {
          width: '62%',
          display: 'none',
        },

        '@media (max-width: 1024px)': {
          width: '100%',
        },
        '@media (max-width: 576px)': {
          display: 'none',
        },
      }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          height: '170px',
          width: '100%',
          borderRadius: '24px',

          '@media (max-width: 1024px)': {
            height: '100%',
          },
        }}
      >
        <img
          src={cardImg.src}
          alt="card image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Box
        sx={{
          overflow: 'hidden',
          height: '170px',
          width: '100%',
          borderRadius: '24px',

          '@media (max-width: 1024px)': {
            display: 'none',
          },
        }}
      >
        <img
          src={cardImg.src}
          alt="card image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
      {/* <Box
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
            fontSize: '16px !important',
            lineHeight: '20.8px',
            fontWeight: '700',
            letterSpacing: '0.3px',
            paddingInline: '6px',
          }}
        >
          Dedicated Professional Mentorship
        </Typography>
        <Typography
          sx={{
            fontSize: '10px !important',
            lineHeight: '14.5px',
            fontWeight: '400',
            // letterSpacing: '0.6px',
            fontFamily: 'Sf Pro Text',
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
                  fontSize: '12px !important',
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
      </Box> */}
    </Box>
  );
};

export default MentorshipCard;
