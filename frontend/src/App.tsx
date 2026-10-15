import { cityArticles, cultureArticles, edition, profile, scienceArticles } from './content';
import Masthead from './components/Masthead';
import NewsColumn from './components/NewsColumn';
import ProfileFeature from './components/ProfileFeature';
import NewspaperFooter from './components/NewspaperFooter';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="newspaper">
        <Masthead date={edition.date} isoDate={edition.isoDate} issueNumber={edition.number} />
        <main id="main-content">
          <div className="front-page-grid">
            <NewsColumn id="city-desk" title="Dispatches" articles={cityArticles} />
            <ProfileFeature profile={profile} />
            <NewsColumn id="science" title="Beyond the everyday" articles={scienceArticles} />
          </div>
          <NewsColumn id="culture" title="The weekend notebook" articles={cultureArticles} />
        </main>
        <NewspaperFooter />
      </div>
    </>
  );
}
