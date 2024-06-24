'use client';

import React, { useState } from 'react';
import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';

import Image from 'next/image';

import unselectedStar from '@/app/assets/icons/unselectedStar.svg';
import selectedStar from '@/app/assets/icons/selectedStar.svg';
import firstRank from '../../../../../public/icons/first-rank.png';
import secondRank from '../../../../../public/icons/second-rank.png';
import thirdRank from '../../../../../public/icons/third-rank.png';

export const ID = (props: CustomCellRendererProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const index = props.rowIndex + 1;
  const displayIndex = () => {
    if (index === 1) {
      return (
        <div className={styles['rank-image-div']}>
          <Image
            className={styles['rank-image']}
            src={firstRank}
            width={22}
            alt=""
            onClick={() => setIsSelected(true)}
          />
        </div>
      );
    } else if (index === 2) {
      return (
        <div className={styles['rank-image-div']}>
          <Image
            className={styles['rank-image']}
            src={secondRank}
            width={22}
            alt=""
            onClick={() => setIsSelected(true)}
          />
        </div>
      );
    } else if (index === 3) {
      return (
        <div className={styles['rank-image-div']}>
          <Image
            className={styles['rank-image']}
            src={thirdRank}
            width={22}
            alt=""
            onClick={() => setIsSelected(true)}
          />
        </div>
      );
    } else {
      return <div>{index}</div>;
    }
  };
  return (
    <div className={styles['index-comp-main']}>
      <Image
        className={styles['star-image']}
        src={isSelected ? selectedStar : unselectedStar}
        alt=""
        onClick={() => setIsSelected(true)}
      />
      {displayIndex()}
    </div>
  );
};
