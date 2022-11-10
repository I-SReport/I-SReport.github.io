import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainArticle from '../components/MainArticle';
import ARTICLES from '../data/articles.json';
import MiniArticle from '../components/MiniArticle';

export default function Home() {
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
        <h1 className={styles.title}>The Issaquah-Sammamish Report</h1>
        <h3 className={styles.subtitle}>
          <i>"The truth is among us"</i>
        </h3>

        <div style={{ display: 'flex', width: '100%' }}>
          <div
            style={{
              width: `${ARTICLES.length == 1 ? '10' : '5'}0%`,
              padding: '2rem',
            }}
          >
            <MainArticle article={ARTICLES[0]} />
          </div>
          <div
            style={{
              width: `${ARTICLES.length == 1 ? '' : '5'}0%`,
              padding: '2rem',
            }}
          >
            {ARTICLES.slice(1).map((a) => (
              <MiniArticle article={a} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
