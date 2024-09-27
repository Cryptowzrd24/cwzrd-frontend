import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import CommentIcon from '../../../../../public/images/technicals-page/commentsIcon.png';
import CommentIconWhite from '../../../../../public/images/technicals-page/commentIconWhite.png';
import LikesIcon from '../../../../../public/images/technicals-page/likesIcon.png';

function CommentsLikes({ shouldWhite }: { shouldWhite?: boolean }) {
  return (
    <Box
      sx={{
        width: '103.6',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Box
        sx={{
          padding: '5.6px 9.8px 5.6px 8.4px',
          borderRadius: '70px',
          border: shouldWhite
            ? '0.7px solid rgba(255, 255, 255, 0.1)'
            : '0.7px solid rgba(17, 17, 17, 0.1)',
          width: '26.6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.8px',
        }}
      >
        <Image
          src={shouldWhite ? CommentIconWhite : CommentIcon}
          alt={'comment icon'}
          width={16.8}
          height={16.8}
          color="white"
        />
        <Typography
          sx={{
            fontSize: '9.8px',
            fontWeight: 700,
            color: shouldWhite
              ? 'rgba(255, 255, 255, 0.6)'
              : 'rgba(17, 17, 17, 0.6)',
          }}
        >
          9
        </Typography>
      </Box>
      <Box
        sx={{
          padding: '5.6px 9.8px 5.6px 8.4px',
          borderRadius: '70px',
          width: '32.6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.8px',
          background:
            'linear-gradient(116.74deg, rgba(34, 200, 51, 0.1) -4.07%, rgba(34, 200, 51, 0.1) 100.68%)',
        }}
      >
        <Image src={LikesIcon} alt={'like icon'} width={16.8} height={16.8} />
        <Typography
          sx={{
            fontSize: '9.8px',
            fontWeight: 700,
            background:
              'linear-gradient(116.74deg, #11D269 -4.07%, #1FD773 100.68%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}
        >
          43
        </Typography>
      </Box>
    </Box>
  );
}

export default CommentsLikes;
