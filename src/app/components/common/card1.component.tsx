'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import {
  getPositiveNegativeIcon,
  getTimeAgoText,
  getVisitCount,
  numberWithCommas,
} from '@/app/helpers/functions';

import styles from './index.module.scss';
import { Card } from '@mui/material';
import CardHeader from './cardHeader.component';

interface ICard1Props {
  type: 'time' | 'percent' | 'visited' | 'price' | 'nft';
  heading: string;
  items: any;
}

const Card1 = (props: ICard1Props) => {
  const { heading, items, type } = props;

  const [currentStep] = useState(0);

  const stepSetter = () => {};

  const getType = (item: any) => {
    const renderMap = {
      time: () => <span>{getTimeAgoText(item.time)}</span>,
      percent: () => (
        <span
          style={{
            color:
              getPositiveNegativeIcon(item.percent) === '-'
                ? '#F56D6D'
                : '#45CA94',
          }}
        >
          {getPositiveNegativeIcon(item.percent)}
          {Math.abs(item.percent)}%
        </span>
      ),
      visited: () => <span>{getVisitCount(item.count)}</span>,
      price: () => <span>{numberWithCommas(item.price)}</span>,
      nft: () => (
        <span>
          {numberWithCommas(item.count)} {item.text2}
        </span>
      ),
    };

    return renderMap[type] ? renderMap[type]() : null;
  };

  return (
    <Card className={styles.coin_detail_card_wrapper}>
      <div className={styles.header_wrapper}>
        <CardHeader
          heading={heading}
          currentStep={currentStep}
          stepSetter={stepSetter}
        />
      </div>
      <div className={styles.recently_added}>
        <ul>
          {items.map((item: any) => (
            <li key={item.name}>
              <div className={styles.profile}>
                <div className={styles.medal}>
                  <span>{item.medal}</span>
                </div>
                <div className={styles.profile_block}>
                  <Image className={styles.image} src={item.image} alt="" />
                </div>
                <div className={styles.title}>
                  <span>{item.text1}</span>
                  <span>{item.text2}</span>
                </div>
              </div>
              <div style={{ alignContent: 'center' }}>
                <span style={{ fontSize: '12px' }}>{getType(item)}</span>
              </div>
            </li>
          ))}
        </ul>
        <div
          style={{
            fontWeight: 700,
            color: '#7248F7',
            fontSize: '14px',
            padding: '0px 15px',
            position: 'absolute',
            right: '0px',
            bottom: '12px',
          }}
        >
          More &gt;
        </div>
      </div>
    </Card>
  );
};

export default Card1;
