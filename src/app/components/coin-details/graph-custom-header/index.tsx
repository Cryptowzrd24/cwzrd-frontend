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

  return (
    <div className={styles.graphCustomHeader}>
      {headerOptions.map((opt) => (
        <div
          key={opt}
          onClick={() => handleTabSelect(opt)}
          className={`${styles.tab} ${
            selectedTab === opt ? styles.selectedTab : ''
          }`}
        >
          <span className={selectedTab === opt ? styles.selectedText : ''}>
            {opt}
          </span>
        </div>
      ))}
    </div>
  );
}

export default GraphCustomHeader;
