import React from 'react';
import '../styles/globals.css';

type MyAppProps = {
  Component;
  pageProps;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
