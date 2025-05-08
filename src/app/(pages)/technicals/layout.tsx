'use client';
import React, { useState } from 'react';
import TechnicalsHeader from '@/app/components/technicals-page/header';
import { TechnicalsCategory } from '@/app/components/technicals-page/technicals-categories';
import { Container } from '@mui/material';
import { PageContext } from '@/app/components/technicals-page';

export default function TechnicalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [tabSelected, setTabSelected] = useState('crypto');
  const handleCurrencyChange = (title: string) => {
    setTabSelected(title);
  };

  return (
    <>
      <Container
        sx={{
          maxWidth: "92% !important",
          '@media (max-width: 1520px)': { paddingInline: '20px !important' },
          '@media (max-width: 599px)': { paddingInline: '16px !important' },
          margin: '0 auto',
        }}
      >
        <PageContext.Provider value={{ tabSelected, setTabSelected }}>
          <TechnicalsHeader
            handleCurrencyChange={handleCurrencyChange}
            tabSelected={tabSelected}
          />
          <TechnicalsCategory />
          {children}
        </PageContext.Provider>
      </Container>
    </>
  );
}
