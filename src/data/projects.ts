import type { Project } from '../types'

export const PROJECTS: Project[] = [
  {
    id: 'mabawa-creations',
    name: 'Mabawa Creations',
    type: 'Personal',
    status: 'Live',
    problem:
      'Industrial procurement spans many product categories and requires structured conversations between buyers, suppliers, and operations teams. Existing solutions were either too rigid (standard e-commerce) or too fragmented (email + spreadsheets).',
    role: 'Sole Developer — Product, Frontend, Backend, Integrations, Deployment, Maintenance',
    scope:
      'End-to-end B2B procurement platform with product catalog, supplier workspace, RFQ/BOQ workflows, cart/checkout, role-based access, and admin dashboard.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Prisma', 'Mongoose', 'Tailwind CSS', 'Cloudflare R2', 'ClamAV', 'Vercel', 'Render'],
    liveUrl: 'https://mabawacreations.com',
    repoUrl: null,
    featured: true,
    keyFeatures: [
      'Product catalog & discovery with faceted search',
      'Supplier workspace & onboarding flow',
      'RFQ & bulk quotation workflows with negotiation',
      'Cart, checkout & order tracking',
      'Role-based access control (Buyer, Supplier, Admin)',
      'Inventory & stock management',
      'Secure file upload with malware scanning',
      'Developer platform with API documentation',
    ],
    architecture:
      'Separate frontend/backend repositories with shared TypeScript types. Frontend deployed to Vercel, backend to Render. API-first design with OpenAPI 3.0 spec driving client SDK generation and server validation.',
    database:
      'PostgreSQL (relational data: users, products, orders, quotations) via Prisma ORM. MongoDB (document data: product specs, certifications, audit logs) via Mongoose.',
    apiDesign:
      'RESTful API with JWT authentication, RBAC middleware, request validation (Zod), cursor-based pagination, structured error responses. OpenAPI 3.0 spec for documentation and type generation.',
    auth:
      'JWT-based authentication with refresh token rotation. Role-based access control at middleware level. Separate permission scopes for Buyer, Supplier, Admin roles.',
    fileStorage:
      'Cloudflare R2 for object storage. Presigned URLs for direct client uploads. Server-side ClamAV malware scanning. Sharp for image optimization. CDN delivery via Cloudflare.',
    security:
      'Input validation on all endpoints. Rate limiting. CORS configuration. Helmet.js headers. Secure cookie settings. Audit logging for sensitive operations.',
    testing:
      'Unit tests for business logic (Vitest). Integration tests for API endpoints. E2E tests for critical user flows (Playwright). Manual accessibility testing with screen readers.',
    deployment:
      'CI/CD via GitHub Actions. Frontend: Vercel with preview deployments. Backend: Render with zero-downtime deploys. Environment-specific configs. Health checks and rollback capability.',
    challenges:
      'Complex multi-role workflows with distinct interfaces/permissions. RFQ/BOQ pipeline with negotiation rounds. Secure file handling at scale. Search performance across thousands of products.',
    learned:
      'Type safety end-to-end prevents entire bug classes. Contract-first API design (OpenAPI) enables parallel frontend/backend work. Presigned URLs + server-side scanning scales file uploads. Accessibility built in, not bolted on.',
    future:
      'GraphQL API layer for flexible data fetching. Real-time notifications via WebSockets. Advanced analytics dashboard. Multi-region deployment for lower latency.',
    screenshots: ['/mabawa-hero.webp'],
  },
]