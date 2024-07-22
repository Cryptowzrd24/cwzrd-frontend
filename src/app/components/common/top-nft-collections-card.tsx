'use client';

import React from 'react';

import AreaChart from '../elements/areaGraphCard.element';

import { getGraphColor } from '@/app/helpers/functions';

import styles from './index.module.scss';
import { Card } from '@mui/material';
import CardHeader from './cardHeader.component';

import chainCoin1 from '../../assets/icons/chainIcon1.svg';
import Image from 'next/image';

const TopNftCollection = (props: any) => {
  const { heading, percent, graphAttr } = props;
  return (
    <Card className={styles.top_nft_card_wrapper}>
      <div className={styles.header_wrapper}>
        <CardHeader heading={heading} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '5px 22px 10px 22px',
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
                fontWeight: 500,
              }}
            >
              PudgyPenguins
            </p>
            <p
              style={{
                fontSize: '10px',
                margin: '0',
                fontFamily: 'Sf Pro Display',
                color: 'rgba(17, 17, 17, 0.6)',
              }}
            >
              ETH
            </p>
          </div>
        </div>
        <div>
          <span
            style={{
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '1.2px',
            }}
          >
            254,567 ETH
          </span>
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
        <AreaChart
          data={graphAttr.data}
          color={getGraphColor(percent)}
          isMarker={true}
        />
      </div>
    </Card>
  );
};

export default TopNftCollection;
