'use client';
import { Box } from '@mui/material';
import Upload from '../../../../../public/icons/nft/upload';
import React, { useState } from 'react';
import ShareModal from './share-modal';

const ShareComponent = ({ coinData, coinImage }: any) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (value: boolean) => {
    // event.preventDefault();
    setModalOpen(value);
  };

  return (
    <>
      <Box onClick={() => handleClick(true)} sx={{ cursor: 'pointer' }}>
        <Upload />
      </Box>
      {modalOpen && (
        <ShareModal
          coinImage={coinImage}
          coinDetails={coinData}
          isOpen={modalOpen}
          handleIsOpen={handleClick}
        />
      )}
    </>
  );
};

export default ShareComponent;
