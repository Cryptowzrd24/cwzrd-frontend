'use client';
import React, { createContext, useContext } from 'react';

import TechnicalsPageCrypto from './technicals-page-crypto/technicals-page-crypto';
import TechnicalsPageFx from './technicals-page-fx/technicals-page-fx';

interface PageContextType {
  tabSelected: string;
  setTabSelected: (tab: string) => void;
}

export const PageContext = createContext<PageContextType | undefined>(
  undefined,
);

function TechnicalsPage() {
  const context = useContext(PageContext);
  return (
    <>
      {context?.tabSelected === 'crypto' ? (
        <TechnicalsPageCrypto />
      ) : (
        <TechnicalsPageFx />
      )}
    </>
  );
}

export default TechnicalsPage;
