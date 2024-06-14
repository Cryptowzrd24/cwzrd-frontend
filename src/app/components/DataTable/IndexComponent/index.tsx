'use client';

import React, { useState } from 'react';
import styles from './index.module.css'

import { CustomCellRendererProps } from "ag-grid-react";

import Image from 'next/image';

import unselectedStar from '@/app/assets/icons/unselectedStar.svg';
import selectedStar from '@/app/assets/icons/selectedStar.svg';

export const IndexComponent = (props: CustomCellRendererProps) => {
    const [isSelected, setIsSelected] = useState(false);
    return (
      <div className={styles['index-comp-main']}>
        <Image
          className={styles['star-image']}
          src={isSelected ? selectedStar : unselectedStar}
          alt=""
          onClick={() => setIsSelected(true)}
        />
        <p>{props.rowIndex + 1}</p>
      </div>
    );
  };