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

import chainCoin1 from '../../assets/icons/chainIcon1.svg';
import Image from 'next/image';

const GraphCardTop = (props: any) => {
  const { heading, percent, graphAttr } = props;
  const [currentStep] = useState(0);

  const stepSetter = () => {};

  const getColor = (val: any) => {
    if (val.toString().includes('-')) {
      return 'rgba(245, 109, 109, 1)';
    } else {
      return 'rgba(69, 202, 148, 1)';
    }
  };

  return (
    <Card className={styles.top_graph_card_wrapper}>
      <div className={styles.header_wrapper}>
        <CardHeader
          heading={heading}
          currentStep={currentStep}
          stepSetter={stepSetter}
        />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2px 21px 20px 18px',
        }}
      >
        <div style={{ display: 'flex' }}>
          <Image src={chainCoin1} alt="" />
          <div style={{ marginLeft: '-35px' }}>
            <p
              style={{
                fontSize: '14px',
                margin: '0',
                fontFamily: 'Sf Pro Display',
              }}
            >
              DogeCoin
            </p>
            <p
              style={{
                fontSize: '10px',
                margin: '0',
                fontFamily: 'Sf Pro Display',
              }}
            >
              DC
            </p>
          </div>
        </div>
        <div>
          <span style={{ color: `${getColor(percent)}`, fontSize: '14px' }}>
            {getPositiveNegativeIcon(percent)}
            {Math.abs(percent)}%
          </span>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '-5px',
          height: '140px',
        }}
      >
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

export default GraphCardTop;
