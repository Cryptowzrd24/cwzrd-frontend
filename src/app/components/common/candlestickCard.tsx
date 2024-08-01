'use client';

import React from 'react';

import { getPositiveNegativeIcon } from '@/app/helpers/functions';

import styles from './index.module.scss';
import { Card } from '@mui/material';
import CardHeader from './cardHeader.component';
import CandlestickChart from '../elements/candleStickGraph';

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
              src={'https://s2.coinmarketcap.com/static/img/coins/32x32/1.png'}
              style={{
                width: '12px',
                height: '12px',
                marginTop: '1.8px',
              }}
            />
            <CardHeader heading={heading} />
          </div>
          <div className={styles.value}>
            {value?.prefix}
            {value.data}
            {value?.postfix}
          </div>
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '15px',
          }}
        >
          <CandlestickChart />
        </div>
      </Card>
    </div>
  );
};

export default CandlestickCard;
