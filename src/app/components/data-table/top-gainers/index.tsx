import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';

import topGainerOne from '@/app/assets/icons/gainer-1.svg';
import topGainerTwo from '@/app/assets/icons/gainer2.svg';
import topGainerThree from '@/app/assets/icons/gainer3.svg';

export const TopGainers = () => {
  return (
    <div className={styles['top-gainers']}>
      <Image src={topGainerOne} alt="" />
      <Image src={topGainerTwo} alt="" />
      <Image src={topGainerThree} alt="" />
    </div>
  );
};
