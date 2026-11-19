export interface Project {
  id: string
  name: string
  type: 'Personal' | 'Freelance' | 'Open Source' | 'Learning'
  status: 'Live' | 'Planned' | 'Archived'
  problem: string
  role: string
  scope: string
  stack: string[]
  liveUrl: string | null
  repoUrl: string | null
  featured: boolean
  keyFeatures: string[]
  architecture: string
  database: string
  apiDesign: string
  auth: string
  fileStorage: string
  security: string
  testing: string
  deployment: string
  challenges: string
  learned: string
  future: string
  screenshots: string[]
}

export interface SkillWithLevel {
  name: string
  level: 'Expert' | 'Advanced' | 'Intermediate'
  projects: string[]
}

export interface SkillCategory {
  category: string
  skills: SkillWithLevel[]
  note?: string
}

export interface ExperienceItem {
  period: string
  role: string
  type: string
  description: string[]
}

export interface EducationItem {
  type: 'Formal' | 'Online Course' | 'Certification' | 'Self-Directed'
  institution: string
  program: string
  dates: string
  credential: string
  certificateUrl: string | null
  note?: string
}