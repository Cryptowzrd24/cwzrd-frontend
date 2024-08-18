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
import { setMainWatchFavorites, updateFavorites } from '@/app/redux/market';

const rankImages: any = {
  1: firstRank,
  2: secondRank,
  3: thirdRank,
};

const displayIndex = (index: any) => {
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

  const {
    favorites,
    selectedWatchListName,
    selectedWatchListMain,
    mainWatchFavorites,
  } = useAppSelector((state) => state.market);

  const dispatch = useAppDispatch();
  const [addWatchlist] = useAddWatchlistMutation();

  // Determine if we are on the favorites page
  const isFavoritesPage = useMemo(
    () => window.location.pathname.includes('favorites'),
    [],
  );

  // Use favorites if no watchlistEmail is available, otherwise use mainWatchFavorites based on the page
  const currentFavorites = useMemo(() => {
    if (!Cookies.get('watchlistEmail')) {
      return favorites;
    }
    return isFavoritesPage ? favorites : mainWatchFavorites;
  }, [favorites, mainWatchFavorites, isFavoritesPage]);

  const isSelected = useMemo(
    () => currentFavorites.includes(String(coinId)),
    [coinId, currentFavorites],
  );

  const handleClick = useCallback(
    async (event: React.MouseEvent) => {
      event.stopPropagation();

      const isFavorite = currentFavorites.includes(String(coinId));
      const newFavorites = isFavorite
        ? currentFavorites.filter((id) => id !== String(coinId))
        : [...currentFavorites, String(coinId)];

      if (!Cookies.get('watchlistEmail') || isFavoritesPage) {
        Cookies.set('favorites', JSON.stringify(newFavorites));
        dispatch(updateFavorites(newFavorites));
        if (selectedWatchListMain) {
          Cookies.set('mainWatchFavorites', JSON.stringify(newFavorites));
          dispatch(setMainWatchFavorites(newFavorites));
        }
      } else {
        Cookies.set('mainWatchFavorites', JSON.stringify(newFavorites));
        dispatch(setMainWatchFavorites(newFavorites));
      }

      setIsLoading(true);

      if (Cookies.get('watchlistEmail')) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites?email=${Cookies.get('watchlistEmail')}`,
          );
          const data = await response.json();
          const mainCollection: any = Object.values(data.collections).find(
            (collection: any) => collection?.main === true,
          );

          if (mainCollection) {
            await addWatchlist({
              email: Cookies.get('watchlistEmail'),
              collection_name:
                selectedWatchListName !== '' && isFavoritesPage
                  ? selectedWatchListName
                  : mainCollection?.collection_name,
              main:
                selectedWatchListName !== '' && isFavoritesPage
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
    [currentFavorites, coinId, addWatchlist, dispatch, isFavoritesPage],
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
