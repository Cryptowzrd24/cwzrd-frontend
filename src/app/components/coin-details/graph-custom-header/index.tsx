'use client';
import React, { useState } from 'react';
import styles from './index.module.css';

function GraphCustomHeader() {
  const [selectedTab, setSelectedTab] = useState('Price');
  const headerOptions = ['Price', 'Market cap', 'Trading view', 'Compare with'];

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
  return <div className={styles.graphCustomHeader}>{renderHeaderOptions}</div>;
}

export default GraphCustomHeader;
