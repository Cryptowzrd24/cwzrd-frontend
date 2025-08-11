'use client';

import React from 'react';

import { Box, Button, Card, Stack, Typography } from '@mui/material';

import styles from './index.module.scss';
import { colorConfig } from '@/app/helpers/config';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardHeader from './cardHeader.component';

interface ICard3Props {
  heading: string;
  name: string;
  value?: string;
  desc: string;
  end?: string;
  textColor?: string;
  transparentButton?: boolean;
  bgImage?: any;
  staticTextColor?: string;
  blendImage?: any;
  bgColor?: string;
  allWhite?: boolean;
}

const Card3 = (props: ICard3Props) => {
  const {
    heading,
    name,
    value,
    desc,
    end,
    textColor,
    transparentButton,
    bgImage,
    staticTextColor,
    bgColor,
    allWhite,
  } = props;

  const getColor = () => {
    if (allWhite) return colorConfig.white;
    if (textColor) return textColor;
    return '#7248F7';
  };

  const getBackground = () => {
    if (bgImage) {
      return {
        boxShadow:
          '0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };
    } else if (bgColor) {
      return {
        background: bgColor,
      };
    }
    return {};
  };
  return (
    <div className="card_wrapper defi__trending_card">
      <Card
        className={`${styles.bg} ${styles.coin_content_card_wrapper}`}
        style={{
          ...getBackground(),
          position: 'relative',
          backgroundImage: `url(${bgImage.src}) !important`,
        }}
      >
        <Box
          sx={{
            padding: { xs: '15px 10px 0', lg: '15px 22px 0 22px' },
            marginBottom: '8px',
          }}
          className={styles.header_wrapper}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <CardHeader heading={heading} staticTextColor={staticTextColor} />
        </Box>
        <Typography
          sx={{
            fontSize: { xs: '14px', lg: '18px' },
            margin: { xs: '4px 10px 0 10px', lg: '8px 37px 0px 22px' },
            fontWeight: '500',
            lineHeight: '26px',
            letterSpacing: '1px',
            zIndex: 2,
            marginTop: '8px',
            position: 'relative',
          }}
        >
          <span style={{ color: `${getColor()}` }}>{name} </span>
          <span style={staticTextColor ? { color: staticTextColor } : {}}>
            {desc}{' '}
          </span>
          <span style={{ color: `${getColor()}` }}>{value ?? ''} </span>
          <span style={staticTextColor ? { color: staticTextColor } : {}}>
            {end ?? ''}
          </span>
        </Typography>

        <Stack
          direction="row"
          style={{
            marginLeft: '20px',
            marginTop: '15px',
            zIndex: 2,
            position: 'relative',
          }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: `${transparentButton ? 'rgba(255, 255, 255, 0.1)' : '#111111'}`,
              borderRadius: '25px',
              zIndex: 2,
              position: 'relative',
              fontSize: { xs: '11px', lg: '14px' },
            }}
          >
            See all &nbsp; <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
          </Button>
        </Stack>
      </Card>
    </div>
  );
};

export default Card3;
