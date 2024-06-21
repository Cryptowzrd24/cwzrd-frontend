import Image from 'next/image';
import styles from './index.module.css';

import graph from '@/app/assets/icons/graph.svg';

export const GraphComp = () => {
  return (
    <div className={styles['graph-component']}>
      <Image src={graph} alt="" />
    </div>
  );
};
