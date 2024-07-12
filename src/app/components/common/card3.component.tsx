'use client';

import React, { useState } from 'react';

import { Button, Card, Stack, Typography } from '@mui/material';

import styles from './index.module.scss';
import Image from 'next/image';
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
    blendImage,
    bgColor,
    allWhite,
  } = props;

  const [currentStep] = useState(0);

  const stepSetter = () => {};

  const getColor = () => {
    if (allWhite) return colorConfig.white;
    if (textColor) return textColor;
    return '#7248F7';
  };

  const getBackground = () => {
    if (bgImage) {
      return {
        backgroundImage: `url(${bgImage.src})`,
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
    <Card
      className={styles.coin_content_card_wrapper}
      style={{ ...getBackground(), position: 'relative' }}
    >
      {blendImage ? (
        <Image
          style={{
            width: '80px',
            height: '80px',
            position: 'absolute',
            right: '20px',
            mixBlendMode: 'luminosity',
            opacity: '0.2',
            bottom: '45px',
            backgroundBlendMode: 'multiply' /* Blending mode */,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%',
          }}
          alt="image"
          src={blendImage}
        />
      ) : null}
      {!bgColor ? (
        <>
          <div
            style={{
              borderColor: '#ab47bc',
              borderWidth: '50px',
              borderStyle: 'solid',
              height: '400px',
              position: 'absolute',
              borderRadius: '50%',
              width: '500px',
              top: '-217px',
              right: '-128px',
              zIndex: 2,
            }}
          />
          <div
            style={{
              borderColor: 'pink',
              borderWidth: '50px',
              borderStyle: 'solid',
              height: '400px',
              position: 'absolute',
              borderRadius: '50%',
              width: '500px',
              top: '-214px',
              right: '-58px',
              zIndex: 2,
            }}
          />
        </>
      ) : null}
      {/* Overlay */}
      {bgImage && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1,
          }}
        ></div>
      )}
      <div
        className={styles.header_wrapper}
        style={{ position: 'relative', zIndex: 2 }}
      >
        <CardHeader
          heading={heading}
          currentStep={currentStep}
          stepSetter={stepSetter}
          staticTextColor={staticTextColor}
        />
      </div>
      <Typography
        sx={{
          marginLeft: '22px',
          fontSize: '24px',
          marginRight: '37px',
          fontWeight: '500',
          lineHeight: '26px',
          letterSpacing: '1px',
          zIndex: 2,
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
          marginTop: '20px',
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
          }}
        >
          See all &nbsp; <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
        </Button>
      </Stack>
    </Card>
  );
};

export default Card3;
