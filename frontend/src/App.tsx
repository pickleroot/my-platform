import { cityArticles, cultureArticles, edition, profile, scienceArticles } from './content';
import Masthead from './components/Masthead';
import NewsColumn from './components/NewsColumn';
import ProfileFeature from './components/ProfileFeature';
import NewspaperFooter from './components/NewspaperFooter';
import { useState } from 'react'


type ReportKind = 'bug' | 'feature'

type Report = {
  id: string
  text: string
  kind: ReportKind
}

function App() {

  const initialReports: Report[] = [
    { id: '1', text: 'Navigation link is broken', kind: 'bug' },
    { id: '2', text: 'Add dark mode', kind: 'feature' },
  ]

  const [reports, setReports] = useState<Report[]>([])
  const [newReportText, setNewReportText] = useState('')

  function addReport() {
    const text = newReportText.trim()
    if (text.length === 0) return
    const newReport: Report = {
      id: crypto.randomUUID(),
      text: text,    
      kind: 'bug',
    }
    setReports([...reports, newReport])
    setNewReportText('')
  }


  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug'
  }
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
      <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
          <input
            type="text"
            value={newReportText}
            onChange={(event) => setNewReportText(event.target.value)}
            placeholder="Describe a bug..."
            aria-label="New bug report"
          />
          <button type="button" onClick={addReport}>
            Add Bug
          </button>
          <ul>
            {reports.map((report) => (
              <li key={report.id}>
                {report.text} ({report.kind})
              </li>
            ))}
          </ul>
      </section>
    </>
  );
}
