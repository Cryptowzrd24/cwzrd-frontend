import NftDetails from '@/app/components/nft-details';
import React from 'react';

interface Params {
  params: {
    contract_id: string;
    platform_alias: string;
  };
}

async function fetchNftDetailData(id: string, platformAlias: string) {
  const res = await fetch(
    `https://backend.cwzrd.co.uk/api/nft/basic/?platformAlias=${platformAlias}&contract=${id}`,
    {
      next: { revalidate: 60 },
    },
  );
  const data = await res.json();
  return data?.data;
}

const page = async (params: Params) => {
  // if (!params?.coin_id) {
  //   throw new Error('coin_id is missing');
  // }
  const serverNftData = await fetchNftDetailData(
    params.params.contract_id,
    params.params.platform_alias,
  );
  return (
    <div>
      <NftDetails serverNftData={serverNftData} />
    </div>
  );
};

export default page;
