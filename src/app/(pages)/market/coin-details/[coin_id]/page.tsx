import React from 'react';
import CoinDetails from '@/app/components/coin-details';

interface Params {
  params: {
    coin_id: string;
  };
}

async function fetchCoinDetailData({ coinId }: { coinId: string }) {
  const res = await fetch(
    `https://backend.cwzrd.co.uk/detail/coin/?coin_id=${coinId}`,
    {
      next: { revalidate: 60 },
    },
  );
  const data = await res.json();
  return data?.results[0];
}

const page = async ({ params }: Params) => {
  if (!params?.coin_id) {
    throw new Error('coin_id is missing');
  }
  const serverCoindata = await fetchCoinDetailData({ coinId: params.coin_id });
  return (
    <div>
      <CoinDetails serverCoindata={serverCoindata} />
    </div>
  );
};

export default page;
