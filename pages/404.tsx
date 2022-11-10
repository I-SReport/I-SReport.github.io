import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArticlePage from '../components/ArticlePage';
import styles from '../styles/Home.module.css';

export default function Page404() {
  const router = useRouter();
  const [path, setPath] = useState<string[]>([]);

  useEffect(() => {
    setPath(router.asPath.split('/').slice(1));
  }, [router]);

  // Dynamic routing but cursed
  if (path.length == 2 && path[0] == 'article')
    return <ArticlePage articleName={path[1]} />;

  return (
    <div className={styles.container}>
      <Head>
        <title>The Issaquah-Sammamish Report</title>
        <meta
          name='description'
          content='The Issaquah-Sammamish Report - "The truth is among us"'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>What were you even trying to do</h1>
        <h3 className={styles.subtitle}>
          <a href='/' style={{ color: '#0070f3' }}>
            <i>Help</i>
          </a>
        </h3>
      </main>
    </div>
  );
}
