import { useMemo } from 'react';
import { HeaderComponent } from '@/app/components/data-table/header';
import { GraphComp } from '../../components/data-table/graph';

import { priceNumberFormatter } from '@/utils/price-number-formater';
import { TopGainers } from '@/app/components/data-table/top-gainers';
import { CategoryName } from '@/app/components/data-table/category-name';
import NewCoin from '@/app/components/data-table/price';

import firstRank from '../../../../public/icons/first-rank.png';
import secondRank from '../../../../public/icons/second-rank.png';
import thirdRank from '../../../../public/icons/third-rank.png';
import Image from 'next/image';

const NumOfTokens = ({ value }: { value: any }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: '13px',
          fontFamily: 'Sf Pro Display',
        }}
      >
        {value}
      </span>
    </div>
  );
};

const styles = {
  indexCompMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
  },
  rankImageDiv: {
    marginTop: '6px',
  },
  rankImage: {
    borderRadius: '50%',
  },
};

const rankImages: any = {
  1: firstRank,
  2: secondRank,
  3: thirdRank,
};

const displayIndex = (index: any) => {
  if (rankImages[index]) {
    return (
      <div style={styles.rankImageDiv}>
        <Image
          style={styles.rankImage}
          src={rankImages[index]}
          width={22}
          alt=""
        />
      </div>
    );
  }
  return <div>{index}</div>;
};

const RankDisplay = (props: any) => {
  const { index } = props.data;
  return <div style={styles.indexCompMain}>{displayIndex(index)}</div>;
};

const useColumnCategoryDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            width: 50,
            cellRenderer: RankDisplay,
            // valueFormatter: (p: any) => {
            //   return p.rowIndex;
            // },
          };
        case 'category':
          return {
            field: 'category',
            headerName: 'Category',
            cellRenderer: CategoryName,
            width: 240,
          };
        case 'top_gainers':
          return {
            field: 'top_gainers',
            headerName: 'Top Gainers',
            width: 160,
            cellRenderer: TopGainers,
          };
        case 'avg_price_change':
          return {
            field: 'avg_price_change',
            headerName: 'Average Price Change',
            width: 205,
            cellRenderer: NewCoin,
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerComponent: HeaderComponent,
            width: 165,
            valueFormatter: (p: any) =>
              '$' + Math.round(p.value).toLocaleString(),
          };
        case 'volume_24':
          return {
            field: 'volume_24',
            headerName: 'Volume',
            width: 155,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'num_of_tokens':
          return {
            field: 'num_of_tokens',
            headerName: 'Number of Tokens',
            width: 155,
            cellRenderer: NumOfTokens,
          };
        case 'last7Days':
          return {
            field: 'last7Days',
            width: 205,
            headerName: 'Last 7 Days',
            cellRenderer: GraphComp,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnCategoryDefs;
