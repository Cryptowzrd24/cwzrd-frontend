'use client';
import React from 'react';
import styles from './index.module.css';

interface GraphCustomHeaderProps {
  selectedTab: string;
  setSelectedTab: (val: string) => void;
}

function GraphCustomHeader({
  selectedTab,
  setSelectedTab,
}: GraphCustomHeaderProps) {
  const headerOptions = ['Price', 'Market Cap', 'TradingView', 'Compare with'];

  const handleTabSelect = (val: string) => {
    setSelectedTab(val);
  };

  const renderHeaderOptions = headerOptions.map((opt) => {
    return (
      <div
        key={opt}
        onClick={() => handleTabSelect(opt)}
        className={
          selectedTab === opt ? `${styles.selectedLink}` : `${styles.link}`
        }
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
