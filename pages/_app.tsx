import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/styles.scss';
import '../styles/menu.scss';

import '../styles/index.scss';
import '../styles/about.scss';
import '../styles/contact.scss';

import Head from 'next/head';

import setting from '../setting';
import { DataContext } from '../src/DataContext';
import { useState } from 'react';
import SharedData from '../src/SharedData';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }) {

  const [sharedData, setSharedData] = useState<SharedData>({
    username: '',
    email: 'osawa-koki@example.com',
  });

  return (
    <>
      <DataContext.Provider value={{sharedData, setSharedData}}>
        <Head>
          <meta charSet="utf-8" />
          <title>{setting.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" type="image/png" href={`${setting.basePath}/favicon.ico`} />
        </Head>
        <Component {...pageProps} />
      </DataContext.Provider>
    </>
  );
};
