'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import styles from './index.module.css';

import chainIconOne from '@/app/assets/icons/chainIcon1.svg';
import chainIconTwo from '@/app/assets/icons/chainIcon2.svg';

export const ChainComp = () => {
  const [chainIcon, setChainIcon] = useState(chainIconOne);

  const getRandomChainIcon = () => {
    const icons = [chainIconOne, chainIconTwo];
    const randomIndex = Math.floor(Math.random() * icons.length);
    setChainIcon(icons[randomIndex]);
  };

  useEffect(() => {
    getRandomChainIcon();
  }, []);
  return (
    <div className={styles['chain-component']}>
      <Image src={chainIcon} alt="" />
    </div>
  );
};
