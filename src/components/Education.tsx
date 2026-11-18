import type { EducationItem } from '../types'

export function Education() {
  return (
    <section className="portfolio" id="education">
      <h2 className="heading">Education and <span className="accent">Learning</span></h2>
      <div className="projects-container">
        <div className="education-category">
          <h3>Formal Education</h3>
          {EDUCATION.filter((e) => e.type === 'Formal').map((item) => (
            <div key={item.program} className="education-item">
              <h4>{item.program}</h4>
              <p>{item.institution} · {item.dates}</p>
              <p>{item.credential}</p>
            </div>
          ))}
        </div>
        <div className="education-category">
          <h3>Self-Directed Learning</h3>
          {EDUCATION.filter((e) => e.type === 'Self-Directed').map((item) => (
            <div key={item.program} className="education-item">
              <h4>{item.program}</h4>
              <p>{item.institution} · {item.dates}</p>
              <p>{item.credential}</p>
              {item.note && <p className="placeholder-text" style={{ fontStyle: 'italic', fontSize: '0.9rem', marginTop: '0.5rem' }}>{item.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const EDUCATION: EducationItem[] = [
  {
    type: 'Formal',
    institution: 'Braeburn Garden Estate',
    program: 'Diploma in Software Engineering',
    dates: 'Graduated 2021',
    credential: 'Diploma',
    certificateUrl: null,
  },
  {
    type: 'Self-Directed',
    institution: 'Self-directed',
    program: 'Full-stack web development: React and Node.js application development',
    dates: 'Ongoing',
    credential: 'Self-directed',
    certificateUrl: null,
    note: 'Documented through project repositories and live deployments.',
  },
]
