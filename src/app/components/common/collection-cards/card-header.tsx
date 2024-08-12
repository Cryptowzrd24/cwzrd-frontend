'use client';
import React from 'react';
import styles from './index.module.css';

import Image from 'next/image';

import infoIcon from '@/app/assets/icons/infoIcon.svg';

import { Tooltip } from '@mui/material';
import { HeaderTooltip } from '../../header-tooltip';

function CardHeader({
  headerName,
  selectedTab,
  setSelectedTab,
  tooltipName,
}: any) {
  const headerOptions = ['24h', '7d', '30d', 'All'];

  const handleTabSelect = (val: string) => {
    setSelectedTab(val);
  };

  const renderHeaderOptions = headerOptions.map((opt) => {
    return (
      <div
        key={opt}
        onClick={() => handleTabSelect(opt)}
        className={selectedTab === opt ? `${styles.selectedLink}` : ''}
      >
        <span
          className={
            selectedTab === opt
              ? `${styles.selectedTabText}`
              : `${styles.headerText}`
          }
        >
          {opt}
        </span>
      </div>
    );
  });
  return (
    <>
      <div className={styles['cardHeader']}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <p style={{ fontSize: '14px', fontWeight: '600' }}>
            {`${headerName} (${selectedTab})`}
          </p>
          <Tooltip
            title={<HeaderTooltip headerName={tooltipName} />}
            arrow={false}
            classes={{ tooltip: styles['custom-tooltip'] }}
          >
            <Image className={styles['info-icon']} src={infoIcon} alt="" />
          </Tooltip>
        </div>
        <div className={styles.graphCustomHeader}>{renderHeaderOptions}</div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <span style={{ fontSize: '20px', fontWeight: '700' }}>
          $3,096,908,099.62
        </span>
        <span
          style={{
            color: '#ea3943',
            fontSize: '12px',
            fontWeight: '500',
            marginLeft: '10px',
          }}
        >
          99.88% ({selectedTab})
        </span>
      </div>
    </>
  );
}

export default CardHeader;
