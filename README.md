# Kesa Onyango

Full-stack engineer in Nairobi, Kenya, building web products across frontend, backend, and deployment.

Open to remote full-time and contract software engineering roles.

## Featured work

**Mabawa Creations** is a live marketplace for PPE and industrial procurement. I developed the product end to end, including its frontend and backend applications.

- Live platform: [mabawacreations.com](https://mabawacreations.com)
- Developer platform: [mabawacreations.com/developer](https://www.mabawacreations.com/developer)

The Mabawa and Safety project repositories are private under client agreements. The portfolio includes an illustrative API example based on the public Mabawa developer documentation; it is not code copied from those private repositories.

## Portfolio

This repository contains my portfolio site, built with React, TypeScript, and Vite. It includes separate pages for featured work, projects, skills, experience, education, and contact.

### Run locally

```sh
npm install
npm run dev
```

### Contact form backend

The contact form posts to `/api/contact`, which sends messages through Resend. Copy
`.env.example` to `.env.local`, add a Resend API key, and set `CONTACT_FROM_EMAIL`
to an address on a domain verified with Resend. `CONTACT_TO_EMAIL` is the inbox
that receives submissions. The Vite dev server serves the same API locally; Vercel
deployments use `api/contact.ts`. Set the same environment variables in the Vercel
project settings before enabling live submissions.

Create a production build with:

```sh
npm run build
```

Contact: [onyangoantone1@gmail.com](mailto:onyangoantone1@gmail.com) · [LinkedIn](https://www.linkedin.com/in/kesa-onyango) · [GitHub](https://github.com/Antone-2)

## Verification

Run the production build with `npm run build`. The generated `dist` directory can be previewed with `npm run preview`.
