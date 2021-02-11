import React, { FC } from 'react';
import '../styles/custom-mobile.scss';
import '../styles/custom-tablet-desktop.scss';

type MyAppProps = {
  Component;
  pageProps;
};

const MyApp: FC<MyAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
