'use client';

import React, { useMemo, useCallback } from 'react';
import styles from './index.module.css';
import Cookies from 'js-cookie';
import { CustomCellRendererProps } from 'ag-grid-react';
import Image from 'next/image';

import unselectedStar from '@/app/assets/icons/unselectedStar.svg';
import selectedStar from '@/app/assets/icons/selectedStar.svg';
import firstRank from '../../../../../public/icons/first-rank.png';
import secondRank from '../../../../../public/icons/second-rank.png';
import thirdRank from '../../../../../public/icons/third-rank.png';
import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { updateFavorites } from '@/app/redux/market';

const rankImages = {
  1: firstRank,
  2: secondRank,
  3: thirdRank,
};

const displayIndex = (index) => {
  if (rankImages[index]) {
    return (
      <div className={styles['rank-image-div']}>
        <Image
          className={styles['rank-image']}
          src={rankImages[index]}
          width={22}
          alt=""
        />
      </div>
    );
  }
  return <div>{index}</div>;
};

export const ID = (props: CustomCellRendererProps) => {
  const { index, coin_id: coinId } = props.data;
  const [isLoading, setIsLoading] = React.useState(false);
  const { favorites, selectedWatchListName, selectedWatchListMain } =
    useAppSelector((state) => state.market);
  const dispatch = useAppDispatch();
  const [addWatchlist] = useAddWatchlistMutation();

  const isSelected = useMemo(
    () => favorites.includes(String(coinId)),
    [coinId, favorites],
  );

  const handleClick = useCallback(
    async (event: React.MouseEvent) => {
      event.stopPropagation();

      const isFavorite = favorites.includes(String(coinId));

      let newFavorites = isFavorite
        ? favorites.filter((id) => id !== String(coinId))
        : [...favorites, String(coinId)];

      Cookies.set('favorites', JSON.stringify(newFavorites));
      dispatch(updateFavorites(newFavorites));
      setIsLoading(true);

      if (Cookies.get('watchlistEmail')) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites?email=${Cookies.get('watchlistEmail')}`,
          );
          const data = await response.json();
          const mainCollection = Object.values(data.collections).find(
            (collection) => collection?.main === true,
          );

          if (mainCollection) {
            await addWatchlist({
              email: Cookies.get('watchlistEmail'),
              collection_name:
                selectedWatchListName !== '' &&
                window.location.pathname.includes('favorites')
                  ? selectedWatchListName
                  : mainCollection?.collection_name,
              main:
                selectedWatchListName !== '' &&
                window.location.pathname.includes('favorites')
                  ? selectedWatchListMain
                  : true,
              ids: newFavorites,
            }).unwrap();
          }
        } catch (error) {
          console.error('Error checking email:', error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }
    },
    [favorites, coinId, addWatchlist, dispatch],
  );

  return (
    <div className={styles['index-comp-main']}>
      <div onClick={handleClick} data-is-star="true">
        {isLoading ? (
          <div className={styles['loader']}></div>
        ) : (
          <Image
            className={!isSelected ? styles['star-image'] : ''}
            src={isSelected ? selectedStar : unselectedStar}
            alt=""
          />
        )}
      </div>
      {displayIndex(index)}
    </div>
  );
};
