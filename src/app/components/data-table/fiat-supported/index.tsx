import React from 'react';
import styles from './index.module.css';
import { CustomCellRendererProps } from 'ag-grid-react';
import Vector from '../../../../../public/icons/vector';

export const FiatSupported = (props: CustomCellRendererProps) => {
  const fiats = props.value;

  if (!fiats || !Array.isArray(fiats) || fiats.length === 0) {
    return <div className={styles['fiat-supported']}>-</div>;
  }

  // Extract the first three fiats
  const firstThreeFiats = fiats.slice(0, 3).map((fiat) => fiat.trim());

  const remainingFiatsCount = fiats.length - 3;

  return (
    <div className={styles['fiat-supported']}>
      <h6>{firstThreeFiats.join(', ')}</h6>
      {remainingFiatsCount > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>
            and +{remainingFiatsCount} more
            <span style={{ marginTop: '8px', marginLeft: '4px' }}>
              <Vector />
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
