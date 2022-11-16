import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import ARTICLES from '../data/articles.json';
import { Article } from '../utils/types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('File not found');
    return res.text();
  });

export default function ArticlePage(props: { articleName: string }) {
  const [articleData, setArticleData] = useState<Article>();
  const [data, setData] = useState('');
  const [error, setError] = useState(false);
  const { articleName } = props;

  useEffect(() => {
    (async () => {
      if (!articleName) return;
      const res = await fetch(`/articles/${articleName}.md`);
      if (!res.ok) setError(true);
      else setData(await res.text());
    })();
  }, [articleName]);

  useEffect(() => {
    for (let article of ARTICLES) {
      if (article.content == articleName) {
        setArticleData(article);
        break;
      }
    }
  }, [ARTICLES, articleName]);

  let inner = (
    <>
      <h1 className={styles.title}>Loading</h1>
      <h3 className={styles.subtitle}>
        <a href='/' style={{ color: '#0070f3' }}>
          <i>Help</i>
        </a>
      </h3>
    </>
  );

  if (error)
    inner = (
      <>
        <h1 className={styles.title}>
          I don't think this article exists :skull:
        </h1>
        <h3 className={styles.subtitle}>
          <a href='/' style={{ color: '#0070f3' }}>
            <i>Help</i>
          </a>
        </h3>
      </>
    );
  else if (data && articleData) {
    inner = (
      <>
        <h2 style={{ marginTop: 0 }}>{articleData.name}</h2>
        <h4 style={{ marginTop: 0, color: 'grey' }}>
          By: {articleData.author}
        </h4>
        <ReactMarkdown
          children={data}
          remarkPlugins={[remarkGfm]}
          components={{
            img({ node, className, children, ...props }) {
              return (
                <div
                  style={{
                    fontStyle: 'italic',
                    color: 'grey',
                    width: '100%',
                    textAlign: 'center',
                    padding: '0 1.5%',
                  }}
                >
                  <img
                    className={`${className}`}
                    {...props}
                    referrerPolicy='no-referrer'
                    style={{ width: '100%' }}
                  />
                  {props.alt}
                </div>
              );
            },
          }}
        />
        <a
          href='/'
          style={{ color: '#0070f3', marginTop: '3rem', alignSelf: 'center' }}
        >
          <i>Home</i>
        </a>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{articleData ? articleData.name : 'Loading...'}</title>
        <meta
          name='description'
          content='The Issaquah-Sammamish Report - "The truth is among us"'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.articleContainer}>{inner}</main>
    </div>
  );
}
