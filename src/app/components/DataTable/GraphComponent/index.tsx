import Image from 'next/image';
import styles from './index.module.css';

import graph from '@/app/assets/icons/graph.svg';


import { IHeaderParams } from 'ag-grid-community';

export const GraphComp = (props: IHeaderParams) => {
    return (
      <div className={styles['graph-component']}>
        <Image src={graph} alt="" />
      </div>
    );
  };