import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainArticle from '../components/MainArticle';
import ARTICLES from '../data/articles.json';
import MiniArticle from '../components/MiniArticle';
import { useRouter } from 'next/router';

export default function Home() {
  const ARTICLE_VIEW = 5;
  const router = useRouter();
  let offset = parseInt(router.query.offset as string);
  offset = isNaN(offset) ? 0 : offset;
  const articleSlice = ARTICLES.slice(
    offset * ARTICLE_VIEW,
    (offset + 1) * ARTICLE_VIEW
  );

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

        <div className={styles.articleList}>
          <div
            style={{
              width: `${articleSlice.length == 1 ? '10' : '5'}0%`,
              padding: '2rem',
              paddingRight: '1rem',
              borderTop: '0 !important',
            }}
            className={styles.articleSection}
          >
            {articleSlice[0] && <MainArticle article={articleSlice[0]} />}
          </div>
          {articleSlice.length == 1 ? null : (
            <div
              style={{
                width: '50%',
                padding: '2rem',
                paddingLeft: '1rem',
              }}
              className={styles.articleSection}
            >
              {articleSlice.slice(1).map((a) => (
                <MiniArticle article={a} key={a.name} />
              ))}
            </div>
          )}
        </div>
        {ARTICLES.length <= ARTICLE_VIEW ? null : (
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
              fontStyle: 'bold',
            }}
          >
            {offset == 0 ? null : (
              <a
                href={`/${
                  offset != 1 && ARTICLES.length - offset * ARTICLE_VIEW > 0
                    ? `?offset=${offset - 1}`
                    : ''
                }`}
              >
                <div className={styles.card}>{'<'}</div>
              </a>
            )}
            {ARTICLES.length - offset * ARTICLE_VIEW <= ARTICLE_VIEW ? null : (
              <a href={`?offset=${offset + 1}`}>
                <div className={styles.card}>{'>'}</div>
              </a>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
