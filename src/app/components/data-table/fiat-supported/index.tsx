import React from 'react';
import styles from './index.module.css';
import { CustomCellRendererProps } from 'ag-grid-react';
import Vector from '../../../../../public/icons/vector';

export const FiatSupported = (props: CustomCellRendererProps) => {
  return (
    <>
      <div className={styles['fiat-supported']}>
        <h6>{props.value}</h6>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center" }} >
          <p>
            and +8 more
            <span style={{ marginTop: '8px', marginLeft: '4px' }}>
              <Vector />{' '}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
