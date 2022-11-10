import Head from 'next/head';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import styles from '../../styles/Home.module.css';
import { remark } from 'remark';
import html from 'remark-html';
import { useEffect, useState } from 'react';
import ARTICLES from '../../data/articles.json';
import MiniArticle from '../../components/MiniArticle';

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error('File not found');
    return res.text();
  });

export default function Article() {
  const [article, setArticle] = useState<JSX.Element | undefined>(undefined);
  const [title, setTitle] = useState('');
  const [data, setData] = useState('');
  const [error, setError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (!router.query.article) return;
      const res = await fetch(`/api/${router.query.article}`);
      if (!res.ok) setError(true);
      else setData(await res.text());
    })();
  }, [router.query.article]);

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
      if (article.content == router.query.article) {
        setTitle(article.name);
        break;
      }
    }
  }, [ARTICLES, router.query.article]);

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
