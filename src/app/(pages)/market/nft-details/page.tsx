import NftDetails from '@/app/components/nft-details';
import React from 'react';

async function fetchNftDetailData() {
  const res = await fetch(
    `https://backend.cwzrd.co.uk/api/nft/basic/?platformAlias=polygon&contract=0xa28640d322019217ecd27ebf90cd27b1978c6038`,
    {
      next: { revalidate: 60 },
    },
  );
  const data = await res.json();
  return data?.data;
}

const page = async () => {
  // if (!params?.coin_id) {
  //   throw new Error('coin_id is missing');
  // }
  const serverNftData = await fetchNftDetailData();
  return (
    <div>
      <NftDetails serverNftData={serverNftData} />
    </div>
  );
};

export default page;
