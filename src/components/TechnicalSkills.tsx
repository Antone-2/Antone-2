import type { SkillCategory } from '../types'

export function TechnicalSkills() {
  return (
    <section className="portfolio" id="skills">
      <h2 className="heading">Technical <span className="accent">Skills</span></h2>
      <div className="projects-container">
        {SKILL_CATEGORIES.map((cat) => (
          <div key={cat.category} className="skill-category">
            <h3>{cat.category}</h3>
            <div className="skill-tags">
              {cat.skills.map((skill: string) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Core',
    skills: [
      'JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
      'Mongoose', 'REST APIs', 'Git', 'GitHub',
    ],
  },
  {
    category: 'Frontend',
    skills: [
      'HTML', 'CSS', 'Tailwind CSS', 'Responsive design', 'React Hooks',
      'Component architecture', 'State management',
    ],
  },
  {
    category: 'Backend',
    skills: [
      'Node.js', 'Express', 'REST API design', 'JWT authentication',
      'Role-based access control', 'Input validation', 'Error handling', 'Environment configuration',
    ],
  },
  {
    category: 'Data',
    skills: [
      'PostgreSQL', 'MongoDB', 'Mongoose', 'Schema design', 'Indexing', 'Query optimization',
    ],
  },
  {
    category: 'Cloud and Integrations',
    skills: [
      'Cloudflare R2', 'AWS', 'File upload pipelines', 'ClamAV malware scanning',
    ],
  },
  {
    category: 'DevOps and Deployment',
    skills: [
      'Vercel', 'Render', 'Railway', 'Environment variables',
    ],
  },
  {
    category: 'Practices',
    skills: [
      'Clean code', 'Debugging', 'Documentation', 'Code reviews', 'Testing',
      'Secure file handling', 'API security fundamentals', 'Responsive UI development',
    ],
  },
]
