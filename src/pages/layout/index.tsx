// components/layout.js

import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from 'Components/Footer/Footer';
import Header from 'Components/Header/Header';
import ILayout from './layout.type';

export default function Layout({ children, title, desc, keywords }: ILayout) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
     <Footer />
    </>
  );
}
