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

const TagCard: React.FC<TagCardProps> = ({
  image,
  title,
  description,
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
        height: height ? height : '520px',
        width: width ? width : '600px',
        boxShadow: '0px -6px 30px rgba(0, 0, 0, 0.07)',
        paddingBottom: '2px',
      }}
    >
      <Box
        sx={{
          borderRadius: '12px',
          minHeight: '338px',
          width: 'calc(100% - 32px)',
          overflow: 'hidden',
          marginTop: '16px',
        }}
      >
        <Box
          position="absolute"
          top="1"
          right={'0'}
          display="flex"
          marginTop={'12px'}
          zIndex={1}
          marginRight={'28px'}
        >
          <Chip
            sx={{
              background:
                'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
              backdropFilter: 'blur(10px)',
            }}
            key={'123'}
            label={
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '4.5px',
                  height: '60px !important',
                  fontSize: '16px',
                  fontWeight: '600',
                  paddingInline: '3px',
                  paddingBlock: '4px',
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
            color="primary"
            size="small"
          />
        </Box>

        <Image
          style={{ height: 'auto', width: '100%', borderRadius: '12px' }}
          alt="news"
          src={image.src}
          width={516}
          height={0}
        />
      </Box>
      <Box sx={{ margin: '12px 16px 16px 16px' }}>
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Chip
            sx={{
              padding: '3px',
              height: '25px',
              background:
                'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%) !important',
            }}
            label={
              <Typography
                sx={{
                  color: '#7248F7',
                  fontWeight: '500',
                  fontSize: '10px',
                  lineHeight: '12px',
                  letterSpacing: '1px',
                }}
              >
                TRADE
              </Typography>
            }
          />
          <Chip
            sx={{
              padding: '3px',
              height: '25px',
              background:
                'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%) !important',
            }}
            label={
              <Typography
                sx={{
                  color: '#7248F7',
                  fontWeight: '500',
                  fontSize: '10px',
                  lineHeight: '12px',
                  letterSpacing: '1px',
                }}
              >
                BITCOIN
              </Typography>
            }
          />
          <Chip
            sx={{
              padding: '3px',
              height: '25px',
              background:
                'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%) !important',
            }}
            label={
              <Typography
                sx={{
                  color: '#7248F7',
                  fontWeight: '500',
                  fontSize: '10px',
                  lineHeight: '12px',
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
            marginTop: '12px',
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
            fontSize: '12px',
            lineHeight: '18px',
            marginTop: '8px',
            marginInline: '8px',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            color: 'rgba(17,17,17,0.8)',
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
          }}
          variant="body2"
        >
          {description ||
            "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of Tether's upcoming tokenization venture, CEP Paolo ARdiono said. CoinDesk Flash the stocks."}
        </Typography>
        <Box
          sx={{
            marginTop: '12px',
            marginBottom: '2px',
          }}
        >
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '10px',
              lineHeight: '13px',
              backgroundColor: 'rgb(243,243,243)',
              borderRadius: '8px',
              display: 'flex',
              alignSelf: 'flex-start',
              paddingBlock: '6px',
              paddingLeft: '16px',
              alignItems: 'center',
            }}
          >{`06/06/2023 at 00:06 AM  |  John Smith`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TagCard;
