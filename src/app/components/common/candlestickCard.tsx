'use client';

import React from 'react';

import { getPositiveNegativeIcon } from '@/app/helpers/functions';

import styles from './index.module.scss';
import { Box, Card } from '@mui/material';
import CardHeader from './cardHeader.component';
import CandlestickChart from '../elements/candleStickGraph';
import { shrinkLargeNumber } from '@/utils/shrinkLargeNumber';

const CandlestickCard = (props: IMarketCapCardProps) => {
  const { heading, value, percent } = props;

  return (
    <div className="card_wrapper defi__candlestick_card">
      <Card className={styles.candle_stick_card_wrapper}>
        <div className={styles.header_wrapper}>
          <div
            style={{
              display: 'flex',
              alignContent: 'center',
              gap: '4px',
            }}
          >
            <img
              src={'https://backend.cwzrd.co.uk/api/coin-image/?id=1'}
              style={{
                width: '12px',
                height: '12px',
                marginTop: '1.8px',
              }}
            />
            <CardHeader heading={heading} />
          </div>
          <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
            <div className={styles.value}>
              {value?.prefix}
              {value.data}
              {value?.postfix}
            </div>
          </Box>
          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
            <div className={styles.value}>
              {value?.prefix}
              {shrinkLargeNumber(value.data)}
              {value?.postfix}
            </div>
          </Box>
          <div
            style={{
              fontSize: '14px',
              fontFamily: 'Sf Pro Display',
              marginTop: '5px',
              color:
                getPositiveNegativeIcon(percent) === '-'
                  ? '#F56D6D'
                  : '#45CA94',
            }}
          >
            {getPositiveNegativeIcon(percent)}
            {Math.abs(percent)}%
          </div>
        </div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15px',
            '@media (max-width: 1200px)': { marginTop: '0px' },
          }}
        >
          <CandlestickChart />
        </Box>
      </Card>
    </div>
  );
};

export default CandlestickCard;
