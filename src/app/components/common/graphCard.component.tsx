'use client';

import React, { useState } from 'react';

import AreaChart from '../elements/areaGraphCard.element';

import {
  getGraphColor,
  getPositiveNegativeIcon,
} from '@/app/helpers/functions';

import styles from './index.module.scss';
import BarChart from '../elements/barGraphCard.element';
import { Card } from '@mui/material';
import CardHeader from './cardHeader.component';

const GraphCard = (props: IMarketCapCardProps) => {
  const { heading, value, percent, graphAttr } = props;
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
            color:
              getPositiveNegativeIcon(percent) === '-' ? '#F56D6D' : '#45CA94',
          }}
        >
          {getPositiveNegativeIcon(percent)}
          {Math.abs(percent)}%
        </div>
      </div>
      <div>
        {graphAttr.type === 'area' ? (
          <AreaChart data={graphAttr.data} color={getGraphColor(percent)} />
        ) : null}
        {graphAttr.type === 'bar' ? (
          <BarChart data={graphAttr.data} color={getGraphColor(percent)} />
        ) : null}
      </div>
    </Card>
  );
};

export default GraphCard;
