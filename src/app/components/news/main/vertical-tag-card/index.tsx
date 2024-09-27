import { Box, Chip, Typography } from '@mui/material';
import PeopleImage from '../../../../../../public/images/news-letter/people.svg';
import Image from 'next/image';
import React from 'react';

interface TagCardProps {
  image: any;
  title: string;
  description: string;
  isDetailPage?: boolean;
  height?: string;
  width?: string;
}

const VerticalTagCard: React.FC<TagCardProps> = ({
  image,
  title,
  description,
  //   isDetailPage,
  height,
  width,
}) => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '12px',
        height: height ? height : '648px',
        width: width ? width : '615px',
      }}
    >
      <Box
        sx={{
          borderRadius: '12px',
          minHeight: height ? '300px' : '338px',
          width: width ? '300px' : '516px',
          overflow: 'hidden',
          marginTop: '16px',
          marginInline: '16px',
        }}
      >
        <Box
          position="absolute"
          top="1"
          right="1"
          display="flex"
          marginTop={'12px'}
          zIndex={1}
          marginRight={'12px'}
        >
          <Chip
            sx={{
              backgroundColor: 'transparent',
              // 'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
              backdropFilter: 'blur(20px)',
              width: '103px',
              height: '33px',
            }}
            key={'123'}
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
                  width={300}
                  alt="people watching image"
                />
                374,039
              </Box>
            }
            color="primary"
            size="small"
          />
        </Box>

        <Image
          style={{
            height: height ? '300px' : '380px',
            width: width ? '300px' : '100%',
            borderRadius: '12px',
            // objectFit: 'cover',
          }}
          alt="news"
          src={image.src}
          width={516}
          height={0}
        />
      </Box>
      <Box sx={{ marginBlock: '24px', marginInline: '16px' }}>
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Chip
            sx={{
              padding: '6px 12px 6px 12px',
              background:
                'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%) !important',
            }}
            label={
              <Typography
                sx={{
                  color: '#7248F7',
                  fontWeight: '500',
                  fontSize: '12px',
                  lineHeight: '15.6px',
                  // letterSpacing: '1px',
                }}
              >
                TRADE
              </Typography>
            }
          />
          <Chip
            sx={{
              padding: '6px 12px 6px 12px',
              background:
                'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%) !important',
            }}
            label={
              <Typography
                sx={{
                  color: '#7248F7',
                  fontWeight: '500',
                  fontSize: '12px',
                  lineHeight: '15.6px',
                  letterSpacing: '1px',
                }}
              >
                BITCOIN
              </Typography>
            }
          />
          <Chip
            sx={{
              padding: '6px 12px 6px 12px',
              background:
                'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%) !important',
            }}
            label={
              <Typography
                sx={{
                  color: '#7248F7',
                  fontWeight: '500',
                  fontSize: '12px',
                  lineHeight: '15.6px',
                  letterSpacing: '1px',
                }}
              >
                CRYPTO
              </Typography>
            }
          />
        </Box>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: '18px',
            lineHeight: '23.4px',
            letterSpacing: '1px',
            marginTop: '16px',
            marginInline: '8px',
          }}
          variant="body1"
        >
          {title ||
            'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip'}
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '18.85px',
            marginTop: '8px',
            marginInline: '8px',
            overflow: 'hidden',
            WebkitLineClamp: 4,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
          }}
          variant="body2"
        >
          {description ||
            "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."}
        </Typography>
        <Box
          sx={{
            marginTop: '16px',
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '18.8px',
              color: 'rgba(17, 17, 17, 1)',
              display: 'flex',
              alignSelf: 'flex-start',
              paddingBlock: '12px',
              paddingLeft: '10px',
              alignItems: 'center',
            }}
          >{`06/06/2023 at 00:06 AM  |  John Smith`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default VerticalTagCard;
