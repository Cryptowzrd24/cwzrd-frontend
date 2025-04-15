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

        '@media (max-width: 978px)': {
          width: 'auto',
          height: 'auto',
        },
      }}
    >
      <Box
        sx={{
          borderRadius: '12px',
          height: height ? '200px' : '338px',
          width: width ? '300px' : '516px',
          overflow: 'hidden',

          '@media (max-width: 978px)': {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Box
          position="absolute"
          top="1"
          right={'0'}
          display="flex"
          marginTop={'12px'}
          zIndex={1}
          marginRight={'12px'}
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
          style={{
            height: '100%',
            width: '100%',
            borderRadius: '12px',
            objectFit: 'cover',
          }}
          alt="news"
          src={
            image ||
            'https://s3-alpha-sig.figma.com/img/e7a2/1b9d/8dee851bf60c683f94041035849f3dca?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BvgpfnvcAL~zhHG6Oowu1t3HZRwEfXSfH4khOf-3eUB2Uyv8r2u6bU3BVqFllyBCHOsEQjlzxCVobCT8yE8iIhbf1aiqtfUWPypscZYHrLgXrmv32wfptJ7uz5GLSfUhMF9vsPhm3zsby0HqdX2cJHa3H3B7BN-V3dXG8mdmWZoJQwdr8zC7FIAMqPwebOoEbeseY6Q2MK3MeT30CSYde3CmG094wS2f1NI~sSfi~~RCnM~1SyWDv~WX7KL6jhRuxWFBY7IztH-8kgOOyvvP6ESbtWKVmPi07YdpqiFIFtk4MDesUsyThfs6129AmKfVhyVjfY7WY~mBVNAYWuXr5Q__'
          }
        />
      </Box>
      <Box sx={{ '@media (max-width: 576px)': { paddingInline: '16px' } }}>
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Chip
            sx={{
              mt: '16px',
              width: '68px',
              height: '25px',
              background:
                'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%) !important',
            }}
            label={
              <Typography
                sx={{
                  color: '#7248F7',
                  fontWeight: '500',
                  fontSize: '10px !important',
                  lineHeight: '13px',
                  // letterSpacing: '1px',
                }}
              >
                TRADE
              </Typography>
            }
          />
          <Chip
            sx={{
              mt: '16px',
              width: '68px',
              height: '25px',
              background:
                'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%) !important',
            }}
            label={
              <Typography
                sx={{
                  color: '#7248F7',
                  fontWeight: '500',
                  fontSize: '10px !important',
                  lineHeight: '13px',
                  // letterSpacing: '1px',
                }}
              >
                BITCOIN
              </Typography>
            }
          />
          <Chip
            sx={{
              mt: '16px',
              width: '68px',
              height: '25px',
              background:
                'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%) !important',
            }}
            label={
              <Typography
                sx={{
                  color: '#7248F7',
                  fontWeight: '500',
                  fontSize: '10px !important',
                  lineHeight: '13px',
                  // letterSpacing: '1px',
                }}
              >
                CRYPTO
              </Typography>
            }
          />
        </Box>
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '16px !important',
            lineHeight: '20.8px',
            letterSpacing: '1px',
            marginTop: '16px',
          }}
          variant="body1"
        >
          {title ||
            "Crypto 'Secondaries' Prices Jump as Expectations of IPOs Climb"}
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '12px !important',
            lineHeight: '17.4px',
            overflow: 'hidden',
            marginTop: '8px',
            WebkitLineClamp: 6,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            color: 'rgba(17,17,17,0.8)',
          }}
          variant="body2"
        >
          {description ||
            "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."}
        </Typography>

        <Typography
          sx={{
            marginTop: '16px',
            fontWeight: '500',
            fontSize: '12px !important',
            lineHeight: '15.6px',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >{`06/06/2023 at 00:06 AM  |  John Smith`}</Typography>
      </Box>
    </Box>
  );
};

export default VerticalTagCard;
