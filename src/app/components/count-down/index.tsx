'use client';
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState('02D 03H 04M 05S');

  useEffect(() => {
    const updateCountdown = () => {
      // Logic to calculate the time left and update `timeLeft`
      setTimeLeft('01D 02H 03M 04S');
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Box
      sx={{
        padding: '6px 8px',
        backgroundColor: '#FEFD00',
        color: '#000',
        textAlign: 'center',
        fontSize: {
          xs: '14px', // for screens <= 500px
          sm: '18px', // for larger screens
        },
        fontWeight: '600',
        fontFamily: 'Sf Pro Display',
      }}
    >
      BLACK FRIDAY SALE BEGINS IN {timeLeft}
    </Box>
  );
};

export default CountDown;
