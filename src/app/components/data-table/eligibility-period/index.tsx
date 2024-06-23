import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';

export const EligibilityPeriod = (props: CustomCellRendererProps) => {
  return (
    <div className={styles['section']}>
      <div
        style={{
          backgroundColor:
            props.value === 'ON GOING' ? '#1FD7731A' : '#F748481A',
          color: props.value === 'ON GOING' ? '#01C877' : '#F74848',
        }}
        className={styles['container']}
      >
        {props.value}
      </div>
    </div>
  );
};
