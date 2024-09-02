import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import mask from '../../../../../../public/images/news-letter/mentorship-xl.png';
import React from 'react';
import { ArrowRight } from '../../../../../../public/icons/arrowRight';

const NewsTradingPlatform = () => {
  return (
    <Box
      sx={{
        padding: '0 0 24px 0',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '18px',
        boxShadow: '0px 4px 28px 0px #0000000D',
      }}
    >
      <Image
        src={mask}
        alt="mask"
        width={343}
        height={0}
        style={{
          marginBottom: '20px',
          overflow: 'hidden',
          borderRadius: '18px',
          height: 'auto',
        }}
      />
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          gap: '12px',
          paddingInline: '12px',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '18px',
            lineHeight: '23.4px',
            fontWeight: '700',
            textAlign: 'center',
            letterSpacing: '1.2px',
          }}
        >
          Dedicated Professional <br></br>
          Mentorship
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            textAlign: 'center',
            color: 'rgba(17, 17, 17, 0.8)',
            lineHeight: '17.4px',
            fontFamily: 'Sf Pro Text',
          }}
        >
          We are fully committed to your success in every aspect of your
          journey. Through our daily life coaching sessions and uplifting
          write-ups, we provide unwavering support, ensuring that you never face
          any challenge alone.
        </Typography>
        <Button
          sx={{
            borderRadius: '25px',
            height: '40px',
            width: '155px',
            background: 'rgb(243,243,243)',
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
                marginTop: '6px',
              }}
            >
              <ArrowRight fill="black" />
            </span>
          </Box>
        </Button>
      </Stack>
    </Box>
  );
};

export default NewsTradingPlatform;
