import { Article } from '../utils/types';
import styles from '../styles/Home.module.css';

export default function MiniArticle(props: { article: Article }) {
  let { article } = props;

  return (
    <a href={`/article/${article.content}`}>
      <div style={{ width: '100%' }} className={styles.card}>
        <h4 style={{ marginTop: 0 }}>{article.name}</h4>
        <div
          style={{
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            maxWidth: '100%',
          }}
        >
          {article.brief}
        </div>
      </div>
    </a>
  );
}
