'use client';
import React from 'react';
import CardHeader from './cardHeader.component';
import { Button, Card, Stack, Typography, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import styles from './index.module.scss';
import Avatars from '../elements/avatarGroup.element';

interface ICard8Props {
  heading: string;
  staticTextColor?: string;
  text1: string;
  text2: string;
  bg?: string;
  bgImage?: any;
  footerButton?: string;
}

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 700,
  padding: '0px 0px 0px 0px',
  margin: '5px 11px 0px 0px',
  lineHeight: 1.5,
  borderColor: '#0063cc',
  fontFamily: ['SF Pro Display'].join(','),
});

const Card8 = (props: ICard8Props) => {
  const { heading, staticTextColor, text1, text2, bg, bgImage, footerButton } =
    props;

  const getBackground = () => {
    if (bgImage) {
      return {
        backgroundImage: `url(${bgImage.src}) !important`,
        boxShadow:
          '0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      };
    } else if (bg) {
      return {
        background: bg,
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
      };
    }
    return {
      background: '#FFFFFF',
      boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
    };
  };

  const getText = () => {
    const commonTypographyStyles = {
      fontFamily: 'SF Pro Display',
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: '28.8px',
      letterSpacing: '1px',
    };
    const webkitClasses = {
      WebkitTextFillColor: 'transparent',
      WebkitBackgroundClip: 'text',
    };
    if (bg || bgImage) {
      return (
        <div style={{ marginTop: '10px' }}>
          <Typography
            sx={{
              ...commonTypographyStyles,
              letterSpacing: '-1px',
              textAlign: bgImage ? 'center' : 'start',
            }}
          >
            <span
              style={{
                background: bgImage
                  ? '#4CFEB6'
                  : 'linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)',
                ...webkitClasses,
              }}
            >
              {text1}{' '}
            </span>
            <span
              style={{ fontWeight: '400', color: '#FFFFFF', fontSize: '23px' }}
            >
              {text2}
            </span>
          </Typography>
        </div>
      );
    }

    return (
      <>
        <div style={{ marginTop: '15px' }}>
          <Typography
            sx={{
              background: 'rgba(17, 17, 17, 1)',
              ...commonTypographyStyles,
              ...webkitClasses,
            }}
          >
            {text1}
          </Typography>
        </div>
        <div style={{ marginTop: '5px' }}>
          <Typography
            sx={{
              background:
                'linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)',
              ...commonTypographyStyles,
              ...webkitClasses,
            }}
          >
            {text2}
          </Typography>
        </div>
      </>
    );
  };

  return (
    <Card className={styles.market_cap_wrapper} style={getBackground()}>
      <div className={styles.header_wrapper}>
        <CardHeader heading={heading} staticTextColor={staticTextColor} />

        <div
          style={{
            display: 'flex',
            justifyContent: bgImage ? 'center' : 'start',
            marginTop: bg ? '25px' : bgImage ? '15px' : '35px',
          }}
        >
          <Avatars />
        </div>

        <div style={{}}>{getText()}</div>
      </div>

      {footerButton && (
        <Stack
          direction="row"
          style={{
            justifyContent: bgImage ? 'center' : 'flex-end',
            marginTop: bgImage ? '15px' : '5px',
          }}
        >
          <BootstrapButton
            variant="text"
            size="medium"
            sx={{ color: '#FFFFFF' }}
          >
            {footerButton} &nbsp;{' '}
            <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
          </BootstrapButton>
        </Stack>
      )}
    </Card>
  );
};

export default Card8;
