'use client';
import { useState, useEffect } from 'react';

import styles from './index.module.css';

import chainIconOne from '@/app/assets/icons/chainIcon1.svg';
import chainIconTwo from '@/app/assets/icons/chainIcon2.svg';
import { CustomCellRendererProps } from 'ag-grid-react';
import Image from 'next/image';

export const ChainComp = (props: CustomCellRendererProps) => {
  const [, setChainIcon] = useState(chainIconOne);

  const getRandomChainIcon = () => {
    const icons = [chainIconOne, chainIconTwo];
    const randomIndex = Math.floor(Math.random() * icons.length);
    setChainIcon(icons[randomIndex]);
  };

  useEffect(() => {
    getRandomChainIcon();
  }, []);
  const imgId = `https://backend.cwzrd.co.uk/api/coin-image/?id=${props.data.platform_id || 1}`;
  return (
    <div className={styles['chain-component']}>
      <Image
        loader={() => imgId}
        width={32}
        height={32}
        style={{
          borderRadius: '50%',
        }}
        src={imgId}
        alt=""
      />
    </div>
  );
};
