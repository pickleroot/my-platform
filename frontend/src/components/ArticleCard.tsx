import { useState } from 'react';
import type { NewsArticle } from '../types';

type ArticleCardProps = {
  article: NewsArticle;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  // Every ArticleCard owns its own independent open/closed state.
  const [isExpanded, setIsExpanded] = useState(false);
  const headlineId = `${article.id}-headline`;
  const bodyId = `${article.id}-body`;

  return (
    <article className="article-card" aria-labelledby={headlineId}>
      <p className="eyebrow">{article.section}</p>
      {article.image && (
        <img className="article-image" src={article.image} alt={article.imageAlt ?? ''} width="480" height="280" />
      )}
      <h3 id={headlineId}>{article.headline}</h3>
      <p className="byline">{article.byline}</p>
      <p className="article-summary">{article.summary}</p>
      <div id={bodyId} className="article-body" hidden={!isExpanded}>
        {article.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <button
        type="button"
        className="read-more"
        aria-expanded={isExpanded}
        aria-controls={bodyId}
        onClick={() => setIsExpanded((previous) => !previous)}
      >
        {isExpanded ? 'Close story' : 'Read the story'}
        <span aria-hidden="true">{isExpanded ? ' −' : ' ↗'}</span>
      </button>
    </article>
  );
}
