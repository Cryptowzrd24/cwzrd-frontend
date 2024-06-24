import React from 'react';
import styles from './index.module.css';
import { CustomCellRendererProps } from 'ag-grid-react';

export const Score = (props: CustomCellRendererProps) => {
  return (
    <div className={styles['score']}>
      <p>{props.value}</p>
    </div>
  );
};
