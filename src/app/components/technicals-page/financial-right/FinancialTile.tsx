import React from 'react';
import Image from 'next/image';
import techGraph from '../../../../../public/images/technicals-page/techPageGraph.png';
import { Box, Typography } from '@mui/material';
import CommentsLikes from '../comments-likes';

interface FinancialTile {
  title: string;
  desc: string;
  isBorder?: boolean;
}

const FinancialTile = ({ title, desc, isBorder }: FinancialTile) => {
  return (
    <Box
      sx={{
        marginTop: '12px',
        marginBottom: '13px',
        display: 'flex',
        gap: 3 / 2,
        '@media (max-width: 1360px)': {
          justifyContent: 'space-between',
        },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '12px !important',
            lineHeight: '15.6px',
            letterSpacing: '0.4px',
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '10px !important',
            marginTop: '4px',
            lineHeight: '14.5px',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            overflow: 'hidden',
          }}
        >
          {desc}
        </Typography>
        <Box sx={{ marginTop: '12px' }}>
          <CommentsLikes />
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0px 1px 12px 0px rgba(0, 0, 0, 0.05)',
          border: isBorder ? '1px solid rgba(0,0,0,0.20)' : 'none',
        }}
      >
        <Image
          src={techGraph}
          alt="image"
          height={90}
          width={140}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
};

export default FinancialTile;
