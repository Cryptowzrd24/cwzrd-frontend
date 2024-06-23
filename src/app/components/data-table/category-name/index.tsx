import React from 'react';

import styles from './index.module.css';
import { CustomCellRendererProps } from 'ag-grid-react';

export const CategoryName = (props: CustomCellRendererProps) => {
  return (
    <div className={styles['category-name']}>
      <p>{props.value}</p>
    </div>
  );
};
