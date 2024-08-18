'use client';
import React, { useState } from 'react';
import styles from './index.module.css';
import CardHeader from './card-header';
import CardChartArea from './card-chart-area';
import { getGraphColor } from '@/app/helpers/functions';
import CardChartBar from './card-chart-bar';
function CollectionCardWrapper({ headerName, tooltipName, type }: any) {
  const [selectedTab, setSelectedTab] = useState('24h');
  const data = [
    [Date.UTC(2024, 7, 18, 0, 0), 300000],
    [Date.UTC(2024, 7, 18, 2, 0), 200000],
    [Date.UTC(2024, 7, 18, 4, 0), 250000],
    [Date.UTC(2024, 7, 18, 6, 0), 320000],
    [Date.UTC(2024, 7, 18, 8, 0), 280000],
    [Date.UTC(2024, 7, 18, 10, 0), 350000],
    [Date.UTC(2024, 7, 18, 12, 0), 420000],
    [Date.UTC(2024, 7, 18, 14, 0), 390000],
    [Date.UTC(2024, 7, 18, 16, 0), 430000],
    [Date.UTC(2024, 7, 18, 18, 0), 370000],
    [Date.UTC(2024, 7, 18, 20, 0), 450000],
    [Date.UTC(2024, 7, 18, 22, 0), 400000],
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
            marginTop: '20px',
          }}
        >
          {type === 'area' ? (
            <CardChartArea
              data={data}
              color={getGraphColor(6.32)}
              percent={value?.postfix ? true : false}
            />
          ) : (
            <CardChartBar
              data={data}
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
