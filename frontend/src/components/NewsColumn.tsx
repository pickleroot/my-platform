import type { NewsArticle } from '../types';
import ArticleCard from './ArticleCard';

type NewsColumnProps = {
  id: string;
  title: string;
  articles: NewsArticle[];
};

export default function NewsColumn({ id, title, articles }: NewsColumnProps) {
  const headingId = `${id}-heading`;

  return (
    <section className="news-column" id={id} aria-labelledby={headingId}>
      <h2 className="column-title" id={headingId}>{title}</h2>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}
