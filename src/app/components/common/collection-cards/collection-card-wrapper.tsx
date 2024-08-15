'use client';
import React, { useState } from 'react';
import styles from './index.module.css';
import CardHeader from './card-header';
import CardChartArea from './card-chart-area';
import { getGraphColor } from '@/app/helpers/functions';
import CardChartBar from './card-chart-bar';
function CollectionCardWrapper({ headerName, tooltipName, type }: any) {
  const [selectedTab, setSelectedTab] = useState('24h');
  const areachartData = [
    { x: 1, y: 5 },
    { x: 2, y: 10 },
    { x: 3, y: 15 },
    { x: 4, y: 8 },
    { x: 5, y: 1 },
    { x: 6, y: 6 },
    { x: 7, y: 2 },
    { x: 8, y: 3 },
    { x: 9, y: 9 },
    { x: 10, y: 7 },
    { x: 11, y: 1 },
    { x: 12, y: 12 },
    { x: 13, y: 2 },
    { x: 14, y: 5 },
    { x: 15, y: 1 },
    { x: 16, y: 15 },
    { x: 17, y: 7 },
  ];
  const value = { data: '51.88', postfix: '%' };
  return (
    <>
      <div className={styles['collectionCardWrapper']}>
        <CardHeader
          headerName={headerName}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          tooltipName={tooltipName}
        />
        <div
          style={{
            height: '145px',
            marginRight: '4px',
            marginTop: '20px',
          }}
        >
          {type === 'area' ? (
            <CardChartArea
              data={areachartData}
              color={getGraphColor(6.32)}
              percent={value?.postfix ? true : false}
            />
          ) : (
            <CardChartBar
              data={areachartData}
              color={getGraphColor(6.32)}
              percent={value?.postfix ? true : false}
              headerName={headerName}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default CollectionCardWrapper;
