import { CustomCellRendererProps } from 'ag-grid-react';
import React from 'react';
import styles from './index.module.css';

import TimeAgo from 'react-timeago';

export const DateAdded = (props: CustomCellRendererProps) => {
  console.log(props);
  return (
    <div
      className={
        props?.colDef?.field === 'ago_1h'
          ? styles['date-comp-nft']
          : styles['date-comp']
      }
    >
      <TimeAgo
        date={props.data.date_added || props.data.updated || props.data.ago_1h}
      />
    </div>
  );
};
