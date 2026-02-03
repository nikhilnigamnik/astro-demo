# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
pnpm dev          # Start dev server at localhost:4321 (with Netlify local functions)
pnpm build        # Production build to dist/
pnpm preview      # Preview built site locally
```

Package manager is **pnpm**.

## Architecture Overview

This is an **Astro 5** static site with:
- **Tailwind CSS 4** for styling (via `@tailwindcss/vite`)
- **Decap CMS** (formerly Netlify CMS) for content management
- **Netlify** adapter for deployment

### Content Collections

Three content collections defined in `src/content/content.config.ts` with Zod schemas:
- `blog/` - Blog posts (title, description, pubDate required; heroImage, updatedDate optional)
- `projects/` - Project entries (title, description required; link, image optional)
- `pages/` - Generic editable pages (title required; description optional)

Content is markdown/MDX files in `src/content/*/`. Decap CMS edits these files directly via Git.

### Routing Pattern

File-based routing in `src/pages/`:
- `blog/[...slug].astro` - Dynamic blog post routes using `getStaticPaths()`
- `projects/[...slug].astro` - Dynamic project routes
- `[...slug].astro` - Catch-all for pages collection
- Static pages: `index.astro`, `about.astro`

### Layout System

Layouts in `src/layouts/` wrap content with shared structure:
- `BlogPost.astro` - Blog posts with date and hero image
- `ProjectPost.astro` - Projects with image and link button
- `PageLayout.astro` - Generic pages

All layouts use `BaseHead.astro` component which imports global styles and sets SEO metadata.

### Styling

- Global CSS variables in `src/styles/global.css`
- Tailwind imported via `@import "tailwindcss"` in global.css
- Custom fonts (Atkinson) loaded from `public/fonts/`

### CMS Configuration

Decap CMS config at `public/admin/config.yml`:
- Uses Netlify Git Gateway for authentication
- `local_backend: true` enables local development without auth
- Media stored in `src/assets/images`
