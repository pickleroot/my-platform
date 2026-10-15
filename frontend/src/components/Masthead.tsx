type MastheadProps = {
  date: string;
  isoDate: string;
  issueNumber: string;
};

export default function Masthead({ date, isoDate, issueNumber }: MastheadProps) {
  return (
    <header className="masthead" id="front-page">
      <div className="edition-strip">
        <span>Independent thought. Carefully set.</span>
        <span>The digital edition <span aria-hidden="true">✳</span></span>
      </div>
      <div className="masthead-title">
        <p className="masthead-aside">A little ink.<br />A little curiosity.</p>
        <h1>The Daily Byte<span className="masthead-dot" aria-hidden="true">.</span></h1>
        <p className="masthead-aside right">Est. 2026<br />Made for the web.</p>
      </div>
      <div className="edition-line">
        <span>Vol. 01 — No. {issueNumber}</span>
        <time dateTime={isoDate}>{date}</time>
        <span>One page. Plenty to discover.</span>
      </div>
      <nav className="section-nav" aria-label="Newspaper sections">
        <a href="#front-page">Front page</a>
        <a href="#city-desk">City desk</a>
        <a href="#science">Science & nature</a>
        <a href="#culture">Arts & culture</a>
      </nav>
    </header>
  );
}
