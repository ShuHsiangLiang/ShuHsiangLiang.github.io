# CLAUDE.md

This file provides context for AI assistants working on this repository.

## Project Overview

This is a **Jekyll-based personal blog** hosted on **GitHub Pages**, built on the [Hux Blog](https://github.com/Huxpro/huxpro.github.io) theme. The site is deployed at `https://peterliang.me`.

## Tech Stack

- **Static site generator:** Jekyll 4.0+ (Ruby)
- **CSS preprocessor:** LESS → compiled via Grunt
- **Frontend framework:** Bootstrap 3, jQuery
- **Templating:** Liquid (Jekyll)
- **Markdown processor:** Kramdown with GFM
- **Code highlighting:** Rouge
- **Build automation:** Grunt (LESS compilation, JS minification)
- **Deployment:** GitHub Pages (auto-builds on push to `master`)

## Directory Structure

```
_config.yml          # Jekyll site configuration (metadata, plugins, social links)
_posts/              # Blog posts in Markdown (YYYY-MM-DD-slug.md format)
_layouts/            # Page templates (default, post, page, keynote)
_includes/           # Reusable Liquid partials (nav, footer, head, etc.)
css/                 # Compiled CSS (do NOT edit directly — edit LESS sources)
less/                # LESS source files (hux-blog.less is the main entry point)
js/                  # JavaScript (hux-blog.js is custom; others are vendor libs)
img/                 # Images (backgrounds, avatars, post images)
  in-post/           # Images referenced within blog posts
fonts/               # Bootstrap glyphicons
pwa/                 # Progressive Web App manifest and icons
_doc/                # Theme documentation (Manual.md, README.zh.md)
sw.js                # Service worker for PWA/offline support
```

## Common Commands

```bash
# Install dependencies
bundle install           # Ruby gems (Jekyll, plugins)
npm install              # Node packages (Grunt, LESS compiler)

# Development
npm start                # Serve site locally at http://0.0.0.0:4000
npm run dev              # Serve + watch for LESS/JS changes (runs Grunt watch)

# Build assets (CSS/JS) without serving
npx grunt                # Compile LESS, minify JS, add license banners

# Create a new blog post
rake post title="My Post Title"
```

## Blog Post Conventions

Posts live in `_posts/` and must follow Jekyll naming: `YYYY-MM-DD-slug.md`.

### Required Front Matter

```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS
author: "Author Name"
header-img: "img/post-bg.jpg"
tags: [tag1, tag2]
---
```

### Optional Front Matter Fields

| Field          | Purpose                                   |
|----------------|-------------------------------------------|
| `subtitle`     | Displayed below the title                 |
| `catalog`      | `true` to show table-of-contents sidebar  |
| `mathjax`      | `true` to enable LaTeX math rendering     |
| `multilingual` | `true` for multi-language post support    |
| `no-catalog`   | `true` to disable side catalog            |

## Key Files to Know

| File                  | Purpose                                          |
|-----------------------|--------------------------------------------------|
| `_config.yml`         | All site settings (title, URL, social, analytics)|
| `less/hux-blog.less`  | Main theme stylesheet (LESS source)              |
| `js/hux-blog.js`      | Custom theme JavaScript                          |
| `_includes/head.html` | HTML `<head>` (meta tags, CSS, analytics scripts)|
| `_includes/nav.html`  | Site navigation bar                              |
| `_includes/footer.html`| Footer with social links                        |
| `sw.js`               | Service worker (controls caching/offline)        |
| `Gruntfile.js`        | Build tasks (LESS → CSS, JS minification)        |

## Development Guidelines

- **CSS changes:** Edit files in `less/`, then run `npx grunt` to recompile. Never edit `css/*.min.css` directly.
- **JS changes:** Edit `js/hux-blog.js`, then run `npx grunt uglify` to regenerate the minified version.
- **Images:** Place post images in `img/in-post/`, general images in `img/`.
- **No test suite:** This project has no automated tests or CI/CD — GitHub Pages handles builds natively.
- **Deployment:** Push to `master` to deploy. GitHub Pages auto-builds the Jekyll site.

## Integrations

- **Google Analytics:** Configured in `_config.yml` (`ga_track_id`)
- **Disqus comments:** Configured via `disqus_username` in `_config.yml`
- **PWA:** Service worker + manifest for installable web app / offline support
- **Search:** Client-side search powered by Simple Jekyll Search (`search.json`)
