import { CustomCellRendererProps } from 'ag-grid-react';
import React from 'react';
import styles from './index.module.css';

import TimeAgo from 'react-timeago';

export const DateAdded = (props: CustomCellRendererProps) => {
  return (
    <div className={styles['date-comp']}>
      <TimeAgo date={props.data.date_added} />
    </div>
  );
};
