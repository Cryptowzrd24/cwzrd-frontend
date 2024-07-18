'use client';

import React, { useState } from 'react';

import { getPositiveNegativeIcon } from '@/app/helpers/functions';

import styles from './index.module.scss';
import { Card } from '@mui/material';
import CardHeader from './cardHeader.component';
import CandlestickChart from '../elements/candleStickGraph';

const CandlestickCard = (props: IMarketCapCardProps) => {
  const { heading, value, percent } = props;
  const [currentStep] = useState(0);

  const stepSetter = () => {};

  return (
    <Card className={styles.market_cap_wrapper}>
      <div className={styles.header_wrapper}>
        <CardHeader
          heading={heading}
          currentStep={currentStep}
          stepSetter={stepSetter}
        />
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
              getPositiveNegativeIcon(percent) === '-' ? '#F56D6D' : '#45CA94',
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
  );
};

export default CandlestickCard;
