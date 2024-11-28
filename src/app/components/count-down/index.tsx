'use client';
import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate: any = new Date(
      process.env.NEXT_PUBLIC_TARGET_DATE || '2024-11-28T18:45:00Z',
    );

    const updateCountdown = () => {
      const now: any = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft('00D 00H 00M 00S');
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft(
        `${String(days).padStart(2, '0')}D ${String(hours).padStart(2, '0')}H ${String(minutes).padStart(2, '0')}M ${String(seconds).padStart(2, '0')}S`,
      );
    };

    const intervalId = setInterval(updateCountdown, 1000);

    updateCountdown();

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
          xs: '14px',
          sm: '18px',
        },
        fontWeight: '600',
        fontFamily: 'Sf Pro Display',
        position: 'relative',
        zIndex: '100',
      }}
    >
      BLACK FRIDAY SALE BEGINS IN {timeLeft}
    </Box>
  );
};

export default CountDown;
