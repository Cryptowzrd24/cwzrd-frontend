import React from 'react';
import styles from './index.module.css';
import { CustomCellRendererProps } from 'ag-grid-react';

export const FiatSupported = (props: CustomCellRendererProps) => {
  return (
    <div className={styles['fiat-supported']}>
      <h6>{props.value}</h6>
      <p>and +8 more</p>
    </div>
  );
};
