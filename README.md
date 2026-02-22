# tech-talks.in

A technical blog and documentation site built with [Docusaurus 3](https://docusaurus.io/), covering topics like Docker, APIs, JWT, performance testing, and more.

🌐 Live site: [https://www.tech-talks.in](https://www.tech-talks.in)

---

## Tech Stack

- **[Docusaurus 3](https://docusaurus.io/)** — static site generator
- **React 18**
- **npm** — package manager
- **GitHub Pages** — hosting

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 8

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

Starts a local dev server at `http://localhost:3000`. Most changes are reflected live without restarting.

### Build

```bash
npm run build
```

Generates the production-ready static site into the `build/` directory.

### Clear Cache

```bash
npm run clear
```

Clears Docusaurus's bundler cache. Run this if you see stale build errors.

### Deployment (GitHub Pages via SSH)

```bash
USE_SSH=true npm run deploy
```

Builds the site and pushes it to the `gh-pages` branch automatically.

---

## Adding a New Blog Post

Blog posts live in the `blog/` directory.

### Steps

1. Create a new file in `blog/` following the naming convention:
   ```
   blog/YYYY-MM-DD-your-post-title.md
   ```

2. Add front matter at the top of the file:
   ```md
   ---
   slug: your-post-slug
   title: Your Post Title
   authors: [pavan]
   tags: [tag1, tag2]
   description: A short description of your post.
   ---
   ```

3. Add a truncation marker after your intro paragraph so the blog list page shows a preview:
   ```md
   Intro paragraph here...

   <!-- truncate -->

   Rest of your content here...
   ```

4. Write your content in standard Markdown below the truncation marker.

### Example

```md
---
slug: docker-tips
title: Docker Tips & Tricks
authors: [pavan]
tags: [docker, devops]
description: Handy Docker commands for everyday use.
---

A quick reference for Docker commands every developer should know.

<!-- truncate -->

## Check running containers

```bash
docker ps
```
```

> **Note:** Authors are defined in `blog/authors.yml`. To add a new author, add an entry there and reference by key in front matter.

---

## Adding a New Tutorial / Doc

Tutorials and documentation pages live in the `docs/` directory.

### Steps

1. Create a new Markdown file inside the relevant `docs/` subfolder (or create a new subfolder):
   ```
   docs/your-category/your-page-title.md
   ```

2. Add front matter at the top:
   ```md
   ---
   sidebar_position: 1
   slug: your-page-slug
   title: Your Page Title
   description: A short description.
   ---
   ```

3. If creating a new category folder, add a `_category_.json` file in the folder:
   ```json
   {
     "label": "Your Category",
     "position": 5
   }
   ```

4. Write your content in standard Markdown.

### Example

```md
---
sidebar_position: 1
title: Kubernetes Basics
description: An intro to Kubernetes for beginners.
---

# Kubernetes Basics

Kubernetes (K8s) is an open-source container orchestration system...
```

---

## Important Notes for MDX 3 Compatibility

Docusaurus 3 uses **MDX v3**, which is stricter than v2. Keep these rules in mind when writing `.md` or `.mdx` files:

| Situation | What to do |
|---|---|
| Using `<` or `>` in plain text | Escape as `&lt;` and `&gt;` |
| Using `{` or `}` in plain text | Wrap content in a code block, or escape as `&#123;` / `&#125;` |
| JSON examples in prose | Always wrap in ` ```json ` code fences |
| React/JSX components | Only use in `.mdx` files |

---

## Project Structure

```
.
├── blog/               # Blog posts (Markdown)
│   └── authors.yml     # Author definitions
├── docs/               # Tutorial / documentation pages
├── src/
│   ├── css/            # Global styles (custom.css)
│   └── pages/          # Standalone React/Markdown pages
├── static/             # Static assets (images, favicon)
├── docusaurus.config.js
├── sidebars.js
└── package.json
```
