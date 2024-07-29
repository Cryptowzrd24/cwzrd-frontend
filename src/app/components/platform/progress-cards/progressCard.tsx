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
        padding: '32px 64px 32px 40px',
        borderRadius: '32px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        maxWidth: '326px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '36px',
      }}
    >
      <style jsx global>{`
        .rs-progress-circle-info {
          display: none !important;
        }
      `}</style>
      <div
        style={{ width: 120, display: 'inline-block', position: 'relative' }}
      >
        <Progress.Circle
          percent={percent}
          strokeColor={color}
          trailColor="rgba(200, 200, 200, 0.3)"
          strokeWidth={10}
          trailWidth={10}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '20px',
            fontWeight: '700',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          {percent}%
        </div>
      </div>
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            color: 'rgba(17, 17, 17, 1)',
            lineHeight: '19.17px',
            mb: '5.4px',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '28px',
            fontWeight: '500',
            color: 'rgba(17, 17, 17, 1)',
            lineHeight: '32.17px',
            mb: '5.4px',
          }}
        >
          {completed} of {total}
          <span
            style={{
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '24px',
              color: 'rgba(17, 17, 17, 1)',
              marginLeft: '6px',
            }}
          >
            Completed
          </span>
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '11.4px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '14.83px',
            padding: '3.28px 6.56px',
            background: color,
            borderRadius: '12.55px',
            maxWidth: '125px',
          }}
        >
          Last Updated: 2 Hr Ago
        </Typography>
      </Box>
    </Box>
  );
};

export default ProgressCard;
