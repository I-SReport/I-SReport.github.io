import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import CAPTIONS from '../data/copyright.json';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const [year, setYear] = useState(0);
  const [footerCaption, setFooterCaption] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear() + Math.floor(Math.random() * 3) + 1);
    setFooterCaption(CAPTIONS[Math.floor(Math.random() * CAPTIONS.length)]);
  }, []);
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta
          name='keywords'
          content='Issaquah, Sammamish, News, Report, The I-S Report, I-S, I-S Report'
        />
        <link rel='apple-touch-icon' href='/icons/icon-152x152.png'></link>

        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#000000' />
      </Head>
      <Component {...pageProps} />

      <footer className={styles.footer}>
        <span>© {year}</span>
        <span style={{ opacity: 0.75, fontSize: '75%' }}>{footerCaption}</span>
      </footer>
    </>
  );
}
