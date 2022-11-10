import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { remark } from 'remark';
import html from 'remark-html';
import { useEffect, useState } from 'react';
import ARTICLES from '../data/articles.json';

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('File not found');
    return res.text();
  });

export default function Article(props: { articleName: string }) {
  const [article, setArticle] = useState<JSX.Element | undefined>(undefined);
  const [title, setTitle] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState(false);
  const { articleName } = props;

  useEffect(() => {
    (async () => {
      if (!articleName) return;
      const res = await fetch(`/api/${articleName}`);
      if (!res.ok) setError(true);
      else setData(await res.text());
    })();
  }, [articleName]);

  useEffect(() => {
    (async () => {
      if (data) {
        setArticle(
          <div
            dangerouslySetInnerHTML={{
              __html: (await remark().use(html).process(data)).toString(),
            }}
          />
        );
      }
    })();
  }, [data]);

  useEffect(() => {
    for (let article of ARTICLES) {
      if (article.content == articleName) {
        setTitle(article.name);
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
  else if (article && title) {
    inner = (
      <>
        <h2 style={{ marginTop: 0 }}>{title}</h2>
        {article}
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
        <title>The Issaquah-Sammamish Report</title>
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
