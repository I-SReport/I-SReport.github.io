import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import CAPTIONS from '../data/copyright.json';
import styles from '../styles/Home.module.css';

export default function App({ Component, pageProps }: AppProps) {
  const [year, setYear] = useState(0);
  const [footerCaption, setFooterCaption] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear() + Math.floor(Math.random() * 3) + 1);
    setFooterCaption(CAPTIONS[Math.floor(Math.random() * CAPTIONS.length)]);
  }, []);
  return (
    <>
      <Component {...pageProps} />

      <footer className={styles.footer}>
        <span>© {year}</span>
        <span style={{ opacity: 0.5, fontSize: '75%' }}>{footerCaption}</span>
      </footer>
    </>
  );
}
