import { Box, Chip, Typography } from '@mui/material';
import PeopleImage from '../../../../../../public/images/news-letter/people.svg';
import Image from 'next/image';
import React from 'react';

interface NewsCardProps {
  image: any;
  title: string;
  description: string;
  allNews?: any;
  showChips?: any;
  isCrypto?: any;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  allNews,
  showChips,
  isCrypto,
}) => {
  return (
    <Box
      sx={{
        // padding: '8px',
        // paddingBottom: '12px',
        padding: isCrypto ? '12px' : '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: allNews ? '328px' : '309px',
        height: allNews ? '252px' : '252px',
        borderRadius: '16px',
        boxShadow: '0px 4px 28px 0px #0000000D',
      }}
    >
      <Box
        style={{
          width: '312px',
          height: '134px',
          objectFit: 'cover',
          borderRadius: '12px',
          margin: '8px 8px 0px 8px',
          position: 'relative',
        }}
      >
        {showChips === true && (
          <Chip
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              height: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              borderRadius: '100px',
              color: 'white',
            }}
            label={
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '4.5px',
                  fontSize: '16px',
                  fontWeight: '600',
                }}
              >
                <Image
                  src={PeopleImage.src}
                  height={12}
                  width={12}
                  alt="people watching image"
                />
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '12px',
                    lineHeight: '15.6px',
                    color: 'white',
                  }}
                >
                  374,039
                </Typography>
              </Box>
            }
          />
        )}
        <Image
          alt="news"
          src={image.src}
          width={100}
          height={0}
          style={{
            width: '312px',
            height: '134px',
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
      </Box>
      <Box sx={{ padding: '8px 2px 2px 2px' }}>
        <Box sx={{ paddingInline: '8px' }}>
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: '14px',
              lineHeight: '18.2px',
              marginInline: '8px',
              letterSpacing: '0.5px',
              display: 'flex',
              alignItems: 'center',
            }}
            variant="body1"
          >
            {title ||
              "Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"}
          </Typography>

          <Typography
            sx={
              allNews
                ? {
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '17.4px',
                    marginTop: '4px',
                    marginInline: '8px',
                    color: 'rgba(17,17,17,0.8)',
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
            margin: '10px 8px 8px 8px',
            height: '25px',
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
              paddingBlock: '6px',
              paddingInline: '10px',
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
