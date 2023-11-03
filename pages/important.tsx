import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("File not found");
    return res.text();
  });

export default function ImportantPage() {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch(`/articles/actual-talk.md`);
      if (!res.ok) setError(true);
      else setData(await res.text());
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{"Important Information"}</title>
        <meta
          name="description"
          content='The Issaquah-Sammamish Report - "The truth is among us"'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.articleContainer}>
        <h2 style={{ marginTop: 0 }}>Important Information</h2>
        <h4 style={{ marginTop: 0, color: "grey" }}>
          By:{" "}
          <span style={{ fontStyle: "italic" }}>
            The Issaquah-Sammamish Report
          </span>
        </h4>
        Please understand that everything on this website is a joke. We poke fun
        at everything, even ourselves because we hope that maybe we can inspire
        change or just give a good laugh. Also, please note that none of the
        people listed in any articles are real, including the author's names. We
        make up all names. If any names listed on this website are yours and you
        wish to change them, please contact us to fix the issue. <br />
        <br />
        If you have any concerns, please contact us at the.is.report@gmail.com.{" "}
        <br />
        <br />
        All of our work is copyrighted to the current year.
        <a
          href="/"
          style={{ color: "#0070f3", marginTop: "3rem", alignSelf: "center" }}
        >
          <i>Home</i>
        </a>
      </main>
    </div>
  );
}
