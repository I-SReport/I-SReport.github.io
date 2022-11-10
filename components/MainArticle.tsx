import { Article } from '../utils/types';
import styles from '../styles/Home.module.css';

export default function MainArticle(props: { article: Article }) {
  let { article } = props;

  return (
    <a href={`/article/${article.content}`}>
      <div style={{ width: '100%' }} className={styles.card}>
        <img src={article.image} style={{ width: '100%' }} alt={article.name} />
        <h1>{article.name}</h1>
        <h3>{article.brief}</h3>
      </div>
    </a>
  );
}
