import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import mask from '../../../../../../public/images/news-letter/mentorship.png';
import React from 'react';
import { ArrowRight } from '../../../../../../public/icons/arrowRight';

const NewsTradingPlatform = () => {
  return (
    <Box
      sx={{
        padding: '0 0 72px 0',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        borderRadius: '18px',
        width: '95%',
        height: '440px',
        marginTop: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
      }}
    >
      <Image
        src={mask}
        alt="mask"
        width={305}
        height={280}
        style={{
          marginBottom: '20px',
          overflow: 'hidden',
          borderRadius: '18px',
        }}
      />
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '95%',
          margin: 'auto',
          gap: 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: '18px', lineHeight: '23.4px', fontWeight: '700' }}
        >
          Dedicated Professional <br></br>
          <span style={{ textAlign: 'center', paddingInline: '22%' }}>
            Mentorship
          </span>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            textAlign: 'center',
            color: 'rgba(17, 17, 17, 0.8)',
            lineHeight: '14.7px',
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
            width: '150px',
            background: 'rgb(243,243,243)',
            fontSize: '12px',
            fontWeight: '600',
            lineHeight: '15.6px',
          }}
        >
          Read More{' '}
          <span style={{ color: 'black', fill: 'black' }}>
            <ArrowRight fill="black" />
          </span>
        </Button>
      </Stack>
    </Box>
  );
};

export default NewsTradingPlatform;
