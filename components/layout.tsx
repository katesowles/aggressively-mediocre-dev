import React, { FC, ReactNode, ReactNodeArray } from 'react';
import { Head } from './head';
import { Header } from './header';
import { Footer } from './footer';

type LayoutProps = {
  children: ReactNode | ReactNodeArray;
  title?: string;
  description?: string;
  ogImageUrl?: string;
};

export const Layout: FC<LayoutProps> = ({
  children,
  title,
  description,
  ogImageUrl,
}) => {
  return (
    <>
      <Head {...{ title, description, ogImageUrl }} />

      <Header />

      <main
        role="main"
        className="constrained-section responsive-section--bottom site-content"
      >
        {children}
      </main>

      <Footer />
    </>
  );
};
