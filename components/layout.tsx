import React, { FC, ReactNode, ReactNodeArray } from 'react';
import Head from 'next/head';
import { Header } from './header';
import { Footer } from './footer';

type LayoutProps = { children: ReactNode | ReactNodeArray };

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </>
  );
};
