'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { Progress } from 'rsuite';

const ProgressCard = ({
  completed = 0,
  total = 0,
  color = 'rgba(114, 72, 247, 1)',
  title = '',
}) => {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <Box
      sx={{
        borderRadius: '24px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        // maxWidth: '32.5%',
        width: '308.5px',
        height: '123px',
        display: 'flex',
        alignItems: 'center',
        gap: '27px',

        '@media (max-width: 978px)': {
          gap: '10px',
          paddingLeft: '6px',
        },

        '@media (max-width: 768px)': {
          boxShadow: 'none',
          width: 'inherit',
          paddingLeft: '18px',
          gap: '20px',
        },
      }}
    >
      <style jsx global>{`
        .rs-progress-circle-info {
          display: none !important;
        }
      `}</style>
      <Box
        sx={{
          width: 75,
          height: 75,
          display: 'inline-block',
          position: 'relative',
          paddingBlock: '24px',
          paddingLeft: '34px',

          '@media (max-width: 978px)': {
            padding: '0px',
          },
        }}
      >
        <Progress.Circle
          percent={percent}
          strokeColor={color}
          trailColor="rgba(200, 200, 200, 0.3)"
          strokeWidth={10}
          trailWidth={10}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '67%',
            transform: 'translate(-50%, -50%)',
            fontSize: '15px',
            lineHeight: '18px',
            fontWeight: '700',
            color: 'rgba(17, 17, 17, 1)',

            '@media (max-width: 978px)': {
              left: '54%',
            },
          }}
        >
          {percent}%
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '500',
            color: 'rgba(17, 17, 17, 1)',
            lineHeight: '14.38px',
            mb: '5.4px',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '21px',
            fontWeight: '500',
            color: 'rgba(17, 17, 17, 1)',
            lineHeight: '24.65px',
            mb: '5.4px',
          }}
        >
          {completed} of {total}
          <span
            style={{
              fontSize: '10px',
              fontWeight: '500',
              lineHeight: '17.64px',
              color: 'rgba(17, 17, 17, 1)',
              marginLeft: '6px',
              fontFamily: 'Sf Pro Display',
            }}
          >
            Completed
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: '8.56px !important',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '11.12px',
            padding: '3.28px 6.56px',
            background: color,
            borderRadius: '9.41px',
            maxWidth: '93.84px',
          }}
        >
          Last Updated: 2 Hr Ago
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressCard;
