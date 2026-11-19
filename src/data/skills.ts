import type { SkillCategory } from '../types'

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Frontend Engineering',
    skills: [
      { name: 'React', level: 'Expert', projects: ['Mabawa Creations'] },
      { name: 'TypeScript', level: 'Expert', projects: ['Mabawa Creations'] },
      { name: 'Next.js', level: 'Advanced', projects: ['Portfolio', 'Client work'] },
      { name: 'Tailwind CSS', level: 'Expert', projects: ['Mabawa Creations', 'Portfolio'] },
      { name: 'HTML5 & CSS3', level: 'Expert', projects: ['All projects'] },
      { name: 'Responsive Design', level: 'Expert', projects: ['Mabawa Creations', 'Portfolio'] },
      { name: 'Component Architecture', level: 'Expert', projects: ['Mabawa Creations'] },
      { name: 'State Management (React Hooks, Context)', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'Accessibility (WCAG 2.2 AA)', level: 'Advanced', projects: ['Portfolio', 'Mabawa Creations'] },
      { name: 'Performance Optimization', level: 'Advanced', projects: ['Mabawa Creations'] },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 'Expert', projects: ['Mabawa Creations'] },
      { name: 'Express.js', level: 'Expert', projects: ['Mabawa Creations'] },
      { name: 'REST API Design', level: 'Expert', projects: ['Mabawa Creations'] },
      { name: 'JWT Authentication', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'Role-Based Access Control', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'Input Validation & Sanitization', level: 'Expert', projects: ['Mabawa Creations'] },
      { name: 'Error Handling & Logging', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'Environment Configuration', level: 'Expert', projects: ['All projects'] },
      { name: 'File Upload & Processing', level: 'Advanced', projects: ['Mabawa Creations'] },
    ],
  },
  {
    category: 'Databases & Data',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', projects: ['Mabawa Creations', 'Client work'] },
      { name: 'MongoDB', level: 'Advanced', projects: ['Client work'] },
      { name: 'Mongoose ODM', level: 'Advanced', projects: ['Client work'] },
      { name: 'Schema Design & Modeling', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'Query Optimization', level: 'Intermediate', projects: ['Mabawa Creations'] },
      { name: 'Indexing Strategies', level: 'Intermediate', projects: ['Mabawa Creations'] },
      { name: 'Data Migration', level: 'Intermediate', projects: ['Client work'] },
    ],
  },
  {
    category: 'Cloud & Integrations',
    skills: [
      { name: 'Cloudflare R2 (Object Storage)', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'AWS (S3, EC2, Lambda)', level: 'Intermediate', projects: ['Client work'] },
      { name: 'File Upload Pipelines', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'ClamAV Malware Scanning', level: 'Intermediate', projects: ['Mabawa Creations'] },
      { name: 'Third-Party API Integration', level: 'Expert', projects: ['Mabawa Creations'] },
      { name: 'Webhooks & Event-Driven Architecture', level: 'Intermediate', projects: ['Client work'] },
    ],
  },
  {
    category: 'DevOps & Deployment',
    skills: [
      { name: 'Vercel', level: 'Expert', projects: ['Portfolio', 'Client work'] },
      { name: 'Render / Railway', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'CI/CD Pipelines', level: 'Advanced', projects: ['All projects'] },
      { name: 'Environment Variable Management', level: 'Expert', projects: ['All projects'] },
      { name: 'Docker', level: 'Intermediate', projects: ['Client work'] },
      { name: 'Monitoring & Logging', level: 'Intermediate', projects: ['Mabawa Creations'] },
    ],
  },
  {
    category: 'Engineering Practices',
    skills: [
      { name: 'Clean Code & Architecture', level: 'Expert', projects: ['All projects'] },
      { name: 'Debugging & Troubleshooting', level: 'Expert', projects: ['All projects'] },
      { name: 'Technical Documentation', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'Code Review Practices', level: 'Advanced', projects: ['Client work'] },
      { name: 'Testing (Unit, Integration, E2E)', level: 'Intermediate', projects: ['Mabawa Creations'] },
      { name: 'API Security Fundamentals', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'Secure File Handling', level: 'Advanced', projects: ['Mabawa Creations'] },
      { name: 'Git & GitHub Workflows', level: 'Expert', projects: ['All projects'] },
    ],
  },
]