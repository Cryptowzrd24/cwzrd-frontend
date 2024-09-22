import NftDetails from '@/app/components/nft-details';
import React from 'react';

async function fetchNftDetailData(id: any, platformAlias: any) {
  const res = await fetch(
    `https://backend.cwzrd.co.uk/api/nft/basic/?platformAlias=${platformAlias}&contract=${id}`,
    {
      next: { revalidate: 60 },
    },
  );
  const data = await res.json();
  return data?.data;
}

const page = async (params: any) => {
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
