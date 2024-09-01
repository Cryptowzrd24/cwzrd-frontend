import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface NewsCardProps {
  image: any;
  title: string;
  description: string;
  allNews?: any;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  allNews,
}) => {
  return (
    <Box
      sx={{
        padding: '8px',
        paddingBottom: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: allNews ? '328px' : '309px',
        borderRadius: '16px',
        boxShadow: '0px 4px 28px 0px #0000000D',
      }}
    >
      <Image
        alt="news"
        src={image.src}
        width={312}
        height={0}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '12px',
        }}
      />
      <Box sx={{ padding: '4px', paddingTop: '16px' }}>
        <Box>
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: '18px',
              lineHeight: '23.4px',
              marginInline: '8px',
              display: 'flex',
              alignItems: 'center',
            }}
            variant="body1"
          >
            {title ||
              'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip'}
          </Typography>

          <Typography
            sx={
              allNews
                ? {
                    fontWeight: '400',
                    fontSize: '11px',
                    lineHeight: '14.3px',
                    marginTop: '4px',
                    marginInline: '16px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                  }
                : {
                    fontWeight: '400',
                    fontSize: '13px',
                    lineHeight: '19px',
                    marginTop: '4px',
                    marginInline: '8px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }
            }
            variant="body2"
          >
            {description ||
              "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."}
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: '10px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            borderRadius: '8px',
            backgroundColor: 'rgb(243,243,243)',
          }}
        >
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '11px',
              lineHeight: '14.3px',
              paddingInline: '16px',
            }}
          >
            06/06/2023 at 00:06 AM &nbsp;&nbsp;|&nbsp;&nbsp; John Smith
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;
