# Portfolio

A personal portfolio built with Next.js and Tailwind CSS. It showcases selected work, case studies, and project highlights with dedicated pages for each project.

## Features

- Project and blog routes with dynamic detail pages.
- Mobile and desktop screenshot layouts with responsive imagery.
- Centralized project content in data files.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS

## Development

Run the local dev server:

```bash
npm run dev
```

Then open http://localhost:3000.

## Content Editing

- Homepage content: src/app/page.js
- About page: src/app/about/page.js
- Contact page: src/app/contact/page.js
- Work listing: src/app/work/page.js
- Project detail pages: src/app/work/[slug]/page.js
- Project data: src/data/projects.js
- Blog data: src/data/blog.js

## Deployment

Deploy with Vercel or any platform that supports Next.js. Set the production URL in the site metadata when you have a domain.
