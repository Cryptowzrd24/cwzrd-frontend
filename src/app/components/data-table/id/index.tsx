'use client';

// import React, { useState, useEffect } from 'react';
// import styles from './index.module.css';
// import Cookies from 'js-cookie';
// import { CustomCellRendererProps } from 'ag-grid-react';
// import Image from 'next/image';

// import unselectedStar from '@/app/assets/icons/unselectedStar.svg';
// import selectedStar from '@/app/assets/icons/selectedStar.svg';
// import firstRank from '../../../../../public/icons/first-rank.png';
// import secondRank from '../../../../../public/icons/second-rank.png';
// import thirdRank from '../../../../../public/icons/third-rank.png';

// export const ID = (props: CustomCellRendererProps) => {
//   const index = props.data.index;
//   const coinId = props.data.coin_id;
//   const [isLoading, setIsLoading] = useState(false);
//   const [isSelected, setIsSelected] = useState(false);

//   useEffect(() => {
//     const favorites = Cookies.get('favorites')
//       ? JSON.parse(Cookies.get('favorites') as string)
//       : [];
//     if (favorites.includes(coinId)) {
//       setIsSelected(true);
//     }
//   }, [coinId]);

//   const handleClick = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       const favorites = Cookies.get('favorites')
//         ? JSON.parse(Cookies.get('favorites') as string)
//         : [];
//       if (favorites.includes(coinId)) {
//         const updatedFavorites = favorites.filter((id: any) => id !== coinId);
//         Cookies.set('favorites', JSON.stringify(updatedFavorites));
//         setIsSelected(false);
//       } else {
//         favorites.push(coinId);
//         Cookies.set('favorites', JSON.stringify(favorites));
//         setIsSelected(true);
//       }
//       setIsLoading(false);
//     }, 600);
//   };

//   const displayIndex = () => {
//     if (index === 1) {
//       return (
//         <div className={styles['rank-image-div']}>
//           <Image
//             className={styles['rank-image']}
//             src={firstRank}
//             width={22}
//             alt=""
//           />
//         </div>
//       );
//     } else if (index === 2) {
//       return (
//         <div className={styles['rank-image-div']}>
//           <Image
//             className={styles['rank-image']}
//             src={secondRank}
//             width={22}
//             alt=""
//           />
//         </div>
//       );
//     } else if (index === 3) {
//       return (
//         <div className={styles['rank-image-div']}>
//           <Image
//             className={styles['rank-image']}
//             src={thirdRank}
//             width={22}
//             alt=""
//           />
//         </div>
//       );
//     } else {
//       return <div>{index}</div>;
//     }
//   };

//   return (
//     <div className={styles['index-comp-main']}>
//       <div onClick={handleClick}>
//         {isLoading ? (
//           <div className={styles['loader']}></div>
//         ) : (
//           <Image
//             className={!isSelected ? styles['star-image'] : ''}
//             src={isSelected ? selectedStar : unselectedStar}
//             alt=""
//           />
//         )}
//       </div>
//       {displayIndex()}
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Cookies from 'js-cookie';
import { CustomCellRendererProps } from 'ag-grid-react';
import Image from 'next/image';

import unselectedStar from '@/app/assets/icons/unselectedStar.svg';
import selectedStar from '@/app/assets/icons/selectedStar.svg';
import firstRank from '../../../../../public/icons/first-rank.png';
import secondRank from '../../../../../public/icons/second-rank.png';
import thirdRank from '../../../../../public/icons/third-rank.png';

export const ID = (props: CustomCellRendererProps) => {
  const index = props.data.index;
  const coinId = props.data.coin_id;
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const favorites = Cookies.get('favorites')
      ? JSON.parse(Cookies.get('favorites') as string)
      : [];
    if (favorites.includes(coinId)) {
      setIsSelected(true);
    }
  }, [coinId]);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    // Retrieve the current favorites from cookies
    let favorites = Cookies.get('favorites')
      ? JSON.parse(Cookies.get('favorites') as string)
      : [];

    // Determine whether the coin is already in favorites
    const isFavorite = favorites.includes(coinId);

    // Update the selected state immediately
    setIsSelected(!isFavorite);

    // Update the favorites array and the cookies immediately
    if (isFavorite) {
      favorites = favorites.filter((id: any) => id !== coinId);
    } else {
      favorites.push(coinId);
    }
    Cookies.set('favorites', JSON.stringify(favorites));

    // Dispatch the custom event to notify the parent component
    const customEvent = new CustomEvent('starClicked', {
      detail: { coinId },
    });
    window.dispatchEvent(customEvent);

    // Optional: Start the loading animation if you want to show it
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const displayIndex = () => {
    if (index === 1) {
      return (
        <div className={styles['rank-image-div']}>
          <Image
            className={styles['rank-image']}
            src={firstRank}
            width={22}
            alt=""
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
          />
        </div>
      );
    } else {
      return <div>{index}</div>;
    }
  };

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
      {displayIndex()}
    </div>
  );
};
