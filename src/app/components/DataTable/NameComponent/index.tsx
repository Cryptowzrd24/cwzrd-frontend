
import styles from './index.module.css'

import { CustomCellRendererProps } from "ag-grid-react";


export const CurrencyNameComponent = (props: CustomCellRendererProps) => {
    return (
      <div className={styles['currency-comp']}>
        <p>{props.value}</p>
      </div>
    );
  };