'use client';

import { Box, Button, Card, Stack, Typography, styled } from '@mui/material';
import React from 'react';

import styles from './index.module.scss';
import { formatDate } from '@/app/helpers/functions';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardHeader from './cardHeader.component';

interface ICard4Props {
  bgImage: any;
  heading: string;
  staticTextColor: string;
  mainText: string;
  date: Date;
  name: string;
}

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '12px 0px 0px 20px',
  lineHeight: 1.5,
  borderColor: '#0063cc',
  fontFamily: ['SF Pro Display'].join(','),
});

const Card4 = (props: ICard4Props) => {
  const { bgImage, heading, staticTextColor, mainText, date, name } = props;

  return (
    <div className="card_wrapper">
      <Card className={styles.coin_content_card_wrapper}>
        <div
          className={styles.background_image}
          style={{ backgroundImage: `url(${bgImage.src})` }}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <div className={styles.header_wrapper}>
            <CardHeader heading={heading} staticTextColor={staticTextColor} />
          </div>

          <Box
            sx={{
              padding: '0px 8px 0px 8px',
              marginTop: { xs: '0', lg: '26px' },
            }}
          >
            <div style={{ padding: '0px 8px 0px 8px' }}>
              <Typography
                sx={{
                  fontSize: '20px',
                  lineHeight: '26px',
                  fontWeight: '700',
                  color: `${staticTextColor}`,
                  letterSpacing: '1px',
                }}
              >
                {mainText}
              </Typography>
            </div>

            <div style={{ padding: '0px 8px 0px 8px', marginTop: '7px' }}>
              <Typography
                sx={{
                  fontSize: { xs: '10px' },
                  lineHeight: '15.6px',
                  fontWeight: '400',
                  color: `${staticTextColor}`,
                  opacity: '0.6',
                }}
              >
                {formatDate(date)} &nbsp; | &nbsp; {name}
              </Typography>
            </div>
          </Box>
          <Stack direction="row" style={{ marginLeft: '-6px' }}>
            <BootstrapButton
              variant="text"
              sx={{ color: `${staticTextColor}`, fontSize: '14px' }}
            >
              See all &nbsp;
              <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
            </BootstrapButton>
          </Stack>
        </div>
      </Card>
    </div>
  );
};

export default Card4;
