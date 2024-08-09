'use client';
import React, { useState } from 'react';
import styles from './index.module.css';
import CardHeader from './card-header';
function CollectionCardWrapper({ headerName, tooltipName }: any) {
  const [selectedTab, setSelectedTab] = useState('24h');
  return (
    <div className={styles['collectionCardWrapper']}>
      <CardHeader
        headerName={headerName}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        tooltipName={tooltipName}
      />
    </div>
  );
}

export default CollectionCardWrapper;
