import React from 'react';
import styles from './index.module.css';
import { CustomCellRendererProps } from 'ag-grid-react';

export const Score = (props: CustomCellRendererProps) => {
  const formattedValue = parseFloat(props.value).toFixed(1);

  return (
    <div className={styles['score-container']}>
      <div className={styles['score']}>
        <p>{formattedValue}</p>
      </div>
    </div>
  );
};
