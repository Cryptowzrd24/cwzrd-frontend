'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import unselectedStarWhite from '@/app/assets/icons/unselectedStarWhite.svg';
import selectedStar from '@/app/assets/icons/selectedStar.svg';

import Cookies from 'js-cookie';

function StarComponent({ coinId }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

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

  const handleFavClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      const favorites = Cookies.get('favorites')
        ? JSON.parse(Cookies.get('favorites') as string)
        : [];
      if (favorites.includes(coinId)) {
        const updatedFavorites = favorites.filter((id: any) => id !== coinId);
        Cookies.set('favorites', JSON.stringify(updatedFavorites));
        setIsSelected(false);
      } else {
        favorites.push(coinId);
        Cookies.set('favorites', JSON.stringify(favorites));
        setIsSelected(true);
      }
      setIsLoading(false);
    }, 600);
  };

  useEffect(() => {
    const favorites = Cookies.get('favorites')
      ? JSON.parse(Cookies.get('favorites') as string)
      : [];
    if (favorites.includes(coinId)) {
      setIsSelected(true);
    }
  }, [coinId]);

  return (
    <div onClick={handleFavClick}>
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
