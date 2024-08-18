'use client';
import Image from 'next/image';
import React, { useCallback, useMemo, useState } from 'react';

import unselectedStarWhite from '@/app/assets/icons/unselectedStarWhite.svg';
import selectedStar from '@/app/assets/icons/selectedStar.svg';

import Cookies from 'js-cookie';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';
import { setMainWatchFavorites, updateFavorites } from '@/app/redux/market';

function StarComponent({ coinId }: any) {
  const [isLoading, setIsLoading] = useState(false);

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
  const styles = {
    loader: {
      border: '2px solid #f3f3f3',
      borderTop: '2px solid rgba(17, 17, 17, 1)',
      borderRadius: '50%',
      width: '10px',
      height: '10px',
      animation: 'spin 1s linear infinite',
      margin: 'auto',
    },
    starImage: {
      cursor: 'pointer',
    },
    svgStyle: {
      stroke: '#fff !important', // Add white stroke color
      strokeWidth: 2,
    },
  };

  const handleClick = useCallback(
    async (event: React.MouseEvent) => {
      event.stopPropagation();

      const isFavorite = currentFavorites.includes(String(coinId));
      let newFavorites = isFavorite
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
          const mainCollection = Object.values(data.collections).find(
            (collection) => collection?.main === true,
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
    <div onClick={handleClick}>
      {isLoading ? (
        <div style={styles['loader']}></div>
      ) : (
        <Image
          style={!isSelected ? styles['starImage'] : { stroke: '#fff' }}
          src={isSelected ? selectedStar : unselectedStarWhite}
          alt=""
        />
      )}
    </div>
  );
}
export default StarComponent;
